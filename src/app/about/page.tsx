import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Target, ShieldCheck, Rocket } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full blob"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(14,165,233,0.35), transparent 55%), radial-gradient(circle at 60% 60%, rgba(168,85,247,0.28), transparent 55%), radial-gradient(circle at 50% 50%, rgba(99,102,241,0.25), transparent 60%)",
        }}
      />
      <Section className="pt-16 pb-24">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              title="AI automation, software, and digital growth systems for modern businesses"
              subtitle="Saral One is a technology-driven company that helps organizations streamline operations, improve lead management, automate customer interactions, and scale through practical digital systems."
              align="left"
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">
                Book a Consultation
              </Button>
              <Button variant="secondary" href="/solutions">
                Explore Solutions
              </Button>
            </div>
          </div>
          <div className="gradient-border">
            <div className="glass shadow-soft relative overflow-hidden rounded-[var(--radius-lg)] p-5">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full blob"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.24), transparent 65%)",
                }}
              />
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70 dark:bg-slate-900/50 dark:text-slate-200 dark:ring-slate-800">
                  <Sparkles className="size-4 text-indigo-600 dark:text-indigo-300" />
                  Premium execution framework
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  ["Automation-led", "Execution"],
                  ["Scalable", "Systems"],
                  ["Business-first", "Implementation"],
                ].map(([top, bottom]) => (
                  <div
                    key={top}
                    className="rounded-2xl bg-gradient-to-r from-sky-500/10 via-indigo-500/10 to-purple-500/10 p-3 ring-1 ring-slate-200/70 dark:ring-slate-800"
                  >
                    <div className="text-xs font-medium text-slate-500 dark:text-slate-300">
                      {top}
                    </div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {bottom}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: Target, title: "Business outcomes", desc: "Automation tied to measurable goals" },
                  { icon: ShieldCheck, title: "Reliable systems", desc: "Scalable builds with stable workflows" },
                  { icon: Rocket, title: "Fast rollout", desc: "From strategy to implementation quickly" },
                  { icon: CheckCircle2, title: "End-to-end support", desc: "Optimization after launch" },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="rounded-2xl bg-white/70 p-4 ring-1 ring-slate-200/70 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(99,102,241,0.14)] dark:bg-slate-900/50 dark:ring-slate-800"
                  >
                    <f.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
                    <div className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                      {f.title}
                    </div>
                    <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                      {f.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="glass shadow-soft rounded-2xl p-6 lg:col-span-2">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Who we are
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Saral One works at the intersection of AI automation, lead systems,
              software engineering, and business enablement. We design and deliver
              connected workflows that reduce repetitive effort, improve response
              speed, and create measurable business outcomes.
            </p>
            <div className="mt-6 text-sm font-semibold text-slate-900 dark:text-white">
              Positioning
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Saral One is an AI automation, software, and digital growth company
              that helps businesses streamline operations, generate leads, and
              scale through technology-driven solutions.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["Tech-first execution", "Outcome-focused delivery", "Long-term support"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-sky-500/10 p-3 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70 dark:text-slate-200 dark:ring-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass shadow-soft rounded-2xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Core capabilities
            </div>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {[
                "AI automation and workflow systems",
                "Chatbots and lead qualification logic",
                "Custom software, MVPs, and micro SaaS",
                "Lead generation and revenue workflows",
                "GMB and local growth technology",
                "White-label systems for agencies",
                "Business support services",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/contact">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-8 gradient-border">
          <div className="glass shadow-soft rounded-[var(--radius-lg)] p-6">
          <div className="text-sm font-semibold text-slate-900 dark:text-white">
            Built for businesses that need real systems, not random execution
          </div>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
              Businesses, agencies, and service brands
            </div>
            <div className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
              Automation-driven execution
            </div>
            <div className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
              White-label ready solutions
            </div>
            <div className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
              Strategy, implementation, and support
            </div>
            <div className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
              Custom plus scalable architecture
            </div>
            <div className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
              Product and service delivery experience
            </div>
          </div>
        </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass shadow-soft rounded-2xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Who we serve
            </div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
              {[
                "Agencies and local businesses",
                "Service companies and consultants",
                "Startups and growing teams",
                "Real estate and healthcare clinics",
                "Education businesses",
                "D2C and e-commerce support systems",
                "Enterprise teams needing automation",
              ].map((item) => (
                <li key={item} className="rounded-xl bg-white/60 p-2.5 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass shadow-soft rounded-2xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Contact details
            </div>
            <div className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <p>📧 Email: support@saralone.com</p>
              <p>📞 Mobile: +91 9403892801</p>
              <p>
                📍 Address: C-10, First Floor KLIC Raisen Road, Bhopal, Madhya
                Pradesh - 462022, India
              </p>
              <p>🌐 Website: www.saralone.com</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Contact Us</Button>
              <Button variant="secondary" href="/contact">
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

