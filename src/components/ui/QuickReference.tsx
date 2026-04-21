interface QuickReferenceProps {
  title: string;
  headers: string[];
  rows: string[][];
}

export default function QuickReference({ title, headers, rows }: QuickReferenceProps) {
  return (
    <div className="card mt-6">
      <h2 className="text-xl font-bold text-text dark:text-text-dark mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border dark:border-border-dark">
              {headers.map((h, i) => (
                <th key={i} className="text-left py-2 px-3 font-semibold text-text dark:text-text-dark">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-b border-border/50 dark:border-border-dark/50 last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className="py-2 px-3 text-text-light dark:text-text-dark-muted">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
