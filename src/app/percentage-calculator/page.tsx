import type { Metadata } from "next";
import PercentageCalculator from "./PercentageCalculator";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Percentage Calculator — What is X% of Y? | Free Online Tool",
  description: "Free online percentage calculator. Calculate what is X% of Y, find what percent X is of Y, or determine X is Y% of what. Instant results with step-by-step solutions.",
  keywords: ["percentage calculator", "what is x percent of y", "calculate percentage", "percent calculator"],
};

export default function PercentageCalculatorPage() {
  return (
    <>
      <JsonLd
        name="Percentage Calculator"
        description="Calculate what is X% of Y, find what percent X is of Y, or determine X is Y% of what. Free online percentage calculator with step-by-step solutions."
        url="https://percentcalc.one/percentage-calculator"
      />
      <PercentageCalculator />
    </>
  );
}
