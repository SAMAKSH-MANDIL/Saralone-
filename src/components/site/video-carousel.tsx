"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { cn } from "@/lib/cn";
import type { DemoVideo } from "@/lib/demo-data";

export function VideoCarousel({
  items,
  className,
}: {
  items: DemoVideo[];
  className?: string;
}) {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-video-card]");
    const step = (card?.offsetWidth ?? 420) + 16;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <div className={cn("grid gap-4", className)}>
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white">
            Demo walkthroughs
          </div>
          <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Short examples of systems we build (placeholder embeds).
          </div>
        </div>
        <div className="hidden items-center gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            className="focus-ring grid size-10 place-items-center rounded-full ring-1 ring-slate-200/70 bg-white/70 backdrop-blur transition hover:bg-white dark:bg-slate-900/50 dark:ring-slate-800"
            aria-label="Previous videos"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            className="focus-ring grid size-10 place-items-center rounded-full ring-1 ring-slate-200/70 bg-white/70 backdrop-blur transition hover:bg-white dark:bg-slate-900/50 dark:ring-slate-800"
            aria-label="Next videos"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className={cn(
          "flex gap-4 overflow-x-auto pb-2",
          "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
          "scroll-px-4 sm:scroll-px-6 lg:scroll-px-8",
        )}
      >
        {items.map((v) => (
          <div
            key={v.title}
            data-video-card
            className="w-[86%] shrink-0 sm:w-[520px]"
          >
            <div className="gradient-border">
              <div className="glass shadow-soft overflow-hidden rounded-[var(--radius-lg)]">
                <div className="relative">
                  <div className="aspect-video w-full bg-slate-900/5 dark:bg-white/5">
                    <iframe
                      className="h-full w-full"
                      src={v.embedUrl}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70 backdrop-blur dark:bg-slate-900/50 dark:text-slate-200 dark:ring-slate-800">
                    <Play className="size-3.5 text-indigo-600 dark:text-indigo-300" />
                    Demo
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-base font-semibold text-slate-900 dark:text-white">
                    {v.title}
                  </div>
                  {v.subtitle ? (
                    <div className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {v.subtitle}
                    </div>
                  ) : null}

                  {v.tags?.length ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {v.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-xs text-slate-500 dark:text-slate-300">
        Tip: swipe horizontally on mobile.
      </div>
    </div>
  );
}

