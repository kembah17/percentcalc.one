import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Percentage Calculator - Free Online Math Calculator Suite | percentcalc.one",
    template: "%s | percentcalc.one",
  },
  description: "Free online percentage calculator suite. Calculate percentages, percentage change, percentage difference, convert fractions to percentages, and split tips. 100% free, no signup required.",
  metadataBase: new URL("https://percentcalc.one"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://percentcalc.one",
    siteName: "percentcalc.one",
    title: "Percentage Calculator - Free Online Math Calculator Suite",
    description: "Free online percentage calculator suite. Calculate percentages, percentage change, percentage difference, convert fractions to percentages, and split tips.",
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
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
