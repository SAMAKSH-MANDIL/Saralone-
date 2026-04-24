import { CheckCircle2, Sparkles } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "₹19,999",
    desc: "Perfect for a single workflow or small lead flow.",
    bullets: [
      "1 automation / integration",
      "Basic dashboard (KPIs + pipeline)",
      "WhatsApp/email follow-up template",
      "Deployment + handoff",
    ],
  },
  {
    name: "Growth",
    price: "₹49,999",
    desc: "Best for teams that want a complete lead-to-close system.",
    highlight: true,
    bullets: [
      "3–5 automations (CRM, sheets, WhatsApp, email)",
      "Lead capture + qualification flow",
      "Reporting dashboard + alerts",
      "30 days iteration support",
    ],
  },
  {
    name: "Scale",
    price: "Custom",
    desc: "For multi-branch teams, portals, and product-grade builds.",
    bullets: [
      "Custom software (portal / internal tool)",
      "Role-based access + audit trail",
      "SLA + monitoring + backups",
      "Quarterly optimization roadmap",
    ],
  },
];

const faqs = [
  {
    q: "Do you offer monthly retainers?",
    a: "Yes. After delivery, we can run a lightweight retainer for monitoring, new automations, and iterative improvements.",
  },
  {
    q: "Can you integrate with my CRM?",
    a: "Most likely yes. We commonly integrate CRMs, WhatsApp, email, calendars, sheets, and payment tools.",
  },
  {
    q: "How fast can we launch?",
    a: "Typical turnaround is 2–6 weeks depending on scope. We start with a quick mapping call and ship an MVP first.",
  },
];

export default function PricingPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />

      <Section className="pt-16 pb-24">
        <SectionHeading
          title="Simple packages. Clear outcomes."
          subtitle="Pick a starting point and we tailor the build after a quick audit."
          align="left"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={p.highlight ? "gradient-border" : ""}>
              <div
                className={
                  p.highlight
                    ? "glass shadow-soft rounded-[var(--radius-lg)] p-7"
                    : "glass shadow-soft rounded-2xl p-7"
                }
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-slate-900 dark:text-white">
                      {p.name}
                    </div>
                    <div className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                      {p.desc}
                    </div>
                  </div>
                  {p.highlight ? (
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                      <Sparkles className="size-4 text-indigo-600 dark:text-indigo-300" />
                      Most popular
                    </div>
                  ) : null}
                </div>

                <div className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {p.price}
                </div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                  One-time delivery, optional retainer
                </div>

                <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-3">
                  <Button href="/contact">Book Consultation</Button>
                  <Button variant="secondary" href="/services">
                    See Services
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <div className="glass shadow-soft rounded-3xl p-8 lg:col-span-7">
            <div className="text-lg font-semibold text-slate-900 dark:text-white">
              What’s included in every plan
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              We optimize for clean delivery: clear milestones, quick iteration, and measurable outcomes.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Discovery + scope mapping", "We translate your goal into a flow, timeline, and KPIs."],
                ["Build + QA", "Fast delivery with clean testing and handoff."],
                ["Tracking", "We add the metrics that matter for lead-to-close speed."],
                ["Documentation", "Simple docs so your team can operate confidently."],
              ].map(([t, d]) => (
                <div key={t} className="glass rounded-2xl p-5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{t}</div>
                  <div className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass shadow-soft rounded-3xl p-8 lg:col-span-5">
            <div className="text-lg font-semibold text-slate-900 dark:text-white">
              Quick answers
            </div>
            <div className="mt-5 grid gap-3">
              {faqs.map((f) => (
                <div key={f.q} className="glass rounded-2xl p-5">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{f.q}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

