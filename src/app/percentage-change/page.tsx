import type { Metadata } from "next";
import PercentageChange from "./PercentageChange";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Percentage Increase/Decrease Calculator — Calculate Percentage Change",
  description: "Free percentage increase and decrease calculator. Find the percentage change between two values instantly. Perfect for salary raises, price changes, and stock movements.",
  keywords: ["percentage increase calculator", "percentage decrease calculator", "percentage change", "percent increase"],
};

export default function PercentageChangePage() {
  return (
    <>
      <JsonLd
        name="Percentage Increase/Decrease Calculator"
        description="Calculate percentage increase or decrease between two values. Free online tool with step-by-step solutions."
        url="https://percentcalc.one/percentage-change"
      />
      <PercentageChange />
    </>
  );
}
