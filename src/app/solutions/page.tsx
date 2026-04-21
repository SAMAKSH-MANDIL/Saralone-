import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Building2, GraduationCap, HeartPulse, Rocket, BriefcaseBusiness } from "lucide-react";

const solutions = [
  {
    icon: Rocket,
    title: "Startups",
    desc: "MVP builds, onboarding automation, analytics and iteration loops.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Agencies",
    desc: "White-label delivery, client reporting, and repeatable playbooks.",
  },
  {
    icon: Building2,
    title: "Local Businesses",
    desc: "Lead capture → WhatsApp follow-ups → bookings → reviews.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    desc: "Appointment automation, reminders, no-show reduction, intake flows.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Lead nurture, counselor assignment, admissions dashboards.",
  },
];

export default function SolutionsPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <Section className="pt-16 pb-24">
        <SectionHeading
          eyebrow="Solutions"
          title="Built for the way your business actually runs"
          subtitle="Choose a template-like system and we tailor it to your tools and team."
          align="left"
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <div key={s.title} className="glass shadow-soft rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-r from-sky-500/15 via-indigo-500/15 to-purple-500/15 ring-1 ring-slate-200/70 dark:ring-slate-800">
                <s.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
              </div>
              <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white">{s.title}</div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">Book Consultation</Button>
          <Button variant="secondary" href="/services">
            Explore Services
          </Button>
        </div>
      </Section>
    </div>
  );
}

