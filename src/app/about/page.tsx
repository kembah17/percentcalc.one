import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — percentcalc.one Percentage Calculator Suite",
  description: "Learn about percentcalc.one, a free online percentage calculator suite. All calculations happen in your browser with no data sent to any server.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-text dark:text-text-dark mb-6">About percentcalc.one</h1>

      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-3">Our Mission</h2>
        <p className="text-text-light dark:text-text-dark-muted mb-4">
          percentcalc.one provides a comprehensive suite of free percentage calculators and converters. Our goal is to make percentage calculations fast, easy, and accessible to everyone — students, professionals, and anyone who needs quick math help.
        </p>
        <p className="text-text-light dark:text-text-dark-muted">
          Every tool on this site is designed to give you instant results with step-by-step explanations, so you not only get the answer but understand the math behind it.
        </p>
      </div>

      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-3">🔒 Privacy First</h2>
        <p className="text-text-light dark:text-text-dark-muted mb-4">
          All calculations on percentcalc.one happen <strong className="text-text dark:text-text-dark">entirely in your browser</strong>. We don&apos;t send your data to any server, we don&apos;t store your calculations, and we don&apos;t require any signup or login.
        </p>
        <p className="text-text-light dark:text-text-dark-muted">
          Your privacy is not just a feature — it&apos;s a fundamental design principle. Read our{" "}
          <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for more details.
        </p>
      </div>

      <div className="card mb-6">
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-3">Our Tools</h2>
        <ul className="space-y-3 text-text-light dark:text-text-dark-muted">
          <li>
            <Link href="/percentage-calculator" className="text-primary hover:underline font-semibold">Percentage Calculator</Link>
            {" "} — Calculate what is X% of Y, find what percent X is of Y, or determine X is Y% of what.
          </li>
          <li>
            <Link href="/percentage-change" className="text-primary hover:underline font-semibold">Percentage Change Calculator</Link>
            {" "} — Find percentage increase or decrease between two values.
          </li>
          <li>
            <Link href="/percentage-difference" className="text-primary hover:underline font-semibold">Percentage Difference Calculator</Link>
            {" "} — Calculate the percentage difference between two values.
          </li>
          <li>
            <Link href="/fraction-to-percentage" className="text-primary hover:underline font-semibold">Fraction to Percentage Converter</Link>
            {" "} — Convert any fraction or mixed number to a percentage.
          </li>
          <li>
            <Link href="/percentage-to-fraction" className="text-primary hover:underline font-semibold">Percentage to Fraction Converter</Link>
            {" "} — Convert any percentage to a simplified fraction.
          </li>
          <li>
            <Link href="/tip-calculator" className="text-primary hover:underline font-semibold">Tip Calculator</Link>
            {" "} — Calculate tips and split bills with ease.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-3">Technology</h2>
        <p className="text-text-light dark:text-text-dark-muted">
          percentcalc.one is built with modern web technologies for speed and reliability. All calculations use pure JavaScript math running directly in your browser — no external APIs, no server processing, no delays. The site works offline once loaded and is optimized for both desktop and mobile devices.
        </p>
      </div>
    </div>
  );
}
