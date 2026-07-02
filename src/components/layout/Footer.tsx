'use client';

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

                {/* More Free Tools */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '2rem', paddingTop: '1.5rem' }}>
          <h4 style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-footer-text)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>More Free Tools</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem 1.5rem' }}>
            <a href="https://pdftools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📄 PDF Tools</a>
            <a href="https://pictools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🖼️ Image Tools</a>
            <a href="https://developertools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>💻 Developer Tools</a>
            <a href="https://wordcount.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📝 Word Counter</a>
            <a href="https://texttools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔤 Text Tools</a>
            <a href="https://socialmediatools.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📱 Social Media Tools</a>
            <a href="https://randomize.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🎲 Random Generator</a>
            <a href="https://qrcodegenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📲 QR Code Generator</a>
            <a href="https://gpacalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🎓 GPA Calculator</a>
            <a href="https://invoicegenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🧾 Invoice Generator</a>
            <a href="https://caloriecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔥 Calorie Calculator</a>
            <a href="https://passwordgenerator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>🔐 Password Generator</a>
            <a href="https://datecalculator.one" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none' }}>📅 Date Calculator</a>
          </div>
        </div>

                {/* MyHustle Search Widget */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
          <div style={{ background: 'linear-gradient(135deg, #059669 0%, #047857 100%)', borderRadius: '12px', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '12px' }}>
              <a href="https://myhustle.space" target="_blank" rel="noopener" style={{ color: 'white', textDecoration: 'none', fontSize: '18px', fontWeight: 700 }}>🏢 MyHustle</a>
              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', margin: '4px 0 0' }}>Find businesses across Nigeria</p>
            </div>
            <form
              onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); const q = (e.currentTarget.elements.namedItem("mh-q") as HTMLInputElement)?.value?.trim(); if (q) window.open("https://myhustle.space/search?q=" + encodeURIComponent(q), "_blank"); }}
              style={{ display: 'flex', gap: '8px' }}
            >
              <input name="mh-q" type="text" placeholder="Search businesses..." style={{ flex: 1, padding: '10px 14px', border: 'none', borderRadius: '8px', fontSize: '14px', outline: 'none', background: 'white', color: '#1f2937' }} />
              <button type="submit" style={{ background: '#fbbf24', color: '#1f2937', border: 'none', borderRadius: '8px', padding: '10px 16px', fontWeight: 600, fontSize: '14px', cursor: 'pointer', whiteSpace: 'nowrap' }}>Search</button>
            </form>
            <div style={{ textAlign: 'center', marginTop: '8px' }}>
              <a href="https://myhustle.space/list-your-business" target="_blank" rel="noopener" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', textDecoration: 'none' }}>List your business free →</a>
            </div>
          </div>
        </div>


        {/* Nigerian Business Directory */}
        <div style={{ borderTop: '1px solid var(--color-footer-border)', marginTop: '1.5rem', paddingTop: '1rem' }}>
          <a href="https://myhustle.space" target="_blank" rel="noopener" style={{ fontSize: '0.8125rem', color: 'var(--color-footer-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Discover Nigerian businesses on <span style={{ color: 'var(--color-footer-link)', fontWeight: 500 }}>MyHustle.space</span> &mdash; Nigeria&apos;s free business directory
          </a>
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
