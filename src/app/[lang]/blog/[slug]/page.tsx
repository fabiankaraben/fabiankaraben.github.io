import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import { marked } from "marked";
import Link from "next/link";
import { Calendar } from "lucide-react";
import BackButton from "@/components/BackButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechGridBackground from "@/components/TechGridBackground";
import { CopyButtonInitializer } from "./CopyButtonInitializer";

import { translations } from "@/lib/translations";

interface Props {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
}

// Generate static params for static generation (SSG)
export async function generateStaticParams() {
  const posts = getAllPosts();
  const params: { lang: string; slug: string }[] = [];
  for (const post of posts) {
    params.push({ lang: "en", slug: post.slug });
    params.push({ lang: "es", slug: post.slug });
  }
  return params;
}

// Generate dynamic metadata
export async function generateMetadata({ params }: Props) {
  const { slug, lang: langParam } = await params;
  const lang = langParam === "es" ? "es" : "en";
  const post = getPostBySlug(slug, lang);
  if (!post) {
    return {
      title: "Post Not Found",
      robots: {
        index: false,
        follow: true,
      },
    };
  }

  return {
    title: `${post.title} | Fabián Karaben`,
    description: post.description,
    robots: {
      index: false,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug, lang: langParam } = await params;
  const lang = langParam === "es" ? "es" : "en";
  const t = translations[lang];
  const post = getPostBySlug(slug, lang);

  if (!post) {
    notFound();
  }

  // Parse markdown
  const htmlContent = await marked.parse(post.content);

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-brand-orange/30 selection:text-white">
      <TechGridBackground />
      <Header lang={lang} />

      <main className="relative z-10 grow max-w-4xl mx-auto px-4 sm:px-6 w-full pt-32 pb-20">
        <article className="py-12">
          {/* Back button */}
          <div className="mb-8">
            <BackButton fallbackHref={`/${lang}/blog`}>
              {t.backToBlog}
            </BackButton>
          </div>

          {/* Header info */}
          <div className="text-center mb-12 border-b border-slate-200/80 dark:border-slate-900 pb-10">
            <div className="flex justify-center items-center gap-2 text-sm text-slate-500 dark:text-slate-400 font-mono mb-4">
              <Calendar className="w-4 h-4 text-brand-orange" />
              <span>{post.pubDate}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              {post.title}
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* Content body */}
          <div
            className="prose-custom font-sans w-full max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </article>
      </main>

      <Footer role={t.javaTitle} lang={lang} />
      <CopyButtonInitializer />
    </div>
  );
}
