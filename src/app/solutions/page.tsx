import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  Bot,
  ChevronRight,
  BriefcaseBusiness,
  Cable,
  ChartNoAxesCombined,
  CheckCircle2,
  MapPinned,
  MessagesSquare,
  Workflow,
} from "lucide-react";

const coreServices = [
  {
    icon: Workflow,
    title: "AI Automation & Workflow Systems",
    desc: "WhatsApp automation, lead routing, CRM integration, chatbot automation, n8n workflows, and follow-up systems.",
  },
  {
    icon: MessagesSquare,
    title: "Chatbots, Voice Agents & Lead Qualification",
    desc: "Website and social lead bots, qualification logic, appointment booking, CRM updates, and AI voice workflows.",
  },
  {
    icon: Cable,
    title: "Custom Software, MVPs & Micro SaaS",
    desc: "MVPs, internal dashboards, admin panels, niche SaaS tools, process software, and custom integrations.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Lead Generation & Revenue Systems",
    desc: "Lead funnels, landing pages, ad flow support, CRM-connected nurture automation, and sales process structuring.",
  },
  {
    icon: MapPinned,
    title: "GMB Growth & Local Business Automation",
    desc: "Google Business Profile workflows, review automation, posting systems, Magic QR, local SEO support, and Mapzo AI solutions.",
  },
  {
    icon: BriefcaseBusiness,
    title: "White-Label Solutions for Agencies",
    desc: "White-label SaaS support, fulfillment systems, GMB automation, and delivery infrastructure for agency operations.",
  },
];

const industries = [
  "Agencies",
  "Local businesses",
  "Service businesses",
  "Startups",
  "Consultants",
  "Real estate",
  "Healthcare clinics",
  "Education businesses",
  "D2C and e-commerce support",
  "Enterprise process automation teams",
];

export default function SolutionsPage() {
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
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Core service systems
          </h3>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((s) => (
            <div
              key={s.title}
              className="group glass shadow-soft rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(99,102,241,0.16)]"
            >
              <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-r from-sky-500/15 via-indigo-500/15 to-purple-500/15 ring-1 ring-slate-200/70 dark:ring-slate-800">
                <s.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
              </div>
              <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300">
                {s.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{s.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-300">
                Learn more <ChevronRight className="size-3.5" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="glass shadow-soft rounded-2xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Products & platforms we power
            </div>
            <div className="mt-4 rounded-xl bg-white/60 p-4 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
              <div className="flex items-start gap-3">
                <Bot className="mt-0.5 size-5 text-indigo-600 dark:text-indigo-300" />
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    Mapzo AI
                  </div>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                    Google Business Profile automation, review workflows, local
                    visibility support, Magic QR, and agency-ready GMB systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="glass shadow-soft rounded-2xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              How we work
            </div>
            <ol className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
                1. Understand the business and map goals, lead flow, and pain points.
              </li>
              <li className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
                2. Design the right automation, software, and integration system.
              </li>
              <li className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
                3. Implement, test, and deploy across your operating environment.
              </li>
              <li className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800">
                4. Optimize for outcomes with continuous support and scaling.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="glass shadow-soft rounded-2xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Who we serve
            </div>
            <ul className="mt-3 grid gap-2 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
              {industries.map((industry) => (
                <li key={industry} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  {industry}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass shadow-soft rounded-2xl p-6">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Results and use cases
            </div>
            <div className="mt-3 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              {[
                "Lead Qualification Automation: Automated lead capture from social channels with connected CRM updates.",
                "GMB Growth Workflow: Improved review response consistency and local profile execution systems.",
                "Agency White-Label Support: Enabled partner agencies to deliver automation and GMB systems under their own brand.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl bg-white/60 p-3 ring-1 ring-slate-200/70 dark:bg-slate-900/40 dark:ring-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 gradient-border">
          <div className="glass shadow-soft relative overflow-hidden rounded-[var(--radius-lg)] p-6">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-20 size-52 rounded-full blob"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(14,165,233,0.24), transparent 65%)",
              }}
            />
            <div className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
              Ready to automate, streamline, and scale your business systems?
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Book a consultation with Saral One and let&apos;s build the right
              solution for your growth.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">Book a Call</Button>
              <Button variant="secondary" href="/contact">
                Get a Proposal
              </Button>
              <Button variant="ghost" href="/contact">
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">Book a Consultation</Button>
          <Button variant="secondary" href="/services">
            Explore Services
          </Button>
          <Button variant="ghost" href="/about">
            Learn About Saral One
          </Button>
        </div>
      </Section>
    </div>
  );
}

