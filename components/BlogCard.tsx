import Image from "next/image";
import Link from "next/link";

import type { BlogArticle } from "@/data/blog";
import { blogPath } from "@/data/blog";

type BlogCardProps = {
  article: BlogArticle;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}

export function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(10,19,34,0.82)] shadow-panel">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#0b2245]">
        <Image
          src={article.featuredImage}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#79dcb7]">
          <span>{article.category}</span>
          <span className="text-slate-400">•</span>
          <time dateTime={article.publishedAt} className="text-slate-300">
            {formatDate(article.publishedAt)}
          </time>
          <span className="text-slate-400">•</span>
          <span className="text-slate-300">{article.readingTime}</span>
        </div>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">
          <Link href={`${blogPath}/${article.slug}`} className="transition-colors hover:text-[#79dcb7]">
            {article.title}
          </Link>
        </h2>
        <p className="mt-4 text-sm leading-7 text-mist">{article.excerpt}</p>
        <Link
          href={`${blogPath}/${article.slug}`}
          className="mt-6 inline-flex rounded-lg border border-[#79dcb7]/35 px-4 py-2 text-sm font-semibold text-[#79dcb7] transition hover:border-[#79dcb7] hover:bg-[#79dcb7]/10"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
