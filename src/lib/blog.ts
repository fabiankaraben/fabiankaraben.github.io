import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  featured?: boolean;
  content: string;
}

export function getAllPosts(lang: string = "en"): BlogPost[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogDirectory);
  // Get unique base slugs (removing any .es.md or .md suffix)
  const uniqueSlugs = Array.from(
    new Set(
      fileNames
        .filter((fileName) => fileName.endsWith(".md"))
        .map((fileName) => fileName.replace(/\.es\.md$/, "").replace(/\.md$/, ""))
    )
  );

  const allPostsData = uniqueSlugs.map((slug) => {
    let fileName = `${slug}.md`;
    if (lang === "es") {
      const esPath = path.join(blogDirectory, `${slug}.es.md`);
      if (fs.existsSync(esPath)) {
        fileName = `${slug}.es.md`;
      }
    }

    const fullPath = path.join(blogDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      pubDate: data.pubDate ? new Date(data.pubDate).toISOString().split("T")[0] : "",
      featured: !!data.featured,
      content,
    };
  });

  // Sort posts by date descending
  return allPostsData.sort((a, b) => (a.pubDate < b.pubDate ? 1 : -1));
}

export function getPostBySlug(slug: string, lang: string = "en"): BlogPost | null {
  try {
    let fileName = `${slug}.md`;
    if (lang === "es") {
      const esPath = path.join(blogDirectory, `${slug}.es.md`);
      if (fs.existsSync(esPath)) {
        fileName = `${slug}.es.md`;
      }
    }

    const fullPath = path.join(blogDirectory, fileName);
    if (!fs.existsSync(fullPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      pubDate: data.pubDate ? new Date(data.pubDate).toISOString().split("T")[0] : "",
      featured: !!data.featured,
      content,
    };
  } catch (error) {
    return null;
  }
}
