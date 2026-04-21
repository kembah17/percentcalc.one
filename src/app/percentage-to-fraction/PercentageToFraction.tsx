"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import NumberInput from "@/components/ui/NumberInput";
import ResultDisplay from "@/components/ui/ResultDisplay";
import FormulaDisplay from "@/components/ui/FormulaDisplay";
import QuickReference from "@/components/ui/QuickReference";

function gcd(a: number, b: number): number {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

interface FractionResult {
  numerator: number;
  denominator: number;
  steps: string[];
}

function percentageToFraction(pct: number): FractionResult {
  const steps: string[] = [];

  // Handle known repeating decimals
  const knownRepeating: Record<string, { n: number; d: number }> = {
    "33.33": { n: 1, d: 3 },
    "33.333": { n: 1, d: 3 },
    "33.3333": { n: 1, d: 3 },
    "66.67": { n: 2, d: 3 },
    "66.66": { n: 2, d: 3 },
    "66.667": { n: 2, d: 3 },
    "66.6667": { n: 2, d: 3 },
    "16.67": { n: 1, d: 6 },
    "16.66": { n: 1, d: 6 },
    "16.667": { n: 1, d: 6 },
    "16.6667": { n: 1, d: 6 },
    "83.33": { n: 5, d: 6 },
    "83.333": { n: 5, d: 6 },
    "83.3333": { n: 5, d: 6 },
    "14.29": { n: 1, d: 7 },
    "14.2857": { n: 1, d: 7 },
    "11.11": { n: 1, d: 9 },
    "11.111": { n: 1, d: 9 },
    "11.1111": { n: 1, d: 9 },
  };

  const pctStr = pct.toString();
  const truncated4 = parseFloat(pct.toFixed(4)).toString();
  const truncated2 = parseFloat(pct.toFixed(2)).toString();

  for (const key of [pctStr, truncated4, truncated2]) {
    if (knownRepeating[key]) {
      const { n, d } = knownRepeating[key];
      steps.push(`${pct}% is a known repeating decimal`);
      steps.push(`${pct}% = ${n}/${d}`);
      return { numerator: n, denominator: d, steps };
    }
  }

  // Standard conversion
  steps.push(`Start with ${pct}%`);
  steps.push(`Write as fraction: ${pct}/100`);

  // Handle decimals in the percentage
  let numerator = pct;
  let denominator = 100;

  const decimalStr = pct.toString();
  const decimalIndex = decimalStr.indexOf(".");
  if (decimalIndex !== -1) {
    const decimalPlaces = decimalStr.length - decimalIndex - 1;
    const multiplier = Math.pow(10, decimalPlaces);
    numerator = Math.round(pct * multiplier);
    denominator = 100 * multiplier;
    steps.push(`Remove decimal: multiply top and bottom by ${multiplier}`);
    steps.push(`= ${numerator}/${denominator}`);
  }

  // Simplify
  const g = gcd(numerator, denominator);
  if (g > 1) {
    steps.push(`Find GCD of ${numerator} and ${denominator} = ${g}`);
    numerator = numerator / g;
    denominator = denominator / g;
    steps.push(`Divide both by ${g}: ${numerator}/${denominator}`);
  } else {
    steps.push(`GCD is 1 — fraction is already in simplest form`);
  }

  return { numerator, denominator, steps };
}

export default function PercentageToFraction() {
  const [input, setInput] = useState("");

  const pct = parseFloat(input);
  let result = "";
  let fractionResult: FractionResult | null = null;

  if (!isNaN(pct)) {
    fractionResult = percentageToFraction(pct);
    result = `${fractionResult.numerator}/${fractionResult.denominator}`;
  }

  const commonPercentages = [
    ["10%", "1/10"],
    ["12.5%", "1/8"],
    ["20%", "1/5"],
    ["25%", "1/4"],
    ["33.33%", "1/3"],
    ["37.5%", "3/8"],
    ["40%", "2/5"],
    ["50%", "1/2"],
    ["60%", "3/5"],
    ["62.5%", "5/8"],
    ["66.67%", "2/3"],
    ["75%", "3/4"],
    ["80%", "4/5"],
    ["83.33%", "5/6"],
    ["87.5%", "7/8"],
    ["90%", "9/10"],
    ["100%", "1/1"],
    ["125%", "5/4"],
    ["150%", "3/2"],
    ["200%", "2/1"],
  ];

  return (
    <CalculatorCard
      title="Percentage to Fraction Converter"
      description="Convert any percentage to a simplified fraction. See the GCD simplification steps and handle repeating decimals like 33.33%."
    >
      <div className="card">
        <div className="max-w-sm mb-6">
          <NumberInput
            label="Enter Percentage"
            value={input}
            onChange={setInput}
            placeholder="e.g., 75"
            suffix="%"
            id="pctInput"
          />
        </div>

        {result && fractionResult && (
          <>
            {/* Visual representation */}
            <div className="mb-4 p-4 rounded-lg bg-surface-alt dark:bg-surface-dark text-center">
              <span className="text-2xl font-mono text-text dark:text-text-dark">
                {pct}%
                <span className="mx-3 text-primary">=</span>
                <span className="inline-flex flex-col items-center mx-1">
                  <span className="border-b-2 border-primary px-3 font-bold text-primary">{fractionResult.numerator}</span>
                  <span className="px-3 font-bold text-primary">{fractionResult.denominator}</span>
                </span>
              </span>
            </div>

            <ResultDisplay label={`${pct}% as a fraction`} value={result} />
          </>
        )}
      </div>

      {fractionResult && fractionResult.steps.length > 0 && (
        <FormulaDisplay title="Simplification Steps" steps={fractionResult.steps} />
      )}

      <QuickReference
        title="Common Percentages to Fractions"
        headers={["Percentage", "Fraction"]}
        rows={commonPercentages}
      />
    </CalculatorCard>
  );
}
