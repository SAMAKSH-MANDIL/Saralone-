import Link from "next/link";
import { ArrowRight, FileText, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "Lead Systems 101: capture → qualify → book",
    desc: "A practical checklist to reduce missed leads and speed up response time.",
    tag: "Playbook",
  },
  {
    title: "WhatsApp follow-up templates that don’t feel spammy",
    desc: "Short messages and timing suggestions your team can actually use.",
    tag: "Templates",
  },
  {
    title: "Dashboards that drive action (not vanity metrics)",
    desc: "A simple KPI set for most local service and agency teams.",
    tag: "Analytics",
  },
  {
    title: "Automation safety: how to avoid broken workflows",
    desc: "Monitoring, fallbacks, and change management basics.",
    tag: "Ops",
  },
];

export default function ResourcesPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />

      <Section className="pt-16 pb-24">
        <SectionHeading
          title="Guides, templates, and checklists"
          subtitle="Demo content to increase site length. Replace with real posts whenever you’re ready."
          align="left"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {posts.map((p) => (
            <div key={p.title} className="gradient-border">
              <div className="glass shadow-soft rounded-[var(--radius-lg)] p-7">
                <div className="flex items-start justify-between gap-3">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    <FileText className="size-4 text-indigo-600 dark:text-indigo-300" />
                    {p.tag}
                  </div>
                  <Link
                    href="/contact"
                    className="focus-ring inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-slate-600 transition hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    Ask for this <ArrowRight className="size-4" />
                  </Link>
                </div>
                <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {p.desc}
                </div>
                <div className="mt-6 text-xs text-slate-500 dark:text-slate-300">
                  Coming soon: full article pages
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="glass shadow-soft rounded-3xl p-8 lg:col-span-7">
            <div className="text-lg font-semibold text-slate-900 dark:text-white">
              Want a custom SOP for your team?
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              We can convert your process into an automation-ready checklist and build the system around it.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Request a Playbook</Button>
              <Button variant="secondary" href="/services">
                Explore Services
              </Button>
            </div>
          </div>

          <div className="glass shadow-soft rounded-3xl p-8 lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
              <Sparkles className="size-4 text-indigo-600 dark:text-indigo-300" />
              Demo note
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
              This page is intentionally long-form to make the website feel complete. We can turn it into a real blog (MDX/CMS) later.
            </p>
            <div className="mt-5">
              <Link
                href="/pricing"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-900/10 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15"
              >
                See pricing <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

