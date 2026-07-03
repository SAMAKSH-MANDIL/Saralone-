"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { SaralOneLogo } from "@/components/site/logo";
import { ThemeToggle } from "@/components/site/theme-toggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "mx-auto max-w-7xl container-px py-3",
          scrolled ? "pt-4" : "",
        )}
      >
        <div
          className={cn(
            "glass shadow-soft flex items-center justify-between gap-4 rounded-2xl px-4 py-3",
            scrolled ? "ring-brand" : "",
          )}
        >
          <Link href="/" className="shrink-0">
            <SaralOneLogo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("/#") && pathname === "/") {
                      e.preventDefault();
                      const id = item.href.split("#")[1];
                      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                      window.history.pushState(null, "", item.href);
                    }
                  }}
                  className={cn(
                    "focus-ring rounded-full px-4 py-2 text-sm font-medium transition",
                    active
                      ? "bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white"
                      : "text-slate-600 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:grid" />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="focus-ring grid size-10 place-items-center rounded-full ring-1 ring-slate-200/70 bg-white/70 backdrop-blur transition hover:bg-white dark:bg-slate-900/50 dark:ring-slate-800 md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
            <Button
              href="/contact"
              className="animate-shimmer relative hidden overflow-hidden md:inline-flex"
            >
              Book Free Call <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden"
          >
            <div
              className="fixed inset-0 z-40 bg-slate-950/20 backdrop-blur-[2px] dark:bg-slate-950/40"
              aria-hidden
              onClick={() => setOpen(false)}
            />
            <motion.div
              id="mobile-nav"
              initial={{ y: -10, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -10, opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 520, damping: 38 }}
              className="fixed left-0 right-0 top-[72px] z-50 mx-auto max-w-7xl container-px"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="glass shadow-soft ring-brand rounded-3xl p-4">
                <div className="flex items-center justify-between gap-3 pb-3">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-300">
                    Navigate
                  </div>
                  <ThemeToggle />
                </div>

                <div className="grid gap-1">
                  {nav.map((item) => {
                    const active = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={(e) => {
                          setOpen(false);
                          if (item.href.startsWith("/#") && pathname === "/") {
                            e.preventDefault();
                            const id = item.href.split("#")[1];
                            setTimeout(() => {
                              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
                            }, 150);
                            window.history.pushState(null, "", item.href);
                          }
                        }}
                        className={cn(
                          "focus-ring flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition",
                          active
                            ? "bg-slate-900/5 text-slate-900 dark:bg-white/10 dark:text-white"
                            : "text-slate-700 hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white",
                        )}
                      >
                        {item.label}
                        <ArrowRight className="size-4 opacity-60" />
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-3 grid gap-2">
                  <Button
                    href="/contact"
                    className="animate-shimmer relative w-full justify-center overflow-hidden"
                    onClick={() => setOpen(false)}
                  >
                    Book Free Call <ArrowRight className="size-4" />
                  </Button>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="focus-ring rounded-full px-5 py-2.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200/80 bg-white/70 backdrop-blur transition hover:bg-white dark:bg-slate-900/50 dark:text-slate-200 dark:ring-slate-800"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

