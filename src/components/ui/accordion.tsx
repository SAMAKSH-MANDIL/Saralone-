"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function Accordion({
  items,
  className,
}: {
  className?: string;
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <div className={cn("grid gap-3", className)}>
      {items.map((it, idx) => {
        const isOpen = open === idx;
        const buttonId = `accordion-trigger-${idx}`;
        const panelId = `accordion-panel-${idx}`;
        return (
          <div
            key={it.q}
            className={cn(
              "glass shadow-soft overflow-hidden rounded-2xl transition-colors",
              "hover:bg-white/80 dark:hover:bg-slate-900/50",
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : idx)}
              id={buttonId}
              className={cn(
                "focus-ring group flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
                "transition-colors",
              )}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <div className="min-w-0 pr-2">
                <div className="text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  {it.q}
                </div>
              </div>
              <ChevronDown
                className={cn(
                  "size-5 shrink-0 text-slate-500 transition-transform duration-300 ease-out dark:text-slate-300",
                  isOpen ? "rotate-180" : "rotate-0",
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="border-t border-slate-200/70 px-5 pb-5 pt-4 dark:border-slate-800">
                  <div
                    className={cn(
                      "transition duration-300 ease-out motion-reduce:transition-none",
                      isOpen ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0",
                    )}
                  >
                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {it.a}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

