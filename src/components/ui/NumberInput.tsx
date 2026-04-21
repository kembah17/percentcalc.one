"use client";

interface NumberInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  suffix?: string;
  prefix?: string;
  id?: string;
}

export default function NumberInput({ label, value, onChange, placeholder, suffix, prefix, id }: NumberInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-text dark:text-text-dark mb-1">
        {label}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light dark:text-text-dark-muted text-lg">
            {prefix}
          </span>
        )}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`input-field ${prefix ? "pl-8" : ""} ${suffix ? "pr-10" : ""}`}
        />
        {suffix && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light dark:text-text-dark-muted text-lg font-medium">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}
