import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  Database,
  Share2,
  Lock,
  Cookie,
  Clock,
  Scale,
  ExternalLink,
  Baby,
  RefreshCw,
  Mail,
  Globe,
  Phone,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy – Saralone",
  description:
    "Saralone's Privacy Policy explains how we collect, use, store, and safeguard your information when you interact with our digital platforms or communicate with us.",
  openGraph: {
    title: "Privacy Policy – Saralone",
    description: "Learn how Saralone protects your data and privacy.",
    url: "/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy – Saralone",
    description: "Learn how Saralone protects your data and privacy.",
  },
};

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    body: "We may collect personal information such as your name, email address, phone number, company name, and billing details when you contact us, fill out forms, or engage our services. In addition, we may collect technical data such as your IP address, browser type, device information, operating system, and browsing behavior on our website. For project execution, we may also collect business-related information, files, documents, or credentials that you voluntarily share with us.",
  },
  {
    icon: Shield,
    title: "How We Use Your Information",
    body: "The information we collect is used to provide and manage our services effectively, communicate with you regarding your inquiries or ongoing projects, and improve our website, applications, and software solutions. We may also use your information to process payments, send important updates, and occasionally share promotional content related to our services. Additionally, we use this data to maintain security, prevent fraud, and ensure smooth operation of our systems.",
  },
  {
    icon: Share2,
    title: "Sharing of Information",
    body: "Saralone does not sell your personal information to third parties. However, we may share your data with trusted service providers such as hosting companies, payment gateways, and analytics platforms that help us operate our business. We may also disclose information if required by law or to protect our legal rights. All third parties associated with us are required to maintain the confidentiality and security of your information.",
  },
  {
    icon: Lock,
    title: "Data Security",
    body: "We take appropriate security measures to protect your data, including the use of secure servers, encryption, and access control systems. While we strive to protect your information, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking Technologies",
    body: "Our website may use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and remember your preferences. You have the option to disable cookies through your browser settings, although this may affect certain functionalities of the website.",
  },
  {
    icon: Clock,
    title: "Data Retention",
    body: "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Once the data is no longer required, we take reasonable steps to securely delete or anonymize it.",
  },
  {
    icon: Scale,
    title: "Your Rights",
    body: "Depending on your location, you may have rights regarding your personal data, including the right to access, update, or delete your information, withdraw consent, or object to certain types of data processing. To exercise these rights, you can contact us using the details provided below.",
  },
  {
    icon: ExternalLink,
    title: "Third-Party Links",
    body: "Our website or services may contain links to third-party websites. Please note that we are not responsible for the privacy practices or content of such external sites, and we encourage you to review their privacy policies separately.",
  },
  {
    icon: Baby,
    title: "Children's Privacy",
    body: "Saralone's services are not intended for individuals under the age of 18, and we do not knowingly collect personal data from children. If we become aware that such information has been collected, we will take appropriate steps to remove it.",
  },
  {
    icon: RefreshCw,
    title: "Changes to This Policy",
    body: "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements. Any updates will be posted on this page with a revised effective date.",
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

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative py-24 sm:py-32">
        {/* Mesh background */}
        <div className="pointer-events-none absolute inset-0 mesh opacity-60" />
        {/* Blurred blobs */}
        <div
          className="blob pointer-events-none absolute -top-40 -left-40 size-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(99,102,241,0.28) 0%, transparent 70%)",
          }}
        />
        <div
          className="blob pointer-events-none absolute -bottom-20 right-0 size-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(168,85,247,0.22) 0%, transparent 70%)",
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
              <Shield className="size-3.5 text-indigo-500" />
              Effective Date: 1 May 2026
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Privacy{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, rgb(99,102,241) 0%, rgb(168,85,247) 50%, rgb(14,165,233) 100%)",
                }}
              >
                Policy
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base leading-7 text-slate-600 dark:text-slate-300">
              Saralone values your privacy and is committed to protecting the
              information you share with us when you visit{" "}
              <a
                href="https://saralone.com"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                saralone.com
              </a>{" "}
              or use our website, application, and software development services.
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
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(168,85,247,0.05) 100%)",
                  }}
                />

                {/* Section number + icon */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex size-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{
                      background:
                        "linear-gradient(135deg, rgb(99,102,241), rgb(168,85,247))",
                    }}
                  >
                    <Icon className="size-4.5" />
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
                      "linear-gradient(135deg, rgb(99,102,241), rgb(14,165,233))",
                  }}
                >
                  <Mail className="size-5" />
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">
                  Contact Us
                </h2>
                <p className="mt-1 max-w-xs text-sm text-slate-500 dark:text-slate-400">
                  Questions about this policy or your data? Reach out to us
                  through any of the channels below.
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
                      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition group-hover/item:bg-indigo-50 group-hover/item:text-indigo-600 dark:bg-slate-800 dark:text-slate-400 dark:group-hover/item:bg-indigo-950 dark:group-hover/item:text-indigo-400">
                        <CIcon className="size-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-medium uppercase tracking-wider text-slate-400 dark:text-slate-500">
                          {c.label}
                        </div>
                        <div className="text-sm font-medium text-slate-700 transition group-hover/item:text-indigo-600 dark:text-slate-200 dark:group-hover/item:text-indigo-400">
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
