import type { Metadata } from "next";
import Link from "next/link";
import FaqSchema from "@/components/seo/FaqSchema";
import AdSlot from "@/components/ui/AdSlot";

export const metadata: Metadata = {
  title: "How to Calculate Percentage — Complete Guide with Examples",
  description: "Learn how to calculate percentages with step-by-step examples. Covers all three percentage formulas for shopping discounts, tax, grades, and tips. Free percentage calculator included.",
  keywords: ["how to calculate percentage", "percentage formula", "calculate percent", "percentage examples"],
};

const faqs = [
  {
    question: "What is the formula for calculating a percentage?",
    answer: "The basic percentage formula is: Percentage = (Part / Whole) × 100. For example, if you scored 45 out of 60 on a test, your percentage is (45/60) × 100 = 75%.",
  },
  {
    question: "How do I calculate what is X% of a number?",
    answer: "To find X% of a number, multiply the number by X and divide by 100. For example, 20% of 150 = (150 × 20) / 100 = 30. You can also convert the percentage to a decimal first: 20% = 0.20, then 0.20 × 150 = 30.",
  },
  {
    question: "How do I find what percentage one number is of another?",
    answer: "Divide the part by the whole and multiply by 100. For example, to find what percentage 30 is of 200: (30 / 200) × 100 = 15%. So 30 is 15% of 200.",
  },
  {
    question: "How do I calculate a percentage discount?",
    answer: "To calculate a discount: Discount Amount = Original Price × (Discount Percentage / 100). For a 25% discount on a $80 item: $80 × (25/100) = $20 discount. Sale price = $80 - $20 = $60.",
  },
  {
    question: "What is the difference between percentage and percentile?",
    answer: "A percentage is a fraction of 100 (e.g., 85% on a test means 85 out of 100). A percentile indicates your ranking relative to others (e.g., 85th percentile means you scored higher than 85% of test-takers).",
  },
  {
    question: "How do I calculate tax using percentages?",
    answer: "To calculate tax: Tax Amount = Price × (Tax Rate / 100). For 8.5% tax on a $50 item: $50 × (8.5/100) = $4.25. Total with tax = $50 + $4.25 = $54.25.",
  },
  {
    question: "How do I convert a fraction to a percentage?",
    answer: "Divide the numerator by the denominator, then multiply by 100. For example, 3/4 = 0.75 × 100 = 75%. For 1/3 = 0.3333... × 100 = 33.33%.",
  },
];

export default function HowToCalculatePercentagePage() {
  return (
    <>
      <FaqSchema faqs={faqs} />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <h1 className="text-4xl font-bold text-text dark:text-text-dark mb-4">
            How to Calculate Percentage — Complete Guide with Examples
          </h1>
          <p className="text-lg text-text-light dark:text-text-dark-muted mb-8">
            Percentages are everywhere — from shopping discounts to exam scores, tax calculations to tip amounts. This comprehensive guide teaches you all three percentage formulas with real-world examples you can use every day.
          </p>

          <div className="card mb-4 bg-primary/5 dark:bg-primary/10 border-primary/20">
            <p className="text-text dark:text-text-dark">
              💡 <strong>Quick tool:</strong>{" "}
              <Link href="/percentage-calculator" className="text-primary hover:underline font-semibold">
                Use our free Percentage Calculator →
              </Link>
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">What Is a Percentage?</h2>
            <div className="card">
              <p className="text-text-light dark:text-text-dark-muted mb-4">
                A percentage is a way of expressing a number as a fraction of 100. The word "percent" comes from the Latin "per centum," meaning "by the hundred." When we say 50%, we mean 50 out of every 100, or half.
              </p>
              <p className="text-text-light dark:text-text-dark-muted mb-4">
                Percentages make it easy to compare different quantities on a common scale. Whether you&apos;re comparing test scores, investment returns, or discount amounts, percentages give you a universal language for proportions.
              </p>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <p className="font-mono text-text dark:text-text-dark text-center text-lg">
                  50% = 50/100 = 1/2 = 0.5
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">The Three Percentage Formulas</h2>
            <p className="text-text-light dark:text-text-dark-muted mb-6">
              There are three fundamental percentage calculations. Each solves for a different unknown:
            </p>

            {/* Formula 1 */}
            <div className="card mb-4">
              <h3 className="text-xl font-bold text-primary mb-3">Formula 1: What is X% of Y?</h3>
              <div className="p-3 rounded-lg bg-surface-alt dark:bg-surface-dark mb-4">
                <p className="font-mono text-text dark:text-text-dark text-center">Result = (X / 100) × Y</p>
              </div>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                This is the most common percentage calculation. You know the percentage and the total, and you want to find the part.
              </p>
              <div className="p-4 rounded-lg border border-border dark:border-border-dark">
                <p className="font-semibold text-text dark:text-text-dark mb-2">Example: What is 15% of 200?</p>
                <ul className="list-disc list-inside text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Step 1: Convert 15% to decimal → 15 / 100 = 0.15</li>
                  <li>Step 2: Multiply by 200 → 0.15 × 200 = 30</li>
                  <li>Answer: 15% of 200 = <strong className="text-primary">30</strong></li>
                </ul>
              </div>
            </div>

            {/* Formula 2 */}
            <div className="card mb-4">
              <h3 className="text-xl font-bold text-primary mb-3">Formula 2: X is what % of Y?</h3>
              <div className="p-3 rounded-lg bg-surface-alt dark:bg-surface-dark mb-4">
                <p className="font-mono text-text dark:text-text-dark text-center">Percentage = (X / Y) × 100</p>
              </div>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                Use this when you know the part and the whole, and want to find the percentage.
              </p>
              <div className="p-4 rounded-lg border border-border dark:border-border-dark">
                <p className="font-semibold text-text dark:text-text-dark mb-2">Example: 45 is what % of 180?</p>
                <ul className="list-disc list-inside text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Step 1: Divide 45 by 180 → 45 / 180 = 0.25</li>
                  <li>Step 2: Multiply by 100 → 0.25 × 100 = 25</li>
                  <li>Answer: 45 is <strong className="text-primary">25%</strong> of 180</li>
                </ul>
              </div>
            </div>

            {/* Formula 3 */}
            <div className="card mb-4">
              <h3 className="text-xl font-bold text-primary mb-3">Formula 3: X is Y% of what?</h3>
              <div className="p-3 rounded-lg bg-surface-alt dark:bg-surface-dark mb-4">
                <p className="font-mono text-text dark:text-text-dark text-center">Whole = X / (Y / 100)</p>
              </div>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                Use this when you know the part and the percentage, and want to find the whole.
              </p>
              <div className="p-4 rounded-lg border border-border dark:border-border-dark">
                <p className="font-semibold text-text dark:text-text-dark mb-2">Example: 30 is 20% of what?</p>
                <ul className="list-disc list-inside text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Step 1: Convert 20% to decimal → 20 / 100 = 0.20</li>
                  <li>Step 2: Divide 30 by 0.20 → 30 / 0.20 = 150</li>
                  <li>Answer: 30 is 20% of <strong className="text-primary">150</strong></li>
                </ul>
              </div>
            </div>
          </section>

          <AdSlot label="In-Article Ad" />

          {/* Section 3: Real-World Examples */}
          <section className="mb-10 mt-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Real-World Percentage Examples</h2>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">🛍️ Shopping Discounts</h3>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                A jacket originally costs $120 and is on sale for 30% off. How much do you save?
              </p>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Discount = $120 × (30/100) = $120 × 0.30 = <strong className="text-primary">$36</strong></li>
                  <li>Sale Price = $120 - $36 = <strong className="text-primary">$84</strong></li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">💰 Sales Tax</h3>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                You buy a laptop for $899 with 8.25% sales tax. What&apos;s the total?
              </p>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Tax = $899 × (8.25/100) = $899 × 0.0825 = <strong className="text-primary">$74.17</strong></li>
                  <li>Total = $899 + $74.17 = <strong className="text-primary">$973.17</strong></li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">📝 Grade Calculation</h3>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                You scored 42 out of 50 on a test. What&apos;s your percentage score?
              </p>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Percentage = (42 / 50) × 100 = 0.84 × 100 = <strong className="text-primary">84%</strong></li>
                </ul>
              </div>
            </div>

            <div className="card mb-4">
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-3">🍽️ Restaurant Tip</h3>
              <p className="text-text-light dark:text-text-dark-muted mb-3">
                Your dinner bill is $65 and you want to leave an 18% tip. How much?
              </p>
              <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
                <ul className="text-text-light dark:text-text-dark-muted space-y-1">
                  <li>Tip = $65 × (18/100) = $65 × 0.18 = <strong className="text-primary">$11.70</strong></li>
                  <li>Total = $65 + $11.70 = <strong className="text-primary">$76.70</strong></li>
                </ul>
              </div>
              <p className="text-sm text-text-light dark:text-text-dark-muted mt-3">
                Try our <Link href="/tip-calculator" className="text-primary hover:underline">Tip Calculator</Link> for quick tip calculations.
              </p>
            </div>
          </section>

          {/* Section 4: Tips and Tricks */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Quick Mental Math Tips</h2>
            <div className="card">
              <ul className="space-y-3 text-text-light dark:text-text-dark-muted">
                <li><strong className="text-text dark:text-text-dark">10% shortcut:</strong> Move the decimal point one place left. 10% of 250 = 25.</li>
                <li><strong className="text-text dark:text-text-dark">5% shortcut:</strong> Find 10% and halve it. 5% of 250 = 12.50.</li>
                <li><strong className="text-text dark:text-text-dark">15% shortcut:</strong> Find 10% + 5%. 15% of 250 = 25 + 12.50 = 37.50.</li>
                <li><strong className="text-text dark:text-text-dark">20% shortcut:</strong> Find 10% and double it. 20% of 250 = 50.</li>
                <li><strong className="text-text dark:text-text-dark">25% shortcut:</strong> Divide by 4. 25% of 250 = 62.50.</li>
                <li><strong className="text-text dark:text-text-dark">50% shortcut:</strong> Divide by 2. 50% of 250 = 125.</li>
                <li><strong className="text-text dark:text-text-dark">1% shortcut:</strong> Move the decimal two places left. 1% of 250 = 2.50.</li>
              </ul>
            </div>
          </section>

          <AdSlot label="Bottom Article Ad" />

          {/* Related Tools */}
          <section className="mt-10">
            <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-4">Related Percentage Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/percentage-calculator" className="card hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-1">Percentage Calculator</h3>
                <p className="text-sm text-text-light dark:text-text-dark-muted">Calculate any percentage instantly with all three formulas.</p>
              </Link>
              <Link href="/percentage-change" className="card hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-1">Percentage Change Calculator</h3>
                <p className="text-sm text-text-light dark:text-text-dark-muted">Find percentage increase or decrease between two values.</p>
              </Link>
              <Link href="/tip-calculator" className="card hover:border-primary transition-colors">
                <h3 className="font-semibold text-primary mb-1">Tip Calculator</h3>
                <p className="text-sm text-text-light dark:text-text-dark-muted">Calculate tips and split bills with ease.</p>
              </Link>
            </div>
          </section>

          {/* FAQ Section */}
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
