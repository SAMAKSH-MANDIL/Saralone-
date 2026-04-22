import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const roles = [
  { title: "Sales Operations Intern", meta: "Navi Mumbai HQ  •  Full Time" },
  { title: "Growth Manager", meta: "1-2 Years  •  Full Time" },
  { title: "Program Management Intern", meta: "Navi Mumbai HQ  •  0  •  Full Time" },
  { title: "Senior Program Associate", meta: "Navi Mumbai HQ  •  1-3 Years  •  Full Time" },
  { title: "Associate Program Manager", meta: "Navi Mumbai HQ  •  1-3 Years  •  Full Time" },
  { title: "Program Associate", meta: "Navi Mumbai HQ  •  1+ Years  •  Full Time" },
  { title: "Business Development Executive", meta: "Navi Mumbai HQ  •  2-3 Years  •  Full Time" },
  { title: "Product Manager", meta: "Navi Mumbai HQ  •  2+ Years  •  Full Time" },
  { title: "Business Development Manager", meta: "Navi Mumbai HQ  •  4+ Years  •  Full Time" },
];

const perks = [
  "Competitive salary with performance bonuses",
  "Ownership, not micromanagement",
  "Flexible hours and WFH options",
  "Early team advantage, grow faster",
  "Unlimited coffee. Always brewing",
  "Team outings, offsites, and retreats",
];

export default function CareersPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />

      <Section className="pt-10 sm:pt-14">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-[var(--font-display)] text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-6xl">
            Create Real Impact. At Scale. With AI.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
            Help local businesses grow, thrive, and compete using cutting-edge AI
            that delivers real results where it matters most.
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            At Saral One, your work powers the success of thousands.
          </p>
          <div className="mt-6">
            <Button href="#open-roles">View all openings</Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1fr_2.4fr_1fr]">
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200/80 dark:ring-slate-700">
            <Image
              src="/careers-hero.png"
              alt="Team members working together"
              width={600}
              height={820}
              className="h-[300px] w-full object-cover object-left"
              priority
            />
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200/80 dark:ring-slate-700">
            <Image
              src="/careers-hero.png"
              alt="Saral One team photo"
              width={1200}
              height={820}
              className="h-[300px] w-full object-cover object-center"
              priority
            />
          </div>
          <div className="overflow-hidden rounded-2xl ring-1 ring-slate-200/80 dark:ring-slate-700">
            <Image
              src="/careers-hero.png"
              alt="Team collaboration scene"
              width={600}
              height={820}
              className="h-[300px] w-full object-cover object-right"
              priority
            />
          </div>
        </div>
      </Section>

      <Section className="pt-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-white/70 px-6 py-12 text-center shadow-soft ring-1 ring-slate-200/80 backdrop-blur dark:bg-slate-900/50 dark:ring-slate-700 sm:px-10">
          <h2 className="font-[var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">
            Our Mission
          </h2>
          <p className="mx-auto mt-5 max-w-4xl text-xl font-semibold leading-9 text-slate-700 dark:text-slate-200 sm:text-4xl sm:leading-[1.25]">
            To empower every local business with AI-driven marketing that delivers
            real growth — without the complexity, cost, or need for agencies.
          </p>
          <div className="mt-8">
            <Button href="#open-roles">View all openings</Button>
          </div>
        </div>
      </Section>

      <Section className="pt-20">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 via-violet-600 to-cyan-500 p-6 text-white shadow-soft sm:p-10">
          <h2 className="text-center font-[var(--font-display)] text-4xl font-semibold sm:text-5xl">
            Our Culture
          </h2>
          <p className="mx-auto mt-5 max-w-5xl text-center text-xl font-semibold leading-9 sm:text-4xl sm:leading-[1.2]">
            We believe that great work happens when talented people are empowered
            to do their best. Our culture is built on collaboration, innovation,
            and mutual respect.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <div className="text-sm font-semibold text-white/80">Core Values</div>
              <div className="mt-5 space-y-5">
                <div className="border-b border-white/20 pb-4">
                  <div className="text-3xl font-semibold">1. Innovation First</div>
                  <p className="mt-2 text-lg text-white/85">
                    We build boldly, execute fast, and solve real problems with
                    first-principles thinking.
                  </p>
                </div>
                <div className="border-b border-white/20 pb-4">
                  <div className="text-3xl font-semibold">2. Get Things Done</div>
                  <p className="mt-2 text-lg text-white/85">
                    We value speed, action, and momentum — progress over
                    perfection, always.
                  </p>
                </div>
                <div>
                  <div className="text-3xl font-semibold">
                    3. Clarity, Integrity & Accountability
                  </div>
                  <p className="mt-2 text-lg text-white/85">
                    We communicate simply and honestly. We own outcomes — good or
                    bad.
                  </p>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl ring-1 ring-white/25">
              <Image
                src="/careers-culture.png"
                alt="Team members collaborating"
                width={1000}
                height={760}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-20">
        <div className="text-center">
          <h2 className="font-[var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            Perks & Benefits
          </h2>
        </div>
        <div className="mx-auto mt-8 max-w-6xl rounded-3xl bg-slate-100/90 px-6 py-7 ring-1 ring-slate-200/80 dark:bg-slate-900/50 dark:ring-slate-700 sm:px-10">
          <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
            {perks.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-200"
              >
                <Check className="mt-1 size-4 shrink-0 text-emerald-600 dark:text-emerald-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="open-roles" className="pt-20 pb-16">
        <div className="text-center">
          <h2 className="font-[var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            Open Roles
          </h2>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="rounded-2xl bg-white/80 p-4 shadow-soft ring-1 ring-slate-200/80 dark:bg-slate-900/60 dark:ring-slate-700">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200"
            />
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950/40">
                Department
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950/40">
                Location
              </div>
              <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-950/40">
                Job Type
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4 flex items-center gap-3 text-xl font-semibold text-slate-900 dark:text-white">
              Other Jobs
              <span className="rounded-full bg-sky-600 px-3 py-1 text-sm text-white">
                9 Jobs
              </span>
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {roles.map((role) => (
                <div
                  key={role.title}
                  className="rounded-2xl bg-white/80 px-4 py-4 shadow-soft ring-1 ring-slate-200/80 dark:bg-slate-900/60 dark:ring-slate-700"
                >
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {role.title}
                  </div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                    {role.meta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
