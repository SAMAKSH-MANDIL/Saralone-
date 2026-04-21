import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <Section className="pt-16 pb-24">
        <SectionHeading
          eyebrow="About Saral One"
          title="Tech-first execution for modern growth"
          subtitle="We build automation and software that improves lead-to-close speed—and stays maintainable as you scale."
          align="left"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="glass shadow-soft rounded-2xl p-6 lg:col-span-2">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Mission
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Make business systems simple: automate the repetitive, keep humans
              focused on selling and service, and give teams clear visibility.
            </p>

            <div className="mt-6 text-sm font-semibold text-slate-900 dark:text-white">
              Vision
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              A world where every business runs on reliable, connected, measurable
              systems—without messy tools or manual follow-ups.
            </p>
          </div>

          <div className="glass shadow-soft rounded-2xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              What you get
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>Clean delivery + fast iterations</li>
              <li>Automation that doesn’t break</li>
              <li>Dashboards & reporting</li>
              <li>End-to-end support</li>
            </ul>
            <div className="mt-6">
              <Button href="/contact">Book Consultation</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

