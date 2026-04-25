import Link from "next/link";
import { articles } from "@/lib/tools-data";
import AdSlot from "@/components/ui/AdSlot";
import HomeToolGrid from "@/components/ui/HomeToolGrid";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text-heading)' }}>
          Free Online <span style={{ color: 'var(--color-brand)' }}>Percentage Calculator</span> Suite
        </h1>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-secondary)' }}>
          Calculate percentages, percentage change, percentage difference, convert fractions, and split tips — all free, all instant, all private. No signup required.
        </p>
      </section>

      {/* Tools Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-text-heading)' }}>Percentage Calculators & Converters</h2>
        <HomeToolGrid />
      </section>

      <AdSlot label="Homepage Ad" />

      {/* Articles Section */}
      <section className="mt-16 mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-text-heading)' }}>Learn About Percentages</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              style={{
                display: 'block',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                textDecoration: 'none',
                backgroundColor: 'var(--color-bg-card)',
                border: '2px solid var(--color-border)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease',
              }}
            >
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--color-text-heading)', marginBottom: '0.5rem' }}>
                {article.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: 0 }}>{article.description}</p>
              <span style={{ display: 'inline-block', marginTop: '0.75rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-brand)' }}>
                Read Guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Privacy Note */}
      <section className="text-center mt-12" style={{ backgroundColor: 'var(--color-bg-card)', border: '2px solid var(--color-border)', borderRadius: '0.75rem', padding: '1.5rem' }}>
        <p className="text-lg font-semibold mb-2" style={{ color: 'var(--color-text-heading)' }}>🔒 100% Private & Secure</p>
        <p style={{ color: 'var(--color-text-secondary)' }}>
          All calculations happen entirely in your browser. No data is ever sent to any server. No cookies, no tracking, no signup required.
        </p>
      </section>
    </div>
  );
}
