"use client";

import * as React from "react";
import { Bot, Calendar, Mail, MessageCircle, Phone, Plus, Send, X } from "lucide-react";
import { cn } from "@/lib/cn";

type ActionItem = {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  iconBgClassName: string;
  target?: "_blank";
  rel?: string;
};

const DEFAULT_ACTIONS: ActionItem[] = [
  {
    label: "Book Demo",
    href: "/contact",
    icon: Calendar,
    iconBgClassName: "bg-violet-600",
  },
  {
    label: "Call Us",
    href: "tel:+919403892801",
    icon: Phone,
    iconBgClassName: "bg-emerald-600",
  },
  {
    label: "Email",
    href: "mailto:support@saralone.com",
    icon: Mail,
    iconBgClassName: "bg-orange-500",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919403892801?text=Hi%20Saral%20One!%20I%20want%20to%20book%20a%20consultation.",
    icon: MessageCircle,
    iconBgClassName: "bg-sky-600",
    target: "_blank",
    rel: "noreferrer",
  },
];

export function QuickActionsFab({
  className,
  actions = DEFAULT_ACTIONS,
}: {
  className?: string;
  actions?: ActionItem[];
}) {
  const [open, setOpen] = React.useState(false);
  const [chatOpen, setChatOpen] = React.useState(false);
  const [question, setQuestion] = React.useState("");
  const messagesEndRef = React.useRef<HTMLDivElement | null>(null);
  const [messages, setMessages] = React.useState<
    Array<{ id: string; role: "bot" | "user"; text: string }>
  >([
    {
      id: "intro",
      role: "bot",
      text: "Hi! I am Saral Bot. Ask about services, automation, pricing flow, timeline, or how to start.",
    },
  ]);

  const getBotReply = React.useCallback((rawQuestion: string) => {
    const text = rawQuestion.toLowerCase();

    const answers: Array<{ keywords: string[]; answer: string }> = [
      {
        keywords: ["service", "services", "what do you do", "offer"],
        answer:
          "Saral One provides lead generation systems, sales automation, product/SaaS development, and complete business systems automation.",
      },
      {
        keywords: ["lead", "leads", "marketing", "seo", "meta", "google"],
        answer:
          "For lead generation, we use SEO + Google Business Profile optimization, Meta Ads (Facebook/Instagram), and high-converting landing pages to bring quality leads.",
      },
      {
        keywords: ["automation", "whatsapp", "chatbot", "crm", "follow-up"],
        answer:
          "Yes, we automate workflows across WhatsApp, chatbots, CRM pipelines, and follow-ups. We also set up smart reply systems and reporting.",
      },
      {
        keywords: ["software", "saas", "product", "mvp", "app", "dashboard"],
        answer:
          "We build custom SaaS tools, startup MVPs, full-stack web apps, dashboards, and internal products designed for scale and maintainability.",
      },
      {
        keywords: ["timeline", "how long", "delivery", "time"],
        answer:
          "Most builds are delivered in fast sprints, commonly around 2-6 weeks depending on scope.",
      },
      {
        keywords: ["result", "roi", "outcome", "kpi", "performance"],
        answer:
          "Typical outcomes highlighted on the site: +40% lead growth, -60% response time, and up to 3x efficiency improvements.",
      },
      {
        keywords: ["start", "get started", "book", "consultation", "call"],
        answer:
          "You can start by booking a free consultation on the Contact page. We map your goals, share a plan + timeline, and begin with a fast MVP sprint.",
      },
      {
        keywords: ["contact", "email", "phone", "whatsapp"],
        answer:
          "You can contact Saral One via phone (+91 9403892801), email (support@saralone.com), or WhatsApp from the quick actions menu.",
      },
    ];

    const matched = answers.find((item) =>
      item.keywords.some((keyword) => text.includes(keyword)),
    );

    if (matched) return matched.answer;

    return "I can help with services, automation, lead generation, software, timelines, and getting started. Ask one of these and I will answer from Saral One website info.";
  }, []);

  const handleAsk = React.useCallback(() => {
    const trimmed = question.trim();
    if (!trimmed) return;

    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-q`, role: "user", text: trimmed },
      { id: `${Date.now()}-a`, role: "bot", text: getBotReply(trimmed) },
    ]);
    setQuestion("");
  }, [getBotReply, question]);

  const quickPrompts = React.useMemo(
    () => [
      "What services do you provide?",
      "How long does delivery take?",
      "How do I get started?",
    ],
    [],
  );

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  React.useEffect(() => {
    if (!chatOpen) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [chatOpen, messages]);

  return (
    <div className={cn("fixed bottom-5 right-5 z-50", className)}>
      <div className="relative flex flex-col items-end gap-3">
        <div
          className={cn(
            "absolute bottom-16 right-0 w-[min(92vw,380px)] overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_18px_48px_rgba(2,6,23,0.28)] dark:border-slate-700 dark:bg-slate-900",
            chatOpen ? "block" : "hidden",
          )}
        >
          <div className="flex items-center justify-between bg-gradient-to-r from-indigo-600 via-indigo-600 to-purple-600 px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <div className="grid size-8 place-items-center rounded-full bg-white/20 ring-1 ring-white/25">
                <Bot className="size-4" />
              </div>
              <div>
                <div className="text-sm font-semibold">Saral Bot</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setChatOpen(false)}
              className="rounded-md p-1 text-white/90 hover:bg-white/10 hover:text-white"
              aria-label="Close chatbot"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="max-h-80 space-y-3 overflow-y-auto bg-slate-50/80 p-3 dark:bg-slate-950/40">
            {messages.map((m) => (
              <div
                key={m.id}
                className={cn(
                  "max-w-[88%] rounded-2xl px-3 py-2.5 text-sm leading-6 shadow-sm",
                  m.role === "user"
                    ? "ml-auto rounded-br-md bg-indigo-600 text-white"
                    : "rounded-bl-md bg-white text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700",
                )}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="space-y-2 border-t border-slate-200 bg-white p-2.5 dark:border-slate-700 dark:bg-slate-900">
            <div className="flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setQuestion(prompt)}
                  className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-medium text-slate-600 transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:border-indigo-500/40 dark:hover:bg-indigo-500/10"
                >
                  {prompt}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAsk();
                }}
                placeholder="Ask about services, pricing flow..."
                className="h-10 flex-1 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none ring-indigo-500 placeholder:text-slate-400 focus:ring-2 dark:border-slate-700 dark:bg-slate-900"
              />
              <button
                type="button"
                onClick={handleAsk}
                className={cn(
                  "grid size-10 place-items-center rounded-xl text-white transition",
                  question.trim()
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "cursor-not-allowed bg-slate-300 dark:bg-slate-700",
                )}
                aria-label="Send message"
                disabled={!question.trim()}
              >
                <Send className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex flex-col items-end gap-3 transition duration-200 ease-out",
            open
              ? "opacity-100 translate-y-0"
              : "pointer-events-none opacity-0 translate-y-2",
          )}
          aria-hidden={!open}
        >
          {actions.map((a, idx) => (
            <a
              key={a.label}
              href={a.href}
              target={a.target}
              rel={a.rel}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3"
              style={{
                transitionDelay: open ? `${idx * 30}ms` : "0ms",
              }}
            >
              <span className="min-w-[112px] rounded-full bg-white/95 px-4 py-2 text-center text-sm font-semibold text-slate-800 shadow-[0_8px_24px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80 backdrop-blur transition duration-200 group-hover:-translate-y-0.5 group-hover:bg-white dark:bg-slate-950/75 dark:text-slate-100 dark:ring-slate-800">
                {a.label}
              </span>
              <span
                className={cn(
                  "grid size-12 place-items-center rounded-full text-white shadow-[0_10px_28px_rgba(15,23,42,0.2)] ring-1 ring-black/5 transition duration-200 group-hover:-translate-y-0.5 group-hover:scale-[1.03] dark:ring-white/10",
                  a.iconBgClassName,
                )}
                aria-hidden
              >
                <a.icon className="size-5" />
              </span>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() =>
            setOpen((v) => {
              const next = !v;
              if (next) setChatOpen(false);
              return next;
            })
          }
          className={cn(
            "focus-ring grid size-14 place-items-center rounded-full text-white shadow-[0_14px_34px_rgba(79,70,229,0.45)] ring-1 ring-white/20 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:translate-y-0",
            open
              ? "bg-indigo-700 rotate-45"
              : "bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-600",
            chatOpen && "pointer-events-none opacity-0 scale-95",
          )}
          aria-label={open ? "Close quick actions" : "Open quick actions"}
          aria-expanded={open}
          aria-hidden={chatOpen}
          tabIndex={chatOpen ? -1 : 0}
        >
          {open ? <X className="size-6" /> : <Plus className="size-6" />}
        </button>

        <button
          type="button"
          onClick={() =>
            setChatOpen((v) => {
              const next = !v;
              if (next) setOpen(false);
              return next;
            })
          }
          className="group flex items-center gap-3"
        >
          
          <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-indigo-600 via-indigo-600 to-purple-600 text-white shadow-[0_12px_30px_rgba(79,70,229,0.45)] ring-1 ring-black/5 transition duration-200 group-hover:-translate-y-0.5 group-hover:scale-[1.03] dark:ring-white/10">
            <Bot className="size-5" />
          </span>
        </button>
      </div>
    </div>
  );
}

