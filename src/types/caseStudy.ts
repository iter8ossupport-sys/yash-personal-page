/**
 * Type definitions for the Case Study and Product Evolution system.
 * Designed for long-term scalability and easy extension by founders and developers.
 */

export type CaseStudyBadge = 'OBSERVATION' | 'HYPOTHESIS' | 'EVIDENCE' | 'PRODUCT DIRECTION' | 'FUTURE';

export interface EvidenceMetric {
  value: string;
  label: string;
  note?: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  detail: string;
}

export interface LearningItem {
  area: 'PRODUCT' | 'USER' | 'BUSINESS' | 'TECHNICAL' | 'DISTRIBUTION' | 'JUDGMENT';
  insight: string;
}

export interface CaseStudyLink {
  label: string;
  url: string;
  type?: 'demo' | 'video' | 'github' | 'deck' | 'article' | 'figma' | 'document';
}

export interface CaseStudyMedia {
  type: 'video' | 'image' | 'youtube' | 'loom';
  url: string;
  title?: string;
  caption?: string;
}

export interface CaseStudyData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  timeline: string;
  primaryUsers: string;
  buildApproach: string;
  status: string;
  coreLesson: string;
  thesis: string;
  year?: number; // Numeric year for automatic timeline grouping (e.g. 2025, 2026, 2027)

  // Primary Action Links
  liveUrl?: string;
  liveUrlLabel?: string;
  videoUrl?: string;
  videoTitle?: string;
  githubUrl?: string;
  links?: CaseStudyLink[];
  media?: CaseStudyMedia[];

  // Verified Signals & Linked Trajectory
  evidenceMetrics: EvidenceMetric[];
  nextProjectId: string | null;
  prevProjectId: string | null;

  // 16 Structured Core Sections
  context: {
    badge: CaseStudyBadge;
    paragraphs: string[];
  };
  problem: {
    badge: CaseStudyBadge;
    paragraphs: string[];
  };
  problemDiscovery: {
    badge: CaseStudyBadge;
    paragraphs: string[];
    bulletPoints?: string[];
  };
  existingAlternatives: {
    badge: CaseStudyBadge;
    paragraphs: string[];
  };
  hypothesis: {
    badge: CaseStudyBadge;
    statement: string;
    paragraphs: string[];
  };
  researchValidation: {
    badge: CaseStudyBadge;
    paragraphs: string[];
    steps?: string[];
  };
  productDecision: {
    badge: CaseStudyBadge;
    paragraphs: string[];
  };
  productWorkflow: {
    badge: CaseStudyBadge;
    flowDescription: string;
    steps: WorkflowStep[];
  };
  buildExecution: {
    badge: CaseStudyBadge;
    paragraphs: string[];
    stack?: string[];
  };
  distributionGtm: {
    badge: CaseStudyBadge;
    paragraphs: string[];
    channels?: string[];
  };
  evidence: {
    badge: CaseStudyBadge;
    paragraphs: string[];
    metrics: EvidenceMetric[];
  };
  realityCheck: {
    badge: CaseStudyBadge;
    paragraphs: string[];
  };
  decision: {
    badge: CaseStudyBadge;
    outcome: string;
    why: string;
    whatChanged: string;
  };
  learning: {
    badge: CaseStudyBadge;
    learnings: LearningItem[];
  };
  capabilityDeveloped: {
    badge: CaseStudyBadge;
    capabilities: string[];
  };
  whatChangedNext: {
    badge: CaseStudyBadge;
    headline: string;
    description: string;
    nextProjectId?: string;
    nextProjectTitle?: string;
  };
}

export interface EvolutionStage {
  stage: string;
  stageNumber: string;
  question: string;
  project: string;
  projectId: string;
  context: string;
  learning: string;
}
