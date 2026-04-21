"use client";

import { useState } from "react";
import CalculatorCard from "@/components/ui/CalculatorCard";
import NumberInput from "@/components/ui/NumberInput";
import QuickReference from "@/components/ui/QuickReference";

const PRESET_TIPS = [10, 15, 18, 20, 25];

export default function TipCalculator() {
  const [billAmount, setBillAmount] = useState("");
  const [tipPercent, setTipPercent] = useState("18");
  const [customTip, setCustomTip] = useState("");
  const [people, setPeople] = useState("1");
  const [roundUp, setRoundUp] = useState(false);
  const [isCustom, setIsCustom] = useState(false);

  const bill = parseFloat(billAmount) || 0;
  const tip = isCustom ? (parseFloat(customTip) || 0) : (parseFloat(tipPercent) || 0);
  const numPeople = Math.max(1, parseInt(people) || 1);

  let tipAmount = bill * (tip / 100);
  let totalAmount = bill + tipAmount;

  if (roundUp) {
    totalAmount = Math.ceil(totalAmount);
    tipAmount = totalAmount - bill;
  }

  const perPerson = totalAmount / numPeople;
  const tipPerPerson = tipAmount / numPeople;

  const fmt = (n: number) => "$" + n.toFixed(2);

  const quickRefRows = [
    ["$20.00", "$2.00", "$3.00", "$3.60", "$4.00", "$5.00"],
    ["$35.00", "$3.50", "$5.25", "$6.30", "$7.00", "$8.75"],
    ["$50.00", "$5.00", "$7.50", "$9.00", "$10.00", "$12.50"],
    ["$75.00", "$7.50", "$11.25", "$13.50", "$15.00", "$18.75"],
    ["$100.00", "$10.00", "$15.00", "$18.00", "$20.00", "$25.00"],
    ["$150.00", "$15.00", "$22.50", "$27.00", "$30.00", "$37.50"],
    ["$200.00", "$20.00", "$30.00", "$36.00", "$40.00", "$50.00"],
  ];

  return (
    <CalculatorCard
      title="Tip Calculator"
      description="Calculate tips and split bills easily. Choose a preset tip percentage or enter a custom amount."
    >
      <div className="card">
        {/* Bill Amount */}
        <div className="mb-6">
          <NumberInput
            label="Bill Amount"
            value={billAmount}
            onChange={setBillAmount}
            placeholder="0.00"
            prefix="$"
            id="bill"
          />
        </div>

        {/* Tip Percentage */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-text dark:text-text-dark mb-2">Tip Percentage</label>
          <div className="flex flex-wrap gap-2 mb-3">
            {PRESET_TIPS.map((p) => (
              <button
                key={p}
                onClick={() => { setTipPercent(p.toString()); setIsCustom(false); }}
                className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  !isCustom && parseInt(tipPercent) === p
                    ? "bg-primary text-surface"
                    : "bg-surface-alt dark:bg-surface-dark border border-border dark:border-border-dark text-text-light dark:text-text-dark-muted hover:border-primary"
                }`}
              >
                {p}%
              </button>
            ))}
            <button
              onClick={() => setIsCustom(true)}
              className={`px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isCustom
                  ? "bg-primary text-surface"
                  : "bg-surface-alt dark:bg-surface-dark border border-border dark:border-border-dark text-text-light dark:text-text-dark-muted hover:border-primary"
              }`}
            >
              Custom
            </button>
          </div>
          {isCustom && (
            <div className="max-w-xs">
              <NumberInput
                label="Custom Tip %"
                value={customTip}
                onChange={setCustomTip}
                placeholder="e.g., 22"
                suffix="%"
                id="customTip"
              />
            </div>
          )}
        </div>

        {/* Number of People */}
        <div className="mb-6">
          <NumberInput
            label="Number of People"
            value={people}
            onChange={setPeople}
            placeholder="1"
            id="people"
          />
        </div>

        {/* Round Up Toggle */}
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={() => setRoundUp(!roundUp)}
            className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
              roundUp ? "bg-primary" : "bg-surface-alt dark:bg-surface-dark-alt border border-border dark:border-border-dark"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-surface transition-transform duration-300 ${
                roundUp ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span className="text-sm font-medium text-text dark:text-text-dark">Round up total to nearest dollar</span>
        </div>

        {/* Results */}
        {bill > 0 && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20 text-center">
                <p className="text-sm font-medium text-text-light dark:text-text-dark-muted mb-1">Tip Amount</p>
                <p className="text-3xl font-bold text-primary">{fmt(tipAmount)}</p>
              </div>
              <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20 text-center">
                <p className="text-sm font-medium text-text-light dark:text-text-dark-muted mb-1">Total</p>
                <p className="text-3xl font-bold text-primary">{fmt(totalAmount)}</p>
              </div>
              <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20 text-center">
                <p className="text-sm font-medium text-text-light dark:text-text-dark-muted mb-1">Per Person</p>
                <p className="text-3xl font-bold text-primary">{fmt(perPerson)}</p>
              </div>
            </div>

            {numPeople > 1 && (
              <div className="card bg-surface-alt dark:bg-surface-dark">
                <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-3">Split Breakdown</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-text-light dark:text-text-dark-muted">Bill per person</p>
                    <p className="text-lg font-semibold text-text dark:text-text-dark">{fmt(bill / numPeople)}</p>
                  </div>
                  <div>
                    <p className="text-text-light dark:text-text-dark-muted">Tip per person</p>
                    <p className="text-lg font-semibold text-text dark:text-text-dark">{fmt(tipPerPerson)}</p>
                  </div>
                  <div>
                    <p className="text-text-light dark:text-text-dark-muted">Total per person</p>
                    <p className="text-lg font-semibold text-primary">{fmt(perPerson)}</p>
                  </div>
                  <div>
                    <p className="text-text-light dark:text-text-dark-muted">Number of people</p>
                    <p className="text-lg font-semibold text-text dark:text-text-dark">{numPeople}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Summary line */}
            <div className="p-3 rounded-lg bg-surface-alt dark:bg-surface-dark text-center text-sm text-text-light dark:text-text-dark-muted">
              {fmt(bill)} bill + {fmt(tipAmount)} tip ({tip}%) = <strong className="text-text dark:text-text-dark">{fmt(totalAmount)}</strong>
              {numPeople > 1 && <> split {numPeople} ways = <strong className="text-primary">{fmt(perPerson)}/person</strong></>}
            </div>
          </div>
        )}
      </div>

      <QuickReference
        title="Quick Tip Reference"
        headers={["Bill", "10% Tip", "15% Tip", "18% Tip", "20% Tip", "25% Tip"]}
        rows={quickRefRows}
      />
    </CalculatorCard>
  );
}
