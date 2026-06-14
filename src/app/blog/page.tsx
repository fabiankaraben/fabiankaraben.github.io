import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TechGridBackground from "@/components/TechGridBackground";
import { getAllPosts } from "@/lib/blog";

import { cookies } from "next/headers";
import { translations } from "@/lib/translations";

export const metadata = {
  title: "Blog | Fabián Karaben",
  description: "Read technical articles on Java, Spring Boot, microservices, hexagonal architecture, and backend systems design.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function BlogIndex() {
  const cookieStore = await cookies();
  const lang = (cookieStore.get("lang")?.value || "en") as "en" | "es";
  const t = translations[lang];
  const posts = getAllPosts(lang);

  return (
    <div className="relative min-h-screen flex flex-col selection:bg-brand-orange/30 selection:text-white">
      <TechGridBackground />
      <Header lang={lang} />

      <main className="relative z-10 grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 pb-20">
        <section className="py-12">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-mono text-slate-500 dark:text-slate-400 hover:text-brand-orange transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{t.backToHome}</span>
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-12">
            <span className="font-mono text-sm text-brand-orange">
              {lang === "es" ? "// ARTÍCULOS" : "// ARTICLES"}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
              {t.techBlog}
            </h1>
          </div>

          {posts.length === 0 ? (
            <p className="text-slate-600 dark:text-slate-400 font-mono">{t.noArticles}</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="group bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200 dark:border-slate-900 rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-brand-orange/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/50 hover:dark:shadow-brand-orange/5"
                >
                  <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                    <span className="font-mono text-xs text-slate-500 mb-2">{post.pubDate}</span>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-orange transition-colors duration-300 mb-3">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-4 font-sans">
                      {post.description}
                    </p>
                    <span className="mt-auto text-brand-orange group-hover:text-white transition-colors text-sm font-semibold flex items-center gap-1">
                      {t.readArticle} &rarr;
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <Footer role={t.javaTitle} />
    </div>
  );
}
