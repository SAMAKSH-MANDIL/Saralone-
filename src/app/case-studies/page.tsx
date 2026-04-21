import { ArrowRight, ChartNoAxesCombined, Clock, Workflow } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const studies = [
  {
    slug: "clinic-whatsapp-bookings",
    title: "Clinic: WhatsApp follow-ups → +38% booked consultations",
    industry: "Healthcare",
    outcome: "+38% bookings",
    time: "3 weeks",
    bullets: [
      "Lead capture + qualification questions",
      "WhatsApp follow-ups + reminders",
      "No-show reduction flow",
      "Basic pipeline + reporting",
    ],
  },
  {
    slug: "agency-white-label-reporting",
    title: "Agency: White-label ops dashboard for 12 clients",
    industry: "Agency",
    outcome: "3× visibility",
    time: "4 weeks",
    bullets: [
      "Client reporting dashboard",
      "Automated weekly summaries",
      "Ops checklists + SLA flags",
      "Repeatable delivery playbook",
    ],
  },
  {
    slug: "real-estate-lead-system",
    title: "Real estate: Lead routing + auto-replies across branches",
    industry: "Real estate",
    outcome: "-60% response time",
    time: "2 weeks",
    bullets: [
      "Instant auto-reply + qualification",
      "Branch routing + owner alerts",
      "Calendar booking option",
      "Stage conversion tracking",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />

      <Section className="pt-16 pb-24">
        <SectionHeading
          eyebrow="Case Studies"
          title="Real outcomes from clean systems"
          subtitle="These are demo case studies to expand the site structure. Replace with real client stories anytime."
          align="left"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {studies.map((s) => (
            <div key={s.slug} className="gradient-border">
              <div className="glass shadow-soft flex h-full flex-col rounded-[var(--radius-lg)] p-7">
                <div className="flex items-start justify-between gap-3">
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-300">
                    {s.industry}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    <ChartNoAxesCombined className="size-4 text-indigo-600 dark:text-indigo-300" />
                    {s.outcome}
                  </div>
                </div>

                <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                  {s.title}
                </div>

                <div className="mt-4 flex items-center gap-3 text-xs text-slate-600 dark:text-slate-300">
                  <span className="inline-flex items-center gap-1">
                    <Clock className="size-4" />
                    {s.time}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Workflow className="size-4" />
                    Automation + reporting
                  </span>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="focus-ring inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-900/10 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/15"
                  >
                    Get a similar system <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 glass shadow-soft rounded-3xl p-8 sm:p-10">
          <div className="text-lg font-semibold text-slate-900 dark:text-white">
            Want a case-study style plan for your business?
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Share your tools + goal. We’ll map a lead-to-close flow, timelines, and the KPIs to track.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">Book Consultation</Button>
            <Button variant="secondary" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

