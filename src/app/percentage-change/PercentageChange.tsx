"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import NumberInput from "@/components/ui/NumberInput";
import ResultDisplay from "@/components/ui/ResultDisplay";
import FormulaDisplay from "@/components/ui/FormulaDisplay";
import QuickReference from "@/components/ui/QuickReference";

type Mode = "findChange" | "applyChange";

export default function PercentageChange() {
  const [mode, setMode] = useState<Mode>("findChange");
  const [original, setOriginal] = useState("");
  const [newVal, setNewVal] = useState("");
  const [changePercent, setChangePercent] = useState("");

  const origNum = parseFloat(original);
  const newNum = parseFloat(newVal);
  const changePct = parseFloat(changePercent);

  let result = "";
  let resultLabel = "";
  let steps: string[] = [];
  let isIncrease = true;

  if (mode === "findChange" && !isNaN(origNum) && !isNaN(newNum) && origNum !== 0) {
    const change = ((newNum - origNum) / Math.abs(origNum)) * 100;
    isIncrease = change >= 0;
    result = `${isIncrease ? "↑" : "↓"} ${Math.abs(change).toLocaleString(undefined, { maximumFractionDigits: 4 })}%`;
    resultLabel = `Percentage ${isIncrease ? "Increase" : "Decrease"}`;
    steps = [
      `Formula: ((New Value - Original Value) / |Original Value|) × 100`,
      `= ((${newNum} - ${origNum}) / |${origNum}|) × 100`,
      `= (${newNum - origNum} / ${Math.abs(origNum)}) × 100`,
      `= ${(newNum - origNum) / Math.abs(origNum)} × 100`,
      `= ${change.toFixed(4)}%`,
      isIncrease ? `This is a ${Math.abs(change).toFixed(2)}% increase` : `This is a ${Math.abs(change).toFixed(2)}% decrease`,
    ];
  } else if (mode === "applyChange" && !isNaN(origNum) && !isNaN(changePct)) {
    const r = origNum * (1 + changePct / 100);
    isIncrease = changePct >= 0;
    result = r.toLocaleString(undefined, { maximumFractionDigits: 6 });
    resultLabel = `Result after ${changePct}% ${isIncrease ? "increase" : "decrease"}`;
    steps = [
      `Formula: Original Value × (1 + Percentage / 100)`,
      `= ${origNum} × (1 + ${changePct} / 100)`,
      `= ${origNum} × (1 + ${changePct / 100})`,
      `= ${origNum} × ${1 + changePct / 100}`,
      `= ${r}`,
    ];
  }

  return (
    <CalculatorCard
      title="Percentage Increase/Decrease Calculator"
      description="Calculate the percentage change between two values, or apply a percentage increase/decrease to a value."
    >
      <div className="card">
        {/* Mode Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => { setMode("findChange"); setOriginal(""); setNewVal(""); setChangePercent(""); }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              mode === "findChange"
                ? "bg-primary text-surface"
                : "bg-surface-alt dark:bg-surface-dark border border-border dark:border-border-dark text-text-light dark:text-text-dark-muted hover:border-primary"
            }`}
          >
            Find Percentage Change
          </button>
          <button
            onClick={() => { setMode("applyChange"); setOriginal(""); setNewVal(""); setChangePercent(""); }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
              mode === "applyChange"
                ? "bg-primary text-surface"
                : "bg-surface-alt dark:bg-surface-dark border border-border dark:border-border-dark text-text-light dark:text-text-dark-muted hover:border-primary"
            }`}
          >
            Apply Percentage Change
          </button>
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <NumberInput
            label="Original Value"
            value={original}
            onChange={setOriginal}
            placeholder="e.g., 200"
            id="original"
          />
          {mode === "findChange" ? (
            <NumberInput
              label="New Value"
              value={newVal}
              onChange={setNewVal}
              placeholder="e.g., 250"
              id="newVal"
            />
          ) : (
            <NumberInput
              label="Percentage Change"
              value={changePercent}
              onChange={setChangePercent}
              placeholder="e.g., 25 or -10"
              suffix="%"
              id="changePct"
            />
          )}
        </div>

        {/* Result */}
        {result && (
          <div className={`card border-2 ${
            isIncrease
              ? "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-700"
              : "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-700"
          }`}>
            <p className="text-sm font-medium text-text-light dark:text-text-dark-muted mb-1">{resultLabel}</p>
            <p className={`text-4xl font-bold ${
              isIncrease ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            }`}>
              {result}
            </p>
          </div>
        )}
      </div>

      {steps.length > 0 && (
        <FormulaDisplay title="Step-by-Step Solution" steps={steps} />
      )}

      {/* Use Cases */}
      <div className="card mt-6">
        <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">Common Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "💼 Salary Raise", desc: "Calculate how much your salary increased after a raise. Enter old and new salary to find the percentage." },
            { title: "🏷️ Price Change", desc: "Find out how much a product's price went up or down. Great for tracking inflation and discounts." },
            { title: "📈 Stock Movement", desc: "Calculate stock price percentage changes. Track gains and losses in your investment portfolio." },
          ].map((uc) => (
            <div key={uc.title} className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
              <h3 className="font-semibold text-text dark:text-text-dark mb-1">{uc.title}</h3>
              <p className="text-sm text-text-light dark:text-text-dark-muted">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <QuickReference
        title="Common Percentage Changes"
        headers={["Original", "+10%", "+20%", "+25%", "+50%", "+100%"]}
        rows={[
          ["50", "55", "60", "62.5", "75", "100"],
          ["100", "110", "120", "125", "150", "200"],
          ["200", "220", "240", "250", "300", "400"],
          ["500", "550", "600", "625", "750", "1,000"],
          ["1,000", "1,100", "1,200", "1,250", "1,500", "2,000"],
        ]}
      />
    </CalculatorCard>
  );
}
