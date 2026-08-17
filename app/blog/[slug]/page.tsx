import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/BlogCard";
import { BlogRichContent } from "@/components/BlogRichContent";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import {
  blogArticles,
  blogPath,
  getBlogArticle,
  getBlogArticleUrl,
  getRelatedArticles,
  getArticleWordCount
} from "@/data/blog";
import { generalWhatsAppUrl, siteUrl } from "@/data/site";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    return {
      title: "blog article"
    };
  }

  const articleUrl = getBlogArticleUrl(article.slug);

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: {
      canonical: articleUrl
    },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: articleUrl,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt ?? article.publishedAt,
      authors: [article.author.name],
      section: article.category,
      tags: article.keywords,
      images: [
        {
          url: article.featuredImage,
          width: article.featuredImageWidth,
          height: article.featuredImageHeight,
          alt: article.imageAlt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: [article.featuredImage]
    }
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = getBlogArticleUrl(article.slug);
  const relatedArticles = getRelatedArticles(article);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    image: `${siteUrl}${article.featuredImage}`,
    mainEntityOfPage: articleUrl,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: {
      "@type": "Organization",
      name: article.author.name
    },
    publisher: {
      "@type": "Organization",
      name: "krooz tv",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/og-image.svg`
      }
    },
    articleSection: article.category,
    keywords: article.keywords.join(", "),
    wordCount: getArticleWordCount(article),
    about: {
      "@type": "Thing",
      name: article.primaryKeyword
    },
    mentions: article.keywords.slice(1).map((keyword) => ({
      "@type": "Thing",
      name: keyword
    }))
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}${blogPath}`
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl
      }
    ]
  };
  const faqSchema =
    article.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer
            }
          }))
        }
      : null;

  return (
    <>
      <StructuredData id={`blog-posting-${article.slug}`} data={articleSchema} />
      <StructuredData id={`blog-breadcrumb-${article.slug}`} data={breadcrumbSchema} />
      {faqSchema ? <StructuredData id={`blog-faq-${article.slug}`} data={faqSchema} /> : null}

      <Breadcrumbs
        items={[
          { href: "/", label: "Home" },
          { href: blogPath, label: "Blog" },
          { label: article.title }
        ]}
      />

      <article className="bg-white py-16 sm:py-20">
        <Container className="grid gap-12 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-bold uppercase tracking-[0.16em] text-[#217a61]">
              <span>{article.category}</span>
              <span className="text-slate-300">•</span>
              <span>{article.readingTime}</span>
            </div>

            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-[#102f5b] sm:text-5xl">
              {article.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              {article.introduction}
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>
                By <strong className="text-[#173d6d]">{article.author.name}</strong>
              </span>
              <time dateTime={article.publishedAt}>
                Published {formatDate(article.publishedAt)}
              </time>
              <time dateTime={article.updatedAt ?? article.publishedAt}>
                Updated {formatDate(article.updatedAt ?? article.publishedAt)}
              </time>
            </div>

            <div className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50">
              <Image
                src={article.featuredImage}
                alt={article.imageAlt}
                width={article.featuredImageWidth}
                height={article.featuredImageHeight}
                priority
                className="h-auto w-full"
              />
            </div>

            <div className="mt-12 max-w-4xl">
              <BlogRichContent content={article.content} />
            </div>

            {article.faqs.length > 0 ? (
              <section className="mt-16 max-w-4xl">
                <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#102f5b]">
                  Frequently asked questions
                </h2>
                <div className="mt-8 space-y-4">
                  {article.faqs.map((faq) => (
                    <details key={faq.question} className="rounded-[20px] border border-slate-200 bg-slate-50 p-6">
                      <summary className="cursor-pointer list-none text-lg font-semibold text-[#173d6d]">
                        {faq.question}
                      </summary>
                      <p className="mt-4 text-base leading-8 text-slate-700">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            <section className="mt-16 rounded-[28px] bg-[#071a3b] p-8 text-white sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#79dcb7]">
                Need help next?
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">
                {article.cta.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#d7e1f0]">
                {article.cta.description}
              </p>
              {article.cta.href === "/contact" ? (
                <WhatsAppLink
                  href={generalWhatsAppUrl}
                  className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] text-[#102f5b] transition hover:bg-[#ecf5ff]"
                >
                  {article.cta.label}
                </WhatsAppLink>
              ) : (
                <Link
                  href={article.cta.href}
                  className="mt-6 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] text-[#102f5b] transition hover:bg-[#ecf5ff]"
                >
                  {article.cta.label}
                </Link>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-[#102f5b]">Article details</h2>
              <dl className="mt-5 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-[#173d6d]">Category</dt>
                  <dd className="mt-1 text-slate-600">{article.category}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#173d6d]">Published</dt>
                  <dd className="mt-1 text-slate-600">{formatDate(article.publishedAt)}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#173d6d]">Updated</dt>
                  <dd className="mt-1 text-slate-600">
                    {formatDate(article.updatedAt ?? article.publishedAt)}
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#173d6d]">Reading time</dt>
                  <dd className="mt-1 text-slate-600">{article.readingTime}</dd>
                </div>
              </dl>
            </section>

            {relatedArticles.length > 0 ? (
              <section>
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-[#102f5b]">
                  Related articles
                </h2>
                <div className="mt-6 space-y-6">
                  {relatedArticles.map((relatedArticle) => (
                    <BlogCard key={relatedArticle.slug} article={relatedArticle} />
                  ))}
                </div>
              </section>
            ) : null}
          </aside>
        </Container>
      </article>
    </>
  );
}
