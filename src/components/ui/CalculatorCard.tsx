import AdSlot from "./AdSlot";

interface CalculatorCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function CalculatorCard({ title, description, children }: CalculatorCardProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
        <div>
          <div className="card mb-6">
            <h1 className="text-3xl font-bold text-text dark:text-text-dark mb-2">{title}</h1>
            <p className="text-text-light dark:text-text-dark-muted">{description}</p>
          </div>
          {children}
          <div className="mt-4 flex items-center gap-2 text-sm text-text-light dark:text-text-dark-muted">
            <span>🔒</span>
            <span>All calculations happen in your browser. No data is sent to any server.</span>
          </div>
        </div>
        <aside className="hidden lg:block space-y-6">
          <AdSlot label="Sidebar Ad" />
          <AdSlot label="Sidebar Ad 2" />
        </aside>
      </div>
    </div>
  );
}
