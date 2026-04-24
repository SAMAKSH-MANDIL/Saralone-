import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Cpu, FileText, MessageSquare, Workflow, ChartNoAxesCombined, Building2 } from "lucide-react";

const services = [
  { icon: Workflow, title: "AI Automation", desc: "Automate workflows across CRM, WhatsApp, email, sheets, and calendars." },
  { icon: MessageSquare, title: "Chatbots", desc: "Qualify leads, answer FAQs, and book calls—24/7 on web and WhatsApp." },
  { icon: Cpu, title: "Custom Software", desc: "Dashboards, portals, internal tools, and scalable products." },
  { icon: FileText, title: "Lead Systems", desc: "Landing pages, forms, follow-up, pipeline, and conversion reporting." },
  { icon: ChartNoAxesCombined, title: "GMB Growth", desc: "Tooling and workflows to keep your presence active and measurable." },
  { icon: Building2, title: "White Label", desc: "Agency delivery with clean handoff and consistent output." },
];

export default function ServicesPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <Section className="pt-16 pb-24">
        <SectionHeading
          title="High-impact systems built for conversion"
          subtitle="Pick what you need—or we’ll recommend the best stack after a quick call."
          align="left"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="gradient-border">
              <div className="glass shadow-soft rounded-[var(--radius-lg)] p-6">
                <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-r from-sky-500/15 via-indigo-500/15 to-purple-500/15 ring-1 ring-slate-200/70 dark:ring-slate-800">
                  <s.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{s.title}</div>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass shadow-soft rounded-3xl p-8 sm:p-10">
          <div className="text-lg font-semibold text-slate-900 dark:text-white">
            Want a custom plan?
          </div>
          <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
            Tell us your business type and current tools. We’ll share a roadmap with timelines and clear KPIs.
          </p>
          <div className="mt-5">
            <Button href="/contact">Book Consultation</Button>
          </div>
        </div>
      </Section>
    </div>
  );
}

