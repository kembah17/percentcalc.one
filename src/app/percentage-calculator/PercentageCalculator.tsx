"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import NumberInput from "@/components/ui/NumberInput";
import ResultDisplay from "@/components/ui/ResultDisplay";
import FormulaDisplay from "@/components/ui/FormulaDisplay";
import QuickReference from "@/components/ui/QuickReference";

type Mode = "whatIsXPercentOfY" | "xIsWhatPercentOfY" | "xIsYPercentOfWhat";

export default function PercentageCalculator() {
  const [mode, setMode] = useState<Mode>("whatIsXPercentOfY");
  const [inputA, setInputA] = useState("");
  const [inputB, setInputB] = useState("");

  const a = parseFloat(inputA);
  const b = parseFloat(inputB);

  let result = "";
  let resultLabel = "";
  let steps: string[] = [];

  if (!isNaN(a) && !isNaN(b)) {
    if (mode === "whatIsXPercentOfY") {
      const r = (a / 100) * b;
      result = r.toLocaleString(undefined, { maximumFractionDigits: 6 });
      resultLabel = `${a}% of ${b}`;
      steps = [
        `Formula: (Percentage / 100) × Value`,
        `= (${a} / 100) × ${b}`,
        `= ${a / 100} × ${b}`,
        `= ${r}`,
      ];
    } else if (mode === "xIsWhatPercentOfY") {
      if (b !== 0) {
        const r = (a / b) * 100;
        result = r.toLocaleString(undefined, { maximumFractionDigits: 6 }) + "%";
        resultLabel = `${a} is what % of ${b}`;
        steps = [
          `Formula: (Part / Whole) × 100`,
          `= (${a} / ${b}) × 100`,
          `= ${a / b} × 100`,
          `= ${r}%`,
        ];
      }
    } else if (mode === "xIsYPercentOfWhat") {
      if (b !== 0) {
        const r = (a / b) * 100;
        result = r.toLocaleString(undefined, { maximumFractionDigits: 6 });
        resultLabel = `${a} is ${b}% of what?`;
        steps = [
          `Formula: Part / (Percentage / 100)`,
          `= ${a} / (${b} / 100)`,
          `= ${a} / ${b / 100}`,
          `= ${r}`,
        ];
      }
    }
  }

  const modes: { key: Mode; label: string; labelA: string; labelB: string; suffixA?: string; suffixB?: string }[] = [
    { key: "whatIsXPercentOfY", label: "What is X% of Y?", labelA: "Percentage (X)", labelB: "Value (Y)", suffixA: "%" },
    { key: "xIsWhatPercentOfY", label: "X is what % of Y?", labelA: "Part (X)", labelB: "Whole (Y)" },
    { key: "xIsYPercentOfWhat", label: "X is Y% of what?", labelA: "Part (X)", labelB: "Percentage (Y)", suffixB: "%" },
  ];

  const currentMode = modes.find((m) => m.key === mode)!;

  const quickRefRows = [
    ["10%", "10", "20", "50", "100", "200"],
    ["15%", "15", "30", "75", "150", "300"],
    ["20%", "20", "40", "100", "200", "400"],
    ["25%", "25", "50", "125", "250", "500"],
    ["50%", "50", "100", "250", "500", "1,000"],
    ["75%", "75", "150", "375", "750", "1,500"],
  ];

  return (
    <CalculatorCard
      title="Percentage Calculator"
      description="Calculate percentages instantly. Choose your calculation mode and get step-by-step solutions."
    >
      <div className="card">
        {/* Mode Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {modes.map((m) => (
            <button
              key={m.key}
              onClick={() => { setMode(m.key); setInputA(""); setInputB(""); }}
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                mode === m.key
                  ? "bg-primary text-surface"
                  : "bg-surface-alt dark:bg-surface-dark border border-border dark:border-border-dark text-text-light dark:text-text-dark-muted hover:border-primary"
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <NumberInput
            label={currentMode.labelA}
            value={inputA}
            onChange={setInputA}
            placeholder="Enter value"
            suffix={currentMode.suffixA}
            id="inputA"
          />
          <NumberInput
            label={currentMode.labelB}
            value={inputB}
            onChange={setInputB}
            placeholder="Enter value"
            suffix={currentMode.suffixB}
            id="inputB"
          />
        </div>

        {/* Result */}
        {result && (
          <ResultDisplay label={resultLabel} value={result} />
        )}
      </div>

      {/* Formula Steps */}
      {steps.length > 0 && (
        <FormulaDisplay title="Step-by-Step Solution" steps={steps} />
      )}

      {/* Quick Reference */}
      <QuickReference
        title="Common Percentage Quick Reference"
        headers={["Percentage", "of 100", "of 200", "of 500", "of 1,000", "of 2,000"]}
        rows={quickRefRows}
      />
    </CalculatorCard>
  );
}
