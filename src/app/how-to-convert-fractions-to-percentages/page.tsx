import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema from "@/components/seo/FaqSchema";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "How to Convert Fractions to Percentages — Step-by-Step Guide",
  description: "Learn how to convert fractions to percentages with visual examples, a common conversion table, and practice problems. Free fraction to percentage converter included.",
  keywords: ["fraction to percentage", "convert fraction to percent", "how to convert fractions", "fraction percentage conversion"],
};

const faqs = [
  {
    question: "How do you convert a fraction to a percentage?",
    answer: "Divide the numerator by the denominator, then multiply by 100. For example, 3/4 = 3 ÷ 4 = 0.75, then 0.75 × 100 = 75%.",
  },
  {
    question: "What is 1/3 as a percentage?",
    answer: "1/3 as a percentage is approximately 33.33% (repeating). Divide 1 by 3 to get 0.3333..., then multiply by 100.",
  },
  {
    question: "How do you convert a mixed number to a percentage?",
    answer: "First convert the mixed number to an improper fraction, then divide and multiply by 100. For example, 2 1/4 = 9/4 = 2.25 × 100 = 225%.",
  },
  {
    question: "What is 7/8 as a percentage?",
    answer: "7/8 = 7 ÷ 8 = 0.875 × 100 = 87.5%.",
  },
  {
    question: "How do you convert a percentage back to a fraction?",
    answer: "Write the percentage over 100 and simplify. For example, 75% = 75/100. The GCD of 75 and 100 is 25, so 75/100 = 3/4.",
  },
  {
    question: "Why do some fractions give repeating decimals?",
    answer: "Fractions with denominators that have prime factors other than 2 and 5 produce repeating decimals. For example, 1/3 = 0.333... because 3 is not a factor of any power of 10.",
  },
];

const conversionTable = [
  ["1/2", "0.5", "50%"],
  ["1/3", "0.333...", "33.33%"],
  ["2/3", "0.666...", "66.67%"],
  ["1/4", "0.25", "25%"],
  ["3/4", "0.75", "75%"],
  ["1/5", "0.2", "20%"],
  ["2/5", "0.4", "40%"],
  ["3/5", "0.6", "60%"],
  ["4/5", "0.8", "80%"],
  ["1/6", "0.166...", "16.67%"],
  ["5/6", "0.833...", "83.33%"],
  ["1/8", "0.125", "12.5%"],
  ["3/8", "0.375", "37.5%"],
  ["5/8", "0.625", "62.5%"],
  ["7/8", "0.875", "87.5%"],
  ["1/10", "0.1", "10%"],
  ["3/10", "0.3", "30%"],
  ["7/10", "0.7", "70%"],
  ["9/10", "0.9", "90%"],
  ["1/12", "0.0833...", "8.33%"],
];

export default function HowToConvertFractionsToPercentagesPage() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <h1 className="text-4xl font-bold text-text dark:text-text-dark mb-4">
            How to Convert Fractions to Percentages — Step-by-Step Guide
          </h1>
          <p className="text-lg text-text-light dark:text-text-dark-muted mb-8">
            Converting fractions to percentages is a fundamental math skill used in cooking, finance, academics, and everyday life. This guide walks you through the process with clear examples and a handy reference table.
          </p>

          <div className="card mb-4 bg-primary/5 dark:bg-primary/10 border-primary/20">
            <p className="text-text dark:text-text-dark">
              🔢 <strong>Convert instantly:</strong>{" "}
              <Link href="/fraction-to-percentage" className="text-primary hover:underline font-semibold">
                Use our free Fraction to Percentage Converter →
              </Link>
            </p>
          </div>

          {/* The Method */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">The Two-Step Method</h2>
            <div className="card">
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark mb-4">
                <p className="font-mono text-text dark:text-text-dark text-center text-lg">
                  Percentage = (Numerator ÷ Denominator) × 100
                </p>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-text-light dark:text-text-dark-muted">
                <li><strong className="text-text dark:text-text-dark">Divide</strong> the numerator (top number) by the denominator (bottom number)</li>
                <li><strong className="text-text dark:text-text-dark">Multiply</strong> the result by 100 to get the percentage</li>
              </ol>
            </div>
          </section>

          {/* Examples */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Step-by-Step Examples</h2>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">Example 1: Convert 3/4 to a percentage</h3>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Step 1: Divide 3 by 4 → 3 ÷ 4 = 0.75</li>
                  <li>Step 2: Multiply by 100 → 0.75 × 100 = <strong className="text-primary">75%</strong></li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">Example 2: Convert 2/3 to a percentage</h3>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Step 1: Divide 2 by 3 → 2 ÷ 3 = 0.6666...</li>
                  <li>Step 2: Multiply by 100 → 0.6666... × 100 = <strong className="text-primary">66.67%</strong></li>
                </ul>
                <p className="text-sm text-text-light dark:text-text-dark-muted mt-2 italic">
                  Note: This is a repeating decimal, so we round to 2 decimal places.
                </p>
              </div>
            </div>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">Example 3: Convert mixed number 1 3/8 to a percentage</h3>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Step 1: Convert to improper fraction → (1 × 8 + 3) / 8 = 11/8</li>
                  <li>Step 2: Divide 11 by 8 → 11 ÷ 8 = 1.375</li>
                  <li>Step 3: Multiply by 100 → 1.375 × 100 = <strong className="text-primary">137.5%</strong></li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">Example 4: Convert 5/16 to a percentage</h3>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Step 1: Divide 5 by 16 → 5 ÷ 16 = 0.3125</li>
                  <li>Step 2: Multiply by 100 → 0.3125 × 100 = <strong className="text-primary">31.25%</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <AdSlot label="In-Article Ad" />

          {/* Conversion Table */}
          <section className="mb-10 mt-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Common Fractions to Percentages Table</h2>
            <div className="card overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border dark:border-border-dark">
                    <th className="text-left py-2 px-3 font-semibold text-text dark:text-text-dark">Fraction</th>
                    <th className="text-left py-2 px-3 font-semibold text-text dark:text-text-dark">Decimal</th>
                    <th className="text-left py-2 px-3 font-semibold text-text dark:text-text-dark">Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  {conversionTable.map((row, i) => (
                    <tr key={i} className="border-b border-border/50 dark:border-border-dark/50 last:border-0">
                      <td className="py-2 px-3 font-mono text-text dark:text-text-dark">{row[0]}</td>
                      <td className="py-2 px-3 text-text-light dark:text-text-dark-muted">{row[1]}</td>
                      <td className="py-2 px-3 font-semibold text-primary">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Special Cases */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Special Cases &amp; Tips</h2>
            <div className="card">
              <ul className="space-y-3 text-text-light dark:text-text-dark-muted">
                <li>
                  <strong className="text-text dark:text-text-dark">Repeating decimals:</strong> Fractions like 1/3, 1/6, 1/7, 1/9 produce repeating decimals. Round to the desired number of decimal places.
                </li>
                <li>
                  <strong className="text-text dark:text-text-dark">Percentages over 100%:</strong> Improper fractions (numerator &gt; denominator) give percentages over 100%. For example, 5/4 = 125%.
                </li>
                <li>
                  <strong className="text-text dark:text-text-dark">Shortcut for denominators of 100:</strong> If the denominator is 100, the numerator IS the percentage. 47/100 = 47%.
                </li>
                <li>
                  <strong className="text-text dark:text-text-dark">Shortcut for denominators that divide 100:</strong> For denominators like 2, 4, 5, 10, 20, 25, 50 — multiply the numerator by (100 ÷ denominator). For 3/5: 3 × 20 = 60%.
                </li>
              </ul>
            </div>
          </section>

          <AdSlot label="Bottom Article Ad" />

          {/* Related Tools */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/fraction-to-percentage" className="card hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-1">Fraction to Percentage Converter</h3>
                <p className="text-sm text-text-light dark:text-text-dark-muted">Convert any fraction instantly with step-by-step solution.</p>
              </Link>
              <Link href="/percentage-to-fraction" className="card hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-1">Percentage to Fraction Converter</h3>
                <p className="text-sm text-text-light dark:text-text-dark-muted">Convert percentages back to simplified fractions.</p>
              </Link>
              <Link href="/percentage-calculator" className="card hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-1">Percentage Calculator</h3>
                <p className="text-sm text-text-light dark:text-text-dark-muted">Calculate any percentage with three formula modes.</p>
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
