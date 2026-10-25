import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { remark } from "remark"
import html from "remark-html"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  author: string
  featured?: boolean
  content: string
}

export type BlogPostMeta = Omit<BlogPost, "content">

function parseDate(dateStr: string): Date {
  return new Date(dateStr)
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return []

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "")
    const filePath = path.join(BLOG_DIR, filename)
    const fileContent = fs.readFileSync(filePath, "utf-8")
    const { data } = matter(fileContent)

    return {
      slug,
      title: data.title ?? "",
      excerpt: data.excerpt ?? "",
      category: data.category ?? "",
      date: data.date ?? "",
      author: data.author ?? "HukukLabs Ekibi",
      featured: data.featured ?? false,
    }
  })

  return posts.sort(
    (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
  )
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null

  const fileContent = fs.readFileSync(filePath, "utf-8")
  const { data, content: markdown } = matter(fileContent)

  const result = await remark().use(html, { sanitize: false }).process(markdown)

  return {
    slug,
    title: data.title ?? "",
    excerpt: data.excerpt ?? "",
    category: data.category ?? "",
    date: data.date ?? "",
    author: data.author ?? "HukukLabs Ekibi",
    featured: data.featured ?? false,
    content: result
      .toString()
      .replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener noreferrer"'),
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return []
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""))
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}
