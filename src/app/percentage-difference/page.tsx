import type { Metadata } from "next";
import PercentageDifference from "./PercentageDifference";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Percentage Difference Calculator — Compare Two Values",
  description: "Free percentage difference calculator. Find the percentage difference between two values with visual comparison and step-by-step formula breakdown.",
  keywords: ["percentage difference calculator", "percentage difference between two numbers", "compare percentages"],
};

export default function PercentageDifferencePage() {
  return (
    <>
      <JsonLd
        name="Percentage Difference Calculator"
        description="Calculate the percentage difference between two values with visual comparison and step-by-step formula."
        url="https://percentcalc.one/percentage-difference"
      />
      <PercentageDifference />
    </>
  );
}
