import Link from "next/link";
import { tools, articles } from "@/lib/tools-data";
import AdSlot from "@/components/ui/AdSlot";

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-text dark:text-text-dark mb-4">
          Free Online <span className="text-primary">Percentage Calculator</span> Suite
        </h1>
        <p className="text-lg text-text-light dark:text-text-dark-muted max-w-2xl mx-auto">
          Calculate percentages, percentage change, percentage difference, convert fractions, and split tips — all free, all instant, all private. No signup required.
        </p>
      </section>

      {/* Tools Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6 text-center">Percentage Calculators & Converters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="card group hover:border-primary dark:hover:border-primary-light transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h3 className="text-xl font-bold text-text dark:text-text-dark mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-text-light dark:text-text-dark-muted">{tool.description}</p>
              <span className="inline-block mt-4 text-sm font-semibold text-primary group-hover:underline">
                Use Calculator →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot label="Homepage Ad" />

      {/* Articles Section */}
      <section className="mt-16 mb-12">
        <h2 className="text-2xl font-bold text-text dark:text-text-dark mb-6 text-center">Learn About Percentages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              className="card group hover:border-primary dark:hover:border-primary-light transition-all duration-200"
            >
              <h3 className="text-lg font-bold text-text dark:text-text-dark mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-text-light dark:text-text-dark-muted">{article.description}</p>
              <span className="inline-block mt-3 text-sm font-semibold text-primary group-hover:underline">
                Read Guide →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Privacy Note */}
      <section className="text-center mt-12 card bg-primary/5 dark:bg-primary/10 border-primary/20">
        <p className="text-lg font-semibold text-text dark:text-text-dark mb-2">🔒 100% Private & Secure</p>
        <p className="text-text-light dark:text-text-dark-muted">
          All calculations happen entirely in your browser. No data is ever sent to any server. No cookies, no tracking, no signup required.
        </p>
      </section>
    </div>
  );
}
