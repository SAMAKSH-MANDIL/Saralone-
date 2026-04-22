import {
  Activity,
  Bot,
  Building2,
  ChartNoAxesCombined,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cpu,
  FileText,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserCheck2,
  Users,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { LogoCloud } from "@/components/site/logo-cloud";
import { VideoCarousel } from "@/components/site/video-carousel";
import { demoLogos, demoVideos } from "@/lib/demo-data";

export default function Home() {
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

      {/* HERO */}
      <Section className="pt-10 sm:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/70 backdrop-blur dark:bg-slate-900/50 dark:text-slate-200 dark:ring-slate-800">
              <Sparkles className="size-4 text-indigo-600 dark:text-indigo-300" />
              Premium AI automation + software delivery
            </div>

            <h1 className="text-balance font-[var(--font-display)] text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              AI Automation, Software & Growth Systems for Modern Businesses
            </h1>
            <p className="text-pretty text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              Saral One helps businesses automate workflows, improve lead
              management, and build scalable digital systems—so you close faster
              with less manual work.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" className="animate-shimmer relative overflow-hidden">
                Book Free Consultation <ChevronRight className="size-4" />
              </Button>
              <Button variant="secondary" href="#services">
                Explore Services
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: CheckCircle2, title: "Fast delivery", desc: "2–6 week builds" },
                { icon: ShieldCheck, title: "Reliable", desc: "Secure + scalable" },
                { icon: Activity, title: "Measurable", desc: "Clear ROI tracking" },
              ].map((f) => (
                <div key={f.title} className="glass shadow-soft rounded-2xl px-4 py-4">
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

          {/* Mock dashboard */}
          <div className="relative">
            <div className="gradient-border">
              <div className="glass shadow-soft relative overflow-hidden rounded-[var(--radius-lg)] p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full bg-rose-400/80" />
                    <div className="size-2 rounded-full bg-amber-400/80" />
                    <div className="size-2 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-300">
                    Saral One Console
                  </div>
                </div>

                <div className="mt-5 grid gap-4 lg:grid-cols-2">
                  <div className="glass rounded-2xl p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-300">
                        Lead pipeline
                      </div>
                      <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                        +38%
                      </div>
                    </div>
                    <div className="mt-3 space-y-2">
                      {[
                        ["New leads", "124"],
                        ["Qualified", "67"],
                        ["Booked calls", "22"],
                      ].map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between rounded-xl bg-white/60 px-3 py-2 dark:bg-slate-950/30">
                          <div className="text-xs text-slate-600 dark:text-slate-300">{k}</div>
                          <div className="text-xs font-semibold text-slate-900 dark:text-white">{v}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="glass rounded-2xl p-4">
                    <div className="text-xs font-semibold text-slate-500 dark:text-slate-300">
                      Automations running
                    </div>
                    <div className="mt-3 flex items-end justify-between">
                      <div>
                        <div className="text-3xl font-semibold text-slate-900 dark:text-white">
                          14
                        </div>
                        <div className="mt-1 text-xs text-slate-600 dark:text-slate-300">
                          SLA: 99.9%
                        </div>
                      </div>
                      <div className="animate-floaty grid place-items-center rounded-2xl bg-gradient-to-r from-sky-500/20 via-indigo-500/20 to-purple-500/20 p-3 ring-1 ring-slate-200/70 dark:ring-slate-800">
                        <Workflow className="size-6 text-indigo-600 dark:text-indigo-300" />
                      </div>
                    </div>
                    <div className="mt-4 h-24 rounded-2xl bg-[linear-gradient(120deg,rgba(14,165,233,0.18),rgba(99,102,241,0.22),rgba(168,85,247,0.18))] ring-1 ring-slate-200/70 dark:ring-slate-800" />
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Bot, label: "AI follow-ups" },
                    { icon: Cpu, label: "Custom software" },
                    { icon: ChartNoAxesCombined, label: "Growth dashboards" },
                  ].map((c) => (
                    <div key={c.label} className="glass rounded-2xl px-3 py-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-200">
                        <c.icon className="size-4 text-indigo-600 dark:text-indigo-300" />
                        {c.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-10 -left-10 size-48 rounded-full blob bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.28),transparent_60%)]" />
            <div className="pointer-events-none absolute -top-10 -right-10 size-56 rounded-full blob bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.22),transparent_60%)]" />
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section id="services" className="pt-14 sm:pt-20">
        <div className="text-center">
          <h2 className="text-balance font-[var(--font-display)] text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
            End-to-End Business Growth Solutions
          </h2>
          <p className="mx-auto mt-3 max-w-3xl px-1 text-sm leading-6 text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-lg lg:text-xl">
            From generating leads to streamlining operations -
            <span className="font-semibold text-indigo-600 dark:text-indigo-300">
              {" "}
              we build complete systems that drive growth and efficiency.
            </span>
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              id: "1",
              badge: "from-indigo-500 to-violet-500",
              title: "Lead Generation System",
              desc: "Get consistent, high-quality leads from multiple channels",
              imageSrc: "/Lead genration.png",
              bullets: [
                "Google (SEO & Business Profile optimization)",
                "Meta Ads (Facebook & Instagram performance marketing)",
                "High-converting landing pages",
              ],
            },
            {
              id: "2",
              badge: "from-emerald-500 to-teal-500",
              title: "Sales Automation System",
              desc: "Convert leads into customers automatically",
              imageSrc: "/sales automation.png",
              bullets: [
                "WhatsApp & chatbot automation",
                "CRM setup & pipeline management",
                "Auto follow-ups & smart reply systems",
              ],
            },
            {
              id: "3",
              badge: "from-blue-500 to-indigo-500",
              title: "Product & SaaS Development",
              desc: "Build scalable systems for long-term growth",
              imageSrc: "/Product & SaaS.png",
              bullets: [
                "Custom SaaS tools for your business",
                "MVP development for startups",
                "Full-stack web applications",
              ],
            },
            {
              id: "4",
              badge: "from-amber-500 to-orange-500",
              title: "Business Systems & Automation",
              desc: "Manage and scale your entire business with the right systems",
              imageSrc: "/Business system.png",
              bullets: [
                "End-to-end system implementation",
                "CRM, Finance, Operations & Automation setup",
                "Custom workflows & process optimization",
              ],
            },
          ].map((s) => (
            <div key={s.title} className="rounded-3xl bg-white/70 p-4 shadow-soft ring-1 ring-slate-200/80 backdrop-blur sm:p-5 dark:bg-slate-900/50 dark:ring-slate-800">
              <div className="flex items-start gap-3">
                <div className={`grid size-10 place-items-center rounded-xl bg-gradient-to-r text-lg font-bold text-white ${s.badge}`}>
                  {s.id}
                </div>
                <div>
                  <h3 className="text-left text-lg font-semibold leading-6 text-slate-900 sm:text-xl dark:text-white">
                    {s.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-left text-sm text-slate-600 dark:text-slate-300">
                {s.desc}
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl bg-white/90 ring-1 ring-slate-200/70 dark:bg-slate-950/40 dark:ring-slate-800">
                <Image
                  src={s.imageSrc}
                  alt={s.title}
                  width={1024}
                  height={1024}
                  className="h-52 w-full object-cover sm:h-56 lg:h-44"
                />
              </div>
              <ul className="mt-5 space-y-2 text-left">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-200">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-emerald-500" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-7">
          {[
            {
              labelTop: "More",
              labelBottom: "Leads",
              tone: "from-indigo-500 to-violet-500",
              textTone: "text-indigo-900 dark:text-indigo-100",
              icon: Users,
            },
            {
              labelTop: "Better",
              labelBottom: "Conversions",
              tone: "from-emerald-500 to-teal-500",
              textTone: "text-emerald-800 dark:text-emerald-100",
              icon: UserCheck2,
            },
            {
              labelTop: "Scalable",
              labelBottom: "Systems",
              tone: "from-blue-500 to-indigo-500",
              textTone: "text-blue-800 dark:text-blue-100",
              icon: ChartNoAxesCombined,
            },
            {
              labelTop: "Sustainable",
              labelBottom: "Growth",
              tone: "from-amber-500 to-orange-500",
              textTone: "text-amber-800 dark:text-amber-100",
              icon: TrendingUp,
            },
          ].map((x, idx, arr) => (
            <div key={`${x.labelTop}-${x.labelBottom}`} className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2.5 shadow-soft ring-1 ring-slate-200/80 sm:gap-3 sm:px-4 sm:py-3 dark:bg-slate-900/60 dark:ring-slate-700">
                <div className={`grid size-11 place-items-center rounded-xl bg-gradient-to-r ${x.tone}`}>
                  <x.icon className="size-5 text-white" />
                </div>
                <div className={`text-left text-sm font-semibold leading-5 sm:text-base ${x.textTone}`}>
                  <div>{x.labelTop}</div>
                  <div>{x.labelBottom}</div>
                </div>
              </div>
              {idx < arr.length - 1 ? (
                <div className="hidden items-center lg:flex">
                  <div className="w-9 border-t-2 border-dotted border-cyan-500/70" />
                  <ChevronRight className="size-4 text-cyan-500/90" />
                </div>
              ) : null}
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center">
          <div className="rounded-full bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 shadow-soft ring-1 ring-slate-200/80 dark:bg-slate-900/60 dark:text-slate-200 dark:ring-slate-700">
            One Partner. <span className="text-indigo-600 dark:text-indigo-300">Complete Growth.</span>
          </div>
        </div>
      </Section>

      {/* TOOLS */}
      <Section className="pt-14">
        <div className="text-center">
          <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Powered by the Right Tools
          </h2>
          <p className="mx-auto mt-4 max-w-4xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            We implement the best-fit tools and platforms based on your business needs — not limited to one software.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl bg-[#f5f1ff] p-4 sm:p-6">
          <div className="flex w-[200%] items-stretch gap-4 animate-marquee">
            {[
              { label: "Zoho", logoSrc: "/zoho.png" },
              { label: "Outplay", logoSrc: "/outplay.png" },
              { label: "Odoo", logoSrc: "/odoo.png" },
              { label: "Kraya", logoSrc: "/kraya.png" },
              { label: "n8n", logoSrc: "/n8n.png" },
            ]
              .concat([
                { label: "Zoho", logoSrc: "/zoho.png" },
                { label: "Outplay", logoSrc: "/outplay.png" },
                { label: "Odoo", logoSrc: "/odoo.png" },
                { label: "Kraya", logoSrc: "/kraya.png" },
                { label: "n8n", logoSrc: "/n8n.png" },
              ])
              .map((tool, idx) => (
                <div
                  key={`${tool.label}-${idx}`}
                  className="flex h-[165px] w-[220px] shrink-0 flex-col items-center justify-center rounded-2xl bg-white px-4 py-6 shadow-[0_6px_20px_rgba(99,102,241,0.08)] ring-1 ring-[#e9e3ff]"
                >
                  <img
                    src={tool.logoSrc}
                    alt={`${tool.label} logo`}
                    loading="lazy"
                    className="h-14 w-auto max-w-[150px] object-contain"
                  />
                  <div className="mt-5 text-center text-2xl font-semibold leading-none tracking-tight text-[#201547]">
                    {tool.label}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Section>

      {/* LOGOS */}
      <Section className="pt-14">
        <SectionHeading
          eyebrow="Trusted"
          title="Trusted by Business Owners from Various Industries"
          subtitle=""
        />
        <div className="mt-8">
          <LogoCloud items={demoLogos} />
        </div>
      </Section>

      {/* DEMO VIDEOS */}
      <Section className="pt-20">
        <SectionHeading
          eyebrow="Demos"
          title="See what the systems look like"
          subtitle="Short walkthroughs of lead flows, dashboards, and automations (demo embeds)."
        />
        <div className="mt-10">
          <VideoCarousel items={demoVideos} />
        </div>
      </Section>

      {/* PROCESS */}
      <Section className="pt-20">
        <SectionHeading
          eyebrow="Process"
          title="A simple process that ships fast"
          subtitle="Clarity, speed, and iteration—without chaos."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {[
            { title: "Understand", icon: Sparkles, desc: "We map goals, systems and bottlenecks." },
            { title: "Design", icon: FileText, desc: "We propose flows, screens, and ROI metrics." },
            { title: "Build", icon: Cpu, desc: "We implement quickly with clean QA." },
            { title: "Optimize", icon: Activity, desc: "We measure, iterate and scale." },
          ].map((st, idx) => (
            <div key={st.title} className="glass shadow-soft rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <div className="grid size-10 place-items-center rounded-2xl bg-white/60 ring-1 ring-slate-200/70 dark:bg-slate-950/30 dark:ring-slate-800">
                  <st.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div className="text-xs font-semibold text-slate-400">0{idx + 1}</div>
              </div>
              <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                {st.title}
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {st.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* RESULTS */}
      <Section className="pt-20">
        <SectionHeading
          eyebrow="Results"
          title="Outcomes you can measure"
          subtitle="We focus on lead-to-close speed and operational efficiency."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            { icon: ChartNoAxesCombined, kpi: "+40%", label: "Lead growth" },
            { icon: Clock, kpi: "-60%", label: "Response time" },
            { icon: Workflow, kpi: "3×", label: "Efficiency boost" },
          ].map((r) => (
            <div key={r.label} className="glass shadow-soft rounded-2xl p-6">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-gradient-to-r from-sky-500/15 via-indigo-500/15 to-purple-500/15 ring-1 ring-slate-200/70 dark:ring-slate-800">
                  <r.icon className="size-5 text-indigo-600 dark:text-indigo-300" />
                </div>
                <div>
                  <div className="text-3xl font-semibold text-slate-900 dark:text-white">
                    {r.kpi}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-300">
                    {r.label}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">
                Built with clear tracking, clean handoffs, and automations that
                don’t break on day 10.
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="pt-20">
        <SectionHeading
          eyebrow="Proof"
          title="Loved by teams that value speed"
          subtitle="Result-based reviews that build trust."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {[
            {
              name: "Ankit Sharma",
              company: "Agency Partner",
              quote: "Increased our leads by 40% using automation. Response time dropped dramatically.",
            },
            {
              name: "Dr. Meera Jain",
              company: "Healthcare Clinic",
              quote: "WhatsApp + follow-up system streamlined bookings and reduced no-shows.",
            },
            {
              name: "Rohit Verma",
              company: "Local Services",
              quote: "The pipeline + reminders helped us close faster without extra staff.",
            },
          ].map((t) => (
            <div key={t.name} className="glass shadow-soft rounded-2xl p-6 transition hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <div className="grid size-11 place-items-center rounded-2xl bg-white/60 ring-1 ring-slate-200/70 dark:bg-slate-950/30 dark:ring-slate-800">
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    {t.name
                      .split(" ")
                      .map((x) => x[0])
                      .slice(0, 2)
                      .join("")}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-300">
                    {t.company}
                  </div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-1 text-amber-400">
                {"★★★★★".split("").map((s, i) => (
                  <span key={i} aria-hidden className="text-sm">
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                “{t.quote}”
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pt-20">
        <SectionHeading
          eyebrow="FAQ"
          title="Quick answers before you book"
          subtitle="Clear expectations = better delivery."
        />
        <div className="mt-10 mx-auto max-w-3xl">
          <div className="gradient-border">
            <div className="glass shadow-soft rounded-[var(--radius-lg)] p-2 sm:p-3">
              <Accordion
                className="gap-2"
                items={[
                  {
                    q: "What services does Saral One provide?",
                    a: "AI automation, chatbots, custom software, lead systems, GMB growth tooling, and white-label delivery for agencies.",
                  },
                  {
                    q: "Do you build custom software?",
                    a: "Yes—dashboards, portals, internal tools, and full products. We build for performance, maintainability, and scale.",
                  },
                  {
                    q: "Can you automate workflows?",
                    a: "Absolutely. We connect your tools (CRM, WhatsApp, email, sheets, calendars) and automate follow-ups, tagging, and reporting.",
                  },
                  {
                    q: "Do you offer white-label solutions?",
                    a: "Yes. We deliver under your agency brand with clean docs, handoff, and ongoing support if needed.",
                  },
                  {
                    q: "How do I get started?",
                    a: "Click Book Consultation. We’ll understand your goal, share a plan + timeline, then start with a fast MVP sprint.",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section className="pt-20 pb-24">
        <div className="glass shadow-soft relative overflow-hidden rounded-3xl p-10 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full blob"
            style={{
              background:
                "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.28), transparent 60%)",
            }}
          />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                <CheckCircle2 className="size-4 text-emerald-600 dark:text-emerald-300" />
                Free strategy call
              </div>
              <h3 className="mt-4 text-balance font-[var(--font-display)] text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                Ready to automate and scale your business?
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                Book a call and get a clear roadmap for automation + growth—built
                for conversions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button href="/contact" className="animate-shimmer relative overflow-hidden">
                Book a Call <ChevronRight className="size-4" />
              </Button>
              <Button variant="secondary" href="/contact">
                Get Proposal
              </Button>
              <div className="mt-2 text-xs text-slate-500 dark:text-slate-300">
                Typical reply time: under 24 hours
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
