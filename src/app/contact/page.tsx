import { Section, SectionHeading } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 mesh" />
      <Section className="pt-16 pb-24">
        <SectionHeading
          eyebrow="Contact"
          title="Book a consultation"
          subtitle="Share your goal and current tools. We’ll reply with a clear plan + timeline."
          align="left"
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
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

          <div className="glass shadow-soft rounded-3xl p-8">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">
              Quick message
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              (Form submission can be wired to email/CRM next. For now, WhatsApp or email works best.)
            </p>

            <div className="mt-6 grid gap-3">
              <Button href="https://wa.me/919403892801?text=Hi%20Saral%20One!%20I%20want%20to%20book%20a%20consultation." className="animate-shimmer relative overflow-hidden">
                WhatsApp Now
              </Button>
              <Button variant="secondary" href="/">
                Back to Home
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

