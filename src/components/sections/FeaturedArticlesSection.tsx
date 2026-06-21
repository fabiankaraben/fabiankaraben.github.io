import Link from "next/link";
import { Language, translations } from "@/lib/translations";
import { getAllPosts } from "@/lib/blog";

export default function FeaturedArticlesSection({ lang }: { lang: Language }) {
  const t = translations[lang];
  const allPosts = getAllPosts(lang);
  const featuredPosts = allPosts.filter((post) => post.featured).slice(0, 3);

  if (featuredPosts.length === 0) return null;

  return (
    <section id="blog" className="py-20 border-t border-slate-200/80 dark:border-slate-900/60">
      <div className="flex items-center gap-3 mb-12">
        <span className="font-mono text-sm text-brand-orange">{"// 06."}</span>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 relative after:content-[''] after:absolute after:left-0 after:bottom-[-6px] after:w-10 after:h-[2px] after:bg-brand-orange">
          {t.featuredArticles}
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredPosts.map((post) => (
          <div
            key={post.slug}
            className="group bg-white/40 dark:bg-slate-900/30 backdrop-blur-md border border-slate-200 dark:border-slate-900 rounded-xl p-6 flex flex-col transition-all duration-300 hover:border-brand-orange/40 hover:shadow-xl hover:shadow-slate-200/50 hover:dark:shadow-brand-orange/5"
          >
            <Link href={`/${lang}/blog/${post.slug}`} className="flex flex-col h-full">
              <span className="font-mono text-xs text-slate-500 mb-2">{post.pubDate}</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-brand-orange transition-colors duration-300 mb-3">
                {post.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-sans">
                {post.description}
              </p>
              <span className="mt-auto text-brand-orange group-hover:text-white transition-colors text-sm font-semibold flex items-center gap-1">
                {t.readArticle} &rarr;
              </span>
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href={`/${lang}/blog`}
          className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-900 hover:border-brand-orange/40 bg-white/40 dark:bg-slate-900/40 backdrop-blur-md rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-orange transition-all duration-300"
        >
          {t.seeAllArticles} &rarr;
        </Link>
      </div>
    </section>
  );
}
