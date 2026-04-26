import Link from "next/link";
import { tools } from "@/lib/tools-data";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-footer-bg)', color: 'var(--color-footer-text)' }} className="mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" style={{ textDecoration: 'none' }}>
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="var(--color-brand)"/>
                <text x="18" y="25" textAnchor="middle" fill="white" fontSize="20" fontWeight="700" fontFamily="system-ui">%</text>
              </svg>
              <span className="text-lg font-bold" style={{ color: 'var(--color-footer-link)' }}>percentcalc<span style={{ color: 'var(--color-footer-text)' }}>.one</span></span>
            </Link>
            <p className="text-sm" style={{ color: 'var(--color-footer-muted)' }}>
              Free online percentage calculator suite. All calculations happen in your browser — no data is sent to any server.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--color-footer-text)' }}>Calculators</h3>
            <ul className="space-y-2">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link href={`/${tool.slug}`} className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                    {tool.icon} {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--color-footer-text)' }}>Guides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/how-to-calculate-percentage" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  How to Calculate Percentage
                </Link>
              </li>
              <li>
                <Link href="/percentage-increase-decrease-formula" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  Percentage Increase/Decrease Formula
                </Link>
              </li>
              <li>
                <Link href="/how-to-convert-fractions-to-percentages" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  Fractions to Percentages Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3" style={{ color: 'var(--color-footer-text)' }}>Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid var(--color-footer-border)' }}>
          <p className="text-sm" style={{ color: 'var(--color-footer-muted)' }}>
            © {new Date().getFullYear()} percentcalc.one — Free Percentage Calculator Suite. All calculations are performed locally in your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
