"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("sending");

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const whatsappText = [
      "Hi Saral One, I want to book a free call.",
      "",
      `Full Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company: ${company || "-"}`,
      `Message: ${message || "-"}`,
    ].join("\n");

    const appsScriptUrl =
      "https://script.google.com/macros/s/AKfycbxNilxt4ukO_clZXQ2qpfqrnvnH54Cn0EsHHwbIaQRL1crham23a_4UA1QObqVTgjxcZA/exec";
    const payload = {
      fullName,
      email,
      phone,
      company,
      message,
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    const whatsappUrl = `https://wa.me/919403892801?text=${encodeURIComponent(whatsappText)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Clear immediately after submit (WhatsApp logging continues in background).
    event.currentTarget.reset();
    setSubmitStatus("success");
    window.setTimeout(() => setSubmitStatus("idle"), 2200);

    fetch(appsScriptUrl, {
      method: "POST",
      mode: "no-cors",
      keepalive: true,
      headers: {
        "Content-Type": "text/plain;charset=UTF-8",
      },
      body: JSON.stringify(payload),
    }).catch(() => {
      // Keep WhatsApp flow uninterrupted even if sheet logging fails.
    });
  };

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <Section className="pt-16 pb-24">
        <SectionHeading
          title="Book a consultation"
          subtitle="Share your goal and current tools. We’ll reply with a clear plan + timeline."
          align="left"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="glass shadow-soft rounded-3xl p-8">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Basic information
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Share a few details and we will connect with you soon.
            </p>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="name@email.com"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Phone Number
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 98XXXXXXXX"
                    className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Company / Business Name
                </label>
                <input
                  name="company"
                  type="text"
                  placeholder="Enter your company name"
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us what you want to build or improve."
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-200"
                />
              </div>
              <div className="pt-1">
                <div className="flex flex-col gap-2">
                  <Button type="submit" disabled={submitStatus === "sending"}>
                    {submitStatus === "sending" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Submitting...
                      </>
                    ) : submitStatus === "success" ? (
                      "Submitted!"
                    ) : (
                      "Submit"
                    )}
                  </Button>

                  {submitStatus === "success" ? (
                    <p className="animate-pulse text-xs font-medium text-emerald-600 dark:text-emerald-300">
                      Submitted successfully.
                    </p>
                  ) : null}
                  {submitStatus === "error" ? (
                    <p className="text-xs font-medium text-rose-600 dark:text-rose-300">
                      Submission failed. Please try again.
                    </p>
                  ) : null}
                </div>
              </div>
            </form>
          </div>

          <div className="glass shadow-soft rounded-3xl p-8">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Contact details
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" />
                <a className="hover:text-slate-900 dark:hover:text-white" href="mailto:support@saralone.com">
                  support@saralone.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" />
                <a className="hover:text-slate-900 dark:hover:text-white" href="tel:+919403892801">
                  +91 9403892801
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <div>
                  C-10, First Floor KLIC Raisen Road,
                  <br />
                  Bhopal, Madhya Pradesh – 462022
                </div>
              </div>
            </div>

            <div className="mt-7">
              <Button href="mailto:support@saralone.com">Email Us</Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

