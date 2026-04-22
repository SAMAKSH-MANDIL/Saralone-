export type DemoLogo = {
  name: string;
  href?: string;
  initials: string;
  logoSrc?: string;
  tone?: "indigo" | "sky" | "purple" | "emerald" | "slate";
};

export type DemoVideo = {
  title: string;
  subtitle?: string;
  embedUrl: string; // e.g. https://www.youtube-nocookie.com/embed/<id>
  tags?: string[];
};

export const demoLogos: DemoLogo[] = [
  { name: "Entrepreneurs Woods", initials: "EW", logoSrc: "/EW.png" },
  { name: "GrowBio Organics", initials: "GB", logoSrc: "/GrowBio.png" },
  { name: "Kisan One", initials: "KO", logoSrc: "/kisanone.png" },
  { name: "LNCIT Kalchuri", initials: "LK", logoSrc: "/klic.png" },
  { name: "Mapzo AI", initials: "MA", logoSrc: "/mapzoai.png" },
];

export const demoVideos: DemoVideo[] = [
  {
    title: "WhatsApp Lead → Booking Automation (Demo)",
    subtitle: "Auto-followups, tagging, and calendar booking flow.",
    embedUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    tags: ["WhatsApp", "Automation", "Lead system"],
  },
  {
    title: "Sales Pipeline Dashboard Walkthrough (Demo)",
    subtitle: "Simple KPIs, stage health, and team accountability.",
    embedUrl: "https://www.youtube-nocookie.com/embed/oHg5SJYRHA0",
    tags: ["Dashboard", "Reporting"],
  },
  {
    title: "Website Chatbot Qualifier (Demo)",
    subtitle: "Qualifies leads, answers FAQs, and books calls 24/7.",
    embedUrl: "https://www.youtube-nocookie.com/embed/6_b7RDuLwcI",
    tags: ["Chatbot", "AI"],
  },
  {
    title: "Review + GMB Growth System (Demo)",
    subtitle: "Trigger-based review requests + ops tracking.",
    embedUrl: "https://www.youtube-nocookie.com/embed/tVj0ZTS4WF4",
    tags: ["GMB", "Growth"],
  },
  {
    title: "Clinic Lead Funnel + Followups (Demo)",
    subtitle: "Capture, auto-qualify, and convert local clinic inquiries.",
    embedUrl: "https://www.youtube-nocookie.com/embed/M7lc1UVf-VE",
    tags: ["Clinic", "Funnels"],
  },
  {
    title: "Salon Booking Bot System (Demo)",
    subtitle: "Instant responses, slot booking, and reminder automations.",
    embedUrl: "https://www.youtube-nocookie.com/embed/ysz5S6PUM-U",
    tags: ["Salon", "Bookings"],
  },
  {
    title: "Founder Story Ad Flow (Demo)",
    subtitle: "Creative to CRM path with attribution and nurture loops.",
    embedUrl: "https://www.youtube-nocookie.com/embed/aqz-KE-bpKQ",
    tags: ["Ads", "Attribution"],
  },
  {
    title: "Local Brand Growth Dashboard (Demo)",
    subtitle: "Campaign and lead quality tracking in one place.",
    embedUrl: "https://www.youtube-nocookie.com/embed/jNQXAC9IVRw",
    tags: ["Dashboard", "Growth"],
  },
];

