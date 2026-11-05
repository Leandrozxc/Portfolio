import { Project, ExperienceItem, SkillCategory, EducationInfo, AchievementItem } from '../types';

export const PERSONAL_INFO = {
  name: "Leandro Miguel Pabatao",
  title: "Computer Science Student & Software Developer",
  institution: "Cebu Institute of Technology – University",
  yearLevel: "Third-Year BS Computer Science",
  location: "Cebu City, Philippines",
  bio: "Third-year Computer Science student at Cebu Institute of Technology – University with a strong foundation in application development, frontend and backend fundamentals, database management, and technical problem-solving. Active in student leadership and civic technology initiatives.",
  status: "Seeking Software Engineering Internships",
  email: "leandromiguel.pabatao@gmail.com",
  github: "https://github.com/Leandrozxc",
  linkedin: "https://linkedin.com/in/leandro-miguel-pabatao",
  journey: [
    { label: "Cebu City", note: "CIT-U" },
    { label: "3rd Year BSCS", note: "Academic foundation" },
    { label: "App & Civic Tech", note: "Current focus" },
    { label: "Software Internship", note: "Next milestone", isNext: true }
  ]
};

export const EDUCATION: EducationInfo = {
  institution: "Cebu Institute of Technology – University",
  location: "Cebu City, Philippines",
  degree: "Bachelor of Science in Computer Science",
  yearLevel: "Third-Year Student",
  expectedGraduation: "Expected Graduation: 2027"
};

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "ibpap-hackit",
    title: "National Finalist",
    event: "IBPAP Can You HackIT? 2026",
    year: "2026",
    category: "Hackathon",
    description: "Selected as a national finalist among collegiate developer teams across the Philippines for software innovation."
  },
  {
    id: "solutionsfest-generx",
    title: "Finalist — Civic Tech Track",
    event: "SolutionsFest 2026",
    year: "2026",
    category: "Civic Technology",
    description: "Recognized as a track finalist under the Governance and Civic Technology Track for GeneRX, addressing Philippine generic medicine accessibility."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "generx",
    title: "GeneRX",
    category: "Civic Tech",
    tagline: "SolutionsFest 2026 Finalist • Governance & Civic Tech Track",
    summary: "A civic technology application engineered to help Filipino patients identify FDA-registered generic medicine alternatives, calculate price savings, and find nearby pharmacies.",
    year: "2026",
    role: "Core Developer (OCR Pipeline, Fuzzy Matching & Frontend)",
    stack: ["JavaScript", "PaddleOCR", "OpenCV", "Fuse.js", "SQLite"],
    problem: "The Philippine Generics Act (RA 6675) has been in law since 1988, yet only 41% of patients are offered generic equivalents at pharmacy counters. When pharmacies fail to offer them, 75% of patients do not ask, paying up to 80% more for identical branded formulations.",
    solution: [
      "Offline Prescription Scanner: Point camera at medicine boxes, blister packs, or prescription slips to extract medication names via PaddleOCR.",
      "Noise & Skew Correction: Image preprocessing pipeline built with OpenCV to handle low-light, high-contrast, or tilted prescription photos.",
      "Fuzzy Search Matching: Uses Fuse.js to tolerate and correct OCR character misreadings, mapping noisy scanned strings directly to FDA-approved drug records.",
      "Generic Equivalent & MDRP Lookup: Instantly displays active ingredients, approved dosages, manufacturer records, and the Department of Health Maximum Drug Retail Price (MDRP) ceiling.",
      "Pharmacy Locator: Deep-links to verified nearby pharmacies with operating hours and travel directions."
    ],
    highlights: [
      "Finalist at SolutionsFest 2026 under the Governance & Civic Technology Track",
      "Offline-first OCR and search designed specifically for devices with unstable internet access",
      "Direct integration of DOH regulatory pricing data to empower everyday healthcare consumers"
    ],
    githubUrl: "https://github.com/Leandrozxc/GeneRX",
    isFeatured: true
  },
  {
    id: "empressledger",
    title: "EmpressLedger",
    category: "Desktop / Systems",
    tagline: "Offline Financial Tracking Desktop App",
    summary: "An offline-first financial management desktop application engineered for student-run, multi-day photobooth operations to track transactions, expenses, and partner revenue splits.",
    year: "2025",
    role: "Desktop Software Engineer & Fullstack Contributor",
    stack: ["React", "TypeScript", "Tauri", "Rust", "SQLite", "Tailwind CSS"],
    problem: "Operating university photobooths across multi-day campus festivals involves intense cash flow, high transactional velocity, and complex organization revenue cuts. Spotty campus Wi-Fi rendered cloud-based spreadsheets unusable, leading to reconciliation errors.",
    solution: [
      "Local-First Desktop Runtime: Architected with Tauri and Rust, running as a lightweight native executable with zero internet connectivity requirements.",
      "Instant Sales & Expense Entry: Fast keyboard-driven checkout screen with item modifiers, extra copies, and partner organization frame selection.",
      "Automated Revenue Splitting: Real-time calculation engine computing gross income, Rotaract 15% revenue cuts, and flat per-use partner organization frame compensation.",
      "Org Tracker & Manual Safety Net: Dedicated organization payout reconciliation module with manual usage overrides for physical cash-drawer balancing.",
      "Local SQLite Persistence: Embedded relational storage with UTC timestamp serialization and instant local-time display conversion."
    ],
    highlights: [
      "Engineered to solve real operational and financial pain points during active university photobooth events",
      "High performance with negligible memory footprint through Tauri and Rust backend IPC",
      "Complete data isolation and auditability without cloud dependencies"
    ],
    githubUrl: "https://github.com/Leandrozxc/Finance-Tracker---Photobooth",
    isFeatured: true
  },
  {
    id: "offgrid",
    title: "OFFGRID",
    category: "Web Apps",
    tagline: "Streetwear E-Commerce Frontend",
    summary: "A modern streetwear apparel e-commerce web application frontend built with Blazor Web App (.NET 8) and Tailwind CSS, featuring reactive state management and interactive catalog browsing.",
    year: "2025",
    role: "Frontend Engineer & UI Designer",
    stack: ["C#", ".NET 8", "Blazor", "Tailwind CSS", "JavaScript"],
    problem: "Standard e-commerce templates often suffer from sluggish catalog filters, disconnected URL states, and excessive JavaScript bundles that degrade user shopping flow and checkout clarity.",
    solution: [
      "Blazor InteractiveServer Architecture: Real-time UI rendering via SignalR circuits with zero frontend framework churn.",
      "URL-Based Query Synchronization: Category filters, keyword searches, and sorting mechanisms persist seamlessly to browser history URLs for shareability.",
      "Interactive Product Exploration: Live product colorway previews, size selection swatches, and case-insensitive fallback image handling.",
      "Reactive Scoped Shopping Bag: Variant consolidation, stock-limit clamping, live bump badge animations, and automatic ₱2,500 free-shipping qualification.",
      "Strict Checkout Validation: Built with DataAnnotations, enforcing Philippine 4-digit postal code patterns and generating an itemized order confirmation manifest."
    ],
    highlights: [
      "Structured component hierarchy with dedicated layout, shared components, and scoped state services",
      "Accessible motion support respecting prefers-reduced-motion media settings",
      "Note: Focuses on frontend engineering and state architecture with simulated checkout workflows"
    ],
    githubUrl: "https://github.com/Leandrozxc/offgrid",
    statusNote: "Frontend-driven application with simulated checkout workflows (no live payment gateway).",
    isFeatured: true
  },
  {
    id: "faculty-schedule-app",
    title: "Faculty Schedule App",
    category: "Academic Systems",
    tagline: "Academic Timetable & Room Registry",
    summary: "A university timetable and classroom occupancy platform with client-side Excel parsing, live schedule tracking, and automatic double-booking clash detection.",
    year: "2025",
    role: "Frontend Developer & System Designer",
    stack: ["JavaScript (ES6+)", "Tailwind CSS", "SheetJS (XLSX)", "HTML5", "Vercel"],
    problem: "University students and departmental faculty face friction navigating fragmented paper or PDF schedules to verify instructor availability, locate consultation rooms, or identify classroom conflicts across academic blocks.",
    solution: [
      "Instant Autocomplete & Search: Keyboard-accessible search by faculty surname, course code, or room with full-time/part-time employment badges.",
      "Live Schedule Highlighting: Real-time clock synchronized to Asia/Manila (PHT) automatically detecting in-session classes, active office duties, and period countdowns.",
      "9-Period Standard Grid Matrix: Visual weekly matrix (Monday–Saturday, P1–P9) with day-switcher controls on mobile screens.",
      "Room Occupancy & Clash Detection: Automated room registry that scans schedules and highlights conflicting concurrent room assignments in red.",
      "Client-Side Excel Parser: Drag-and-drop FLR-002 workbook ingestion powered by SheetJS with zero server requirements and localStorage caching."
    ],
    highlights: [
      "Real-time clock and live schedule awareness that updates automatically without page reloads",
      "Zero-backend client-side architecture with instant browser memory processing",
      "Deployed live with full mobile and desktop keyboard navigation"
    ],
    githubUrl: "https://github.com/Leandrozxc/faculty-schedule-app",
    liveUrl: "https://leandrozxc.github.io/faculty-schedule-app/",
    isFeatured: true
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "empress-photobooth",
    role: "Photobooth Operator / Technical Contributor",
    organization: "EMPress Photobooth",
    period: "Event-based & Active Operations",
    type: "Technical Experience",
    description: "Delivering on-site photobooth operations for university events while contributing to internal software workflows, photo capture pipelines, and real-time technical troubleshooting.",
    keyContributions: [
      "Operate and support photobooth services for university gatherings, managing hardware assembly, camera positioning, live photo capture, high-speed printing, and customer assistance.",
      "Contribute to the development and maintenance of the internal photobooth software, assisting with the image capture, preview, and print spooling workflow.",
      "Perform live on-site technical troubleshooting during peak event hours, maintaining continuous service uptime under high transaction volumes."
    ]
  },
  {
    id: "dempc",
    role: "Student Assistant / Technical Support",
    organization: "Department of Engineering, Mathematics, Physics, and Chemistry (DEMPC), CIT-U",
    period: "Academic Term Support",
    type: "Campus Support",
    description: "Providing administrative and technical support for departmental operations, faculty requirements, and instructional office workflows.",
    keyContributions: [
      "Deliver technical and administrative support for department operations, document processing, and faculty coordination.",
      "Assist department faculty and personnel with digital resource management and day-to-day administrative tasks.",
      "Effectively balance professional technical responsibilities with rigorous third-year computer science coursework."
    ]
  },
  {
    id: "css-networking",
    role: "Assistant Head, Committee on Networking and Linkages",
    organization: "Computer Students' Society – College of Computer Studies, CIT-U",
    period: "2025 — Present",
    type: "Leadership",
    description: "Spearheading industry linkages, external partnerships, and sponsorship coordination for student technology initiatives and campus events.",
    keyContributions: [
      "Assist in establishing and maintaining collaborative partnerships with external tech organizations, industry professionals, and prospective event sponsors.",
      "Coordinate networking initiatives and professional linkage activities connecting computer studies students with broader tech ecosystems.",
      "Contribute to conceptualizing and organizing student-focused technical workshops, career seminars, and developer hackathons."
    ]
  },
  {
    id: "css-logistics",
    role: "Logistics Officer",
    organization: "Computer Students' Society – College of Computer Studies, CIT-U",
    period: "Previous Term",
    type: "Leadership",
    description: "Managed logistical preparations, resource inventory, and execution for departmental student body assemblies and activities.",
    keyContributions: [
      "Assisted in coordinating, setting up, and managing logistical requirements for student organization assemblies, workshops, and conventions.",
      "Supported resource tracking, equipment requisition, and stage operations to guarantee seamless event execution."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["C#", "Java", "Kotlin", "Python", "JavaScript", "TypeScript", "C++"]
  },
  {
    title: "Frameworks & Libraries",
    skills: [".NET", "Blazor", "React", "JavaFX", "Flask", "Tailwind CSS"]
  },
  {
    title: "Databases",
    skills: ["SQLite", "MySQL"]
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Visual Studio Code", "Cloudflare"]
  },
  {
    title: "Other Technologies & Domains",
    skills: ["OCR", "OpenCV", "Fuzzy Matching", "Tauri", "Rust"]
  }
];
