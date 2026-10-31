import { portfolioData } from "./portfolio";

// Derive repeated facts from the same source used by the widgets and AI prompt.
export const faqs = [
  { question: "Who are you?", answer: portfolioData.about },
  {
    question: "What tech stack do you use?",
    answer: "My core tools are Python, C++, Go, and React. I work with FastAPI, Node.js, PyTorch, LangGraph, vector databases, and Docker across AI, backend, and full-stack projects."
  },
  { question: "Are you looking for opportunities?", answer: portfolioData.contact.callToAction },
  {
    question: "Where have you worked?",
    answer: portfolioData.experience.map(e => `${e.title} at ${e.company} (${e.period})`).join("; ") + "."
  },
  {
    question: "What are your main projects?",
    answer: "My projects include SemanticEdge, VStream, a fault-tolerant webhook dispatch engine, adaptive corrective and self-reflective RAG, restricted-zone monitoring, and ContextShield."
  },
  {
    question: "How can I contact you?",
    answer: `Email me at ${portfolioData.contact.email}, visit https://${portfolioData.contact.website}, or connect at ${portfolioData.contact.linkedin} and ${portfolioData.contact.github}.`
  }
];
