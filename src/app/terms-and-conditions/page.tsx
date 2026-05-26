import type { Metadata } from "next";
import Link from "next/link";
import {
  FileText,
  Wrench,
  AlertTriangle,
  DatabaseBackup,
  CalendarOff,
  CreditCard,
  KeyRound,
  ShieldOff,
  PlusCircle,
  MessageSquare,
  Copyright,
  RefreshCw,
  Mail,
  Globe,
  Phone,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions – Saralone",
  description:
    "Read Saralone's Terms and Conditions governing the use of our website and services related to website, application, and software development.",
  openGraph: {
    title: "Terms & Conditions – Saralone",
    description: "Read our terms governing software and application development services.",
    url: "/terms-and-conditions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions – Saralone",
    description: "Read our terms governing software and application development services.",
  },
};

const sections = [
  {
    icon: Wrench,
    title: "Services Provided",
    body: "Saralone provides digital development services including websites, mobile applications, and software solutions based on client requirements. All services will be delivered as per the agreed scope, timeline, and commercial terms discussed before project initiation.",
  },
  {
    icon: CalendarOff,
    title: "Service Period",
    body: "The service period shall be considered active only until the client continues to take services from Saralone. During the service period, if the client or any third party makes changes to the website, application, or software without our knowledge or approval, Saralone will not be responsible for any issues, errors, or damages arising from such modifications.",
  },
  {
    icon: DatabaseBackup,
    title: "Backup Services",
    body: "If the client requires backup services for their website, application, or software, this must be requested separately. Backup services may be chargeable or included depending on the technical requirements and scope of the project. Saralone does not guarantee data backup unless explicitly agreed upon in writing.",
  },
  {
    icon: AlertTriangle,
    title: "No Guarantee on Software Backups",
    body: "Saralone does not guarantee the availability or recovery of software backups. It is the client's responsibility to ensure that proper backup systems are in place if required.",
  },
  {
    icon: ShieldOff,
    title: "Post-Service Responsibility",
    body: "After the completion of the service period, Saralone will not be responsible for any damage, malfunction, or issues arising in the website, application, or software.",
  },
  {
    icon: CreditCard,
    title: "Payments",
    body: "All payments must be made as per the agreed terms and commitment. In case of delayed or pending payments, Saralone reserves the right to pause or hold the project work until the dues are cleared.",
  },
  {
    icon: KeyRound,
    title: "Access Credentials",
    body: "Upon final delivery of the project, the client is responsible for ensuring that all access credentials, including hosting, admin panels, and third-party integrations, are updated or logged out from Saralone systems. This is to ensure the client's data privacy and protection from any future security risks.",
  },
  {
    icon: ShieldOff,
    title: "Limitation of Liability",
    body: "Saralone shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our services.",
  },
  {
    icon: PlusCircle,
    title: "Additional Work",
    body: "Any additional work or features requested beyond the agreed scope will be considered as extra services and may be subject to additional charges and timelines.",
  },
  {
    icon: MessageSquare,
    title: "Client Responsibilities",
    body: "The client agrees to provide accurate information, timely feedback, and necessary approvals required for project completion. Delays caused due to lack of communication or inputs from the client will not be the responsibility of Saralone.",
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    body: "All intellectual property rights for the final delivered product will be transferred to the client only after full payment is received. Until then, Saralone retains ownership of the work.",
  },
  {
    icon: RefreshCw,
    title: "Changes to Terms",
    body: "Saralone reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of our services implies acceptance of the updated terms.",
  },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "support@saralone.com",
    href: "mailto:support@saralone.com",
  },
  {
    icon: Globe,
    label: "Website",
    value: "saralone.com",
    href: "https://saralone.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9403892801",
    href: "tel:+919403892801",
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative py-24 sm:py-32">
        {/* Mesh background */}
        <div className="pointer-events-none absolute inset-0 mesh opacity-60" />
        {/* Blurred blobs */}
        <div
          className="blob pointer-events-none absolute -top-40 -right-40 size-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(14,165,233,0.26) 0%, transparent 70%)",
          }}
        />
        <div
          className="blob pointer-events-none absolute -bottom-20 left-0 size-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-4xl container-px">
          {/* Back link - Top Left */}
          <div className="mb-8 flex justify-start">
            <Link
              href="/"
              className="group/back inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors focus-ring rounded-lg py-1 pr-3"
            >
              <div className="flex size-8 items-center justify-center rounded-full bg-slate-100 group-hover/back:bg-slate-200 dark:bg-slate-800 dark:group-hover/back:bg-slate-700 transition-colors">
                <ArrowLeft className="size-4 transition-transform group-hover/back:-translate-x-1" />
              </div>
              Back to Home
            </Link>
          </div>

          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/70 px-4 py-1.5 text-[11px] sm:text-xs font-medium text-slate-600 backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/60 dark:text-slate-300 mb-6">
              <FileText className="size-3.5 text-sky-500" />
              Effective Date: 1 May 2026
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Terms &amp;{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(14,165,233) 0%, rgb(99,102,241) 50%, rgb(168,85,247) 100%)",
                }}
              >
                Conditions
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-300">
              Welcome to Saralone. These Terms and Conditions govern your use of{" "}
              <a
                href="https://saralone.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-sky-600 hover:underline dark:text-sky-400"
              >
                saralone.com
              </a>{" "}
              and our services related to website, application, and software
              development. By engaging with our services, you agree to be bound
              by these terms.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sections grid ── */}
      <section className="mx-auto max-w-6xl container-px pb-20">
        <div className="grid gap-5 sm:grid-cols-2">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative flex flex-col gap-3 rounded-2xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur shadow-soft transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/60"
              >
                {/* Subtle gradient accent on hover */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(14,165,233,0.05) 0%, rgba(99,102,241,0.05) 100%)",
                  }}
                />

                {/* Section number + icon */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, rgb(14,165,233), rgb(99,102,241))",
                    }}
                  >
                    <Icon className="size-4" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                  {s.title}
                </h2>
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {s.body}
                </p>
              </article>
            );
          })}
        </div>

        {/* ── Contact card ── */}
        <div className="mt-8 gradient-border">
          <div className="rounded-2xl bg-white/90 p-8 dark:bg-slate-900/80 backdrop-blur">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-10">
              {/* Left */}
              <div className="shrink-0">
                <div
                  className="flex size-12 items-center justify-center rounded-2xl text-white"
                  style={{
                    background:
                      "linear-gradient(135deg, rgb(14,165,233), rgb(99,102,241))",
                  }}
                >
                  <Mail className="size-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  Questions?
                </h2>
                <p className="mt-1 max-w-xs text-sm text-slate-500 dark:text-slate-400">
                  If you have any questions regarding these Terms and Conditions,
                  feel free to reach out to us.
                </p>
              </div>

              {/* Right – contact items */}
              <div className="flex flex-col gap-4 sm:ml-auto">
                {contactItems.map((c) => {
                  const CIcon = c.icon;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        c.href.startsWith("http") ? "noreferrer" : undefined
                      }
                      className="group/item flex items-center gap-3 focus-ring rounded-xl"
                    >
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition group-hover/item:bg-sky-50 group-hover/item:text-sky-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover/item:bg-sky-950 dark:group-hover/item:text-sky-400">
                        <CIcon className="size-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {c.label}
                        </div>
                        <div className="text-sm font-medium text-slate-700 transition group-hover/item:text-sky-600 dark:text-slate-200 dark:group-hover/item:text-sky-400">
                          {c.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-center text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Saral One · All rights reserved ·{" "}
          <Link
            href="/"
            className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors focus-ring rounded"
          >
            saralone.com
          </Link>
        </p>
      </section>
    </main>
  );
}
