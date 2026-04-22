"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { DemoLogo } from "@/lib/demo-data";

export function LogoCloud({
  items,
  className,
}: {
  items: DemoLogo[];
  className?: string;
}) {
  const loopItems = React.useMemo(() => [...items, ...items], [items]);

  return (
    <div className={cn("grid gap-6", className)}>
      <div className="overflow-hidden">
        <div className="flex w-max items-center gap-14 [animation:logo-strip_26s_linear_infinite] will-change-transform">
          {loopItems.map((l, idx) => (
            <div key={`${l.name}-${idx}`} className="flex items-center gap-3 opacity-90">
              {l.logoSrc ? (
                <Image
                  src={l.logoSrc}
                  alt={l.name}
                  width={180}
                  height={70}
                  className={cn(
                    "h-14 object-contain",
                    l.initials === "EW" ? "w-[220px]" : "w-auto",
                  )}
                />
              ) : (
                <>
                  <div className="grid size-12 place-items-center rounded-full bg-white/80 text-sm font-semibold text-slate-700 ring-1 ring-slate-200/80 dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-700">
                    {l.initials}
                  </div>
                  <div className="whitespace-nowrap text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {l.name}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes logo-strip {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(calc(-50% - 1.75rem), 0, 0);
          }
        }
      `}</style>
    </div>
  );
}

