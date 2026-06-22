import type { Metadata } from "next";
import PercentageToFraction from "./PercentageToFraction";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Percentage to Fraction Converter — Convert Percent to Fraction",
  description: "Free percentage to fraction converter. Convert any percentage to a simplified fraction instantly. Shows GCD simplification steps and handles repeating decimals.",
  keywords: ["percentage to fraction", "convert percent to fraction", "percentage to fraction converter", "simplify fraction"],
};

export default function PercentageToFractionPage() {
  return (
    <>
      <JsonLd
        name="Percentage to Fraction Converter"
        description="Convert any percentage to a simplified fraction. Shows GCD simplification steps and handles repeating decimals."
        url="https://percentcalc.one/percentage-to-fraction"
      />
      <PercentageToFraction />
    </>
  );
}
