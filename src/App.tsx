import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ResumeModalProvider } from './components/ResumePreviewModal';

const CaseStudy = lazy(() => import('./pages/CaseStudy').then(m => ({ default: m.CaseStudy })));

function RouteLoadingFallback() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin mb-4" />
      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-gray-400">Loading Case Study...</span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ResumeModalProvider>
        <Suspense fallback={<RouteLoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/case-study/:id" element={<CaseStudy />} />
          </Routes>
        </Suspense>
      </ResumeModalProvider>
    </Router>
  );
}

export default App;
