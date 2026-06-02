import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// GSC verification loaded from env
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  ...(gscVerification && { verification: { google: gscVerification } }),
  title: {
    default: "Percentage Calculator - Free Online Math Calculator Suite | percentcalc.one",
    template: "%s | percentcalc.one",
  },
  description: "Free online percentage calculator suite. Calculate percentages, percentage change, percentage difference, convert fractions to percentages, and split tips. 100% free, no signup required.",
  metadataBase: new URL("https://www.percentcalc.one"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.percentcalc.one",
    siteName: "percentcalc.one",
    title: "Percentage Calculator - Free Online Math Calculator Suite",
    description: "Free online percentage calculator suite. Calculate percentages, percentage change, percentage difference, convert fractions to percentages, and split tips.",
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Percent Calculator' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Percentage Calculator - Free Online Math Calculator Suite",
    description: "Free online percentage calculator suite. Calculate percentages, percentage change, percentage difference, convert fractions to percentages, and split tips.",
  },
  robots: {
    index: true,
    follow: true,
  },

  alternates: { canonical: 'https://www.percentcalc.one' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var mode = localStorage.getItem('theme');
                  if (mode === 'dark' || (!mode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "PercentCalc.one",
              "url": "https://www.percentcalc.one",
              "description": "Free online percentage calculator tools. Calculate percentages, percentage change, percentage difference, and more."
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
