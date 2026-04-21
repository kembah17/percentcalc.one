"use client";

import { useState } from "react";

interface ResultDisplayProps {
  label: string;
  value: string;
  size?: "lg" | "xl";
}

export default function ResultDisplay({ label, value, size = "xl" }: ResultDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <div className="card bg-primary/5 dark:bg-primary/10 border-primary/20">
      <p className="text-sm font-medium text-text-light dark:text-text-dark-muted mb-1">{label}</p>
      <div className="flex items-center justify-between gap-4">
        <p className={`font-bold text-primary ${size === "xl" ? "text-4xl" : "text-2xl"}`}>
          {value}
        </p>
        <button
          onClick={handleCopy}
          className="shrink-0 px-3 py-1.5 text-sm font-medium text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? "✓ Copied" : "Copy"}
        </button>
      </div>
    </div>
  );
}
