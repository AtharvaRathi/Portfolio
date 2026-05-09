export const portfolioData = {
  name: "Atharva",
  nickname: "Atharva",
  tagline: "Building scalable web apps & AI systems",
  avatar: "/avatar.png",
  about: "I'm a 3rd-year B.Tech IT student specializing in full-stack web development with the MERN stack. I'm passionate about building scalable, performant web applications and integrating AI tools like RAG systems. I'm currently exploring startup ideas and looking for an exciting internship to apply my skills in a fast-paced environment.",
  location: "India",
  role: "Full-Stack Developer & AI Enthusiast",
  education: "3rd Year B.Tech IT",
  projects: [
    {
      name: "Trueview Nexus",
      description: "An AI Chat Application featuring secure authentication and robust chat interfaces integrated with Dify API.",
      techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "SQLite"],
      role: "Full-Stack Developer",
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
      links: {
        github: "https://github.com/yourusername/smartspace",
      }
    },
    {
      name: "AI Vulnerability Scanner",
      description: "A production-ready CLI tool for static application security testing (SAST) of Python codebases using AST parsing and LLMs.",
      techStack: ["Python", "Pydantic", "Rich", "LLM APIs"],
      role: "Security Engineer",
      links: {
        github: "https://github.com/yourusername/ai-scanner"
      }
    }
  ],
  skills: {
    frontend: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    backend: ["Node.js", "Express", "Python"],
    databases: ["MongoDB", "PostgreSQL", "SQLite"],
    ai: ["OpenAI API", "Google Gemini", "RAG Systems", "LangChain"],
    tools: ["Git", "Docker", "Vercel", "Linux"]
  },
  fun: [
    "I'm obsessed with optimizing web performance.",
    "Always exploring the latest AI models and how to build context-aware agents.",
    "I enjoy crafting minimal, whitespace-heavy user interfaces.",
    "Currently building tools to automate security scanning in codebases."
  ],
  contact: {
    email: "atharva@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    callToAction: "I'm currently looking for internship opportunities. Let's build something great together."
  },
  resume: {
    summary: "Passionate Full-Stack Developer with expertise in MERN and AI integration. Proven track record in building complex management systems and security tools.",
    downloadLink: "/resume.pdf"
  },
  systemPromptStyle: "Be concise, warm, sharp, and recruiter-friendly. Speak in the first person ('I', 'my') as if you are Atharva. Keep answers brief and do not use generic AI disclaimers."
};
