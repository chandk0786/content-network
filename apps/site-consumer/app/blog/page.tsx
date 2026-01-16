import { listPosts } from "../../lib/content";

export default function BlogIndex() {
  const posts = listPosts();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-semibold">Blog</h1>
      <p className="text-sm text-gray-600 mt-2">Guides, explainers and FAQs.</p>
      <ul className="mt-6 space-y-4">
        {posts.map((p) => (
          <li key={p.slug} className="rounded-2xl border border-gray-200 bg-white p-5">
            <a className="font-semibold hover:underline" href={`/blog/${p.slug}`}>{p.title}</a>
            <div className="text-sm text-gray-600 mt-1">{p.description}</div>
            <div className="text-xs text-gray-500 mt-2">{p.date}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
