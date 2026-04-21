interface FormulaDisplayProps {
  title: string;
  steps: string[];
}

export default function FormulaDisplay({ title, steps }: FormulaDisplayProps) {
  return (
    <div className="card mt-4 bg-surface-alt dark:bg-surface-dark">
      <h3 className="text-lg font-semibold text-text dark:text-text-dark mb-3">{title}</h3>
      <div className="space-y-2">
        {steps.map((step, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            <p className="text-text-light dark:text-text-dark-muted font-mono text-sm">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
