export interface PipelineNode {
  step: string;
  label: string;
  detail: string;
}

export interface ProjectMedia {
  url: string;
  title: string;
  caption: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  architecture: string[];
  keyFeatures: string[];
  pipelineNodes: PipelineNode[];
  techDecisions: { choice: string; reason: string }[];
  metrics: string[];
  gallery: ProjectMedia[];
  figmaAvailable: boolean;
  figmaScope: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  category: string;
  flowBadge: string;
  flowSummary: string;
  description: string;
  tech: string[];
  caseStudy: CaseStudy;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  status: string;
  summary: string;
  skillsLearned: string[];
  proofDocuments: { name: string; url: string }[];
}

export const projectsData: Project[] = [
  {
    id: "safia",
    title: "SAFIA — Educational Innovation Platform",
    role: "Backend Developer & Database Architect",
    category: "AI Automation & Backend Systems",
    flowBadge: "Document Parsing Pipeline",
    flowSummary: "Multi-part Document Upload ➔ Async Tokenization ➔ Structured LLM Validation ➔ Relational Storage",
    description: "Production web platform built for the Educational Innovation Department (UPIBI-IPN) that centralizes academic report submissions and automates compliance validation using deterministic AI pipelines.",
    tech: ["Python", "FastAPI", "OpenAI API", "SQL (MySQL)", "Linux VPS", "Docker", "Figma"],
    caseStudy: {
      overview: "SAFIA centralizes and validates heterogeneous academic documentation through asynchronous evaluation pipelines, eliminating manual administrative bottlenecks.",
      problem: "Manual verification of departmental reports generated long review backlogs, inconsistent criteria application, and lacked deterministic compliance audit trails.",
      pipelineNodes: [
        { step: "01", label: "Secure Ingestion", detail: "Payload intake validating multi-part file signatures & MIME metadata" },
        { step: "02", label: "Async FastAPI Parser", detail: "Non-blocking background extraction of text streams & layout structures" },
        { step: "03", label: "Structured AI Engine", detail: "OpenAI schema-bound evaluation against departmental regulations" },
        { step: "04", label: "Relational Ledger", detail: "Transactional commit of compliance flags & audit records" },
        { step: "05", label: "Daemon VPS Host", detail: "Continuous service execution on an isolated Linux environment" }
      ],
      architecture: [
        "Asynchronous stream processing built on FastAPI to ingest large PDF files without blocking server workers.",
        "Deterministic JSON schema enforcement over LLM completions to eradicate compliance evaluation hallucinations.",
        "Relational database design storing revision timestamps, criteria checklists, and immutable audit trails.",
        "System daemonization and environment isolation configured on a dedicated Linux VPS."
      ],
      keyFeatures: [
        "Automated Compliance Engine with Strict Schema Outputs",
        "Asynchronous Non-Blocking Document Ingestion",
        "Granular Departmental Audit Trails & History",
        "Daemonized Production VPS Deployment"
      ],
      techDecisions: [
        { choice: "FastAPI Async Core", reason: "Minimizes worker starvation during latency-heavy model inferencing." },
        { choice: "OpenAI JSON Mode", reason: "Guarantees deterministic structured outputs matching relational models." },
        { choice: "Linux VPS Hosting", reason: "Direct control over background daemons and network isolation." }
      ],
      metrics: [
        "Audit turn-around compressed from days to sub-5-second processing.",
        "100% schema consistency across production validation batches.",
        "Successfully adopted by institutional innovation authorities."
      ],
      figmaAvailable: true,
      figmaScope: "Submission portals, review workspaces, verification status views, and export views.",
      gallery: [
        { url: "/projects/safia-1.png", title: "Submission & Review Portal", caption: "Interactive document ingestion and real-time status dashboard designed in Figma." },
        { url: "/projects/safia-2.png", title: "Automated Evaluation Audit", caption: "Deterministic criteria validation breakdown and compliance summary view." }
      ]
    }
  },
{
    id: "castorway",
    title: "CastorWay — Habit Management Platform",
    role: "Backend & Systems Architect",
    category: "Enterprise Backend Architecture",
    flowBadge: "Relational Habit Engine",
    flowSummary: "Multi-Role REST API ➔ Layered Security & Services ➔ Streak Computation ➔ MySQL 3NF",
    description: "Layered enterprise backend system managing supervised habit tracking, parent-child agreements, streak metrics, and gamification rewards.",
    tech: ["Java", "Spring Boot", "SQL (MySQL)", "RESTful APIs", "OOP & Clean Architecture", "Figma", "Git"],
    caseStudy: {
      overview: "CastorWay provides a structured backend foundation for habit formation in children through verified tutor-student agreements.",
      problem: "Traditional habit applications lack multi-role supervision models (tutors vs. students) and scalable relational schemas for continuous streak metric calculations.",
      pipelineNodes: [
        { step: "01", label: "Role-Based API Client", detail: "Stateless REST endpoints handling tutor & student transactions" },
        { step: "02", label: "Spring Security Layer", detail: "Token validation and endpoint authorization filters" },
        { step: "03", label: "Business Service Core", detail: "Streak metric calculation, milestone unlocks, and task states" },
        { step: "04", label: "JPA / Hibernate", detail: "Optimized relational persistence avoiding N+1 query overhead" },
        { step: "05", label: "MySQL 3NF Model", detail: "Strict referential integrity across agreements and habit journals" }
      ],
      architecture: [
        "Clean layered enterprise architecture (Controllers, Services, Repositories, DTOs).",
        "Normalized 3NF relational data model in MySQL linking guardian accounts, student profiles, and chronological habit entries.",
        "High-performance transactional streak engine computing achievement status on event commits.",
        "Stateless RESTful APIs strictly validating inputs and enforcing role access boundaries."
      ],
      keyFeatures: [
        "Parent-Child Agreement Workflows",
        "Real-Time Habit Streak Analytics",
        "Role-Based Access Control (RBAC)",
        "Layered Clean Architecture Pattern"
      ],
      techDecisions: [
        { choice: "Spring Boot + JPA", reason: "Type safety, robust transaction management, and enterprise structure." },
        { choice: "Normalized MySQL Schema", reason: "Guarantees referential integrity across multi-tiered family agreements." }
      ],
      metrics: [
        "Sub-50ms query response on complex streak calculation endpoints.",
        "Modular architecture ready for microservice containerization."
      ],
      figmaAvailable: true,
      figmaScope: "Tutor dashboard, student task tracking screen, and agreement sign-off flows.",
      gallery: [
        { 
          url: "/projects/castorway-1.png", 
          title: "Tutor & Student Role Interface", 
          caption: "Dual dashboard interface and agreement management designed in Figma." 
        }
      ]
    }
  },
  {
    id: "froggiestrack",
    title: "FroggiesTrack — NFC Telemetry & Attendance",
    role: "Mobile Systems & Database Developer",
    category: "Edge Telemetry & Mobile Systems",
    flowBadge: "Edge NFC Sync Pipeline",
    flowSummary: "Hardware Tag Read ➔ Android Low-Level Intent ➔ SQLite Cache ➔ Sheet Compilation",
    description: "Mobile telemetry and real-time attendance logging system utilizing low-level NFC hardware transponders with offline-first local storage.",
    tech: ["Java", "Android", "SQL (MySQL)", "NFC Protocols", "SQLite", "Figma", "Apache POI"],
    caseStudy: {
      overview: "FroggiesTrack enables sub-second student event check-in and attendance recording via physical NFC badges with complete offline resilience.",
      problem: "Manual attendance taking during high-volume events caused entrance queue bottlenecks, incorrect logs, and data loss during campus network blackouts.",
      pipelineNodes: [
        { step: "01", label: "NFC Hardware Intercept", detail: "Instant transponder UID acquisition via Android sensor drivers" },
        { step: "02", label: "SQLite Local Journal", detail: "Zero-latency transactional write to local mobile database" },
        { step: "03", label: "Sync Dispatcher", detail: "Asynchronous batched cloud push once connection is detected" },
        { step: "04", label: "Apache POI Engine", detail: "On-device compilation of structured XLSX analytical reports" }
      ],
      architecture: [
        "Android NFC adapter utilizing custom IntentFilters for hardware UID capture.",
        "Offline-First SQLite transactional journal ensuring logging operates without network availability.",
        "Automated background sync routine flushing queued logs to remote relational tables.",
        "On-device spreadsheet generation using Apache POI for instant administrative export."
      ],
      keyFeatures: [
        "Sub-Second Hardware NFC Verification",
        "Offline-First SQLite Transaction Buffer",
        "Automated Tabular XLSX Data Export",
        "Mobile Interface Prototyped in Figma"
      ],
      techDecisions: [
        { choice: "Offline-First SQLite Cache", reason: "Guarantees continuous logging during venue network drops." },
        { choice: "Apache POI Engine", reason: "Generates native Excel audit workbooks directly on mobile devices." }
      ],
      metrics: [
        "Sub-300ms verification and registration latency per physical scan.",
        "Zero data loss across intermittent network conditions."
      ],
      figmaAvailable: true,
      figmaScope: "Scanning UI, participant attendance tables, and device sync status views.",
      gallery: [
        { url: "/projects/froggiestrack-1.png", title: "Mobile NFC Reader Interface", caption: "Hardware sensor integration and instant validation display prototyped in Figma." },
        { url: "/projects/froggiestrack-2.png", title: "Offline Storage & Report Export", caption: "On-device SQLite caching and automated XLSX spreadsheet generator." }
      ]
    }
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-batiz",
    title: "Programming Technician Degree & Professional License",
    issuer: "CECyT No. 9 'Juan de Dios Bátiz' — IPN",
    date: "Official Technical Degree",
    status: "Official Degree & License",
    summary: "Comprehensive technical program covering software engineering lifecycles, advanced relational database modeling, algorithms, and distributed computing foundations.",
    skillsLearned: [
      "Algorithms, Data Structures, and Basic to Intermediate Programming",
      "Object-Oriented Programming (Java / C++) & Software Development Labs",
      "Relational Database Design (3NF Normalization, SQL, Integrity Rules)",
      "Web Application Development & Mobile Engineering",
      "Introduction to Distributed Systems & Cybersecurity Concepts",
      "Artificial Intelligence Fundamentals & Data Analysis Introduction"
    ],
    proofDocuments: [
      { name: "Professional License & Technical Degree (PDF)", url: "/certs/cedula-tecnico-batiz.pdf" }
    ]
  },
  {
    id: "cert-aws-unified",
    title: "AWS Cloud Practitioner — Workshop & Practice Track",
    issuer: "Amazon Web Services (AWS) / IPN AWS Club",
    date: "2026",
    status: "Workshop & Practice Completed",
    summary: "Cloud architecture track completed through the IPN AWS Club Academic Workshop alongside official AWS Cloud Practitioner practice exam accreditation.",
    skillsLearned: [
      "Global Cloud Infrastructure, High Availability, and Well-Architected Framework",
      "Compute Services (EC2, Lambda) and Object Storage (S3)",
      "Cloud Security, IAM Roles, and Least-Privilege Policies",
      "Cloud Billing, Cost Optimization Models, and Networking (VPC)",
      "Official AWS Practice Examination Completion"
    ],
    proofDocuments: [
      { name: "IPN AWS Club Workshop Certificate (PDF)", url: "/certs/aws-club-ipn-workshop.pdf" },
      { name: "AWS Practice Exam Completion Record (PDF)", url: "/certs/aws-practice-exam.pdf" }
    ]
  },
  {
    id: "cert-hackathon",
    title: "Hackathon 'Your Future Made in Austria' — Mobility & AI",
    issuer: "Advantage Austria & Mobility Innovation Hubs",
    date: "2026",
    status: "Official Certificate",
    summary: "International multidisciplinary hackathon focused on engineering sustainable AI and automated mobility prototypes under strict timeline limits.",
    skillsLearned: [
      "Rapid Mobility Data Extraction & Normalization",
      "Fast Prototyping for AI-Assisted Pipelines",
      "High-Pressure Problem Solving and International Collaboration"
    ],
    proofDocuments: [
      { name: "Official Participation Certificate (PDF)", url: "/certs/hackathon-austria.pdf" }
    ]
  },
  {
    id: "cert-cenlex",
    title: "English B2 Proficiency & German A1 Studies",
    issuer: "CENLEX Zacatenco — IPN",
    date: "Ongoing Studies",
    status: "Active Language Program",
    summary: "Continuous foreign language training focused on technical engineering communication and technical documentation reading.",
    skillsLearned: [
      "Technical English B2 Level (Engineering specifications & documentation)",
      "International Technical Collaboration & Conversational Skills",
      "German A1 Level (Elementary grammar and technical concepts)"
    ],
    proofDocuments: []
  }
];