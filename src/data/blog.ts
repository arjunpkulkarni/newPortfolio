import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  company?: string;
  role?: string;
  technologies?: string[];
  category?: string;
  type?: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

/** Frontmatter only — used for listings and static params. */
export function getPostMeta(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data: metadata } = matter(source);
  return {
    metadata: metadata as Metadata,
    slug,
  };
}

/** Full rendered HTML — used for individual post pages. */
export async function getPost(slug: string) {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata: metadata as Metadata,
    slug,
  };
}

export async function getBlogPosts() {
  const mdxFiles = getMDXFiles(CONTENT_DIR);
  return mdxFiles
    .map((file) => getPostMeta(path.basename(file, path.extname(file))))
    .filter((post) => post.metadata.type !== "project");
}
