import Link from "next/link";
import { Camera, Link2, Mail, MapPin, Phone, Globe } from "lucide-react";
import { SaralOneLogo } from "@/components/site/logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/pricing", label: "Pricing" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

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
                href="#"
                aria-label="LinkedIn"
                className="focus-ring grid size-10 place-items-center rounded-full ring-1 ring-slate-200/70 bg-white/60 backdrop-blur transition hover:bg-white dark:bg-slate-900/40 dark:ring-slate-800"
              >
                <Link2 className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="focus-ring grid size-10 place-items-center rounded-full ring-1 ring-slate-200/70 bg-white/60 backdrop-blur transition hover:bg-white dark:bg-slate-900/40 dark:ring-slate-800"
              >
                <Camera className="size-4" />
              </a>
              <a
                href="#"
                aria-label="Social"
                className="focus-ring grid size-10 place-items-center rounded-full ring-1 ring-slate-200/70 bg-white/60 backdrop-blur transition hover:bg-white dark:bg-slate-900/40 dark:ring-slate-800"
              >
                <Globe className="size-4" />
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
            <a href="#" className="focus-ring rounded-lg hover:text-slate-900 dark:hover:text-white">
              Privacy
            </a>
            <a href="#" className="focus-ring rounded-lg hover:text-slate-900 dark:hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

