"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import Image from "next/image";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const roleOptions = [
  "Sales Operations Intern",
  "Growth Manager",
  "Program Management Intern",
  "Senior Program Associate",
  "Associate Program Manager",
  "Program Associate",
  "Business Development Executive",
  "Product Manager",
  "Business Development Manager",
  "Digital Marketer",
  "Sales Executive",
  "Operations & Sales Manager",
  "Developer",
  "CRM Specialist",
  "AI Automation Specialist",
  "CRM Implementation Specialist",
];

export default function CareersPage() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleApplicationSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("sending");

    const formData = new FormData(event.currentTarget);
    const selectedRole = String(formData.get("applyingFor") ?? "").trim();
    const safeApplyingFor = selectedRole && selectedRole !== "Select a role" ? selectedRole : "";

    const payload = {
      fullName: String(formData.get("fullName") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      applyingFor: safeApplyingFor,
      role: safeApplyingFor,
      experience: String(formData.get("experience") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    // UX: clear form + show success immediately (logging happens in background).
    event.currentTarget.reset();
    setSubmitStatus("success");
    window.setTimeout(() => setSubmitStatus("idle"), 2200);

    fetch("/api/careers-application", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch(() => {
      // Don't block success UI if backend logging fails.
    });
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />

      {/* Careers hero intentionally hidden for now */}

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
            <Button href="#open-roles">Apply now</Button>
          </div>
        </div>
      </Section>

      {/* Our Culture section intentionally hidden for now */}

      <Section id="open-roles" className="pt-20 pb-16">
        <div className="text-center">
          <h2 className="font-[var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            Job Application Form
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300 sm:text-base">
            Fill in your details and our hiring team will contact you shortly.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-500 p-6 text-white shadow-soft sm:p-8">
            <div className="text-sm font-semibold text-white/85">Careers at Saral One</div>
            <h3 className="mt-2 font-[var(--font-display)] text-3xl font-semibold leading-tight sm:text-4xl">
              Build products that drive real growth.
            </h3>
            <p className="mt-4 text-sm leading-6 text-white/90 sm:text-base">
              Join a fast-moving team where you get ownership, direct impact, and space
              to learn quickly.
            </p>
            <div className="mt-6 space-y-3">
              {[
                "Fast interview process",
                "Work on real client outcomes",
                "Mentorship and growth support",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-xl bg-white/15 px-3 py-2 text-sm">
                  <Check className="size-4 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/85 p-6 shadow-soft ring-1 ring-slate-200/80 backdrop-blur dark:bg-slate-900/60 dark:ring-slate-700 sm:p-8">
            <form className="grid gap-5 sm:grid-cols-2" onSubmit={handleApplicationSubmit}>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200 dark:focus:ring-indigo-900/40"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="name@email.com"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200 dark:focus:ring-indigo-900/40"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98XXXXXXXX"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200 dark:focus:ring-indigo-900/40"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Applying For
                </label>
                <select
                  name="applyingFor"
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200 dark:focus:ring-indigo-900/40"
                >
                  <option value="">Select a role</option>
                  {roleOptions.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-1">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Years of Experience
                </label>
                <input
                  name="experience"
                  type="text"
                  placeholder="e.g. 2 years"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200 dark:focus:ring-indigo-900/40"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Cover Letter / Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Tell us why you are a good fit for this role."
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200 dark:focus:ring-indigo-900/40"
                />
              </div>
              <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    By applying, you agree to be contacted regarding your application.
                  </p>
                  {submitStatus === "success" ? (
                    <p className="mt-1 animate-pulse text-xs font-medium text-emerald-600 dark:text-emerald-300">
                      Application submitted successfully.
                    </p>
                  ) : null}
                  {/* Error state intentionally hidden to avoid false negatives. */}
                </div>
                <Button
                  type="submit"
                  disabled={submitStatus === "sending"}
                  className={submitStatus === "success" ? "animate-pulse" : ""}
                >
                  {submitStatus === "sending" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" />
                      Submitting...
                    </>
                  ) : submitStatus === "success" ? (
                    "Submitted!"
                  ) : (
                    "Submit Application"
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
}
