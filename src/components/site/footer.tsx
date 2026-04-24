import Link from "next/link";
import type { SVGProps } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SaralOneLogo } from "@/components/site/logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.5 8h4V23h-4V8Zm7 0h3.83v2.05h.05c.53-1.01 1.84-2.08 3.79-2.08 4.05 0 4.8 2.67 4.8 6.14V23h-4v-7.76c0-1.85-.03-4.24-2.58-4.24-2.58 0-2.97 2.01-2.97 4.1V23h-4V8Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5Zm0 1.8h8.5a3.95 3.95 0 0 1 3.95 3.95v8.5a3.95 3.95 0 0 1-3.95 3.95h-8.5a3.95 3.95 0 0 1-3.95-3.95v-8.5A3.95 3.95 0 0 1 7.75 3.8Zm9.15 1.55a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.8A3.2 3.2 0 1 1 8.8 12 3.2 3.2 0 0 1 12 8.8Z" />
    </svg>
  );
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.12 11.93v-8.44H7.08v-3.5h3.04V9.39c0-3.02 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.96h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.08 24 18.09 24 12.07Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200/70 dark:border-slate-800">
      <div className="mx-auto max-w-7xl container-px py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SaralOneLogo className="mb-4" />
            <p className="max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
              AI automation, custom software, and growth systems built to convert—
              from lead capture to follow-up and reporting.
            </p>
            <div className="mt-5 flex items-center gap-3 text-slate-500 dark:text-slate-300">
              <a
                href="https://www.linkedin.com/company/saralone"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
                className="focus-ring grid size-10 place-items-center rounded-full ring-1 ring-slate-200/70 bg-white/60 backdrop-blur transition hover:bg-white dark:bg-slate-900/40 dark:ring-slate-800"
              >
                <LinkedinIcon className="size-4" />
              </a>
              <a
                href="https://www.instagram.com/saral.one/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="focus-ring grid size-10 place-items-center rounded-full ring-1 ring-slate-200/70 bg-white/60 backdrop-blur transition hover:bg-white dark:bg-slate-900/40 dark:ring-slate-800"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href="https://www.facebook.com/people/saralone/61584058614477/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="focus-ring grid size-10 place-items-center rounded-full ring-1 ring-slate-200/70 bg-white/60 backdrop-blur transition hover:bg-white dark:bg-slate-900/40 dark:ring-slate-800"
              >
                <FacebookIcon className="size-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="text-sm font-semibold">Navigation</div>
            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {links.map((l) => (
                <li key={l.href}>
                  <Link className="focus-ring rounded-lg hover:text-slate-900 dark:hover:text-white" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a className="focus-ring rounded-lg hover:text-slate-900 dark:hover:text-white" href="mailto:support@saralone.com">
                  support@saralone.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a className="focus-ring rounded-lg hover:text-slate-900 dark:hover:text-white" href="tel:+919403892801">
                  +91 9403892801
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  C-10, First Floor KLIC Raisen Road, Bhopal, Madhya Pradesh – 462022
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-slate-200/70 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Saral One. All rights reserved.</div>
          <div className="flex items-center gap-4">
            
          </div>
        </div>
      </div>
    </footer>
  );
}

