export const NAV_LINKS = [
  { href: "#about", num: "01.", label: "about" },
  { href: "#techstack", num: "02.", label: "stack" },
  { href: "#projects", num: "03.", label: "projects" },
  { href: "#experience", num: "04.", label: "exp" },
  { href: "#contact", num: "05.", label: "contact" },
];

export const PRINCIPLES = [
  "Clean Architecture & Modular Code",
  "Explicit Error Handling",
  "Fast Page Loads & Minimal Bloat",
  "End-to-End Data Encryption & Role-Based Access Control",
];

export const ABOUT_STACK = ["Go (Gin)", "React", "PostgreSQL", "Docker"];

export const TECH_STACK = [
  {
    title: "Frontend",
    sub: "UI / Client",
    items: [
      { name: "React.js", badge: "Core" },
      { name: "Redux Toolkit" },
      { name: "Tailwind CSS" },
      { name: "TypeScript / JS" },
      { name: "HTML5 & Web APIs" },
    ],
  },
  {
    title: "Backend",
    sub: "Services / API",
    items: [
      { name: "Go (Golang)", badge: "Core" },
      { name: "Gin Framework" },
      { name: "RESTful Services" },
      { name: "PostgreSQL & Redis" },
      { name: "Swagger API Documentation" },
    ],
  },
  {
    title: "DevOps & Tools",
    sub: "Infra / Workflow",
    items: [
      { name: "Docker Container" },
      { name: "Nginx Web Server" },
      { name: "Linux Environment" },
      { name: "Git Version Control" },
      { name: "Postman API Testing" },
    ],
  },
];

export const PROJECTS = [
  {
    key: "eventhub",
    index: "// 01",
    category: "fullstack",
    label: "Solo Project | Fullstack",
    name: "Eventhub",
    summary:
      "Fullstack ticketing and event management system. Features authorization flow, real-time ticket availability, and interactive dashboards.",
    tags: ["React", "Go", "PostgreSQL", "Redis"],
    modal: {
      title: "Eventhub — Ticketing & Event Management Platform",
      category: "Fullstack System",
      imgUrl: "eventhub-thumbnail.png",
      description:
        "End-to-end event discovery and ticket procurement architecture handling transactional order states and concurrent database updates.",
      highlights: [
        "Clean REST API layer built in Go using the Gin web framework",
        "PostgreSQL backend with indexed relational schema structures",
        "Responsive React client with localized Redux state management",
        "Isolated container orchestration with Docker and Nginx",
      ],
      demo: "https://github.com/alfannurfaiz9/shortlink_frontend",
      repo: "https://github.com/alfannurfaiz9/eventhub-backend",
    },
  },
  {
    key: "urlshortener",
    index: "// 02",
    category: "fullstack",
    label: "Solo Project | Fullstack",
    name: "URL Shortener",
    summary:
      "High-throughput URL redirection engine with Redis caching, IP-based rate limiting middleware, and link analytics.",
    tags: ["React", "Go", "PostgreSQL", "Redis"],
    modal: {
      title: "URL Shortener & Click Analytics Engine",
      category: "Backend Microservice",
      imgUrl: "shortlink-thumbnail.png",
      description:
        "High-throughput redirection microservice with Redis in-memory storage, IP rate-limiting, and metric logging.",
      highlights: [
        "Sub-millisecond link redirection leveraging Redis key-value pairs",
        "In-memory token bucket rate limiter implemented in Golang",
        "Real-time click counter logging and geographical data parsing",
        "Documented RESTful API endpoints",
      ],
      demo: "https://github.com/alfannurfaiz9/shortlink_frontend",
      repo: "https://github.com/alfannurfaiz9/shortlink_backend",
    },
  },
  {
    key: "ewallet",
    index: "// 03",
    category: "fullstack",
    label: "Team Project | Fullstack",
    name: "E-Wallet",
    summary:
      "Secure digital wallet web application featuring Xendit payment gateway integration for top-ups, SMTP password recovery, and instant fund transfers.",
    tags: ["React", "Go", "PostgreSQL", "Xendit API"],
    modal: {
      title: "E-Wallet — Digital Payment & Transaction Platform",
      category: "Fullstack Application",
      imgUrl: "ewallet-thumbnail.png",
      description:
        "Comprehensive financial web platform enabling secure user authentication, digital balance top-ups via Xendit Payment Gateway.",
      highlights: [
        "Integrated Xendit Payment Gateway API for seamless balance top-ups and payment processing",
        "Implemented automated SMTP email service for secure password reset and verification workflows",
        "Designed JWT authentication and PostgreSQL backend for reliable ledger management and transaction history",
      ],
      demo: "https://github.com/alfannurfaiz9/e-wallet_frontend",
      repo: "https://github.com/alfannurfaiz9/e-wallet_backend",
    },
  },
];

export const FILTERS = ["all", "fullstack", "frontend"];

export const EXPERIENCE = [
  {
    role: "Fullstack Developer Trainee - Koda Tech Academy",
    period: "July 2026 — October 2026",
    dot: "border-accent",
    desc: "Completed intensive fullstack web development training, completing hands-on projects and industry-simulated tasks. Developed responsive front-end interfaces using React.js, Redux Toolkit, and Tailwind CSS. Built robust back-end microservices and RESTful APIs with Golang (Gin framework) integrated with PostgreSQL. Applied Clean Architecture, secure authentication, and Git workflows while utilizing Docker, WSL, and SSH for containerized local deployment environment.",
  },
];

export const EDUCATION = [
  {
    role: "Fullstack Developer Bootcamp - Koda Tech Academy",
    period: "July 2026 — October 2026",
    dot: "border-accent",
    desc: "Learn front-end development using React Js, Redux Toolkit, and Tailwind CSS for responsive UI design. Learn back-end development with Golang (Gin-Gonic framework) and PostgreSQL database integration. Master RESTful API design, data flow implementation, and clean code principles. Apply Git version control for collaborative development and code management. Understand basic DevOps practices, working with WSL, Docker, and SSH for local deployment.",
  },
  {
    role: "Multimedia — SMK Muhammadiyah 1 Purwokerto",
    period: "2016 — 2019",
    dot: "border-gray-600",
    desc: "Learn fundamental graphic design and multimedia production using Adobe Illustrator for vector creation and Adobe Photoshop for digital imaging, photo retouching, and asset preparation. Understand visual composition, typography, color theory, and digital asset management. Master the creation of creative visual media for digital and print publications, supporting interactive user interfaces and creative design projects.",
  },
];

export const EMAIL = "alfannurfaizwork@gmail.com";
