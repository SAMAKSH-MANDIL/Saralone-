"use client";

import * as React from "react";
import { Play } from "lucide-react";
import { cn } from "@/lib/cn";
import type { DemoVideo } from "@/lib/demo-data";

export function VideoCarousel({
  items,
  className,
}: {
  items: DemoVideo[];
  className?: string;
}) {
  const loopItems = React.useMemo(() => [...items, ...items], [items]);

  const getBadgeText = (video: DemoVideo) => {
    if (video.tags?.[0]) return video.tags[0];
    return video.title.split(" ").slice(0, 3).join(" ");
  };

  return (
    <div className={cn("grid gap-4", className)}>
      <div className="overflow-hidden pb-2">
        <div className="flex w-max gap-4 [animation:video-marquee_24s_linear_infinite] will-change-transform">
        {loopItems.map((v, idx) => (
          <div
            key={`${v.title}-${idx}`}
            data-video-card
            className="w-[290px] shrink-0 sm:w-[330px]"
          >
            <div className="overflow-hidden rounded-2xl ring-1 ring-black/10 shadow-[0_8px_24px_rgba(0,0,0,0.18)]">
              <div className="relative">
                <div className="aspect-[4/5] w-full bg-slate-900/5 dark:bg-white/5">
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
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/70" />
                <div className="pointer-events-none absolute left-3 top-3 text-sm font-semibold text-white drop-shadow">
                  {getBadgeText(v)}
                </div>
                <div className="pointer-events-none absolute inset-0 grid place-items-center">
                  <div className="grid size-14 place-items-center rounded-full bg-white/95 text-black shadow-lg">
                    <Play className="ml-0.5 size-7 fill-current" />
                  </div>
                </div>
                <div className="pointer-events-none absolute bottom-3 left-3 right-3">
                  <div className="line-clamp-2 text-[14px] font-semibold leading-5 text-white drop-shadow">
                    {v.title}
                  </div>
                  {v.subtitle ? (
                    <div className="mt-1 line-clamp-2 text-[12px] leading-4 text-white/90">
                      {v.subtitle}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes video-marquee {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(calc(-50% - 0.5rem), 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

