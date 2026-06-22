import type { Metadata } from "next";
import FractionToPercentage from "./FractionToPercentage";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Fraction to Percentage Converter — Convert Fractions to Percent",
  description: "Free fraction to percentage converter. Convert any fraction or mixed number to a percentage instantly. Includes common fractions reference table and step-by-step conversion.",
  keywords: ["fraction to percentage", "convert fraction to percent", "fraction converter", "fraction to percent calculator"],
};

export default function FractionToPercentagePage() {
  return (
    <>
      <JsonLd
        name="Fraction to Percentage Converter"
        description="Convert any fraction or mixed number to a percentage. Free online tool with step-by-step conversion and common fractions reference."
        url="https://percentcalc.one/fraction-to-percentage"
      />
      <FractionToPercentage />
    </>
  );
}
