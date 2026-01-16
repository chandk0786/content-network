import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const POSTS_DIR = path.join(ROOT, "content/posts");
const TOOLS_DIR = path.join(ROOT, "content/tools");

type Front = {
  title: string;
  description?: string;
  date?: string;
  slug: string;
  type: "post" | "tool";
};

function readAll(dir: string) {
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".mdx"));
  return files.map((file) => {
    const full = path.join(dir, file);
    const raw = fs.readFileSync(full, "utf8");
    const { data } = matter(raw);
    return { ...(data as Front), file };
  });
}

export function listPosts() {
  return readAll(POSTS_DIR).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

export function listTools() {
  return readAll(TOOLS_DIR).sort((a, b) => (a.title || "").localeCompare(b.title || ""));
}

export function getMdxPath(type: "post" | "tool", slug: string) {
  const dir = type === "post" ? POSTS_DIR : TOOLS_DIR;
  return path.join(dir, `${slug}.mdx`);
}

export function getAllSlugs(type: "post" | "tool") {
  const dir = type === "post" ? POSTS_DIR : TOOLS_DIR;
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(".mdx", ""));
}
