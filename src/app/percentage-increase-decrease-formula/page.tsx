import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema from "@/components/seo/FaqSchema";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "Percentage Increase & Decrease Formula — Complete Guide",
  description: "Master the percentage increase and decrease formula with business, finance, and everyday examples. Step-by-step guide with practice problems and a free calculator.",
  keywords: ["percentage increase formula", "percentage decrease formula", "percentage change formula", "how to calculate percentage increase"],
};

const faqs = [
  {
    question: "What is the formula for percentage increase?",
    answer: "Percentage Increase = ((New Value - Original Value) / Original Value) × 100. For example, if a price goes from $50 to $65: ((65-50)/50) × 100 = 30% increase.",
  },
  {
    question: "What is the formula for percentage decrease?",
    answer: "Percentage Decrease = ((Original Value - New Value) / Original Value) × 100. For example, if a price drops from $80 to $60: ((80-60)/80) × 100 = 25% decrease.",
  },
  {
    question: "How do I calculate a salary raise percentage?",
    answer: "Use the percentage increase formula: ((New Salary - Old Salary) / Old Salary) × 100. If your salary went from $50,000 to $55,000: ((55000-50000)/50000) × 100 = 10% raise.",
  },
  {
    question: "What is the difference between percentage change and percentage difference?",
    answer: "Percentage change measures increase or decrease from an original value (directional). Percentage difference compares two values without implying one is the original (non-directional). Use change for before/after comparisons; use difference for comparing two independent values.",
  },
  {
    question: "Can percentage increase be more than 100%?",
    answer: "Yes! A percentage increase over 100% means the value more than doubled. For example, if a stock goes from $10 to $25, that's a 150% increase. A 200% increase means the value tripled.",
  },
  {
    question: "How do I calculate the new value after a percentage increase?",
    answer: "New Value = Original Value × (1 + Percentage/100). For a 15% increase on $200: $200 × (1 + 15/100) = $200 × 1.15 = $230.",
  },
];

export default function PercentageIncreaseDecreaseFormulaPage() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <h1 className="text-4xl font-bold text-text dark:text-text-dark mb-4">
            Percentage Increase &amp; Decrease Formula — Complete Guide
          </h1>
          <p className="text-lg text-text-light dark:text-text-dark-muted mb-8">
            Understanding percentage increase and decrease is essential for business, finance, and everyday life. This guide covers the formulas, step-by-step examples, and common applications.
          </p>

          <div className="card mb-4 bg-primary/5 dark:bg-primary/10 border-primary/20">
            <p className="text-text dark:text-text-dark">
              🧮 <strong>Calculate instantly:</strong>{" "}
              <Link href="/percentage-change" className="text-primary hover:underline font-semibold">
                Use our free Percentage Change Calculator →
              </Link>
            </p>
          </div>

          {/* The Formulas */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">The Percentage Change Formulas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card border-l-4 border-l-green-500">
                <h3 className="text-xl font-bold text-text dark:text-text-dark mb-2">↑ Percentage Increase</h3>
                <div className="p-3 rounded-lg bg-surface-alt dark:bg-surface-dark mb-3">
                  <p className="font-mono text-text dark:text-text-dark text-center text-sm">
                    ((New - Original) / Original) × 100
                  </p>
                </div>
                <p className="text-sm text-text-light dark:text-text-dark-muted">
                  Used when the new value is <strong>larger</strong> than the original.
                </p>
              </div>
              <div className="card border-l-4 border-l-red-500">
                <h3 className="text-xl font-bold text-text dark:text-text-dark mb-2">↓ Percentage Decrease</h3>
                <div className="p-3 rounded-lg bg-surface-alt dark:bg-surface-dark mb-3">
                  <p className="font-mono text-text dark:text-text-dark text-center text-sm">
                    ((Original - New) / Original) × 100
                  </p>
                </div>
                <p className="text-sm text-text-light dark:text-text-dark-muted">
                  Used when the new value is <strong>smaller</strong> than the original.
                </p>
              </div>
            </div>
            <div className="card mt-4">
              <h3 className="text-lg font-bold text-text dark:text-text-dark mb-2">Universal Formula (handles both)</h3>
              <div className="p-3 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <p className="font-mono text-text dark:text-text-dark text-center">
                  Percentage Change = ((New Value - Original Value) / Original Value) × 100
                </p>
              </div>
              <p className="text-sm text-text-light dark:text-text-dark-muted mt-2">
                A positive result = increase. A negative result = decrease.
              </p>
            </div>
          </section>

          {/* Business Examples */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Business &amp; Finance Examples</h2>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">💼 Salary Raise</h3>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                Your annual salary increased from $52,000 to $58,500. What percentage raise did you receive?
              </p>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Change = $58,500 - $52,000 = $6,500</li>
                  <li>Percentage = ($6,500 / $52,000) × 100</li>
                  <li>= 0.125 × 100 = <strong className="text-primary">12.5% raise</strong></li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">📈 Stock Price Change</h3>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                A stock dropped from $145.20 to $128.50. What&apos;s the percentage decrease?
              </p>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Change = $128.50 - $145.20 = -$16.70</li>
                  <li>Percentage = (-$16.70 / $145.20) × 100</li>
                  <li>= -0.1150 × 100 = <strong className="text-red-600 dark:text-red-400">-11.5% (decrease)</strong></li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">🏠 Rent Increase</h3>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                Your monthly rent went from $1,400 to $1,540. What&apos;s the percentage increase?
              </p>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Change = $1,540 - $1,400 = $140</li>
                  <li>Percentage = ($140 / $1,400) × 100</li>
                  <li>= 0.10 × 100 = <strong className="text-primary">10% increase</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <AdSlot label="In-Article Ad" />

          {/* Reverse Calculation */}
          <section className="mb-10 mt-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Applying a Percentage Change</h2>
            <div className="card">
              <p className="text-text-light dark:text-text-dark-muted mb-4">
                Sometimes you need to calculate the result after applying a percentage change:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                  <h4 className="font-semibold text-text dark:text-text-dark mb-2">After an Increase</h4>
                  <p className="font-mono text-sm text-text-light dark:text-text-dark-muted">New = Original × (1 + %/100)</p>
                  <p className="text-sm text-text-light dark:text-text-dark-muted mt-2">
                    $200 + 15% = $200 × 1.15 = <strong className="text-primary">$230</strong>
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                  <h4 className="font-semibold text-text dark:text-text-dark mb-2">After a Decrease</h4>
                  <p className="font-mono text-sm text-text-light dark:text-text-dark-muted">New = Original × (1 - %/100)</p>
                  <p className="text-sm text-text-light dark:text-text-dark-muted mt-2">
                    $200 - 25% = $200 × 0.75 = <strong className="text-primary">$150</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Common Mistakes to Avoid</h2>
            <div className="card">
              <ul className="space-y-4 text-text-light dark:text-text-dark-muted">
                <li>
                  <strong className="text-text dark:text-text-dark">❌ Using the wrong base:</strong> Always divide by the <em>original</em> value, not the new value. A price going from $100 to $150 is a 50% increase, but going from $150 to $100 is only a 33.3% decrease.
                </li>
                <li>
                  <strong className="text-text dark:text-text-dark">❌ Assuming symmetry:</strong> A 50% increase followed by a 50% decrease does NOT return to the original. $100 → +50% → $150 → -50% → $75 (not $100!).
                </li>
                <li>
                  <strong className="text-text dark:text-text-dark">❌ Confusing change with difference:</strong> Percentage change has a direction (from old to new). Percentage difference treats both values equally.
                </li>
              </ul>
            </div>
          </section>

          <AdSlot label="Bottom Article Ad" />

          {/* Related Tools */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Related Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/percentage-change" className="card hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-1">Percentage Change Calculator</h3>
                <p className="text-sm text-text-light dark:text-text-dark-muted">Calculate percentage increase or decrease instantly.</p>
              </Link>
              <Link href="/percentage-difference" className="card hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-1">Percentage Difference Calculator</h3>
                <p className="text-sm text-text-light dark:text-text-dark-muted">Compare two values with visual bar comparison.</p>
              </Link>
              <Link href="/percentage-calculator" className="card hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-1">Percentage Calculator</h3>
                <p className="text-sm text-text-light dark:text-text-dark-muted">All three percentage formulas in one tool.</p>
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="card">
                  <h3 className="font-semibold text-text dark:text-text-dark mb-2">{faq.question}</h3>
                  <p className="text-text-light dark:text-text-dark-muted">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </>
  );
}
