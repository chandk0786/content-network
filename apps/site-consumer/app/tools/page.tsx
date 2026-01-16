import { listTools } from "../../lib/content";

export default function ToolsIndex() {
  const tools = listTools();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Tools</h1>
      <p className="text-sm text-gray-600 mt-2">Fast calculators and utilities.</p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {tools.map((t) => (
          <li key={t.slug} className="rounded-2xl border border-gray-200 bg-white p-5">
            <a className="font-semibold hover:underline" href={`/tools/${t.slug}`}>{t.title}</a>
            <div className="text-sm text-gray-600 mt-1">{t.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
