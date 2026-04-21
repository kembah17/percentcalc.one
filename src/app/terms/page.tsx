import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — percentcalc.one",
  description: "Terms of service for percentcalc.one percentage calculator suite.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-text dark:text-text-dark mb-6">Terms of Service</h1>
      <p className="text-sm text-text-light dark:text-text-dark-muted mb-8">Last updated: April 2026</p>

      <div className="space-y-6">
        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">1. Acceptance of Terms</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            By accessing and using percentcalc.one, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">2. Service Description</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            percentcalc.one provides free online percentage calculators and mathematical conversion tools. All calculations are performed client-side in your web browser using JavaScript. We do not guarantee the accuracy of calculations for critical applications.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">3. Free Service</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            All tools on percentcalc.one are provided free of charge. We reserve the right to introduce premium features in the future, but existing free tools will remain free.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">4. Disclaimer of Warranties</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            The tools and content on percentcalc.one are provided &quot;as is&quot; without warranties of any kind. While we strive for accuracy, we do not warrant that calculations will be error-free. Do not rely solely on our tools for financial, medical, legal, or other critical decisions.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">5. Limitation of Liability</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            percentcalc.one shall not be liable for any damages arising from the use or inability to use our services, including but not limited to direct, indirect, incidental, or consequential damages.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">6. Intellectual Property</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            All content, design, and code on percentcalc.one is protected by intellectual property laws. You may use our tools for personal and commercial calculations but may not copy, reproduce, or redistribute the website&apos;s code or content.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">7. Changes to Terms</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            We reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.
          </p>
        </div>

        <div className="card">
          <h2 className="text-xl font-bold text-text dark:text-text-dark mb-3">8. Contact</h2>
          <p className="text-text-light dark:text-text-dark-muted">
            For questions about these terms, please visit our{" "}
            <Link href="/about" className="text-primary hover:underline">About page</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
