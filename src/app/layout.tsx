import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { CursorGlow } from "@/components/site/cursor-glow";
import { QuickActionsFab } from "@/components/site/quick-actions-fab";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.saralone.com"),
  title: {
    default: "Saral One — AI Automation, Software & Growth Systems",
    template: "%s | Saral One",
  },
  description:
    "Saral One helps businesses automate workflows, improve lead management, and build scalable digital systems.",
  applicationName: "Saral One",
  keywords: [
    "AI automation",
    "workflow automation",
    "custom software development",
    "SaaS development",
    "lead generation systems",
    "CRM automation",
    "business automation",
    "Saral One",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Saral One",
    title: "Saral One — AI Automation, Software & Growth Systems",
    description:
      "Saral One helps businesses automate workflows, improve lead management, and build scalable digital systems.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saral One — AI Automation, Software & Growth Systems",
    description:
      "Saral One helps businesses automate workflows, improve lead management, and build scalable digital systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <ScrollProgress />
          <CursorGlow />
          <div className="relative z-10 flex min-h-full flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <QuickActionsFab />
        </ThemeProvider>
      </body>
    </html>
  );
}
