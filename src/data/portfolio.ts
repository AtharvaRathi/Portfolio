// Content reviewed against the supplied résumé and public GitHub repositories on 2026-10-31.
// See docs/content-audit.md for sources and unresolved evidence gaps.
export const portfolioData = {
  "name": "Atharva Rathi",
  "nickname": "Atharva",
  "tagline": "Building AI systems, reliable backends & data pipelines",
  "avatar": "/avatar.png",
  "about": "I'm an Information Technology engineering student at K.J. Somaiya College of Engineering, pursuing a B.Tech with Honours in Artificial Intelligence. Based in Mumbai, I build real-time vision-language engines, edge-to-cloud video analytics, reliable backend systems, and full-stack applications. My experience spans automated document ingestion at EmerTech Innovations, enterprise RAG at Trueview, and e-commerce development at Manomay. I graduate in April 2027 and am seeking onsite internships and full-time opportunities, with a focus on AI/ML, computer vision, and backend engineering. I am open to relocation.",
  "location": "Mumbai, India",
  "role": "Software Developer | AI, Backend & Data Pipelines",
  "education": "K.J. Somaiya College of Engineering — B.Tech in IT, Honours in AI (Aug 2023 – Apr 2027, expected)",
  "experience": [
    {
      "title": "Software Engineering Intern",
      "company": "EmerTech Innovations",
      "location": "",
      "period": "Jun 2026 – Jul 2026",
      "type": "previous",
      "bullets": [
        "Engineered an automated Digital Product Passport (DPP) ingestion pipeline to accelerate supplier onboarding and eliminate manual data-entry bottlenecks.",
        "Built a workflow to parse unstructured supplier PDFs, extract and validate critical data, flag missing essential fields, and produce database-ready records."
      ]
    },
    {
      "title": "Software Engineering Intern",
      "company": "Trueview",
      "location": "",
      "period": "Dec 2025 – Jan 2026",
      "type": "previous",
      "bullets": [
        "Architected a RAG knowledge base using semantic search and vector embeddings to reduce query resolution time for complex CCTV specifications.",
        "Deployed an AI backend with secure API endpoints and conversational interfaces, aligning LLM capabilities with manufacturing workflows to automate enterprise knowledge-sharing."
      ]
    },
    {
      "title": "Software Engineering Intern",
      "company": "Manomay",
      "location": "",
      "period": "May 2025 – Jul 2025",
      "type": "previous",
      "bullets": [
        "Built a full-stack e-commerce platform from scratch, driving a 20% increase in Q1 online sales through frontend conversion optimization and backend architecture.",
        "Implemented secure authentication, real-time notifications, and optimized database queries for a responsive user experience."
      ]
    }
  ],
  "certifications": [
    {
      "name": "Harvard CS50: Introduction to Computer Science",
      "issuer": "Harvard University",
      "platform": "edX",
      "status": "completed"
    },
    {
      "name": "Y Combinator Startup School — Startup Track",
      "issuer": "Y Combinator",
      "platform": "Startup School",
      "status": "completed"
    },
    {
      "name": "Meta Full Stack Developer Professional Certificate",
      "issuer": "Meta",
      "platform": "Coursera",
      "status": "ongoing"
    },
    {
      "name": "Financial Markets",
      "issuer": "Yale University",
      "platform": "Coursera",
      "status": "completed"
    },
    {
      "name": "Program Management Fundamentals",
      "issuer": "Microsoft",
      "platform": "Coursera",
      "status": "completed"
    },
    {
      "name": "Strategy and Game Theory for Management",
      "issuer": "IIM Ahmedabad",
      "platform": "Coursera",
      "status": "completed"
    }
  ],
  "projects": [
    {
      "name": "SemanticEdge — Edge-to-Cloud Video Analytics",
      "description": "An edge-to-cloud video analytics pipeline that filters routine frames using a FAISS-backed context firewall. YOLOv8 and ByteTrack provide detection and tracking, while SigLIP embeddings and Qdrant enable natural-language video search through a React dashboard.",
      "techStack": [
        "Python",
        "C++ / FAISS",
        "PyTorch",
        "YOLOv8",
        "ByteTrack",
        "SigLIP",
        "Qdrant",
        "FastAPI",
        "React",
        "Docker"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      "category": "Computer Vision",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/SemanticEdge-Ege-to-Cloud-Video-Analytics-Pipeline"
      }
    },
    {
      "name": "VStream — Vision-Language Inference Engine",
      "description": "A real-time video pipeline combining C++/OpenCV motion filtering with local vision-language models through Ollama. Asynchronous inference produces scene descriptions while video and telemetry stream over WebSockets to a Next.js dashboard.",
      "techStack": [
        "Python",
        "C++",
        "OpenCV",
        "FastAPI",
        "Ollama",
        "WebSockets",
        "Next.js",
        "Docker"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      "category": "Vision-Language AI",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/VStream-Vision-Language-Inference-Engine"
      }
    },
    {
      "name": "Fault-Tolerant Webhook Dispatch Engine",
      "description": "An asynchronous webhook delivery system built with Go worker pools and channels. Redis-backed queues, exponential backoff, and a dead-letter queue handle failing endpoints and isolate exhausted delivery attempts.",
      "techStack": [
        "Go",
        "Redis",
        "Docker",
        "Concurrency",
        "REST APIs"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      "category": "Backend Infrastructure",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/Fault-Tolerant-Webhook-Dispatch-Engine"
      }
    },
    {
      "name": "Adaptive Corrective & Self-Reflective RAG",
      "description": "An agentic LangGraph pipeline that routes questions between hybrid FAISS/BM25 retrieval, web search, and direct answers. Document grading, query rewriting, and self-reflection check evidence and answer grounding, with citations and execution traces in Streamlit.",
      "techStack": [
        "Python",
        "LangGraph",
        "LangChain",
        "FAISS",
        "BM25",
        "Groq",
        "Streamlit"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      "category": "Agentic AI",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/Adaptive-Corrective-Self-Reflective-RAG",
        "live": "https://adaptive-corrective-self-reflective-rag.streamlit.app/"
      }
    },
    {
      "name": "Shift-Aware Restricted-Zone Monitoring",
      "description": "A B.Tech research project comparing temporal LSTM/GRU models with static classifiers for restricted-zone monitoring. YOLOv8 and ByteTrack extract trajectories; spatial and behavioral features support classification of movement patterns using track-aware evaluation and heuristic labels.",
      "techStack": [
        "Python",
        "PyTorch",
        "YOLOv8",
        "ByteTrack",
        "OpenCV",
        "XGBoost",
        "LSTM / GRU"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=800&auto=format&fit=crop",
      "category": "Computer Vision Research",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/Shift-Aware-Spatial-Temporal-Modeling-for-Intelligent-Restricted-Zone-Monitoring"
      }
    },
    {
      "name": "ContextShield",
      "description": "A local context-optimization proxy for AI development tools. A FastAPI layer processes OpenAI- and Gemini-style requests, trims Python context with AST parsing, and forwards streaming responses, while a React dashboard displays optimization telemetry.",
      "techStack": [
        "Python",
        "FastAPI",
        "AST",
        "SSE",
        "React",
        "Vite",
        "Recharts",
        "Ollama"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "category": "Developer Tooling",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/ContextShield"
      }
    },
    {
      "name": "HeatWatch",
      "description": "A full-stack heatwave dashboard with weather, alert, advisory, and analytics services. Includes both microservices and monolithic deployments, a MongoDB data layer, an Nginx gateway, Docker Compose, and GitHub Actions, with mock-data fallback for frontend demonstrations.",
      "techStack": [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "Nginx",
        "GitHub Actions"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      "category": "Full-Stack / DevOps",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/HeatWatch"
      }
    },
    {
      "name": "Enterprise Text-to-SQL Platform",
      "description": "A prototype that translates natural-language questions into SQL and visualizes query results. Combines a FastAPI/LangChain backend, schema retrieval, SQL parsing and guardrail modules with a React interface, CodeMirror editor, and Plotly charts.",
      "techStack": [
        "Python",
        "FastAPI",
        "LangChain",
        "SQLAlchemy",
        "SQLGlot",
        "ChromaDB",
        "React",
        "TypeScript",
        "Plotly"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
      "category": "AI Data Tools",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/Text-to-SQL-Draft"
      }
    },
    {
      "name": "SmartSpace Coworking",
      "description": "A coworking management application built with Next.js, React, and TypeScript, using Prisma for database access and NextAuth for authentication. Supports the office-management workflows developed in the SmartSpace project.",
      "techStack": [
        "Next.js",
        "React",
        "TypeScript",
        "Prisma",
        "NextAuth",
        "Tailwind CSS"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
      "category": "Full-Stack Application",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/smartspace-coworking",
        "live": "https://smartspace-coworking.vercel.app"
      }
    },
    {
      "name": "Alpha — Smart Study Planner",
      "description": "A MERN study-planning application with task management, recurring study sessions, a Pomodoro timer, notes, and productivity analytics. Includes JWT authentication, calendar scheduling, and a TypeScript frontend and backend.",
      "techStack": [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "TypeScript",
        "FullCalendar",
        "Zustand"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
      "category": "Productivity",
      "year": "2025",
      "links": {
        "github": "https://github.com/AtharvaRathi/Alpha---Smart-Study-Planner"
      }
    },
    {
      "name": "SQL 50 — PostgreSQL Study Guide",
      "description": "An interactive PostgreSQL study guide for the LeetCode SQL 50 plan, with concept cards, SQL execution-order explanations, a problem tracker, searchable syntax references, and visual learning tools.",
      "techStack": [
        "JavaScript",
        "HTML",
        "CSS",
        "PostgreSQL"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      "category": "Learning Tools",
      "year": "2026",
      "links": {
        "github": "https://github.com/AtharvaRathi/SQL-50"
      }
    },
    {
      "name": "YieldWise",
      "description": "An agricultural planning prototype with crop-yield exploration, multilingual interfaces, location-based soil guidance, and cost/profit calculators. Includes demonstration data and simulated AI recommendation features.",
      "techStack": [
        "JavaScript",
        "Python",
        "HTML",
        "CSS",
        "Mapbox"
      ],
      "role": "Software Developer",
      "image": "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      "category": "Agricultural Technology",
      "year": "2025",
      "links": {
        "github": "https://github.com/AtharvaRathi/YieldWise"
      }
    }
  ],
  "skills": {
    "frontend": [
      "JavaScript / TypeScript",
      "React.js",
      "Next.js",
      "Material-UI",
      "Tailwind CSS",
      "Streamlit",
      "D3.js"
    ],
    "backend": [
      "Python",
      "C++",
      "Go",
      "Java",
      "Node.js",
      "Express",
      "FastAPI",
      "Flask",
      "REST APIs",
      "WebSockets",
      "SSE",
      "Microservices",
      "Go Concurrency",
      "AST"
    ],
    "databases": [
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "FAISS",
      "Qdrant",
      "Weaviate",
      "Pinecone"
    ],
    "ai": [
      "PyTorch",
      "Scikit-learn",
      "XGBoost",
      "YOLOv4 / YOLOv8",
      "ByteTrack",
      "OpenCV",
      "PaddleOCR",
      "LangChain",
      "LangGraph",
      "CrewAI",
      "RAG",
      "LLMs / VLMs",
      "Ollama",
      "Qwen-VL",
      "CLIP",
      "SigLIP"
    ],
    "tools": [
      "Docker",
      "Kubernetes",
      "AWS",
      "Linux",
      "Git / GitHub",
      "TensorRT",
      "CUDA",
      "Apple MPS",
      "GStreamer",
      "FFmpeg",
      "HashiCorp Vault",
      "OpenSSL",
      "Vercel"
    ]
  },
  "fun": [
    "I build across Python, C++, Go, and React—from video pipelines to web interfaces.",
    "I explore how edge filtering can make video analytics more efficient.",
    "I enjoy connecting AI models to practical tools, from document ingestion to developer workflows.",
    "My projects span computer vision, agentic retrieval, distributed backends, and learning tools."
  ],
  "contact": {
    "phone": "+919370877347",
    "website": "atharvarathi.com",
    "email": "atharvarathi09@gmail.com",
    "github": "https://github.com/AtharvaRathi",
    "linkedin": "https://linkedin.com/in/atharvarathi",
    "twitter": "",
    "callToAction": "I'm seeking onsite internships and full-time roles in AI/ML, computer vision, and backend engineering. Expected graduation: April 2027. Open to relocation. Let's connect."
  },
  "resume": {
    "summary": "Software developer focused on AI, backend architecture, and data pipelines. B.Tech IT student with Honours in AI at K.J. Somaiya College of Engineering, with internships at EmerTech Innovations, Trueview, and Manomay. Projects span vision-language inference, edge video analytics, agentic RAG, and concurrent webhook delivery.",
    "downloadLink": "/resume.pdf"
  },
  "systemPromptStyle": "Be concise, warm, sharp, and recruiter-friendly. Speak in the first person ('I', 'my') as if you are Atharva. Keep answers brief and do not use generic AI disclaimers."
};
