import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — percentcalc.one",
  description: "Privacy policy for percentcalc.one. All calculations happen in your browser. No data collection, no cookies, no tracking.",
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-text dark:text-text-dark mb-6">Privacy Policy</h1>
      <p className="text-sm text-text-light dark:text-text-dark-muted mb-8">Last updated: April 2026</p>

      <div className="space-y-6">
        <div className="card">
          <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-3">Our Privacy Commitment</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            percentcalc.one is designed with privacy as a core principle. All percentage calculations, conversions, and computations happen <strong className="text-text dark:text-text-dark">entirely within your web browser</strong>. No data is transmitted to our servers or any third party.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">Data We Do NOT Collect</h2>
          <ul className="list-disc list-inside text-text-light dark:text-text-dark-muted space-y-1">
            <li>Numbers or values you enter into calculators</li>
            <li>Calculation results</li>
            <li>Personal information (name, email, etc.)</li>
            <li>We do not require account creation or login</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">Local Storage</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            We use your browser&apos;s local storage solely to remember your dark/light mode preference. This data never leaves your device and can be cleared at any time through your browser settings.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">Third-Party Services</h2>
          <p className="text-text-light dark:text-text-dark-muted mb-3">
            We may use third-party advertising services to display ads on our site. These services may use cookies and similar technologies to serve relevant ads. You can manage cookie preferences through your browser settings.
          </p>
          <p className="text-text-light dark:text-text-dark-muted">
            We may use analytics services to understand how visitors use our site in aggregate. This data is anonymized and does not identify individual users.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">Client-Side Processing</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            All calculator tools on percentcalc.one use 100% client-side JavaScript. This means:
          </p>
          <ul className="list-disc list-inside text-text-light dark:text-text-dark-muted space-y-1 mt-2">
            <li>Your data never leaves your device</li>
            <li>Calculations work even without an internet connection (once the page is loaded)</li>
            <li>There are no server-side APIs processing your inputs</li>
            <li>No calculation history is stored anywhere</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">Contact</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            If you have questions about this privacy policy, please visit our{" "}
            <Link href="/about" className="text-primary hover:underline">About page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
