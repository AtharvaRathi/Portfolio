import { NextResponse } from "next/server";
import { buildSystemPrompt } from "@/lib/portfolio-context";
import { OpenAIProvider } from "@/lib/ai/openai";
import { GeminiProvider } from "@/lib/ai/gemini";
import { AIProvider } from "@/lib/ai/provider";

export async function POST(req: Request) {
  try {
    const { question } = await req.json();

    if (!question) {
      return NextResponse.json(
        { error: "Question is required" },
        { status: 400 }
      );
    }

    const providerType = process.env.AI_PROVIDER || "gemini";
    let provider: AIProvider;

    if (providerType === "openai") {
      provider = new OpenAIProvider();
    } else {
      provider = new GeminiProvider();
    }

    const systemPrompt = buildSystemPrompt();
    const result = await provider.ask(question, systemPrompt);

    return NextResponse.json(result);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("AI Assistant Error:", error);
    const errorMessage = error?.message || String(error) || "Sorry, I couldn't process that right now. Please try again.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
