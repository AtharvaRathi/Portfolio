export const portfolioData = {
  name: "Atharva Rathi",
  nickname: "Atharva",
  tagline: "Building scalable web apps & AI systems",
  avatar: "/avatar.png",
  about: "I'm a 3rd-year B.Tech IT student specializing in full-stack web development with the MERN stack. I'm passionate about building scalable, performant web applications and integrating AI tools like RAG systems. I'm currently exploring startup ideas and looking for an exciting internship to apply my skills in a fast-paced environment.",
  location: "India",
  role: "Full-Stack Developer & AI Enthusiast",
  education: "K.J Somaiya College of Engineering, B.Tech in IT - Honours in AI",
  experience: [
    {
      title: "Software Engineering Intern",
      company: "Trueview",
      location: "Aurangabad, Maharashtra",
      period: "Dec 2025",
      type: "current",
      bullets: [
        "Designed and implemented a Retrieval-Augmented Generation (RAG) architecture, utilizing semantic search and vector embeddings to optimize the retrieval of complex product specifications and reduce internal query resolution time.",
        "Deployed a scalable AI backend integrated with a customized conversational interface, establishing secure API endpoints and robust data pipelines to ensure seamless user interaction and high-performance querying.",
        "Coordinated with internal manufacturing and operational teams to align Large Language Model (LLM) capabilities with strategic business workflows, delivering an automated knowledge-sharing platform that significantly boosted team productivity."
      ]
    },
    {
      title: "Software Engineering Intern",
      company: "Trueview",
      location: "Aurangabad, Maharashtra",
      period: "May 2025 – Jul 2025",
      type: "previous",
      bullets: [
        "Developed a fully functional e-commerce website for the subsidiary company, enhancing product visibility and driving a 20% increase in online sales within the first quarter.",
        "Engineered secure login systems, real-time notifications, and a scalable backend architecture using modern web technologies to ensure seamless user experience and performance.",
        "Collaborated cross-functionally with design, business, and product teams to align technical implementation with strategic business goals, resulting in an intuitive and conversion-optimized platform."
      ]
    }
  ],
  certifications: [
    {
      name: "Harvard CS50: Introduction to Computer Science",
      issuer: "Harvard University",
      platform: "edX",
      status: "completed"
    },
    {
      name: "Y Combinator Startup School — Startup Track",
      issuer: "Y Combinator",
      platform: "Startup School",
      status: "completed"
    },
    {
      name: "Meta Full Stack Developer Professional Certificate",
      issuer: "Meta",
      platform: "Coursera",
      status: "ongoing"
    },
    {
      name: "Financial Markets",
      issuer: "Yale University",
      platform: "Coursera",
      status: "completed"
    },
    {
      name: "Program Management Fundamentals",
      issuer: "Microsoft",
      platform: "Coursera",
      status: "completed"
    },
    {
      name: "Strategy and Game Theory for Management",
      issuer: "IIM Ahmedabad",
      platform: "Coursera",
      status: "completed"
    }
  ],
  projects: [
    {
      name: "Trueview Nexus",
      description: "An AI Chat Application featuring secure authentication and robust chat interfaces integrated with Dify API.",
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "SQLite"],
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      category: "AI Web App",
      year: "2026",
      links: {
        github: "https://github.com/yourusername/trueview-nexus",
        live: "https://trueview-nexus.com"
      }
    },
    {
      name: "SmartSpace Coworking",
      description: "A comprehensive multi-office coworking management system with real-time availability and Role-Based Access Control.",
      techStack: ["Next.js", "React", "Node.js", "PostgreSQL"],
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      category: "SaaS Platform",
      year: "2025",
      links: {
        github: "https://github.com/yourusername/smartspace",
      }
    },
    {
      name: "Automated AI Security & Vulnerability Scanner",
      description: "An automated Static Application Security Testing (SAST) pipeline using AST parsing and LLMs to identify vulnerabilities and generate context-aware remediation snippets.",
      techStack: ["Python", "LLM APIs", "Abstract Syntax Trees (AST)", "CLI"],
      role: "Security Engineer",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      category: "DevSecOps",
      year: "2025",
      links: {
        github: "https://github.com/yourusername/ai-scanner"
      }
    },
    {
      name: "RAG-Powered Enterprise Knowledge System",
      description: "A custom RAG platform with semantic search and vector embeddings to streamline access to complex manufacturing specifications.",
      techStack: ["Python", "React", "Vector Database", "LLM APIs"],
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      category: "Enterprise AI",
      year: "2025",
      links: {}
    },
    {
      name: "Fault-Tolerant Webhook Dispatch Engine",
      description: "An asynchronous event-delivery system engineered with a reliable message-queuing architecture, exponential backoff, and automated retries.",
      techStack: ["Go", "Redis", "Docker", "Concurrency"],
      role: "Backend Engineer",
      image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop",
      category: "Infrastructure",
      year: "2024",
      links: {}
    },
    {
      name: "Trueview CRM",
      description: "A custom sales and support CRM developed for a manufacturing company by deploying and extensively customizing the open-source EspoCRM platform.",
      techStack: ["EspoCRM", "PHP", "MySQL"],
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      category: "Enterprise Tool",
      year: "2024",
      links: {}
    },
    {
      name: "AutoAnalyst",
      description: "A multi-agent financial intelligence system utilizing the CrewAI framework to synthesize financial data and autonomously generate structured, actionable analytical dashboards. Deployed via Streamlit.",
      techStack: ["Python", "CrewAI", "Streamlit", "LLMs"],
      role: "AI Engineer",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      category: "AI Agents",
      year: "2024",
      links: {}
    },
    {
      name: "Smart Study Planner",
      description: "A smart study planner built from the ground up featuring a complete frontend interface and a robust backend architecture, packaged with a dedicated local hosting guide.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js"],
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
      category: "Web App",
      year: "2023",
      links: {}
    }
  ],
  skills: {
    frontend: ["React", "Next.js", "Tailwind CSS", "JavaScript/TypeScript", "Framer Motion", "Material-UI (MUI)"],
    backend: ["Node.js", "Express", "Python", "Go", "Java", "C++", "RESTful APIs", "Microservices"],
    databases: ["MongoDB", "PostgreSQL", "SQLite", "Redis", "Vector DBs"],
    ai: ["OpenAI API", "Google Gemini", "RAG Architecture", "LangChain", "AI Agents", "Computer Vision", "LLMs"],
    tools: ["Git/GitHub", "Docker", "Vercel", "Linux", "AWS", "InfoSec"]
  },
  fun: [
    "I'm obsessed with optimizing web performance.",
    "Always exploring the latest AI models and how to build context-aware agents.",
    "I enjoy crafting minimal, whitespace-heavy user interfaces.",
    "Currently building tools to automate security scanning in codebases."
  ],
  contact: {
    phone: "9370877347",
    website: "atharvarathi.xyz",
    email: "atharvarathi09@gmail.com",
    github: "https://github.com/AtharvaRathi",
    linkedin: "https://linkedin.com/in/atharvarathi",
    twitter: "https://twitter.com/yourusername",
    callToAction: "I'm currently looking for internship opportunities. Let's build something great together."
  },
  resume: {
    summary: "Passionate Full-Stack Developer with expertise in MERN and AI integration. Proven track record in building complex management systems and security tools.",
    downloadLink: "/resume.pdf"
  },
  systemPromptStyle: "Be concise, warm, sharp, and recruiter-friendly. Speak in the first person ('I', 'my') as if you are Atharva. Keep answers brief and do not use generic AI disclaimers."
};
