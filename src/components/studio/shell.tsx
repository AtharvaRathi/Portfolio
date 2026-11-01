"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowUp,
  Sparkles,
  X,
  Menu,
  Volume2,
  VolumeX,
} from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { playClickSound } from "@/utils/sounds";
import type { Source, Turn } from "@/lib/assistant";
const ChatContext = createContext<
  (question?: string, project?: string) => void
>(() => {});
export const useAssistant = () => useContext(ChatContext);
type ChatTurn = Turn & { sources?: Source[]; mode?: string };
export function StudioShell({ children }: { children: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const controller = useRef<AbortController>();
  const busy = useRef(false);
  const [messages, setMessages] = useState<ChatTurn[]>([]);
  const history = useRef<ChatTurn[]>([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [project, setProject] = useState<string>();
  const [menu, setMenu] = useState(false);
  const [sound, setSound] = useState(false);
  useEffect(() => {
    try {
      setSound(localStorage.getItem("portfolio-sound") === "on");
    } catch {}
    return () => controller.current?.abort();
  }, []);
  useEffect(() => {
    bottom.current?.scrollIntoView({ block: "end" });
  }, [messages, loading]);
  const ask = async (question: string, activeProject = project) => {
    if (!question.trim() || busy.current) return;
    busy.current = true;
    setLoading(true);
    setInput("");
    const previous = history.current;
    const updated: ChatTurn[] = [
      ...previous,
      { role: "user", content: question },
    ];
    history.current = updated;
    setMessages(updated);
    controller.current = new AbortController();
    const timeout = setTimeout(() => controller.current?.abort(), 23000);
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          question,
          project: activeProject,
          history: previous.slice(-8),
        }),
        signal: controller.current.signal,
      });
      if (!res.ok) throw new Error("Request failed");
      const data = await res.json();
      const next: ChatTurn[] = [
        ...updated,
        {
          role: "assistant",
          content: data.answer,
          sources: data.sources,
          mode: data.mode,
        },
      ];
      history.current = next;
      setMessages(next);
    } catch {
      const next: ChatTurn[] = [
        ...updated,
        {
          role: "assistant",
          content:
            "I couldn’t connect just now. Please try again, or browse the projects and résumé below.",
        },
      ];
      history.current = next;
      setMessages(next);
    } finally {
      clearTimeout(timeout);
      busy.current = false;
      setLoading(false);
    }
  };
  const open = (question?: string, slug?: string) => {
    playClickSound();
    setProject(slug);
    dialog.current?.showModal();
    if (question) void ask(question, slug);
  };
  return (
    <ChatContext.Provider value={open}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="shell nav-inner">
          <Link className="brand" href="/" aria-label="Atharva Rathi home">
            <span className="monogram">
              ar<span>·</span>
            </span>
            <span>
              Atharva Rathi<small>Engineer / Builder</small>
            </span>
          </Link>
          <nav
            aria-label="Main navigation"
            className={menu ? "nav-links expanded" : "nav-links"}
            onClick={() => setMenu(false)}
          >
            <Link href="/#work">Work</Link>
            <Link href="/#playground">Playground</Link>
            <Link href="/#notes">Notes</Link>
            <Link href="/#recruiters">For recruiters</Link>
          </nav>
          <div className="nav-actions">
            <ThemeToggle />
            <button
              className="icon-button sound-toggle"
              aria-label={
                sound ? "Mute interface sounds" : "Enable interface sounds"
              }
              onClick={() => {
                setSound(!sound);
                try {
                  localStorage.setItem(
                    "portfolio-sound",
                    !sound ? "on" : "off",
                  );
                } catch {}
              }}
            >
              {sound ? <Volume2 size={17} /> : <VolumeX size={17} />}
            </button>
            <button
              className="icon-button mobile-menu"
              aria-label="Toggle navigation"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              {menu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      {children}
      <footer className="shell footer">
        <div>
          <p className="eyebrow">LET’S BUILD SOMETHING USEFUL</p>
          <a className="footer-email" href="mailto:atharvarathi09@gmail.com">
            Have something in mind? <ArrowUpRight />
          </a>
          <p>Mumbai, India · Open to relocation</p>
        </div>
        <div className="footer-links">
          <a
            href="https://github.com/AtharvaRathi"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/atharvarathi"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            Résumé ↗
          </a>
          <span>© {new Date().getFullYear()} Atharva Rathi</span>
        </div>
      </footer>
      <button className="floating-ask" onClick={() => open()}>
        <Sparkles size={17} />
        Ask my AI
      </button>
      <dialog
        ref={dialog}
        className="assistant-dialog"
        aria-labelledby="assistant-title"
        onClick={(e) => {
          if (e.target === dialog.current) dialog.current.close();
        }}
      >
        <div className="assistant-inner">
          <div className="assistant-head">
            <div>
              <p className="eyebrow">YOUR GUIDE TO MY WORK</p>
              <h2 id="assistant-title">
                <Sparkles size={20} />
                Ask Atharva’s AI
              </h2>
            </div>
            <button
              className="icon-button"
              aria-label="Close assistant"
              onClick={() => dialog.current?.close()}
            >
              <X />
            </button>
          </div>
          <div className="assistant-messages" role="log" aria-live="polite">
            {messages.length === 0 && (
              <div className="chat-welcome">
                <span className="orb">
                  <Sparkles size={28} />
                </span>
                <h3>A conversation is a good place to start.</h3>
                <p>
                  Explore my work, experience, and engineering decisions.
                  Answers use my portfolio information.
                </p>
                {[
                  "Introduce Atharva",
                  "Explain VStream’s architecture",
                  "What roles is Atharva looking for?",
                ].map((q) => (
                  <button className="suggestion" key={q} onClick={() => ask(q)}>
                    {q}
                    <ArrowUpRight size={15} />
                  </button>
                ))}
              </div>
            )}
            {messages.map((m, i) => (
              <article className={`chat-message ${m.role}`} key={i}>
                <span className="eyebrow">
                  {m.role === "user"
                    ? "YOU"
                    : m.mode === "knowledge"
                      ? "PORTFOLIO KNOWLEDGE · NO MODEL CALL"
                      : "PORTFOLIO ASSISTANT"}
                </span>
                <p>{m.content}</p>
                {!!m.sources?.length && (
                  <div className="chat-sources">
                    <small>Explore related evidence</small>
                    {m.sources.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => dialog.current?.close()}
                      >
                        {s.label} ↗
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
            {loading && (
              <p className="thinking">
                Looking through my work<span>…</span>
              </p>
            )}
            <div ref={bottom} />
          </div>
          <form
            className="assistant-form"
            onSubmit={(e) => {
              e.preventDefault();
              void ask(input);
            }}
          >
            <label className="sr-only" htmlFor="chat-input">
              Your question
            </label>
            <input
              autoFocus
              id="chat-input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={1200}
              placeholder="Ask about my work…"
            />
            <button
              className="send-button"
              aria-label="Send question"
              disabled={loading || !input.trim()}
            >
              <ArrowUp size={20} />
            </button>
          </form>
          <p className="assistant-disclaimer">
            AI can make mistakes. Check linked sources. Free portfolio fallback
            available.
          </p>
        </div>
      </dialog>
    </ChatContext.Provider>
  );
}
export function AskButton({
  question,
  project,
  children,
  className = "secondary",
}: {
  question?: string;
  project?: string;
  children: React.ReactNode;
  className?: string;
}) {
  const open = useAssistant();
  return (
    <button className={className} onClick={() => open(question, project)}>
      {children}
    </button>
  );
}
export function AskBox() {
  const open = useAssistant();
  const [q, setQ] = useState("");
  return (
    <div className="hero-chat">
      <div className="hero-chat-label">
        <Sparkles size={16} />
        <span>THE CONVERSATIONAL PORTFOLIO</span>
        <span className="online-dot" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          open(q || "Introduce Atharva");
          setQ("");
        }}
      >
        <label htmlFor="hero-question" className="sr-only">
          Ask about Atharva
        </label>
        <input
          id="hero-question"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          maxLength={1200}
          placeholder="What would you like to know about me?"
        />
        <button className="send-button" aria-label="Ask my AI">
          <ArrowUp size={20} />
        </button>
      </form>
      <div className="prompt-chips">
        {[
          "Give me the quick intro",
          "Show me your AI projects",
          "Explain your backend work",
        ].map((q) => (
          <button key={q} onClick={() => open(q)}>
            {q}
            <ArrowUpRight size={12} />
          </button>
        ))}
      </div>
    </div>
  );
}
