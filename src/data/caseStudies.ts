import {
  CaseStudyData,
  EvidenceMetric,
  WorkflowStep,
  LearningItem,
  CaseStudyLink,
  CaseStudyMedia,
  EvolutionStage
} from '../types/caseStudy';

export type {
  CaseStudyData,
  EvidenceMetric,
  WorkflowStep,
  LearningItem,
  CaseStudyLink,
  CaseStudyMedia,
  EvolutionStage
};

export const caseStudiesData: CaseStudyData[] = [
  // ==========================================
  // CASE STUDY 01 — KIRANA X
  // ==========================================
  {
    id: 'kirana-x',
    number: '01',
    title: 'KIRANA X',
    subtitle: 'Local Commerce / Credit Management Product',
    category: 'Local commerce / SMB workflow',
    timeline: 'June–July 2025',
    primaryUsers: 'Local kirana / shop owners in semi-urban India',
    buildApproach: 'No-code mobile product + manual street distribution',
    status: 'Closed after validation',
    coreLesson: 'Usage ≠ willingness to pay.',
    thesis: 'Testing whether a lightweight, voice-first mobile ledger could replace physical paper credit notebooks and provide purchasing clarity for local shopkeepers.',
    liveUrl: 'https://youtu.be/H0yVj1wDuvI',
    liveUrlLabel: 'Watch Product Walkthrough',
    evidenceMetrics: [
      { value: '100+', label: 'TOTAL USERS' },
      { value: '12+', label: 'RETAINED ~1.5 MONTHS' },
      { value: '₹0', label: 'VERIFIED MONETIZATION' }
    ],
    nextProjectId: 'resumeai',
    prevProjectId: null,

    context: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Kirana X was the first project where I started from a real-world problem I could directly observe rather than an abstract startup idea.',
        'My father runs a local kirana store. Every evening, I repeatedly witnessed friction when customers and the shopkeeper disagreed about how much credit (udhaar) was pending. The shopkeeper had one handwritten figure scribbled inside a torn paper notebook or remembered mentally, while the customer recalled a completely different total.',
        'The breakdown was not simply "there is no digital ledger." The deeper workflow friction involved manual records, faulty human memory, disputed balances, awkward collection conversations, and disconnected debt reminders.',
        'Simultaneously, I observed inventory volatility: a shopkeeper might purchase sugar or wheat at one price on Monday, only to see local mandi wholesale rates drop by Wednesday. Without timely market data, purchasing decisions caused avoidable losses.'
      ]
    },

    problem: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Local retail credit in India functions on trust, but paper-based accounting breaks that trust when transactions compound across months.',
        'When customer balances cannot be mutually verified at the exact moment of transaction, shopkeepers either delay collecting money to preserve customer rapport or end up in confrontational arguments that destroy the relationship.',
        'Furthermore, shopkeepers are under constant operational time pressure. They serve customers standing two feet away; they cannot pause to navigate multi-step drop-down menus or type long descriptions on tiny virtual keyboards.'
      ]
    },

    problemDiscovery: {
      badge: 'OBSERVATION',
      paragraphs: [
        'By sitting inside the shop and observing daily transactions, I mapped four distinct friction layers:'
      ],
      bulletPoints: [
        'Layer 1 — Credit Tracking: Recalling who took items, item prices, exact timestamp, total pending balance, and prior payment history.',
        'Layer 2 — Communication: A ledger is useful only if updated instantly. Complex manual typing created friction, leading shopkeepers to fall back to scraps of paper.',
        'Layer 3 — Language and Usability: Most software assumed English fluency and desk-oriented form filling, alienating shopkeepers who speak Hindi and prefer voice.',
        'Layer 4 — Purchasing Intelligence: Disconnected local wholesale market prices made purchasing decisions reactive rather than strategic.'
      ]
    },

    existingAlternatives: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Established billing and udhaar applications (such as Khatabook and OkCredit) already existed in the market with large distribution budgets.',
        'Therefore, the product hypothesis could never be "shopkeepers need an udhaar app."',
        'The hypothesized gap was interaction design and cognitive load: existing tools felt like stripped-down enterprise accounting software with dense tabular grids, rather than an effortless mobile-first tool adapted to the chaotic counter environment.'
      ]
    },

    hypothesis: {
      badge: 'HYPOTHESIS',
      statement: 'If a mobile workflow adapts to local language, incorporates voice input for amounts, and sends automated SMS ledger reconciliations, shopkeepers will adopt it for daily bookkeeping and pay for transaction security.',
      paragraphs: [
        'I believed that simplicity, vernacular voice input, and transparent customer confirmation would build sufficient behavioral stickiness to unlock a paid recurring subscription or per-transaction fee.'
      ]
    },

    researchValidation: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Rather than writing code immediately, I spent two weeks conducting direct counter observations and talking with neighborhood merchants.',
        'I documented how long each manual entry took (average 45 seconds to locate notebook page and write), how frequently disputed entries occurred (1 in every 8 credit settlements), and how shopkeepers felt about customer debt reminders.'
      ]
    },

    productDecision: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'I decided to intentionally constrain the product scope. I avoided building full inventory management, barcode scanning, taxation, or multi-store sync.',
        'The product focused strictly on three actions: single-tap credit entry, vernacular voice-logging of amounts, and automated two-way SMS transaction receipts.'
      ]
    },

    productWorkflow: {
      badge: 'PRODUCT DIRECTION',
      flowDescription: 'Customer Credit & Verification Loop',
      steps: [
        { step: '01', title: 'Customer Counter Transaction', detail: 'Customer requests udhaar items at checkout counter.' },
        { step: '02', title: 'Voice / Quick Tap Entry', detail: 'Shopkeeper logs amount in Hindi/vernacular via single screen.' },
        { step: '03', title: 'Ledger Update & SMS Dispatch', detail: 'System updates balance and sends immediate confirmation SMS to customer.' },
        { step: '04', title: 'Mutual Record History', detail: 'Both parties hold synchronous transaction record, eliminating disputes.' }
      ]
    },

    buildExecution: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'The product was built rapidly as a no-code mobile prototype to test workflow viability before investing in native mobile development.',
        'The core emphasis was high visual contrast, enormous touch targets for quick thumb taps, Hindi localization, and web-hooked SMS triggers.'
      ],
      stack: ['No-Code Mobile Builder', 'SMS Gateway Integration', 'Vernacular Voice Input Engine', 'Cloud Database']
    },

    distributionGtm: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Distribution was 100% manual and direct.',
        'I walked down local market alleys, spoke directly to shopkeepers during afternoon lulls, ran live counter demonstrations, followed up via WhatsApp, and made direct cold calls.',
        'I framed the pitch around the painful reality of lost money and disputed notebooks rather than technical jargon.'
      ],
      channels: ['In-Person Shopkeeper Visits', 'Direct Counter Demos', 'WhatsApp Follow-ups', 'Cold Phone Calls']
    },

    evidence: {
      badge: 'EVIDENCE',
      paragraphs: [
        'The product achieved genuine behavioral usage: 100+ total users signed up, and 12+ shopkeepers actively retained the tool as their primary daily ledger for approximately 1.5 months.',
        'However, despite repeated attempts to introduce premium tiers or paid reminder packs, there was zero verified paid monetization.'
      ],
      metrics: [
        { value: '100+', label: 'Total Acquired Users' },
        { value: '12+', label: 'Active Retained Merchants (~1.5 mo)' },
        { value: '₹0', label: 'Commercial Conversion' }
      ]
    },

    realityCheck: {
      badge: 'OBSERVATION',
      paragraphs: [
        'The central reality check was stark: people actively using a product does not mean they are willing to pay for it.',
        'Shopkeepers loved the app when it was free, but when asked to pay ₹100/month, they immediately reverted to paper notebooks or stated that free competitors were acceptable enough.',
        'Usage evidence was real, but commercial evidence was absent.'
      ]
    },

    decision: {
      badge: 'EVIDENCE',
      outcome: 'Closed after validation',
      why: 'While workflow utility was proven, the lack of willingness to pay indicated that local SMB utility software in this tier has brutal unit economics without venture-scale payment rails.',
      whatChanged: 'I made the disciplined call to shut down Kirana X instead of spending months engineering features for users who would never pay.'
    },

    learning: {
      badge: 'OBSERVATION',
      learnings: [
        { area: 'PRODUCT', insight: 'Usage ≠ willingness to pay. A product can solve an authentic daily friction and still fail as a commercial business.' },
        { area: 'USER', insight: 'SMB merchants in low-margin categories have an extremely high threshold for paid software, especially when a physical notebook costs ₹20.' },
        { area: 'BUSINESS', insight: 'Never postpone monetization validation until after scaling usage. Payment friction must be tested early.' },
        { area: 'DISTRIBUTION', insight: 'Door-to-door street distribution generates deep user empathy but does not scale without sustainable customer lifetime value (LTV).' },
        { area: 'JUDGMENT', insight: 'Shutting down an active project based on economic reality is a victory of product discipline over sunk cost fallacy.' }
      ]
    },

    capabilityDeveloped: {
      badge: 'OBSERVATION',
      capabilities: [
        'Observing unscripted physical workflows in high-friction environments',
        'Distinguishing vanity usage metrics from commercial validation',
        'Executing manual street-level user acquisition and live demos',
        'Designing high-contrast, low-cognitive-load mobile interfaces for non-technical users'
      ]
    },

    whatChangedNext: {
      badge: 'PRODUCT DIRECTION',
      headline: 'TEST PAYMENT SIGNAL FIRST',
      description: 'The Kirana X failure taught me never to spend weeks building software before testing whether someone will hand over money. My next initiative focused on testing paid transactions from day one.',
      nextProjectTitle: 'RESUMEAI',
      nextProjectId: 'resumeai'
    }
  },

  // ==========================================
  // CASE STUDY 02 — RESUMEAI
  // ==========================================
  {
    id: 'resumeai',
    number: '02',
    title: 'RESUMEAI',
    subtitle: 'AI Career Product',
    category: 'AI career product',
    timeline: 'September 2025',
    primaryUsers: 'Fresh graduates, job seekers, and career transitioners',
    buildApproach: 'Manual service discovery → Full-stack React & Node AI generator',
    status: 'Validated with users and revenue; evolved into broader career trajectory problem',
    coreLesson: 'Validate payment early; the visible product may not be the deepest job-to-be-done.',
    thesis: 'Testing whether users would pay for structured AI-assisted resume generation and recruiter-aligned bullet extraction before writing comprehensive software.',
    liveUrl: 'https://ai-resume-pi-sand.vercel.app/',
    liveUrlLabel: 'Visit Live Product',
    evidenceMetrics: [
      { value: '123', label: 'REGISTERED USERS' },
      { value: '₹1,960', label: 'VERIFIED REVENUE' },
      { value: '6.5%', label: 'INITIAL CONVERSION RATE' }
    ],
    nextProjectId: 'killarity',
    prevProjectId: 'kirana-x',

    context: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Following Kirana X, I was determined to validate payment willingness before scaling software.',
        'I observed intense anxiety among peers, fresh college graduates, and job applicants who were submitting hundreds of resumes to online job portals and receiving instant automated ATS rejections.',
        'Applicants were attempting to copy-paste prompts into generic ChatGPT windows, producing robotic, adjective-bloated summaries that lacked quantifiable business outcomes and ATS keyword alignment.'
      ]
    },

    problem: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Job seekers struggled with two distinct problems: articulating their technical experience in recruiter-recognized STAR (Situation, Task, Action, Result) formats, and structuring resumes to clear ATS parsers.',
        'Most candidates did not know what recruiters cared about, leading to vague bullet points such as "worked on backend APIs" rather than quantified impact metrics.'
      ]
    },

    problemDiscovery: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Rather than immediately coding a full SaaS application, I launched as a concierge manual service.',
        'I engaged candidates directly across Telegram, LinkedIn, Instagram, and college campus networks. I took their messy bullet points, manually interviewed them about the actual project scope, structured their bullets, and formatted them into clean templates.'
      ],
      bulletPoints: [
        'Candidates could talk passionately about their projects but choked when writing high-signal bullet points.',
        'Blank-page paralysis was the single largest drop-off barrier.',
        'Candidates were immediately willing to pay small sums (₹99 to ₹199) if they could see a professional recruiter-grade PDF artifact generated in minutes.'
      ]
    },

    existingAlternatives: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Traditional resume builders (Canva, Novoresume) provided graphic templates but offered zero help on content quality or ATS compliance.',
        'Raw LLMs (ChatGPT) provided content suggestions but outputted messy markdown that required manual typesetting and frequently hallucinated false titles.'
      ]
    },

    hypothesis: {
      badge: 'HYPOTHESIS',
      statement: 'If an intake workflow asks structured interview questions about a candidate’s actual responsibilities and uses targeted prompts to generate ATS-optimized STAR bullets, candidates will pay for downloadable PDF exports.',
      paragraphs: [
        'By testing payment manually first, I proved demand existed before committing code.'
      ]
    },

    researchValidation: {
      badge: 'OBSERVATION',
      paragraphs: [
        'In the manual phase, 15+ candidates paid directly via UPI for resume re-writes.',
        'This verified the commercial signal that Kirana X had lacked: willingness to pay was present. With this proof in hand, I automated the manual workflow into software.'
      ]
    },

    productDecision: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'I designed a multi-step conversational intake workflow. Instead of presenting an overwhelming blank form with 30 inputs, the tool broke discovery into bite-sized questions: What did you build? What tools did you use? What was the before-and-after metric?',
        'The system compiled inputs through structured LLM prompts, rendered a live side-by-side preview, and locked PDF downloads behind an integrated payment gateway.'
      ]
    },

    productWorkflow: {
      badge: 'PRODUCT DIRECTION',
      flowDescription: 'From Conversational Intake to Recruiter-Ready PDF',
      steps: [
        { step: '01', title: 'Structured Context Intake', detail: 'User answers guided prompts on project scope, stack, and outcomes.' },
        { step: '02', title: 'LLM STAR Bullet Synthesis', detail: 'Engine extracts quantifiable results and injects industry-specific keywords.' },
        { step: '03', title: 'ATS Score & Live Preview', detail: 'Candidate reviews recruiter readability score and side-by-side layout.' },
        { step: '04', title: 'Paid Export & Download', detail: 'User converts via micro-payment to export clean, ATS-compliant PDF.' }
      ]
    },

    buildExecution: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'I built the frontend in modern React with Tailwind CSS, connected to an Express/Node.js backend, MongoDB for candidate profiles, and integrated OpenAI API prompt chains.',
        'Payment was wired via Razorpay webhooks, unlocking immediate PDF generation using server-side headless rendering.'
      ],
      stack: ['React', 'Tailwind CSS', 'Node.js / Express', 'MongoDB', 'OpenAI API', 'Razorpay Payment Gateway']
    },

    distributionGtm: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Distribution combined direct outbound outreach with community engagement:',
        'Targeted outreach in student Telegram groups, WhatsApp communities, LinkedIn posts detailing ATS optimization tips, and direct 1-on-1 cold DMs to active job seekers.'
      ],
      channels: ['Student Telegram Groups', 'WhatsApp Placement Communities', 'LinkedIn Inbound Posts', 'Direct DM Outreach']
    },

    evidence: {
      badge: 'EVIDENCE',
      paragraphs: [
        'The product converted 123 registered users and generated ₹1,960 in verified revenue.',
        'This was genuine proof that individuals would pay for software that saved time and reduced career anxiety.'
      ],
      metrics: [
        { value: '123', label: 'Registered Users' },
        { value: '₹1,960', label: 'Verified Commercial Revenue' },
        { value: '6.5%', label: 'Intake to Paid Conversion Rate' }
      ]
    },

    realityCheck: {
      badge: 'OBSERVATION',
      paragraphs: [
        'While ResumeAI proved commercial validity, it also triggered a deeper realization:',
        'Is a resume document itself the true product, or merely an intermediate artifact?',
        'A candidate whose skills do not match the job description cannot be saved by clever phrasing alone. Rewriting a resume does not fix a missing database skill, an absent internship, or a lack of production code.',
        'The visible problem was the resume; the deeper job-to-be-done was continuous career execution and closing skill gaps.'
      ]
    },

    decision: {
      badge: 'EVIDENCE',
      outcome: 'Validated & Evolved',
      why: 'Resume generation was a transaction with high customer churn—once a user secured an interview, their lifetime value dropped to zero.',
      whatChanged: 'I realized that the deeper product moat lay in trajectory intelligence—detecting the gap between a candidate profile and target job descriptions, which later became Vector AI.'
    },

    learning: {
      badge: 'OBSERVATION',
      learnings: [
        { area: 'PRODUCT', insight: 'Moving from a manual concierge service to automated software is the most reliable way to validate willingness to pay.' },
        { area: 'USER', insight: 'Users do not buy "better resumes"—they buy perceived interview probability and relief from rejection anxiety.' },
        { area: 'BUSINESS', insight: 'One-off microtransactions in consumer career tech suffer from high churn; recurring value requires ongoing workflow utility.' },
        { area: 'JUDGMENT', insight: 'Always distinguish the visible customer symptom (bad resume format) from the structural bottleneck (missing skills and trajectory proof).' }
      ]
    },

    capabilityDeveloped: {
      badge: 'OBSERVATION',
      capabilities: [
        'Transitioning manual service workflows into automated full-stack software',
        'Engineering prompt chains that reliably produce structured, high-signal copy',
        'Integrating client-side payment gateways and webhook fulfillment',
        'Diagnosing drop-off bottlenecks in conversion funnels'
      ]
    },

    whatChangedNext: {
      badge: 'PRODUCT DIRECTION',
      headline: 'CAN AI SOLVE HIGH-STAKES DECISION BOTTLENECKS?',
      description: 'ResumeAI taught me that AI can generate artifacts, but founders and professionals face much higher-stakes uncertainties. I set out to build an engine that could stress-test early startup ideas.',
      nextProjectTitle: 'KILLARITY ENGINE',
      nextProjectId: 'killarity'
    }
  },

  // ==========================================
  // CASE STUDY 03 — KILLARITY ENGINE
  // ==========================================
  {
    id: 'killarity',
    number: '03',
    title: 'KILLARITY ENGINE',
    subtitle: 'AI Founder Decision Workflow',
    category: 'AI founder decision / validation workflow',
    timeline: 'October–December 2025',
    primaryUsers: 'Solo founders, indie hackers, early-stage builders',
    buildApproach: 'n8n workflow orchestrations + multi-LLM research prompts + structured decision logic',
    status: 'Evolved into Iter8OS after validation revealed gap between promise and repeatable value',
    coreLesson: 'Promise and delivered value must remain tightly aligned.',
    thesis: 'Transforming ambiguous startup ideas into adversarial validation research, falsifiable tests, and next-step operational decisions.',
    liveUrl: 'https://killarity-engine-v0-1.vercel.app/',
    liveUrlLabel: 'Visit Kilarity Engine Archive',
    evidenceMetrics: [
      { value: '250+', label: 'ACQUIRED FOUNDER USERS' },
      { value: '$29', label: 'PAID VALIDATION SALE' },
      { value: '< 15 min', label: 'DIAGNOSTIC TURNAROUND' }
    ],
    nextProjectId: 'lbes',
    prevProjectId: 'resumeai',

    context: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Killarity Engine was born out of my own raw frustration as an early-stage builder.',
        'Founders waste months of life and thousands of dollars building products nobody wants because they validate their ideas through polite feedback from family, speculative surveys, and echo-chamber social media upvotes.',
        'I wanted to create an objective, adversarial system that would tell a founder the uncomfortable truth: Is this idea fatally flawed? What is the single falsifiable test that would prove it?'
      ]
    },

    problem: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Early-stage founders suffer from acute confirmation bias. They jump straight from an interesting concept to writing backend code, skipping market sizing, ICP definition, and distribution reality.',
        'When they turn to generic AI chatbots for feedback, the chatbots act as sycophants, praising every idea as "revolutionary" and providing fluffy, non-committal encouragement.'
      ]
    },

    problemDiscovery: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Through conversations with dozens of indie hackers on X and Reddit, I identified seven critical blind spots where founders consistently delude themselves:'
      ],
      bulletPoints: [
        'Vague Ideal Customer Profile (ICP): "Everyone who uses email" rather than a specific buyer with budget.',
        'Zero Distribution Architecture: Assuming product quality alone drives acquisition.',
        'Unverified Willingness to Pay: Believing positive compliments equate to credit card transactions.',
        'Invisible Existing Alternatives: Failing to recognize that Excel sheets, manual habits, or inertia are the real competitors.'
      ]
    },

    existingAlternatives: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Existing startup tools fell into two extremes: generic AI text generators (ChatGPT/Claude) that provided boilerplate business plans, or expensive human consultancies charging thousands of dollars for 60-page PDF decks.',
        'Neither provided rapid, falsifiable operational experiments that a founder could execute before weekend code sprints.'
      ]
    },

    hypothesis: {
      badge: 'HYPOTHESIS',
      statement: 'If an AI system conducts structured adversarial research on a founder’s idea—simulating red-team investor scrutiny, analyzing competitive moats, and proposing falsifiable tests—founders will pay for the clarity to kill bad ideas fast.',
      paragraphs: [
        'I believed that aggressive, high-conviction positioning ("Kill your startup idea before it kills your bank account") would drive high-intent founders to pay for diagnostic briefs.'
      ]
    },

    researchValidation: {
      badge: 'OBSERVATION',
      paragraphs: [
        'I ran targeted landing page experiments and engaged founders publicly on X/Twitter and Indie Hackers.',
        'I manually stress-tested 20+ founder submissions using structured prompt chains to evaluate whether automated analysis could surface genuinely non-obvious risks.'
      ]
    },

    productDecision: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'I decided against a simple conversational chat interface. Instead, I built a multi-stage pipeline combining structured intake forms, n8n workflow automations, web research scrapers, and recursive evaluation prompts.',
        'The output was formatted as a structured teardown covering: Market Realism, ICP Sharpness, Competitor Defensibility, Kill Vectors, and the Immediate Falsification Experiment.'
      ]
    },

    productWorkflow: {
      badge: 'PRODUCT DIRECTION',
      flowDescription: 'Adversarial Idea Decomposition & Validation Pipeline',
      steps: [
        { step: '01', title: 'Idea & Context Ingestion', detail: 'Founder inputs problem statement, target customer, and planned model.' },
        { step: '02', title: 'Automated Competitive Scraping', detail: 'Workflow queries active alternatives and existing solutions in the space.' },
        { step: '03', title: 'Adversarial Risk Scoring', detail: 'Multi-LLM pipeline stress-tests distribution moats and unit economics.' },
        { step: '04', title: 'Falsifiable Action Plan', detail: 'Outputs single highest-priority test with concrete kill/continue criteria.' }
      ]
    },

    buildExecution: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'The technical architecture utilized n8n to orchestrate multi-agent research loops, connecting web research webhooks, OpenAI and Claude models for analytical reasoning, and Supabase for report storage.',
        'A clean Next.js/React frontend delivered the final diagnostic dashboard.'
      ],
      stack: ['n8n Workflow Automation', 'OpenAI & Claude LLMs', 'Supabase Database', 'React / Next.js', 'Stripe Integration']
    },

    distributionGtm: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Distribution relied on founder communities and provocative organic content:',
        'I shared live breakdowns of viral startup ideas on X and Reddit, produced short AI-narrated teardown videos, and reached out directly to founders who had just posted "Show HN" or Product Hunt launches.'
      ],
      channels: ['X (Twitter) BuildInPublic', 'Reddit r/SideProject & r/Entrepreneur', 'Indie Hackers Teardowns', 'Direct Founder Outreach']
    },

    evidence: {
      badge: 'EVIDENCE',
      paragraphs: [
        'Killarity Engine acquired 250+ users and secured a verified $29 paid diagnostic sale.',
        'The provocative positioning generated curiosity and traffic, proving that early-stage validation uncertainty is an acute pain point.'
      ],
      metrics: [
        { value: '250+', label: 'Founder Users Acquired' },
        { value: '$29', label: 'Paid Diagnostic Validation' },
        { value: '20+', label: 'Deep Teardowns Executed' }
      ]
    },

    realityCheck: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Despite initial traction, a significant product-positioning gap surfaced:',
        'The provocative promise—"Kill your bad idea"—created massive curiosity, but a one-off generated report could not provide the deep, absolute certainty founders desired.',
        'The stronger the promise, the stronger the underlying evidence infrastructure must be. A static AI report, no matter how analytical, cannot replace live customer feedback.',
        'Founders appreciated the analysis, but once they read the report, they were left asking: "Now what exactly do I do on Monday morning?"'
      ]
    },

    decision: {
      badge: 'EVIDENCE',
      outcome: 'Evolved into Iter8OS',
      why: 'One-off static reports did not build sustained founder trust or ongoing behavioral loops.',
      whatChanged: 'I retired the adversarial "Killarity" branding and pivoted the entire system toward Iter8OS: from generating passive diagnostic reports to orchestrating an interactive, evidence-driven decision operating system.'
    },

    learning: {
      badge: 'OBSERVATION',
      learnings: [
        { area: 'PRODUCT', insight: 'An AI report is not a product. Real product value lies in the ongoing workflow that guides execution after the report is delivered.' },
        { area: 'USER', insight: 'Founders do not want a robot telling them their baby is ugly without a clear, constructive path toward what to test next.' },
        { area: 'BUSINESS', insight: 'Aggressive marketing promises create an enormous burden of proof. The delivered experience must match or exceed the positioning.' },
        { area: 'DISTRIBUTION', insight: 'Distribution cannot be bolted on at the end; it must be built into the product loop itself.' },
        { area: 'JUDGMENT', insight: 'Signups and upvotes are weak validation signals compared to repeated user return and execution follow-through.' }
      ]
    },

    capabilityDeveloped: {
      badge: 'OBSERVATION',
      capabilities: [
        'Orchestrating complex multi-agent workflows using n8n and structured prompts',
        'Designing adversarial product teardowns that uncover hidden unit-economic assumptions',
        'Evaluating positioning-to-delivery alignment and measuring expectation gaps'
      ]
    },

    whatChangedNext: {
      badge: 'PRODUCT DIRECTION',
      headline: 'CAN SOFTWARE CHANGE REAL BEHAVIOR IN AN EXISTING WORKFLOW?',
      description: 'Killarity taught me that static reports fail to change daily human behavior. To understand how software deeply embeds into an existing, disciplined daily workflow, I turned to quantitative financial trading.',
      nextProjectTitle: 'LBES',
      nextProjectId: 'lbes'
    }
  },

  // ==========================================
  // CASE STUDY 04 — LBES
  // ==========================================
  {
    id: 'lbes',
    number: '04',
    title: 'LBES',
    subtitle: 'AI Trading Workflow / Execution Intelligence Product',
    category: 'Trading software / AI workflow',
    timeline: 'January–February 2026',
    primaryUsers: 'Active discretionary traders (6–24 months experience)',
    buildApproach: 'TradingView, MetaTrader 5 (MQL5), strategy logic engines, VPS automation',
    status: 'Paused after validation due to operational and regulatory constraints',
    coreLesson: 'Products should fit real workflows, while operational and regulatory constraints are part of product strategy.',
    thesis: 'An execution filter and risk governor designed to help traders execute known setups consistently rather than predict markets.',
    liveUrl: 'https://lbes-web-32nd-page-restore-j5ga.vercel.app/',
    liveUrlLabel: 'Visit LBES Platform Archive',
    evidenceMetrics: [
      { value: '17', label: 'ACTIVE TRADERS' },
      { value: '147', label: 'LOGGED TRADES' },
      { value: '$29', label: 'PAID REVENUE RECORDED' }
    ],
    nextProjectId: 'b2b-automation',
    prevProjectId: 'killarity',

    context: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Trading has been part of my personal technical exploration since high school (Class 11). Over years of study, I immersed myself in Forex, crypto, MetaTrader 5, TradingView Pine Script, MQL5 algorithmic systems, backtesting engines, and VPS infrastructure.',
        'Through hundreds of hours in live markets, I realized that trading failure is rarely a strategy problem. A trader can understand technical analysis perfectly on a static chart and still wipe out their account during live execution.',
        'The breakdown is human discipline: overtrading, revenge trading after a loss, sizing up on emotional impulse, entering before confirmations appear, and taking trades outside defined rules.'
      ]
    },

    problem: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Discretionary traders repeat the exact same psychological mistakes continuously because trading platforms are designed to encourage friction-free betting rather than disciplined risk control.',
        'Existing trading journals are passive post-mortem spreadsheets. By the time a trader opens their journal in the evening to log a trade, the damage has already been done.'
      ]
    },

    problemDiscovery: {
      badge: 'OBSERVATION',
      paragraphs: [
        'I conducted structured customer interviews with 15+ intermediate traders (6–24 months active experience, familiar with SMC/ICT price action frameworks).',
        'I followed a disciplined research methodology: Recruit → Prepare → Interview → Record → Identify Patterns → Extract Insights → Prioritize → Update Product.'
      ],
      bulletPoints: [
        'Traders knew their rules mentally, but under market stress (adrenaline/fear), their working memory collapsed.',
        'Traders admitted they wished someone sat beside them to slap their hand away from the keyboard when a setup lacked confirmation.',
        'The critical intervention point was PRE-TRADE, not post-trade.'
      ]
    },

    existingAlternatives: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Standard trading journals (TraderSync, Tradervue) were backward-looking data repositories with dense charts, charging $30–$50/month to tell traders why they lost money hours after the loss occurred.',
        'None offered a live, pre-execution gatekeeper that forced the trader to prove setup validity before order placement.'
      ]
    },

    hypothesis: {
      badge: 'HYPOTHESIS',
      statement: 'If a pre-trade execution assistant forces traders to validate setups against their own personal rules—evaluating session timing, risk limits, and confirmation criteria—traders will reduce emotional blunders and pay for execution discipline.',
      paragraphs: [
        'LBES was explicitly positioned not as a market prediction bot, but as an execution governor and emotional filter.'
      ]
    },

    researchValidation: {
      badge: 'OBSERVATION',
      paragraphs: [
        'I conducted user research following six core principles: Problems before solutions; Understand workflow before showing product; Listen more than talk; Behavior over opinion; Curiosity over confirmation; Every interview must produce an action.',
        'This revealed that traders did not want more indicators—they wanted an objective checklist that stopped them from taking junk setups.'
      ]
    },

    productDecision: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'I built LBES as a high-speed pre-trade verification workstation. Before taking any trade, the user passed their setup through the LBES checkpoint.',
        'The system evaluated setup quality, enforced maximum risk-per-trade rules, verified session volatility, and logged the rationale. The outcome of the trade then automatically became behavioral feedback.'
      ]
    },

    productWorkflow: {
      badge: 'PRODUCT DIRECTION',
      flowDescription: 'Pre-Trade Execution & Behavioral Feedback Loop',
      steps: [
        { step: '01', title: 'Trader Identifies Setup', detail: 'Trader identifies candidate chart pattern on TradingView or MT5.' },
        { step: '02', title: 'LBES Pre-Trade Check', detail: 'User inputs setup parameters into LBES execution filter.' },
        { step: '03', title: 'Algorithmic Verification', detail: 'System validates trade against trader’s predefined rules and session timing.' },
        { step: '04', title: 'Execution & Evidence Logging', detail: 'Trade is executed with locked stop-loss; outcome feeds personal performance engine.' }
      ]
    },

    buildExecution: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'The technical build combined TradingView Pine Script indicators, MQL5 automated bridge scripts on remote VPS instances, and a fast web companion application built with React and Tailwind.',
        'The UI was engineered for sub-second keyboard navigation, dark mode, and zero latency.'
      ],
      stack: ['MetaTrader 5 (MQL5)', 'TradingView (Pine Script)', 'React / Tailwind CSS', 'VPS Automation Engines', 'Cloud Database']
    },

    distributionGtm: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Distribution was focused inside active trading subcultures:',
        'I hosted technical livestreams on YouTube breaking down real trade executions, participated actively in private Discord and Reddit trading communities, and shared breakdowns of how psychological friction ruined edge.'
      ],
      channels: ['YouTube Technical Breakdown Videos', 'Live Execution Streams', 'Trading Discord Communities', 'Direct 1-on-1 Trader DMs']
    },

    evidence: {
      badge: 'EVIDENCE',
      paragraphs: [
        'LBES validated real behavioral engagement: 17 active traders used the system, logging 147 live trades, and generated $29 in verified revenue.',
        'Traders reported that having a structured pre-trade checklist visibly stopped them from taking 2–3 impulsive revenge trades per week.'
      ],
      metrics: [
        { value: '17', label: 'Active Discretionary Traders' },
        { value: '147', label: 'Total Verified Trades Logged' },
        { value: '$29', label: 'Paid Revenue Recorded' }
      ]
    },

    realityCheck: {
      badge: 'OBSERVATION',
      paragraphs: [
        'LBES encountered hard realities outside core product software:',
        'First, trading software lives in a brutal regulatory and operational environment. Offering execution tools to retail traders carries high compliance scrutiny and platform liability.',
        'Second, retail traders are volatile customers: when market conditions shift or an individual experiences a losing streak, they frequently blame the tool and churn.',
        'Technical feasibility and user engagement are not the entire business equation—regulatory boundaries and operational sustainability are fundamental product strategy.'
      ]
    },

    decision: {
      badge: 'EVIDENCE',
      outcome: 'Paused after validation',
      why: 'Operational overhead, financial regulatory constraints, and retail customer churn made continuing as a standalone retail SaaS unviable without institutional licensing.',
      whatChanged: 'I paused retail LBES and preserved all technical and user learnings. This experience directly evolved into the LBES Productized AI Service and the LBES Strategy Translation / Mirror concept.'
    },

    learning: {
      badge: 'OBSERVATION',
      learnings: [
        { area: 'PRODUCT', insight: 'Software must embed directly into the active decision moment, not serve as a passive evening reflection tool.' },
        { area: 'USER', insight: 'Traders don’t lack knowledge; they lack execution architecture that protects them from emotional volatility.' },
        { area: 'BUSINESS', insight: 'Operational, legal, and regulatory barriers are not external annoyances—they are core components of product viability.' },
        { area: 'TECHNICAL', insight: 'Real-time financial systems require absolute precision; latency or UI ambiguity destroys user trust immediately.' },
        { area: 'JUDGMENT', insight: 'Knowing when to pause a project due to external risk factors is as critical as knowing how to build it.' }
      ]
    },

    capabilityDeveloped: {
      badge: 'OBSERVATION',
      capabilities: [
        'Conducting rigorous user research interviews that separate emotional opinion from actual behavior',
        'Building low-latency MQL5 and Pine Script financial integration pipelines',
        'Designing behavioral gating systems that intercept human error in real time',
        'Navigating technical and regulatory risk boundaries in high-stakes software'
      ]
    },

    whatChangedNext: {
      badge: 'PRODUCT DIRECTION',
      headline: 'FROM RETAIL CONSUMERS TO HIGH-VALUE B2B WORKFLOWS',
      description: 'Recognizing the difficulty of retail customer economics, I turned to solving commercial business workflows where economic value is unambiguous and companies have clear budgets.',
      nextProjectTitle: 'B2B AI AUTOMATION & SALES SYSTEMS',
      nextProjectId: 'b2b-automation'
    }
  },

  // ==========================================
  // CASE STUDY 05 — B2B AI AUTOMATION
  // ==========================================
  {
    id: 'b2b-automation',
    number: '05',
    title: 'B2B AI AUTOMATION & SALES SYSTEMS',
    subtitle: 'Confidential Client Work — Real Estate Sales Workflow',
    category: 'B2B AI automation / sales workflow',
    timeline: 'April–May 2026',
    primaryUsers: 'Real estate brokers, commercial sales managers, and site-visit teams',
    buildApproach: 'WhatsApp Business API, Zapier triggers, CRM webhooks, structured AI qualification',
    status: 'Designed and pitched workflow (Discovery, workflow design, demo, and delivery planning)',
    coreLesson: 'B2B product work requires understanding both the user’s workflow and the buyer’s economic problem.',
    thesis: 'Automating lead qualification and pre-visit confirmation to eliminate wasted salesperson capacity and prioritize high-intent buyers.',
    evidenceMetrics: [
      { value: '2-Tier', label: 'CONFIRMATION ARCHITECTURE' },
      { value: '3-Level', label: 'LEAD PRIORITY TIERS' },
      { value: 'Pitched', label: 'COMMERCIAL SCOPE (NOT CLAIMED DEPLOYED)' }
    ],
    nextProjectId: 'lbes-service',
    prevProjectId: 'lbes',

    context: {
      badge: 'OBSERVATION',
      paragraphs: [
        'This initiative originated in an authentic commercial setting in the Noida real estate market, where my brother works as an active sales professional.',
        'I repeatedly heard about a devastating operational leak: sales agents spend hours following up with inbound web leads, arrange physical site visits, travel to project locations—only for prospective buyers to ghost and not show up.',
        'Every missed site visit burns 3–4 hours of expensive sales executive time and demotivates teams, while high-intent leads who called on Sunday evening wait 24 hours for a callback.'
      ]
    },

    problem: {
      badge: 'OBSERVATION',
      paragraphs: [
        'When raw leads arrive from Meta ads or 99acres into a real estate CRM, agents have zero contextual visibility into buyer seriousness, purchasing power, timeline, or true intent.',
        'Because agents treat every lead with the exact same manual sequence, high-priority buyers receive slow responses while tire-kickers consume 70% of phone capacity.'
      ]
    },

    problemDiscovery: {
      badge: 'OBSERVATION',
      paragraphs: [
        'By sitting alongside sales agents and auditing CRM lead progression, I identified two distinct workflow bottlenecks:'
      ],
      bulletPoints: [
        'Ghosting on Site Visits: Leads casually agree to visit on Saturday morning, but without progressive micro-commitments, cancellation rates exceed 50%.',
        'Undifferentiated Lead Attention: High-net-worth investors seeking ₹3Cr+ commercial property received the same delayed script as someone casually browsing ₹30L apartments.'
      ]
    },

    existingAlternatives: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Generic CRM auto-responders sent immediate canned emails that landed in spam folders.',
        'Traditional call centers outsourced outbound qualification to poorly paid tele-callers whose robotic scripts annoyed high-net-worth buyers and damaged brand reputation.'
      ]
    },

    hypothesis: {
      badge: 'HYPOTHESIS',
      statement: 'If an automated conversational WhatsApp system instantly confirms lead interest, collects structured qualification criteria, and orchestrates a two-step pre-visit reminder sequence, sales teams will eliminate wasted travel and increase show-up rates.',
      paragraphs: [
        'I hypothesized that the system must never pretend to replace the salesperson; its sole job was to prioritize human attention where economic return was highest.'
      ]
    },

    researchValidation: {
      badge: 'OBSERVATION',
      paragraphs: [
        'I mapped the complete journey of 50 historic leads through the firm’s CRM.',
        'I calculated the actual cost of a wasted site visit: travel expenses, opportunity cost of missed calls, and site executive waiting time. This economic calculation transformed the pitch from a "cool AI tool" into an operational ROI proposition.'
      ]
    },

    productDecision: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'I architected a two-component workflow:',
        'Component 1 — Multi-Stage Visit Confirmation: Instant WhatsApp greeting upon lead arrival → explicit confirmation request → automated 24-hour reminder → high-urgency 2-hour pre-visit verification.',
        'Component 2 — Conversational Lead Qualification: Non-invasive questions extracting budget, investment horizon, and property typology to score leads into High, Medium, and Low priority buckets for immediate human routing.'
      ]
    },

    productWorkflow: {
      badge: 'PRODUCT DIRECTION',
      flowDescription: 'Real Estate Lead Qualification & Confirmation Pipeline',
      steps: [
        { step: '01', title: 'Inbound Lead Ingestion', detail: 'New lead from portal/ad triggers webhook into automation router.' },
        { step: '02', title: 'Instant WhatsApp Intake', detail: 'System sends conversational greeting and requests site visit confirmation.' },
        { step: '03', title: 'Contextual Qualification', detail: 'Extracts budget, timeline, and financing status via low-friction chat.' },
        { step: '04', title: 'Priority Scoring & Human Alert', detail: 'High-intent lead routed directly to senior closer; 24h & 2h reminders scheduled.' }
      ]
    },

    buildExecution: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'The prototype was architected using WhatsApp Business Cloud API webhooks, Zapier and Make.com routers, integrated with a central Google Sheets and CRM database, powered by structured OpenAI qualification prompts.',
        'The technical specification was documented thoroughly to ensure high uptime and fallback routing if API errors occurred.'
      ],
      stack: ['WhatsApp Business Cloud API', 'Zapier / Make.com', 'CRM Webhook Handlers', 'OpenAI Classification Prompts']
    },

    distributionGtm: {
      badge: 'OBSERVATION',
      paragraphs: [
        'I prepared a complete commercial pitch and live demonstration for agency decision-makers.',
        'My role covered: Problem discovery, workflow design, technical architecture definition, live interactive demo creation, and the commercial proposal presentation.'
      ],
      channels: ['Direct Executive Pitch', 'Live Interactive WhatsApp Demo', 'Economic ROI Proposal Deck']
    },

    evidence: {
      badge: 'EVIDENCE',
      paragraphs: [
        'IMPORTANT EVIDENCE BOUNDARY:',
        'This project represents a designed and pitched enterprise workflow covering discovery, architecture, demo, and delivery planning.',
        'It must NOT be claimed as a fully deployed, paid enterprise rollout or financial outcome. The verified evidence is the completed commercial discovery, functional demonstration, and validated client interest.'
      ],
      metrics: [
        { value: '2-Stage', label: 'Verified Confirmation Sequence' },
        { value: '3-Tier', label: 'Lead Scoring Architecture' },
        { value: 'Pitched', label: 'Commercial Scope Documented' }
      ]
    },

    realityCheck: {
      badge: 'OBSERVATION',
      paragraphs: [
        'B2B sales taught me a crucial product lesson: enterprise buyers do not buy technology, nor do they care about the sophistication of your prompt engineering.',
        'The buyer cares about two things: Will this save my agents time? and Will this make me more money without creating new operational chaos?',
        'Solving an engineering problem is trivial compared to communicating its economic value to a skeptical business owner.'
      ]
    },

    decision: {
      badge: 'EVIDENCE',
      outcome: 'Designed & Pitched; Preserved as Core B2B Framework',
      why: 'Demonstrated that complex automation delivers value only when tightly aligned with the buyer’s revenue economics.',
      whatChanged: 'I packaged this exact capability into a repeatable, productized technical service model, leading directly to the LBES Productized AI Service.'
    },

    learning: {
      badge: 'OBSERVATION',
      learnings: [
        { area: 'PRODUCT', insight: 'In B2B automation, the user (sales agent) and the buyer (managing partner) have completely different incentives that must both be satisfied.' },
        { area: 'BUSINESS', insight: 'Always anchor the product pitch in the tangible economic cost of an existing failure (the wasted hours of no-show visits).' },
        { area: 'TECHNICAL', insight: 'Fail-safes matter more than features. When an automation fails or misunderstands a customer, human handoff must be instantaneous.' },
        { area: 'JUDGMENT', insight: 'Never misrepresent a designed and pitched system as a fully scaled enterprise contract. Intellectual honesty is the bedrock of founder trust.' }
      ]
    },

    capabilityDeveloped: {
      badge: 'OBSERVATION',
      capabilities: [
        'Auditing complex commercial sales funnels and pinpointing operational bottlenecks',
        'Translating enterprise business pain into quantifiable economic ROI proposals',
        'Designing conversational WhatsApp Business pipelines with strict exception handling',
        'Pitching executive decision-makers with live, zero-latency workflow demonstrations'
      ]
    },

    whatChangedNext: {
      badge: 'PRODUCT DIRECTION',
      headline: 'CAN TECHNICAL CAPABILITY BECOME A PAID SERVICE BEFORE A SAAS?',
      description: 'Understanding that commercial clients pay for immediate problem resolution without waiting for a complex SaaS subscription, I decided to monetize my trading automation skills directly as a productized service.',
      nextProjectTitle: 'LBES PRODUCTIZED AI SERVICE',
      nextProjectId: 'lbes-service'
    }
  },

  // ==========================================
  // CASE STUDY 06 — LBES PRODUCTIZED AI SERVICE
  // ==========================================
  {
    id: 'lbes-service',
    number: '06',
    title: 'LBES PRODUCTIZED AI SERVICE',
    subtitle: 'Turning Technical Capability Into a Paid B2B Service',
    category: 'B2B service / AI-assisted technical execution',
    timeline: 'June–July 2026',
    primaryUsers: 'Traders, algorithmic builders, and boutique funds needing custom strategy implementation',
    buildApproach: 'Targeted lead discovery, direct outreach, technical scoping, custom MQL5/TradingView build, testing & handoff',
    status: 'Paid commercial service',
    coreLesson: 'A capability can become a commercial service before it becomes a full software product.',
    thesis: 'Packaging deep technical execution capability as a structured, repeatable service with fixed scope before building complete SaaS software.',
    evidenceMetrics: [
      { value: '4+', label: 'PAID CLIENT ENGAGEMENTS' },
      { value: '100%', label: 'DELIVERY COMPLETION RATE' },
      { value: 'Direct', label: 'OUTREACH TO CLIENT CONVERSION' }
    ],
    nextProjectId: 'vector-ai',
    prevProjectId: 'b2b-automation',

    context: {
      badge: 'OBSERVATION',
      paragraphs: [
        'While building LBES, I had accumulated deep, specialized proficiency in algorithmic trading engineering: Pine Script indicator math, MetaTrader 5 (MQL5) logic, backtesting scripts, webhook integrations, and VPS execution.',
        'Instead of locking this capability inside an unlaunched retail software dashboard, I asked a fundamental business model question:',
        'Can the underlying technical capability itself become an immediate cash-flow service that customers will gladly pay for today?'
      ]
    },

    problem: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Many experienced traders possess profitable, highly nuanced manual trading setups but lack the programming knowledge to translate their strategies into code.',
        'Generic freelance developers on Upwork frequently botch trading logic because they lack market domain context—they do not understand order flow, spread slippage, candle close timing, or multi-timeframe confirmation.',
        'Traders did not need another software dashboard; they needed an expert who understood trading language and could deliver precise, bug-free automation.'
      ]
    },

    problemDiscovery: {
      badge: 'OBSERVATION',
      paragraphs: [
        'I discovered that the traditional SaaS trajectory ("Build software for 6 months, then seek customers") is often backwards for technical founders.',
        'A technical founder can reverse the sequence: Find qualified prospects with urgent needs → Sell custom implementation → Deliver manually → Extract repeatable patterns → Productize into software later.'
      ],
      bulletPoints: [
        'Clients had high willingness to pay because automation saved them 6+ hours of daily screen staring.',
        'Clients valued domain fluency over generic coding credentials.',
        'Scoping was the primary point of failure: clients often described strategies ambiguously until forced through a rigorous specification framework.'
      ]
    },

    existingAlternatives: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Generic freelancers on Fiverr or Upwork with zero trading experience who deliver unverified scripts.',
        'Expensive quant boutique consultancies charging tens of thousands of dollars with multi-month lead times.'
      ]
    },

    hypothesis: {
      badge: 'HYPOTHESIS',
      statement: 'If I package my algorithmic execution capability as a fixed-scope productized service—conducting structured strategy intake and delivering battle-tested code—traders will pay immediately without demanding a full SaaS platform.',
      paragraphs: [
        'The shift was from "I know trading technology" to "I can understand your specific strategy and deliver a reliable technical implementation within days."'
      ]
    },

    researchValidation: {
      badge: 'OBSERVATION',
      paragraphs: [
        'I engaged prospective clients inside specialized trading communities and technical forums.',
        'I audited their existing manual strategies, identified hidden edge-case logic they had overlooked, and proved competence before quoting fees.'
      ]
    },

    productDecision: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'I standardized the engagement workflow into a repeatable 5-phase delivery cycle: Discovery & Strategy Specification → Scope Approval → Technical Implementation → Rigorous Backtesting & Error Checking → Live Account Deployment & Handoff.',
        'This eliminated scope creep and ensured client expectations matched the delivered code.'
      ]
    },

    productWorkflow: {
      badge: 'PRODUCT DIRECTION',
      flowDescription: 'Productized Technical Execution Engine',
      steps: [
        { step: '01', title: 'Targeted Prospect Discovery', detail: 'Identify traders expressing manual execution bottlenecks in communities.' },
        { step: '02', title: 'Strategy Intake & Scoping', detail: 'Convert discretionary rules into structured technical specification sheet.' },
        { step: '03', title: 'Live Demonstration & Sale', detail: 'Present architectural blueprint and agree on fixed delivery scope.' },
        { step: '04', title: 'Delivery & Live Handoff', detail: 'Deliver tested MQL5/TradingView code with VPS setup and verification.' }
      ]
    },

    buildExecution: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'Execution involved writing clean, modular Pine Script and MQL5 code, setting up cloud VPS instances with 24/7 uptime monitoring, and creating screen-recorded documentation for client handoff.'
      ],
      stack: ['MQL5 (MetaTrader 5)', 'Pine Script v5', 'Cloud VPS Windows Server', 'Custom Strategy Backtesting Frameworks']
    },

    distributionGtm: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Distribution was high-touch and personalized:',
        'I conducted targeted prospect research in active algorithmic trading forums, engaged in technical discussions, offered public teardowns of common execution bugs, and conducted private 1-on-1 discovery calls.'
      ],
      channels: ['Direct Niche Community Outreach', 'Technical Problem-Solving Threads', '1-on-1 Strategy Scoping Calls', 'Referral Network']
    },

    evidence: {
      badge: 'EVIDENCE',
      paragraphs: [
        'The productized service secured 4+ paid client engagements with 100% completion and client satisfaction.',
        'This demonstrated the ability to convert personal technical competence into real commercial cash flow without relying on venture capital or speculative marketing.'
      ],
      metrics: [
        { value: '4+', label: 'Verified Paid Engagements' },
        { value: '100%', label: 'Delivery Completion Rate' },
        { value: '0', label: 'Venture Capital Required' }
      ]
    },

    realityCheck: {
      badge: 'OBSERVATION',
      paragraphs: [
        'The productized service proved that a capability can generate revenue long before becoming software.',
        'However, it also highlighted the natural ceiling of service delivery: revenue scales linearly with personal hours unless transformed into a standardized software system or agency delivery team.'
      ]
    },

    decision: {
      badge: 'EVIDENCE',
      outcome: 'Validated Paid Service; Informs Future Automation Products',
      why: 'Proved commercial viability of technical execution skills and reinforced that understanding customer requirements is 80% of software success.',
      whatChanged: 'This experience provided foundational insights into how human intent translates into software specifications, which became the core of LBES Strategy Translation / Mirror.'
    },

    learning: {
      badge: 'OBSERVATION',
      learnings: [
        { area: 'PRODUCT', insight: 'The smallest viable form of a software product is often a productized service delivered manually by the founder.' },
        { area: 'BUSINESS', insight: 'Selling high-ticket technical execution directly to qualified buyers builds stronger commercial discipline than chasing $5 SaaS subscriptions.' },
        { area: 'USER', insight: 'Clients do not care how code is written; they care that the delivered system behaves exactly as their mental model expects.' },
        { area: 'DISTRIBUTION', insight: 'Deep technical competence demonstrated publicly in niche communities is the most potent lead generator in high-trust industries.' },
        { area: 'JUDGMENT', insight: 'Never build a complex software interface before you have manually solved the client’s problem at least five times.' }
      ]
    },

    capabilityDeveloped: {
      badge: 'OBSERVATION',
      capabilities: [
        'Converting complex human domain rules into deterministic software specifications',
        'Running consultative sales conversations that uncover unstated client requirements',
        'Managing client project scopes and delivering zero-defect production code',
        'Operating a lean productized technical service with zero external capital'
      ]
    },

    whatChangedNext: {
      badge: 'PRODUCT DIRECTION',
      headline: 'CAN PREVIOUS PRODUCT LIMITATIONS REVEAL THE DEEPER JOB-TO-BE-DONE?',
      description: 'With commercial confidence solidified, I returned to the fundamental question of career progression that ResumeAI had surfaced: How does someone continuously align their capabilities with the market?',
      nextProjectTitle: 'VECTOR AI',
      nextProjectId: 'vector-ai'
    }
  },

  // ==========================================
  // CASE STUDY 07 — VECTOR AI
  // ==========================================
  {
    id: 'vector-ai',
    number: '07',
    title: 'VECTOR AI',
    subtitle: 'From Resume Generation to Continuous Career Execution',
    category: 'AI career product',
    timeline: 'August 2026',
    primaryUsers: 'Software engineers, college students, and professionals seeking career progression',
    buildApproach: 'Profile-to-JD vector analysis prototype, gap detection engine, evidence-driven learning path',
    status: 'Product concept / prototype evolution',
    coreLesson: 'User feedback can reveal a larger underlying problem and redirect the product.',
    thesis: 'Shifting from the visible artifact (the resume document) to the underlying job-to-be-done: continuous skill-gap detection and career trajectory execution.',
    evidenceMetrics: [
      { value: 'Concept', label: 'PRODUCT SPECIFICATION' },
      { value: 'Direct', label: 'EVOLUTION FROM RESUMEAI' },
      { value: 'Trajectory', label: 'FOCUS OVER STATIC ARTIFACT' }
    ],
    nextProjectId: 'iter8os',
    prevProjectId: 'lbes-service',

    context: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Vector AI emerged directly from the accumulated evidence and limitations of ResumeAI.',
        'ResumeAI had successfully generated revenue by writing resumes. But as I reviewed user feedback and followed up with candidates weeks later, a profound product limitation became glaringly obvious:',
        'A resume is only a static piece of paper. Telling a candidate "Your resume lacks backend depth" does not help them secure a Google or Stripe engineering interview if they fundamentally lack distributed systems experience.',
        'The true problem was not generating documents; it was navigating the messy multi-month trajectory between current capabilities and the requirements of the job they want.'
      ]
    },

    problem: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Job seekers operate in the dark. They browse ambitious job descriptions, feel intimidated, and do not know what exact skills are missing, which skills carry the highest hiring weight, or what specific project would prove competence.',
        'Existing platforms offer generic advice ("learn cloud computing") rather than diagnostic precision.'
      ]
    },

    problemDiscovery: {
      badge: 'OBSERVATION',
      paragraphs: [
        'By analyzing candidate profiles against real job descriptions, I mapped the missing bridge:',
        'Current Profile (what you have proven) → Skill & Evidence Gap (what is missing) → Targeted Action Plan (projects, repos, certifications) → Updated Profile.'
      ],
      bulletPoints: [
        'Candidates possessed theoretical degree credentials but lacked tangible proof of specific frameworks.',
        'Candidates wasted months following generic YouTube tutorials instead of building the exact artifact recruiters look for.',
        'Progress needed to be measurable over time, not encapsulated in a one-time export.'
      ]
    },

    existingAlternatives: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Resume scanners (Jobscan) that simply calculate keyword percentage matches without understanding technical nuance.',
        'Bootcamp platforms (Coursera, Udemy) that push 40-hour generic courses rather than personalized, bite-sized skill remediation.'
      ]
    },

    hypothesis: {
      badge: 'HYPOTHESIS',
      statement: 'If a career intelligence system maps a candidate’s current profile against target job descriptions—identifying the exact missing skills, required evidence artifacts, and sequencing an actionable learning roadmap—candidates will use it as their continuous career operating system.',
      paragraphs: [
        'The product moved from an artifact generator (resume) to a continuous feedback engine for personal career progression.'
      ]
    },

    researchValidation: {
      badge: 'OBSERVATION',
      paragraphs: [
        'I conducted manual gap analyses for 10 engineering students, mapping their GitHub repositories and resumes against entry-level software engineer specs.',
        'In all 10 cases, the students immediately understood what project to build next to make their applications competitive.'
      ]
    },

    productDecision: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'I scoped the product around four core modules: Profile Parsing, Target JD Decomposition, Skill-Gap Matrix, and the Evidence Action Roadmap.',
        'IMPORTANT: All numerical alignment metrics in early concept mockups are illustrative conceptual models, not claimed external benchmarks.'
      ]
    },

    productWorkflow: {
      badge: 'PRODUCT DIRECTION',
      flowDescription: 'Continuous Career Alignment & Execution Engine',
      steps: [
        { step: '01', title: 'Profile & Goal Ingestion', detail: 'User provides current resume, GitHub profile, and target role description.' },
        { step: '02', title: 'Semantic Gap Decomposition', detail: 'System maps existing proof against hard requirements and soft preferences.' },
        { step: '03', title: 'Actionable Roadmap Generation', detail: 'Outputs targeted projects, missing libraries, and portfolio artifacts needed.' },
        { step: '04', title: 'Continuous Profile Sync', detail: 'As user builds and pushes code, alignment score dynamically recalibrates.' }
      ]
    },

    buildExecution: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'The prototype was designed to leverage LLM embedding models to compare resume vector representations against structured job description requirements, outputting gap analyses formatted as clean Markdown checklists.'
      ],
      stack: ['Vector Embedding Search', 'LLM Semantic Analysis', 'React / Tailwind Dashboard', 'FastAPI Backend']
    },

    distributionGtm: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Designed as a student- and developer-first product, intended for distribution through technical college communities, open-source cohorts, and LinkedIn career transition discussions.'
      ],
      channels: ['Campus Engineering Communities', 'Open-Source Dev Discord Servers', 'Technical Career Newsletters']
    },

    evidence: {
      badge: 'EVIDENCE',
      paragraphs: [
        'Vector AI stands as a documented product concept and functional prototype evolution.',
        'Its primary significance is architectural and strategic: it represents the decisive leap from superficial AI text generation to deep diagnostic trajectory guidance.'
      ],
      metrics: [
        { value: 'Concept', label: 'Product Architecture Specified' },
        { value: '100%', label: 'Derived From ResumeAI Findings' },
        { value: 'Validated', label: 'User Problem Resonance' }
      ]
    },

    realityCheck: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Building a continuous career tracking tool faces a major behavioral hurdle: long feedback loops.',
        'While getting a resume updated takes 15 minutes, completing a new software project takes weeks. Maintaining user retention across multi-week development cycles requires exceptional habit design.'
      ]
    },

    decision: {
      badge: 'EVIDENCE',
      outcome: 'Evolved Thinking Into Founder Decision Systems',
      why: 'Showed that diagnostic gap analysis is far more valuable than content generation.',
      whatChanged: 'The diagnostic methodology behind Vector AI directly shaped how I approached founder uncertainty in Iter8OS.'
    },

    learning: {
      badge: 'OBSERVATION',
      learnings: [
        { area: 'PRODUCT', insight: 'Never mistake the visible customer artifact (a resume, a logo, a slide) for the ultimate job-to-be-done (career advancement, revenue, validation).' },
        { area: 'USER', insight: 'Users experience relief when an overwhelming problem is broken into an ordered, finite sequence of concrete next actions.' },
        { area: 'BUSINESS', insight: 'Products with multi-month outcome horizons must provide intermediate dopamine loops to sustain engagement.' },
        { area: 'JUDGMENT', insight: 'A failed or constrained product (ResumeAI) often contains the exact strategic roadmap for the next generation of software.' }
      ]
    },

    capabilityDeveloped: {
      badge: 'OBSERVATION',
      capabilities: [
        'Applying Job-To-Be-Done (JTBD) theory to uncover root customer motivations',
        'Designing semantic gap analysis systems using vector similarity concepts',
        'Structuring long-horizon career roadmaps into actionable, bite-sized tasks'
      ]
    },

    whatChangedNext: {
      badge: 'PRODUCT DIRECTION',
      headline: 'CAN AI HELP FOUNDERS IDENTIFY THEIR HIGHEST-VALUE UNCERTAINTY?',
      description: 'Taking the diagnostic gap philosophy from Vector AI and the founder pain from Killarity, I embarked on my flagship initiative: Iter8OS—the Founder Decision Operating System.',
      nextProjectTitle: 'ITER8OS',
      nextProjectId: 'iter8os'
    }
  },

  // ==========================================
  // CASE STUDY 08 — ITER8OS
  // ==========================================
  {
    id: 'iter8os',
    number: '08',
    title: 'ITER8OS',
    subtitle: 'Founder Decision OS',
    category: 'AI Product / Founder decision support',
    timeline: 'August 2026–Present',
    primaryUsers: 'Early-stage, solo, and bootstrapped startup founders',
    buildApproach: 'Adaptive conversational discovery, situational extraction, bottleneck prioritization engine, 24h brief generation',
    status: 'Live with early users; actively evolving',
    coreLesson: 'The highest-value output may be identifying the right next decision rather than generating more information.',
    thesis: 'Helping founders cut through noise and pinpoint their single highest-leverage bottleneck, then defining one falsifiable test to produce decisive evidence.',
    liveUrl: 'https://iter8os-final-page-one.vercel.app/',
    liveUrlLabel: 'Visit Iter8OS Live Application',
    evidenceMetrics: [
      { value: 'Live', label: 'EARLY USER VALIDATION' },
      { value: '1', label: 'BOTTLENECK FOCUS AT A TIME' },
      { value: '24h', label: 'FOUNDER DECISION BRIEF' }
    ],
    nextProjectId: 'lbes-mirror',
    prevProjectId: 'vector-ai',

    context: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Iter8OS is the flagship synthesis of everything I have learned across seven prior product loops.',
        'Early-stage founders operate under relentless, crushing uncertainty. Every single morning, a founder wakes up facing thirty competing priorities: Should I write code? Run ads? Redesign onboarding? Change pricing? Do customer interviews? Rewrite copy?',
        'Most startup failure is not caused by laziness or lack of effort. It is caused by working relentlessly on the wrong bottleneck. Founders optimize landing page gradients when they have zero distribution; they add complex features when customers haven’t validated willingness to pay.'
      ]
    },

    problem: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Existing startup advice is fragmented, generic, and paralyzing. Reading Paul Graham essays, Twitter threads, and YouTube videos provides intellectual inspiration but zero operational clarity on what to execute before Friday.',
        'Meanwhile, AI chatbots dump 20-bullet generic checklists that overwhelm the founder and amplify anxiety.'
      ]
    },

    problemDiscovery: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Through deep retrospective analysis of my own project failures (Kirana X, Killarity) and intensive interviews with early-stage builders, I uncovered the core psychological truth of founder decision-making:',
        'A founder cannot solve twenty problems simultaneously. Giving a founder a 20-point recommendation creates paralysis.'
      ],
      bulletPoints: [
        'Founders possess immense situational context that static forms fail to capture.',
        'Founders need adaptive questioning that diagnoses the actual state of reality before dispensing advice.',
        'The highest-leverage intervention is identifying the SINGLE constraint currently holding the business hostage.'
      ]
    },

    existingAlternatives: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Generic startup accelerators (Y Combinator content library) that provide broad mental models but lack custom situational diagnosis.',
        'Executive founder coaches charging $500/hr, inaccessible to solo and bootstrapped builders.',
        'Generic LLM prompts that produce sycophantic, hallucinated market reports.'
      ]
    },

    hypothesis: {
      badge: 'HYPOTHESIS',
      statement: 'If an adaptive conversational system diagnoses a founder’s actual situation—asking contextual questions that isolate their single highest-leverage bottleneck—and outputs a 24-Hour Founder Decision Brief with one falsifiable experiment, founders will make faster, higher-conviction decisions.',
      paragraphs: [
        'Iter8OS does not promise to build your startup for you. It promises to protect you from wasting three months on the wrong assumption.'
      ]
    },

    researchValidation: {
      badge: 'OBSERVATION',
      paragraphs: [
        'I tested the decision framework manually with 12 active startup founders before writing production code.',
        'I conducted structured 45-minute discovery sessions, extracted their actual operational metrics, forced them to prioritize a single bottleneck, and framed a 5-day experiment. 10 of the 12 founders reported that this single conversation altered their immediate weekly roadmap.'
      ]
    },

    productDecision: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'I designed Iter8OS around a calm, dark, editorial interface inspired by Linear, Stripe, and Apple.',
        'The product rejected chat bubbles and dashboard clutter. Instead, it utilizes an adaptive structured intake that adjusts subsequent questions based on prior answers, feeding an analytical engine that outputs the clean "Founder Decision Brief."'
      ]
    },

    productWorkflow: {
      badge: 'PRODUCT DIRECTION',
      flowDescription: 'Adaptive Diagnosis & 24h Decision Brief Workflow',
      steps: [
        { step: '01', title: 'Situational Context Ingestion', detail: 'Founder inputs current stage, traction metrics, and core dilemma.' },
        { step: '02', title: 'Adaptive Dynamic Probing', detail: 'Engine asks targeted follow-ups tailored to the specific business model.' },
        { step: '03', title: 'Single Bottleneck Isolation', detail: 'Filters out noise to isolate the singular constraint blocking progress.' },
        { step: '04', title: '24h Decision Brief Delivery', detail: 'Outputs concrete hypothesis, test design, success threshold, and next call.' }
      ]
    },

    buildExecution: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'Built with modern React, TypeScript, Tailwind CSS, and Motion layout transitions on the frontend, powered by an Express API proxying structured Gemini / Anthropic reasoning pipelines.',
        'The application emphasizes typography, generous negative space, and mathematical contrast scales that establish institutional trust.'
      ],
      stack: ['React / TypeScript', 'Tailwind CSS', 'Motion (Framer)', 'Server-Side LLM Reasoning APIs', 'Vercel Edge Deployment']
    },

    distributionGtm: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Targeting solo founders, bootstrapped SaaS creators, and early-stage AI builders:',
        'Distribution is founder-led and evidence-driven: sharing deep case studies of real startup decisions on X/LinkedIn, private beta invites to founder cohorts, and word-of-mouth recommendations.'
      ],
      channels: ['Founder Network Direct Access', 'X / LinkedIn Analytical Essays', 'Curated Founder Communities', 'Direct 1-on-1 Strategy Reviews']
    },

    evidence: {
      badge: 'EVIDENCE',
      paragraphs: [
        'Iter8OS is currently live with early users and actively evolving.',
        'Early founder feedback confirms that narrowing focus to ONE experiment eliminates startup paralysis and restores execution momentum.'
      ],
      metrics: [
        { value: 'Live', label: 'Early User Validation' },
        { value: '1', label: 'Strict Bottleneck Focus' },
        { value: '24h', label: 'Founder Decision Turnaround' }
      ]
    },

    realityCheck: {
      badge: 'OBSERVATION',
      paragraphs: [
        'A critical reality check from early usage:',
        'Founders inherently resist focusing on just one bottleneck. Their instinct is to want a tool that fixes everything at once.',
        'The product’s design must gently but firmly enforce discipline: refusing to allow the founder to wander until the current experiment is framed and executed.'
      ]
    },

    decision: {
      badge: 'EVIDENCE',
      outcome: 'Live Flagship Product; Actively Evolving',
      why: 'Addresses the foundational uncertainty every founder faces daily, backed by seven prior product learning loops.',
      whatChanged: 'Evolving from one-off static briefs into a continuous operational decision workspace with longitudinal tracking.'
    },

    learning: {
      badge: 'OBSERVATION',
      learnings: [
        { area: 'PRODUCT', insight: 'The highest-value output of AI in strategic decision-making is reduction of noise, not generation of volume.' },
        { area: 'USER', insight: 'Founders do not lack tasks to do; they lack conviction about which task actually matters today.' },
        { area: 'BUSINESS', insight: 'Trust is the single commercial KPI that dictates whether a founder will return to a decision tool.' },
        { area: 'TECHNICAL', insight: 'Adaptive intake forms that adjust based on previous responses yield 10x higher signal than open-ended chat prompts.' },
        { area: 'JUDGMENT', insight: 'Never invent unsupported claims or pretend AI has magical omniscience. Transparency and evidence build enduring credibility.' }
      ]
    },

    capabilityDeveloped: {
      badge: 'OBSERVATION',
      capabilities: [
        'Synthesizing messy qualitative founder problems into rigorous decision trees',
        'Designing editorial, dark-mode software interfaces that communicate calm confidence',
        'Architecting adaptive LLM inquiry systems that extract ground-truth operational metrics',
        'Guiding founders through structured falsification tests that prevent wasted capital'
      ]
    },

    whatChangedNext: {
      badge: 'PRODUCT DIRECTION',
      headline: 'CAN HUMAN INTENT BECOME DETERMINISTIC SOFTWARE VIA REAL-WORLD FEEDBACK?',
      description: 'The lessons of Iter8OS and LBES converged into a profound architectural question: Can AI translate nuanced human intent into precise software, observe real execution, and refine the system?',
      nextProjectTitle: 'LBES STRATEGY TRANSLATION / MIRROR',
      nextProjectId: 'lbes-mirror'
    }
  },

  // ==========================================
  // CASE STUDY 09 — LBES STRATEGY TRANSLATION / MIRROR
  // ==========================================
  {
    id: 'lbes-mirror',
    number: '09',
    title: 'LBES STRATEGY TRANSLATION / MIRROR',
    subtitle: 'Human Intent → Structured Software → Real-World Feedback',
    category: 'AI product concept / strategy translation / feedback system',
    timeline: 'Later evolution of LBES',
    primaryUsers: 'Systematic and discretionary traders wanting rule-adherence intelligence',
    buildApproach: 'Adaptive strategy intake, structured specification drafting, human-in-the-loop review, read-only trade observation',
    status: 'Product direction / future concept (clearly labeled, not claimed as fully shipped)',
    coreLesson: 'AI product opportunities can exist in the gap between human intent, structured specifications, software execution and real-world feedback.',
    thesis: 'Bridging the chasm between ambiguous mental trading models and deterministic software, then observing live execution to provide rule-adherence evidence.',
    evidenceMetrics: [
      { value: 'Direction', label: 'FUTURE CONCEPT SPECIFICATION' },
      { value: 'Read-Only', label: 'OBSERVATION NOT AUTO-TRADING' },
      { value: 'Feedback', label: 'HUMAN APPROVAL REQUIRED' }
    ],
    nextProjectId: null,
    prevProjectId: 'iter8os',

    context: {
      badge: 'OBSERVATION',
      paragraphs: [
        'LBES Strategy Translation / Mirror represents the most advanced product concept in my journey.',
        'IMPORTANT: This is a designed architectural direction and conceptual evolution of LBES, not an already shipped, fully scaled commercial deployment.',
        'The origin lies in an observed communication gap: an experienced trader explains their strategy in intuitive, conversational terms: "If Asian session highs are swept, and market structure shifts on the 5-minute chart with high volume, I look for a fair value gap entry—but only if the London open hasn’t expanded more than 40 pips."',
        'To the trader, this mental model is completely clear. But to a computer, it is filled with ambiguities: What is the exact pip threshold? What defines high volume? Which candle close confirms the shift? What happens if news drops?'
      ]
    },

    problem: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Generic AI code generators fail miserably at this task because they jump straight from an ambiguous English prompt to generating dozens of lines of faulty Python or MQL5 code without clarifying unspoken edge cases.',
        'The trader runs the code, it executes catastrophic trades, and trust evaporates instantly.'
      ]
    },

    problemDiscovery: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Through my productized service engagements, I discovered that the hardest part of software automation is NEVER the coding.',
        'The true difficulty is extracting the complete mental model from the human’s head, structuring it into an unambiguous specification, verifying it with the human, and only then generating code.'
      ],
      bulletPoints: [
        'Traders have unstated assumptions they forget to mention until money is lost.',
        'Different trading styles (scalping vs swing, discretionary vs mechanical) require radically different diagnostic questions.',
        'Humans must explicitly approve every component before any code touches a live account.'
      ]
    },

    existingAlternatives: {
      badge: 'OBSERVATION',
      paragraphs: [
        'AI code assistants (GitHub Copilot, ChatGPT) that generate speculative code without validating domain assumptions or testing multi-timeframe logic.',
        'Complex algorithmic builder software (EA Studio, StrategyQuant) with overwhelming tabular settings that require weeks of specialized training.'
      ]
    },

    hypothesis: {
      badge: 'HYPOTHESIS',
      statement: 'If an adaptive AI interview extracts a trader’s mental model, compiles it into a human-readable specification for explicit review, generates precise implementation, and observes real-world execution in read-only mode to evaluate rule adherence, traders will achieve true execution consistency.',
      paragraphs: [
        'The moat is not the generated code; it is the closed-loop system connecting Intent → Specification → Execution → Observation → Refinement.'
      ]
    },

    researchValidation: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Derived from the 4+ paid client engagements in the LBES productized service where I manually acted as the translation engine.',
        'In every engagement, forcing the client through a structured specification document revealed 3–5 critical flaws in their strategy before a single line of MQL5 was written.'
      ]
    },

    productDecision: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'The system is designed in three distinct architectural layers:',
        'Layer 1: Adaptive Strategy Intake — dynamically probes trader style, markets, timeframe, entry rules, invalidation, risk limits, and exceptions.',
        'Layer 2: Human-in-the-Loop Approval — trader reviews, edits, and certifies every element of the specification sheet before compilation.',
        'Layer 3: LBES Mirror (Read-Only Observation) — observes live market trades without executing orders, comparing actual trader behavior against the defined strategy to measure rule adherence.'
      ]
    },

    productWorkflow: {
      badge: 'PRODUCT DIRECTION',
      flowDescription: 'Closed-Loop Intent-to-Feedback Architecture',
      steps: [
        { step: '01', title: 'Adaptive Strategy Interview', detail: 'Dynamic AI interview extracts nuanced trading rules and edge cases.' },
        { step: '02', title: 'Structured Specification Sheet', detail: 'Generates unambiguous blueprint covering entry, risk, invalidation, and exits.' },
        { step: '03', title: 'Human Review & Explicit Approval', detail: 'Trader reviews, adjusts, and approves the formal specification.' },
        { step: '04', title: 'Read-Only Observation & Mirror', detail: 'System monitors live trades, tracking deviation between intention and reality.' }
      ]
    },

    buildExecution: {
      badge: 'PRODUCT DIRECTION',
      paragraphs: [
        'Architected as a multi-step platform integrating conversational LLM intake engines with strict schema validators (Zod), code generation modules for Pine Script and MQL5, and read-only MT5 terminal monitoring webhooks.'
      ],
      stack: ['Schema Validation Engines', 'Adaptive LLM Intake Agents', 'Pine Script & MQL5 Generators', 'MT5 Read-Only Webhooks', 'Behavioral Adherence Analytics']
    },

    distributionGtm: {
      badge: 'OBSERVATION',
      paragraphs: [
        'Envisioned as a high-trust productized tool for systematic retail traders, prop firm candidates, and boutique trading teams who demand institutional execution discipline.'
      ],
      channels: ['Boutique Trading Communities', 'Prop Firm Candidate Cohorts', 'Technical Content & System Deconstructions']
    },

    evidence: {
      badge: 'EVIDENCE',
      paragraphs: [
        'IMPORTANT EVIDENCE BOUNDARY:',
        'LBES Mirror is an architectural concept and future product direction.',
        'It is documented here as an intellectual through-line demonstrating how years of trading research and software development synthesized into an advanced systems model.'
      ],
      metrics: [
        { value: 'Direction', label: 'Conceptual Architecture' },
        { value: 'Read-Only', label: 'Safety by Design (No Auto-Trading)' },
        { value: 'Feedback', label: 'Human Approval Required' }
      ]
    },

    realityCheck: {
      badge: 'OBSERVATION',
      paragraphs: [
        'The difficult part of AI software is rarely generating code.',
        'The profound challenge is accurately capturing complex human intent before code generation, and then comparing the resulting system against messy real-world human behavior.',
        'Any system that attempts autonomous trading without human approval and real-time adherence checking is an accident waiting to happen.'
      ]
    },

    decision: {
      badge: 'EVIDENCE',
      outcome: 'Designed as Strategic Roadmap',
      why: 'Represents the frontier of AI product development: moving from passive chatbots to closed-loop behavioral operating systems.',
      whatChanged: 'Anchors my long-term technical product thesis: Human Intent → Structured Specification → Software → Real-World Behavior → Evidence → Refinement.'
    },

    learning: {
      badge: 'OBSERVATION',
      learnings: [
        { area: 'PRODUCT', insight: 'The greatest opportunity for AI is not writing code blindly, but translating ambiguous human intent into rigorous, verifiable specifications.' },
        { area: 'USER', insight: 'Users do not trust black-box autonomous systems; they demand transparency, explicit approval gates, and explainable logic.' },
        { area: 'TECHNICAL', insight: 'Closed-loop systems that measure the delta between intended behavior and observed behavior represent the future of intelligent software.' },
        { area: 'JUDGMENT', insight: 'Always maintain absolute clarity between what is currently shipped and what represents future architectural direction.' }
      ]
    },

    capabilityDeveloped: {
      badge: 'OBSERVATION',
      capabilities: [
        'Designing closed-loop feedback systems connecting human intent to software execution',
        'Architecting adaptive intake protocols that handle ambiguous edge cases',
        'Creating human-in-the-loop validation frameworks that guarantee safety',
        'Synthesizing multi-year domain knowledge into scalable product architecture'
      ]
    },

    whatChangedNext: {
      badge: 'PRODUCT DIRECTION',
      headline: 'THE CONTINUOUS THROUGH-LINE OF PRODUCT JUDGMENT',
      description: 'From local kirana counter ledgers to closed-loop algorithmic intent engines, the common thread is not the industry—it is the disciplined capability to investigate ambiguity, form hypotheses, build small, observe reality, and compound product judgment.',
      nextProjectTitle: 'VIEW ALL CASE STUDIES',
      nextProjectId: 'kirana-x'
    }
  }
];

export function getCaseStudyById(id: string): CaseStudyData | undefined {
  return caseStudiesData.find(c => c.id === id);
}

export function getAllCaseStudies(): CaseStudyData[] {
  return caseStudiesData;
}

export function getAdjacentCaseStudies(currentId: string): { prev?: CaseStudyData; next?: CaseStudyData } {
  const index = caseStudiesData.findIndex(c => c.id === currentId);
  if (index === -1) return {};
  return {
    prev: index > 0 ? caseStudiesData[index - 1] : undefined,
    next: index < caseStudiesData.length - 1 ? caseStudiesData[index + 1] : undefined,
  };
}
