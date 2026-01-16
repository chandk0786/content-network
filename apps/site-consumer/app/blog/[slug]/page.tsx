import fs from "node:fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { getMdxPath, getAllSlugs } from "../../../lib/content";

export async function generateStaticParams() {
  return getAllSlugs("post").map((slug) => ({ slug }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const file = getMdxPath("post", params.slug);
  const source = fs.readFileSync(file, "utf8");
  const { content, frontmatter } = await compileMDX<{ title: string; description?: string; date?: string }>({
    source,
    options: { parseFrontmatter: true }
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <article className="prose max-w-none">
        <h1>{frontmatter.title}</h1>
        {frontmatter.description ? <p>{frontmatter.description}</p> : null}
        {frontmatter.date ? <p className="text-sm text-gray-500">{frontmatter.date}</p> : null}
        {content}
      </article>
    </div>
  );
}
