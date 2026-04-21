import * as React from "react";
import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-7xl container-px", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "left" ? "text-left items-start" : "text-center items-center";
  return (
    <div className={cn("mx-auto flex max-w-3xl flex-col gap-3", alignCls)}>
      {eyebrow ? (
        <div className="inline-flex items-center rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-balance font-[var(--font-display)] text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-pretty text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

