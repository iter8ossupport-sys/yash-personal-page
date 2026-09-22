import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Maximize2, Minimize2, ExternalLink, ZoomIn, ZoomOut, RotateCcw, Loader2 } from 'lucide-react';
import * as pdfjsLib from 'pdfjs-dist';

// Configure PDF.js worker using local public asset to prevent any cross-origin or privacy blocker issues
pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs';

export const RESUME_PDF_PATH = '/Yash_Tyagi_Resume.pdf';
export const RESUME_DOWNLOAD_NAME = 'Yash_Tyagi_Resume.pdf';

interface ResumeModalContextType {
  openResume: () => void;
  closeResume: () => void;
  isOpen: boolean;
}

const ResumeModalContext = createContext<ResumeModalContextType | undefined>(undefined);

export const useResumeModal = () => {
  const context = useContext(ResumeModalContext);
  if (!context) {
    throw new Error('useResumeModal must be used within a ResumeModalProvider');
  }
  return context;
};

export const ResumeModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [numPages, setNumPages] = useState<number>(0);
  const getFitScale = useCallback(() => {
    if (typeof window === 'undefined') return 1.1;
    const w = window.innerWidth;
    if (w < 640) return Math.max(Math.min((w - 40) / 612, 0.95), 0.52);
    if (w < 1024) return 0.95;
    return 1.15;
  }, []);

  const [zoomScale, setZoomScale] = useState<number>(1.15);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRefs = useRef<(HTMLCanvasElement | null)[]>([]);
  const pdfDocRef = useRef<any>(null);
  const renderTasksRef = useRef<any[]>([]);

  const triggerDownload = useCallback(() => {
    try {
      const link = document.createElement('a');
      link.href = RESUME_PDF_PATH;
      link.download = RESUME_DOWNLOAD_NAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error('Auto download error:', err);
    }
  }, []);

  const openResume = useCallback(() => {
    // Action 1: Immediately trigger download of original PDF
    triggerDownload();
    // Action 2: Immediately open resume preview modal
    setZoomScale(getFitScale());
    setIsOpen(true);
  }, [triggerDownload, getFitScale]);

  const closeResume = useCallback(() => {
    setIsOpen(false);
    setIsMaximized(false);
    setZoomScale(getFitScale());
  }, [getFitScale]);

  const toggleMaximize = useCallback(() => {
    setIsMaximized((prev) => !prev);
  }, []);

  const handleZoomIn = () => setZoomScale((prev) => Math.min(prev + 0.15, 2.5));
  const handleZoomOut = () => setZoomScale((prev) => Math.max(prev - 0.15, 0.5));
  const handleZoomReset = () => setZoomScale(getFitScale());

  // Keyboard accessibility: ESC closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeResume();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeResume]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  // Load PDF Document when modal opens
  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    setLoading(true);
    setError(null);

    const loadPdf = async () => {
      try {
        const loadingTask = pdfjsLib.getDocument({ url: RESUME_PDF_PATH });
        const doc = await loadingTask.promise;
        if (!isMounted) return;

        pdfDocRef.current = doc;
        setNumPages(doc.numPages);
        setLoading(false);
      } catch (err: any) {
        console.error('Error loading PDF with PDF.js:', err);
        if (isMounted) {
          setError('Unable to render PDF preview directly.');
          setLoading(false);
        }
      }
    };

    loadPdf();

    return () => {
      isMounted = false;
    };
  }, [isOpen]);

  // Render all pages onto canvas elements whenever doc, zoom, or maximized state changes
  useEffect(() => {
    if (!isOpen || !pdfDocRef.current || numPages === 0) return;

    // Cancel any in-flight page rendering tasks to avoid collisions
    renderTasksRef.current.forEach((task) => {
      if (task && typeof task.cancel === 'function') {
        try {
          task.cancel();
        } catch {
          // Ignored
        }
      }
    });
    renderTasksRef.current = [];

    const renderPages = async () => {
      const doc = pdfDocRef.current;
      const dpr = window.devicePixelRatio || 1;

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const canvas = canvasRefs.current[pageNum - 1];
        if (!canvas) continue;

        try {
          const page = await doc.getPage(pageNum);
          const viewport = page.getViewport({ scale: zoomScale });
          const context = canvas.getContext('2d');
          if (!context) continue;

          // Set display size (CSS pixels)
          canvas.style.width = `${viewport.width}px`;
          canvas.style.height = `${viewport.height}px`;

          // Set actual canvas size scaled by devicePixelRatio for high-DPI crispness
          canvas.width = Math.floor(viewport.width * dpr);
          canvas.height = Math.floor(viewport.height * dpr);

          const renderContext = {
            canvasContext: context,
            viewport: viewport,
            transform: [dpr, 0, 0, dpr, 0, 0],
          };

          const renderTask = page.render(renderContext);
          renderTasksRef.current.push(renderTask);
          await renderTask.promise;
        } catch (err: any) {
          if (err?.name !== 'RenderingCancelledException') {
            console.error(`Page ${pageNum} render error:`, err);
          }
        }
      }
    };

    renderPages();
  }, [isOpen, numPages, zoomScale, isMaximized]);

  return (
    <ResumeModalContext.Provider value={{ openResume, closeResume, isOpen }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <div
            id="resume-modal-portal"
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6"
          >
            {/* Softly blurred/dimmed backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeResume}
              className="absolute inset-0 bg-black/65 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col bg-neutral-900 border border-neutral-700 shadow-2xl overflow-hidden transition-all duration-300 z-10 ${
                isMaximized
                  ? 'w-[98vw] h-[96vh] max-w-none rounded-lg'
                  : 'w-[96vw] sm:w-[92vw] md:w-[85vw] lg:w-[75vw] xl:w-[68vw] h-[92vh] md:h-[88vh] rounded-xl'
              }`}
              role="dialog"
              aria-modal="true"
              aria-label="Resume Preview Modal"
            >
              {/* Minimal Top Control Bar matching portfolio editorial DNA */}
              <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 bg-neutral-900 border-b border-neutral-800 text-white select-none shrink-0">
                <div className="flex items-center gap-2 sm:gap-3">
                  <span className="font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase text-gray-300 font-medium">
                    RESUME PREVIEW // YASH TYAGI
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                  {/* Zoom Controls */}
                  <div className="hidden sm:flex items-center bg-neutral-800/80 rounded px-1 py-0.5 border border-neutral-700/60 mr-1">
                    <button
                      type="button"
                      onClick={handleZoomOut}
                      className="p-1 text-gray-400 hover:text-white rounded transition-colors"
                      title="Zoom out"
                      aria-label="Zoom out"
                    >
                      <ZoomOut className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-1.5 text-[10px] text-gray-400 font-mono select-none">
                      {Math.round((zoomScale / 1.2) * 100)}%
                    </span>
                    <button
                      type="button"
                      onClick={handleZoomIn}
                      className="p-1 text-gray-400 hover:text-white rounded transition-colors"
                      title="Zoom in"
                      aria-label="Zoom in"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={handleZoomReset}
                      className="p-1 text-gray-400 hover:text-white rounded transition-colors ml-0.5"
                      title="Reset Zoom"
                      aria-label="Reset zoom"
                    >
                      <RotateCcw className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Download button */}
                  <button
                    type="button"
                    onClick={triggerDownload}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-gray-200 hover:text-white hover:bg-neutral-800 rounded transition-colors text-xs font-sans tracking-wider uppercase font-medium"
                    aria-label="Download resume PDF"
                    title="Download resume PDF"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">DOWNLOAD</span>
                  </button>

                  {/* Open direct PDF link */}
                  <a
                    href={RESUME_PDF_PATH}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-1.5 text-gray-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                    aria-label="Open PDF in new tab"
                    title="Open PDF directly"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Maximize / Restore */}
                  <button
                    type="button"
                    onClick={toggleMaximize}
                    className="inline-flex items-center justify-center p-1.5 text-gray-400 hover:text-white hover:bg-neutral-800 rounded transition-colors"
                    aria-label={isMaximized ? "Restore resume preview" : "Maximize resume preview"}
                    title={isMaximized ? "Restore size" : "Maximize view"}
                  >
                    {isMaximized ? (
                      <Minimize2 className="w-4 h-4" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </button>

                  {/* Close */}
                  <button
                    type="button"
                    onClick={closeResume}
                    className="inline-flex items-center justify-center p-1.5 text-gray-400 hover:text-white hover:bg-neutral-800 rounded transition-colors ml-1"
                    aria-label="Close resume preview"
                    title="Close preview (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Native PDF Canvas Viewport */}
              <div
                ref={containerRef}
                className="flex-1 w-full h-full bg-neutral-950/90 overflow-y-auto overflow-x-auto p-4 sm:p-6 md:p-8 flex flex-col items-center select-text custom-scrollbar"
              >
                {loading && (
                  <div className="flex flex-col items-center justify-center m-auto py-20 text-gray-400">
                    <Loader2 className="w-6 h-6 animate-spin mb-3 text-gray-300" />
                    <span className="text-xs font-sans tracking-widest uppercase">
                      Loading Resume Document...
                    </span>
                  </div>
                )}

                {error && (
                  <div className="flex flex-col items-center justify-center m-auto py-16 text-center text-gray-300 max-w-md">
                    <p className="mb-4 text-sm font-sans">{error}</p>
                    <button
                      type="button"
                      onClick={triggerDownload}
                      className="px-6 py-3 bg-white text-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-gray-200 transition-colors cursor-pointer font-medium"
                    >
                      Download Yash_Tyagi_Resume.pdf
                    </button>
                  </div>
                )}

                {!loading && !error && (
                  <div className="flex flex-col items-center gap-6 my-auto">
                    {Array.from({ length: numPages }, (_, index) => (
                      <div
                        key={`pdf-page-${index + 1}`}
                        className="bg-white shadow-[0_10px_35px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden border border-neutral-800 transition-shadow"
                      >
                        <canvas
                          ref={(el) => {
                            canvasRefs.current[index] = el;
                          }}
                          className="block"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </ResumeModalContext.Provider>
  );
};
