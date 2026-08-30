import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileBottomNav from "@/components/layout/MobileBottomNav";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { PersonSchema, WebSiteSchema, OrganizationSchema } from "@/components/seo/JsonLd";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0d14" },
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(PORTFOLIO_DATA.personal.websiteUrl),
  title: {
    default: "Anil Kumar | Software Engineer, YouTube Creator & Founder of XpertBite, distdel.com",
    template: "%s | Anil Kumar",
  },
  description:
    "Official portfolio of Anil Kumar. Software engineer, YouTube creator (@ANILMONITOR, @ANILENGINEER, @VLOGANIl), architect of recstudentportal.com (Ramgarh Engineering College), founder of XpertBite (Garhwa Software Company), distdel.com, and easylike.in.",
  icons: {
    icon: [
      { url: "/images/anil.jpeg", type: "image/jpeg" },
      { url: "/images/anil.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/images/anil.jpeg", sizes: "192x192", type: "image/jpeg" },
    ],
    shortcut: "/images/anil.jpeg",
    apple: [
      { url: "/images/anil.jpeg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  keywords: [
    "rec student portal",
    "recstudentportal.com",
    "rec student portal ramgarh",
    "ramgarh engineering college student portal",
    "rec ramgarh student portal developer",
    "rec student portal anil kumar",
    "rec student portal redesign",
    "ramgarh engineering college",
    "garhdevi mandir website founder",
    "garhdevi mandir website",
    "garhdevi mandir website developer",
    "garhdevi mandir garhwa online",
    "garhdevi temple website developer",
    "maa garhdevi mandir garhwa website",
    "garhdevi mandir portal anil kumar",
    "garhwa software development company",
    "software development company in garhwa",
    "best software company in garhwa",
    "best software company in garhwa jharkhand",
    "website development in garhwa",
    "website designing company garhwa",
    "app development company garhwa",
    "mobile app development in garhwa",
    "web application development garhwa",
    "it company in garhwa jharkhand",
    "xpertbite software company garhwa",
    "xpertbite.in owner",
    "xpertbite founder",
    "xpertbite anil kumar",
    "distdel.com owner",
    "distdel.com founder",
    "distdel garhwa delivery",
    "easylike.in owner",
    "easylike founder",
    "easylike.in anil kumar",
    "Garhwa youtuber",
    "garhwa biggest youtuber",
    "garhwa influencer",
    "garhwa instagram influencer",
    "garhwa vlogger",
    "garhwa tech youtuber",
    "top youtuber in garhwa",
    "best youtuber in garhwa jharkhand",
    "anil kumar garhwa",
    "anil monitor garhwa",
    "anil engineer garhwa",
    "anil monitor vlog garhwa",
    "Anil Kumar",
    "Anil Monitor",
    "Anil Engineer",
    "Anil Monitor Vlog",
    "anilmonitor",
    "Full Stack Software Engineer",
    "IoT Projects India",
    "Windows 11 Troubleshooting",
    "ESP32 Arduino India",
  ],
  authors: [{ name: "Anil Kumar", url: PORTFOLIO_DATA.personal.websiteUrl }],
  creator: "Anil Kumar",
  publisher: "Anil Kumar",
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
    locale: "en_IN",
    url: PORTFOLIO_DATA.personal.websiteUrl,
    siteName: "Anil Kumar - Software Engineer & Multi-Channel Creator",
    title: "Anil Kumar | Software Engineer, Creator & Founder of XpertBite, distdel.com",
    description:
      "Explore Anil Kumar's 3 YouTube channels (@ANILMONITOR, @ANILENGINEER, @VLOGANIl), ventures (XpertBite, recstudentportal.com, distdel.com, easylike.in), and engineering projects.",
    images: [
      {
        url: "/images/anil.jpeg",
        width: 1200,
        height: 630,
        alt: "Anil Kumar - Software Engineer & Tech Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anil Kumar | Software Engineer & Multi-Channel Creator",
    description:
      "Official portfolio of Anil Kumar. Creator of Anil Monitor, Anil Engineer, and founder of XpertBite, recstudentportal.com, distdel.com.",
    images: ["/images/anil.jpeg"],
    creator: "@anilmonitor",
  },
  alternates: {
    canonical: PORTFOLIO_DATA.personal.websiteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth dark`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/anil.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/anil.jpeg" />
        <link rel="shortcut icon" href="/images/anil.jpeg" />
        <PersonSchema />
        <WebSiteSchema />
        <OrganizationSchema />
        {/* Anti-flicker script for dark/light mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('portfolio-theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.classList.remove('light');
                } else {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#0a0d14] text-slate-900 dark:text-[#f3f4f6] min-h-screen flex flex-col antialiased selection:bg-indigo-500 selection:text-white pb-16 md:pb-0 transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileBottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
