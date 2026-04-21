export type DemoLogo = {
  name: string;
  href?: string;
  initials: string;
  tone?: "indigo" | "sky" | "purple" | "emerald" | "slate";
};

export type DemoVideo = {
  title: string;
  subtitle?: string;
  embedUrl: string; // e.g. https://www.youtube-nocookie.com/embed/<id>
  tags?: string[];
};

export const demoLogos: DemoLogo[] = [
  { name: "BrightCare Clinic", initials: "BC", tone: "emerald" },
  { name: "Nova Realty", initials: "NR", tone: "indigo" },
  { name: "EduPilot", initials: "EP", tone: "sky" },
  { name: "RouteX Logistics", initials: "RX", tone: "purple" },
  { name: "Zenith Marketing", initials: "ZM", tone: "slate" },
  { name: "KiranaPlus", initials: "KP", tone: "indigo" },
  { name: "FinEdge", initials: "FE", tone: "sky" },
  { name: "HealthHive", initials: "HH", tone: "emerald" },
  { name: "BuildDesk", initials: "BD", tone: "purple" },
  { name: "LocalLoop", initials: "LL", tone: "slate" },
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
];

