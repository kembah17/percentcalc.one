import Link from "next/link";
import { tools } from "@/lib/tools-data";

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-surface-dark border-t border-border dark:border-border-dark mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">%</span>
              <span className="text-lg font-bold text-primary">percentcalc<span className="text-text dark:text-text-dark">.one</span></span>
            </Link>
            <p className="text-sm text-text-light dark:text-text-dark-muted">
              Free online percentage calculator suite. All calculations happen in your browser — no data is sent to any server.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-text dark:text-text-dark mb-3">Calculators</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/${tool.slug}`} className="text-sm text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text dark:text-text-dark mb-3">Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-to-calculate-percentage" className="text-sm text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  How to Calculate Percentage
                </Link>
              </li>
              <li>
                <Link href="/percentage-increase-decrease-formula" className="text-sm text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Percentage Increase/Decrease Formula
                </Link>
              </li>
              <li>
                <Link href="/how-to-convert-fractions-to-percentages" className="text-sm text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Fractions to Percentages Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-text dark:text-text-dark mb-3">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-text-light dark:text-text-dark-muted hover:text-primary dark:hover:text-primary-light transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border dark:border-border-dark mt-8 pt-8 text-center">
          <p className="text-sm text-text-light dark:text-text-dark-muted">
            © {new Date().getFullYear()} percentcalc.one — Free Percentage Calculator Suite. All calculations are performed locally in your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
