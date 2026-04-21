"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { DemoLogo } from "@/lib/demo-data";

function toneClasses(tone: DemoLogo["tone"]) {
  switch (tone) {
    case "emerald":
      return "from-emerald-500/18 via-emerald-500/10 to-sky-500/10 text-emerald-700 dark:text-emerald-200";
    case "sky":
      return "from-sky-500/18 via-sky-500/10 to-indigo-500/10 text-sky-700 dark:text-sky-200";
    case "purple":
      return "from-purple-500/18 via-purple-500/10 to-indigo-500/10 text-purple-700 dark:text-purple-200";
    case "slate":
      return "from-slate-500/18 via-slate-500/10 to-slate-500/10 text-slate-700 dark:text-slate-200";
    case "indigo":
    default:
      return "from-indigo-500/18 via-indigo-500/10 to-purple-500/10 text-indigo-700 dark:text-indigo-200";
  }
}

export function LogoCloud({
  items,
  className,
}: {
  items: DemoLogo[];
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4", className)}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {items.slice(0, 10).map((l) => {
          const card = (
            <div className="glass shadow-soft group flex items-center gap-3 rounded-2xl px-4 py-3 transition hover:-translate-y-0.5">
              <div
                className={cn(
                  "grid size-11 place-items-center rounded-2xl bg-gradient-to-r ring-1 ring-slate-200/70 dark:ring-slate-800",
                  toneClasses(l.tone),
                )}
              >
                <span className="text-sm font-semibold tracking-tight">
                  {l.initials}
                </span>
              </div>
              <div className="min-w-0">
                <div className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                  {l.name}
                </div>
                <div className="mt-0.5 text-xs text-slate-500 dark:text-slate-300">
                  Demo client / partner
                </div>
              </div>
            </div>
          );

          if (l.href) {
            return (
              <Link key={l.name} href={l.href} className="focus-ring rounded-2xl">
                {card}
              </Link>
            );
          }

          return <div key={l.name}>{card}</div>;
        })}
      </div>
      <div className="text-center text-xs text-slate-500 dark:text-slate-300">
        Logos above are demo placeholders for layout.
      </div>
    </div>
  );
}

