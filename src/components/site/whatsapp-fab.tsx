"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/cn";

export function WhatsAppFab({
  phone = "919403892801",
  message = "Hi Saral One! I want to book a consultation.",
  className,
}: {
  phone?: string;
  message?: string;
  className?: string;
}) {
  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "focus-ring fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full text-white shadow-soft transition hover:-translate-y-0.5 active:translate-y-0",
        className,
      )}
      style={{
        background: "linear-gradient(135deg, rgb(34 197 94), rgb(16 185 129))",
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="size-5" />
    </a>
  );
}

