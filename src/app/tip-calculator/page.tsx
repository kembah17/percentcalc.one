import type { Metadata } from "next";
import TipCalculator from "./TipCalculator";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Tip Calculator — Calculate Tips & Split Bills Easily",
  description: "Free tip calculator. Calculate tips, total bill, and per-person split instantly. Preset tip percentages, custom tips, and rounding options.",
  keywords: ["tip calculator", "bill splitter", "calculate tip", "tip percentage calculator", "restaurant tip calculator"],
};

export default function TipCalculatorPage() {
  return (
    <>
      <JsonLd
        name="Tip Calculator"
        description="Calculate tips and split bills easily. Preset tip percentages, per-person splitting, and rounding options."
        url="https://percentcalc.one/tip-calculator"
      />
      <TipCalculator />
    </>
  );
}
