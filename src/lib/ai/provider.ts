export interface AIResponse {
  answer: string;
  relatedSection: "me" | "projects" | "skills" | "contact" | "resume" | null;
}

export interface AIProvider {
  ask(question: string, systemPrompt: string): Promise<AIResponse>;
}
