# Iter8OS & Portfolio System Architecture & Scaling Guide

This guide explains the technical and data architecture of this codebase so you (or any developer) can confidently add new case studies, videos, metrics, and pages without breaking existing functionality.

---

## 1. Core Architectural Principles

1. **Single Source of Truth**: All project data lives in `/src/data/caseStudies.ts`. You **never** need to manually edit HTML, routing tables, or multiple duplicate lists to add or modify a project.
2. **Type Safety & Predictability**: All schemas and interfaces are strictly typed in `/src/types/caseStudy.ts`. If a field is missing or misspelled, TypeScript immediately points you to the exact line.
3. **Dynamic Rendering**:
   - The Home page's **Product Journey** automatically reads from `caseStudiesData` and groups projects by year.
   - The **Flagship Case Studies** automatically pull live metrics, thesis quotes, and status indicators.
   - The **Case Study Detail View** (`/case-study/:id`) automatically handles sticky desktop navigation, mobile drawers, workflow diagrams, decision blocks, and previous/next navigation links.
   - **Artifacts & Links** (Demo URLs, YouTube walkthroughs, GitHub repositories, Figma files, Pitch decks) render automatically whenever you add them to a project object.

---

## 2. Directory Structure

```text
├── public/                     # Static assets (served directly at root)
│   ├── Yash_Tyagi_Resume.pdf   # Resume PDF download asset
│   └── pdf.worker.min.mjs      # Local PDF.js canvas worker
├── src/
│   ├── types/
│   │   └── caseStudy.ts        # Central TypeScript interfaces (CaseStudyData, EvidenceMetric, etc.)
│   ├── data/
│   │   └── caseStudies.ts      # Complete source of truth for all projects (01 through 09+)
│   ├── components/             # Reusable UI modules
│   │   ├── ProductJourney.tsx  # Dynamic timeline (derives automatically from data)
│   │   ├── FlagshipCaseStudies.tsx # Case study index cards
│   │   ├── ProductBuildingEvolution.tsx # 9-stage evolution matrix & Through-Line
│   │   ├── ResumePreviewModal.tsx  # In-browser canvas PDF reader
│   │   └── ...                 # Navigation, footers, philosophy components
│   ├── pages/
│   │   ├── Home.tsx            # Main landing page
│   │   └── CaseStudy.tsx       # Dynamic 16-section case study page (/case-study/:id)
│   ├── App.tsx                 # Route declarations & code-splitting (Suspense / lazy)
│   ├── main.tsx                # React 19 entry point
│   └── index.css               # Global Tailwind CSS styles
├── vercel.json                 # Vercel SPA rewrite configuration
├── vite.config.ts              # Vite 8 config with Rollup manual chunk optimization
└── package.json                # Scripts & dependencies
```

---

## 3. How to Add a New Case Study in 3 Steps

When you want to add a 10th project (e.g. `super-agent`):

### Step 1: Open `/src/data/caseStudies.ts`
Append your new project object to the `caseStudiesData` array:

```typescript
{
  id: 'super-agent',            // URL slug: /case-study/super-agent
  number: '10',                 // Display number
  title: 'SUPER AGENT',         // Display title
  subtitle: 'Autonomous Workflow Execution',
  category: 'AI Agents / B2B Workflow',
  timeline: 'Nov 2026',
  primaryUsers: 'Operations teams & founders',
  buildApproach: 'FastAPI + Next.js + Anthropic Claude 3.5 Sonnet',
  status: 'Live in private beta',
  coreLesson: 'Agents require deterministic boundary guardrails to earn user trust.',
  thesis: 'Replacing manual data reconciliation workflows with human-supervised AI agents.',
  
  // Optional links & artifacts (render automatically!)
  liveUrl: 'https://superagent.example.com',
  liveUrlLabel: 'Open Product',
  videoUrl: 'https://youtu.be/your-demo-id',
  videoTitle: 'Watch 2-Min Demo Walkthrough',
  githubUrl: 'https://github.com/your-username/super-agent',
  links: [
    { label: 'Figma System Specs', url: 'https://figma.com/...' }
  ],

  // Signals (displayed in cards and headers)
  evidenceMetrics: [
    { value: '42', label: 'BETA TEAMS' },
    { value: '$1,200', label: 'MONTHLY ARR' }
  ],
  prevProjectId: 'lbes-mirror', // Points to previous project
  nextProjectId: null,          // Latest project

  // The 16 core sections (Context, Problem, Workflow, Evidence, Decision, etc.)
  context: {
    badge: 'OBSERVATION',
    paragraphs: ['Why this project was conceived...']
  },
  problem: {
    badge: 'OBSERVATION',
    paragraphs: ['What operational pain was observed...']
  },
  problemDiscovery: {
    badge: 'OBSERVATION',
    paragraphs: ['How the existing workflow broke down...'],
    bulletPoints: ['Constraint 1', 'Constraint 2']
  },
  existingAlternatives: {
    badge: 'OBSERVATION',
    paragraphs: ['Existing manual spreadsheets and legacy RPA...']
  },
  hypothesis: {
    badge: 'HYPOTHESIS',
    statement: 'If we bound agent loops with dry-run confirmations, adoption will double.',
    paragraphs: ['Rationale behind the hypothesis...']
  },
  researchValidation: {
    badge: 'OBSERVATION',
    paragraphs: ['Conducted 14 operator interviews...']
  },
  productDecision: {
    badge: 'PRODUCT DIRECTION',
    paragraphs: ['Built deterministic guardrails before autonomous execution...']
  },
  productWorkflow: {
    badge: 'PRODUCT DIRECTION',
    flowDescription: 'Human Intake → Boundary Check → Execution → Reconciliation',
    steps: [
      { step: '01', title: 'Intake', detail: 'Ingesting messy input records.' },
      { step: '02', title: 'Simulation', detail: 'Dry-run preview shown to operator.' },
      { step: '03', title: 'Commit', detail: 'Executing verified ledger transactions.' }
    ]
  },
  buildExecution: {
    badge: 'PRODUCT DIRECTION',
    paragraphs: ['Implemented backend queue and real-time streaming status...'],
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Tailwind']
  },
  distributionGtm: {
    badge: 'OBSERVATION',
    paragraphs: ['Cold founder outreach and operator Slack groups...']
  },
  evidence: {
    badge: 'EVIDENCE',
    paragraphs: ['Real-world metrics gathered during the 4-week pilot...'],
    metrics: [
      { value: '98.4%', label: 'ACCURACY RATE' },
      { value: '14 hrs/wk', label: 'SAVED PER USER' }
    ]
  },
  realityCheck: {
    badge: 'OBSERVATION',
    paragraphs: ['Edge cases required human approval rather than full autonomy...']
  },
  decision: {
    badge: 'EVIDENCE',
    outcome: 'Expanding to paid tier',
    why: 'Teams saw immediate hours-per-week savings and requested automated billing.',
    whatChanged: 'Prioritizing enterprise audit logs over consumer features.'
  },
  learning: {
    badge: 'OBSERVATION',
    learnings: [
      { area: 'PRODUCT', insight: 'Operators love agency, but they need visual audit trails.' },
      { area: 'BUSINESS', insight: 'B2B pricing should scale with volume processed, not user seats.' }
    ]
  },
  capabilityDeveloped: {
    badge: 'PRODUCT DIRECTION',
    capabilities: [
      'Architecting human-in-the-loop agent workflows',
      'Implementing real-time audit trails for automated operations'
    ]
  },
  whatChangedNext: {
    badge: 'PRODUCT DIRECTION',
    headline: 'THE NEXT LEVEL OF SYSTEM AUTONOMY',
    description: 'How this project influences upcoming initiatives...',
    nextProjectTitle: 'VIEW ALL WORK',
    nextProjectId: 'kirana-x'
  }
}
```

### Step 2: Update the Previous Project's `nextProjectId`
In `src/data/caseStudies.ts`, update `lbes-mirror` (project 09) so its `nextProjectId` is `'super-agent'`.

### Step 3: That's It!
- The route `/case-study/super-agent` is live immediately.
- The project appears automatically in the **Product Journey** timeline.
- If you add it to `flagshipIds` in `FlagshipCaseStudies.tsx`, it will also display on the home grid.

---

## 4. How to Update or Add Videos and Artifacts

Any case study can include:
- `videoUrl`: YouTube, Loom, or MP4 link.
- `videoTitle`: Custom text for the button (e.g. `"Watch 90-sec Walkthrough"`).
- `liveUrl`: URL to live product.
- `liveUrlLabel`: Custom text (e.g. `"Open Live App"` or `"Launch Prototype"`).
- `githubUrl`: Link to public repository.
- `links`: Array of additional URLs (`{ label: 'Pitch Deck', url: '...' }`).

These automatically render in the case study hero without writing any HTML or CSS.

---

## 5. Development & Deployment Commands

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:3000)
npm run dev

# Run TypeScript type verification
npm run lint

# Production build test
npm run build
```

### Deploying to Vercel
1. Push your repository to GitHub.
2. In Vercel, click **"Add New Project"** and import the repository.
3. Keep default settings:
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy! The included `vercel.json` ensures all deep links work automatically.
