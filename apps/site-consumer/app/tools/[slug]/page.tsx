import fs from "node:fs";
import { compileMDX } from "next-mdx-remote/rsc";
import { getMdxPath, getAllSlugs } from "../../../lib/content";
import React from "react";

export async function generateStaticParams() {
  return getAllSlugs("tool").map((slug) => ({ slug }));
}

export default async function ToolPage({ params }: { params: { slug: string } }) {
  const file = getMdxPath("tool", params.slug);
  const source = fs.readFileSync(file, "utf8");
  const { content, frontmatter } = await compileMDX<{ title: string; description?: string }>({
    source,
    options: { parseFrontmatter: true }
  });

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <article className="prose max-w-none">
        <h1>{frontmatter.title}</h1>
        {frontmatter.description ? <p>{frontmatter.description}</p> : null}
      </article>
      <div className="mt-6">{content}</div>
    </div>
  );
}
