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
      model: "gemini-2.5-flash",
      systemInstruction: systemPrompt,
      generationConfig: {
        responseMimeType: "application/json",
      },
    });

    const prompt = `${question}\n\nReturn your response in JSON format exactly like: { "answer": "...", "relatedSection": "me" | "projects" | "skills" | "contact" | "resume" | null }`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    try {
      // Clean up markdown block if the model still outputs it despite responseMimeType
      const cleanText = text.replace(/```json/gi, "").replace(/```/g, "").trim();
      return JSON.parse(cleanText) as AIResponse;
    } catch (e) {
      console.error("Failed to parse Gemini response. Raw text:", text, "Error:", e);
      throw new Error("Failed to parse Gemini response as JSON. Please try again.");
    }
  }
}
