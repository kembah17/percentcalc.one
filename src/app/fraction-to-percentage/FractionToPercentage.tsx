"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import NumberInput from "@/components/ui/NumberInput";
import ResultDisplay from "@/components/ui/ResultDisplay";
import FormulaDisplay from "@/components/ui/FormulaDisplay";
import QuickReference from "@/components/ui/QuickReference";

export default function FractionToPercentage() {
  const [whole, setWhole] = useState("");
  const [numerator, setNumerator] = useState("");
  const [denominator, setDenominator] = useState("");
  const [decimals, setDecimals] = useState("4");

  const w = parseFloat(whole) || 0;
  const n = parseFloat(numerator);
  const d = parseFloat(denominator);
  const dp = Math.max(0, Math.min(10, parseInt(decimals) || 4));

  let result = "";
  let resultLabel = "";
  let steps: string[] = [];

  if (!isNaN(n) && !isNaN(d) && d !== 0) {
    const fractionValue = w + n / d;
    const percentage = fractionValue * 100;
    result = percentage.toFixed(dp) + "%";

    if (w !== 0) {
      resultLabel = `${w} ${n}/${d} as a percentage`;
      steps = [
        `Mixed number: ${w} ${n}/${d}`,
        `Convert to improper fraction: (${w} × ${d} + ${n}) / ${d} = ${w * d + n}/${d}`,
        `Divide: ${w * d + n} ÷ ${d} = ${fractionValue}`,
        `Multiply by 100: ${fractionValue} × 100 = ${percentage.toFixed(dp)}%`,
      ];
    } else {
      resultLabel = `${n}/${d} as a percentage`;
      steps = [
        `Fraction: ${n}/${d}`,
        `Divide numerator by denominator: ${n} ÷ ${d} = ${(n / d).toFixed(dp + 2)}`,
        `Multiply by 100: ${(n / d).toFixed(dp + 2)} × 100 = ${percentage.toFixed(dp)}%`,
      ];
    }
  }

  const commonFractions = [
    ["1/2", "50%"],
    ["1/3", "33.3333%"],
    ["2/3", "66.6667%"],
    ["1/4", "25%"],
    ["3/4", "75%"],
    ["1/5", "20%"],
    ["2/5", "40%"],
    ["3/5", "60%"],
    ["4/5", "80%"],
    ["1/6", "16.6667%"],
    ["5/6", "83.3333%"],
    ["1/8", "12.5%"],
    ["3/8", "37.5%"],
    ["5/8", "62.5%"],
    ["7/8", "87.5%"],
    ["1/10", "10%"],
    ["1/12", "8.3333%"],
    ["1/16", "6.25%"],
    ["1/20", "5%"],
    ["1/100", "1%"],
  ];

  return (
    <CalculatorCard
      title="Fraction to Percentage Converter"
      description="Convert any fraction or mixed number to a percentage. Enter your values and see the result instantly with step-by-step conversion."
    >
      <div className="card">
        <h2 className="text-lg font-semibold text-text dark:text-text-dark mb-4">Enter Your Fraction</h2>

        {/* Mixed Number Input */}
        <div className="flex flex-wrap items-end gap-3 mb-6">
          <div className="w-24">
            <NumberInput
              label="Whole (optional)"
              value={whole}
              onChange={setWhole}
              placeholder="0"
              id="whole"
            />
          </div>
          <div className="flex items-end gap-2">
            <div className="w-28">
              <NumberInput
                label="Numerator"
                value={numerator}
                onChange={setNumerator}
                placeholder="1"
                id="numerator"
              />
            </div>
            <span className="text-3xl font-light text-text-light dark:text-text-dark-muted pb-2">/</span>
            <div className="w-28">
              <NumberInput
                label="Denominator"
                value={denominator}
                onChange={setDenominator}
                placeholder="2"
                id="denominator"
              />
            </div>
          </div>
          <div className="w-32">
            <NumberInput
              label="Decimal places"
              value={decimals}
              onChange={setDecimals}
              placeholder="4"
              id="decimals"
            />
          </div>
        </div>

        {/* Visual representation */}
        {!isNaN(n) && !isNaN(d) && d !== 0 && (
          <div className="mb-6 p-4 rounded-lg bg-surface-alt dark:bg-surface-dark text-center">
            <span className="text-2xl font-mono text-text dark:text-text-dark">
              {w !== 0 && <span>{w} </span>}
              <span className="inline-flex flex-col items-center mx-1">
                <span className="border-b-2 border-primary px-2">{n}</span>
                <span className="px-2">{d}</span>
              </span>
              <span className="mx-3 text-primary">=</span>
              <span className="text-primary font-bold">{result}</span>
            </span>
          </div>
        )}

        {result && <ResultDisplay label={resultLabel} value={result} />}
      </div>

      {steps.length > 0 && <FormulaDisplay title="Step-by-Step Conversion" steps={steps} />}

      <QuickReference
        title="Common Fractions to Percentages"
        headers={["Fraction", "Percentage"]}
        rows={commonFractions}
      />
    </CalculatorCard>
  );
}
