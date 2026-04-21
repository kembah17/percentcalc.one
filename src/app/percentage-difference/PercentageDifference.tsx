"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import NumberInput from "@/components/ui/NumberInput";
import ResultDisplay from "@/components/ui/ResultDisplay";
import FormulaDisplay from "@/components/ui/FormulaDisplay";

export default function PercentageDifference() {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const v1 = parseFloat(value1);
  const v2 = parseFloat(value2);

  let result = "";
  let steps: string[] = [];
  let bar1Width = 50;
  let bar2Width = 50;

  if (!isNaN(v1) && !isNaN(v2) && (v1 + v2) !== 0) {
    const avg = (v1 + v2) / 2;
    const diff = Math.abs(v1 - v2);
    const pctDiff = (diff / avg) * 100;
    result = pctDiff.toLocaleString(undefined, { maximumFractionDigits: 4 }) + "%";
    steps = [
      `Formula: |V1 - V2| / ((V1 + V2) / 2) × 100`,
      `= |${v1} - ${v2}| / ((${v1} + ${v2}) / 2) × 100`,
      `= ${diff} / (${v1 + v2} / 2) × 100`,
      `= ${diff} / ${avg} × 100`,
      `= ${(diff / avg)} × 100`,
      `= ${pctDiff.toFixed(4)}%`,
    ];

    const maxVal = Math.max(Math.abs(v1), Math.abs(v2));
    if (maxVal > 0) {
      bar1Width = (Math.abs(v1) / maxVal) * 100;
      bar2Width = (Math.abs(v2) / maxVal) * 100;
    }
  }

  return (
    <CalculatorCard
      title="Percentage Difference Calculator"
      description="Calculate the percentage difference between two values. See a visual comparison and step-by-step formula breakdown."
    >
      <div className="card">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <NumberInput label="Value 1" value={value1} onChange={setValue1} placeholder="e.g., 80" id="v1" />
          <NumberInput label="Value 2" value={value2} onChange={setValue2} placeholder="e.g., 100" id="v2" />
        </div>

        {result && (
          <>
            <ResultDisplay label={`Percentage difference between ${v1} and ${v2}`} value={result} />

            {/* Visual Bar Comparison */}
            <div className="mt-6 space-y-3">
              <h3 className="text-lg font-semibold text-text dark:text-text-dark">Visual Comparison</h3>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-text dark:text-text-dark">Value 1: {v1}</span>
                  <span className="text-sm text-text-light dark:text-text-dark-muted">{bar1Width.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-surface-alt dark:bg-surface-dark rounded-full h-6">
                  <div
                    className="bg-primary h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${Math.max(bar1Width, 2)}%` }}
                  >
                    {bar1Width > 15 && <span className="text-xs text-surface font-semibold">{v1}</span>}
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-text dark:text-text-dark">Value 2: {v2}</span>
                  <span className="text-sm text-text-light dark:text-text-dark-muted">{bar2Width.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-surface-alt dark:bg-surface-dark rounded-full h-6">
                  <div
                    className="bg-secondary h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                    style={{ width: `${Math.max(bar2Width, 2)}%` }}
                  >
                    {bar2Width > 15 && <span className="text-xs text-surface font-semibold">{v2}</span>}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {steps.length > 0 && (
        <FormulaDisplay title="Step-by-Step Solution" steps={steps} />
      )}

      {/* Difference vs Change */}
      <div className="card mt-6">
        <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">Percentage Difference vs. Percentage Change</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
            <h3 className="font-semibold text-primary mb-2">📊 Percentage Difference</h3>
            <p className="text-sm text-text-light dark:text-text-dark-muted mb-2">
              Compares two values <strong>without implying direction</strong>. Neither value is the &quot;original&quot; — they are treated equally.
            </p>
            <p className="text-sm text-text-light dark:text-text-dark-muted">
              <strong>Formula:</strong> |V1 - V2| / ((V1 + V2) / 2) × 100
            </p>
            <p className="text-sm text-text-light dark:text-text-dark-muted mt-2">
              <strong>Use when:</strong> Comparing test scores, prices from different stores, measurements from different sources.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface-alt dark:bg-surface-dark">
            <h3 className="font-semibold text-secondary mb-2">📈 Percentage Change</h3>
            <p className="text-sm text-text-light dark:text-text-dark-muted mb-2">
              Measures how much a value <strong>increased or decreased</strong> from an original value. Direction matters.
            </p>
            <p className="text-sm text-text-light dark:text-text-dark-muted">
              <strong>Formula:</strong> ((New - Old) / Old) × 100
            </p>
            <p className="text-sm text-text-light dark:text-text-dark-muted mt-2">
              <strong>Use when:</strong> Tracking salary raises, price changes over time, stock performance.
            </p>
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
}
