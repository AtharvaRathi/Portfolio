import { GoogleGenerativeAI } from "@google/generative-ai";
import { AIProvider, AIResponse } from "./provider";

export class GeminiProvider implements AIProvider {
  private client: GoogleGenerativeAI;

  constructor() {
    this.client = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
  }

  async ask(question: string, systemPrompt: string): Promise<AIResponse> {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not set.");
    }

    const model = this.client.getGenerativeModel({
      model: "gemini-flash-latest",
      systemInstruction: systemPrompt,
    });

    const prompt = `${question}\n\nReturn your response in JSON format exactly like: { "answer": "...", "relatedSection": "me" | "projects" | "skills" | "contact" | "resume" | null }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      // Sometimes Gemini wraps JSON in markdown block
      const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
      return JSON.parse(cleanText) as AIResponse;
    } catch {
      throw new Error("Failed to parse Gemini response as JSON");
    }
  }
}
