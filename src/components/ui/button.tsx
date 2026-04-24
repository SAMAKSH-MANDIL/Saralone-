"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex touch-manipulation select-none items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all outline-none focus-visible:ring-4 focus-visible:ring-[rgba(var(--ring),0.25)] active:translate-y-[1px]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "relative text-white shadow-soft bg-gradient-to-r from-indigo-600 via-indigo-600 to-purple-600 hover:brightness-110",
  secondary:
    "bg-white/70 text-slate-900 ring-1 ring-slate-200/80 backdrop-blur hover:bg-white dark:bg-slate-900/50 dark:text-slate-100 dark:ring-slate-800",
  ghost:
    "text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10",
};

export function Button({
  className,
  variant = "primary",
  href,
  children,
  ...props
}: (React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>) & {
  variant?: ButtonVariant;
  href?: string;
}) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isHashLink = href.startsWith("#");
    const isExternalLink = /^https?:\/\//.test(href) || href.startsWith("mailto:") || href.startsWith("tel:");

    if (isHashLink || isExternalLink) {
      return (
        <a href={href} className={classes} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

