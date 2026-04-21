export interface Tool {
  name: string;
  slug: string;
  description: string;
  icon: string;
  keywords: string[];
}

export const tools: Tool[] = [
  {
    name: "Percentage Calculator",
    slug: "percentage-calculator",
    description: "Calculate what is X% of Y, X is what % of Y, and X is Y% of what. Real-time results with step-by-step solutions.",
    icon: "%",
    keywords: ["percentage calculator", "what is x percent of y", "calculate percentage"],
  },
  {
    name: "Percentage Change Calculator",
    slug: "percentage-change",
    description: "Calculate percentage increase or decrease between two values. Perfect for salary raises, price changes, and stock movements.",
    icon: "↕",
    keywords: ["percentage increase calculator", "percentage decrease", "percentage change"],
  },
  {
    name: "Percentage Difference Calculator",
    slug: "percentage-difference",
    description: "Find the percentage difference between two values with visual comparison and step-by-step formula breakdown.",
    icon: "⇔",
    keywords: ["percentage difference", "compare percentages", "difference calculator"],
  },
  {
    name: "Fraction to Percentage Converter",
    slug: "fraction-to-percentage",
    description: "Convert any fraction or mixed number to a percentage. Includes common fractions reference table and step-by-step conversion.",
    icon: "½",
    keywords: ["fraction to percentage", "convert fraction", "fraction converter"],
  },
  {
    name: "Percentage to Fraction Converter",
    slug: "percentage-to-fraction",
    description: "Convert any percentage to a simplified fraction. Shows GCD simplification steps and handles repeating decimals.",
    icon: "¾",
    keywords: ["percentage to fraction", "convert percentage", "simplify fraction"],
  },
  {
    name: "Tip Calculator",
    slug: "tip-calculator",
    description: "Calculate tips and split bills easily. Preset tip percentages, per-person splitting, and rounding options.",
    icon: "💰",
    keywords: ["tip calculator", "bill splitter", "calculate tip"],
  },
];

export interface Article {
  title: string;
  slug: string;
  description: string;
}

export const articles: Article[] = [
  {
    title: "How to Calculate Percentage — Complete Guide with Examples",
    slug: "how-to-calculate-percentage",
    description: "Learn how to calculate percentages with step-by-step examples. Covers all three percentage formulas for shopping discounts, tax, grades, and tips.",
  },
  {
    title: "Percentage Increase & Decrease Formula — Complete Guide",
    slug: "percentage-increase-decrease-formula",
    description: "Master the percentage increase and decrease formula with business, finance, and everyday examples. Step-by-step guide with practice problems.",
  },
  {
    title: "How to Convert Fractions to Percentages — Step-by-Step Guide",
    slug: "how-to-convert-fractions-to-percentages",
    description: "Learn how to convert fractions to percentages with visual examples, common conversion table, and practice problems.",
  },
];
