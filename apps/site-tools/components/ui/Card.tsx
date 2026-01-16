export function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="border-b border-gray-100 p-4 font-semibold">{children}</div>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}
