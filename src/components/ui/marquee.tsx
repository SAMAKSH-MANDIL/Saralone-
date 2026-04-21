"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const row = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[rgb(var(--bg))] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[rgb(var(--bg))] to-transparent" />

      <div className="flex w-[200%] animate-marquee gap-4 py-2">
        {row.map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="group glass flex h-14 items-center justify-center rounded-2xl px-6 text-sm font-semibold text-slate-400 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <span className="tracking-tight">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

