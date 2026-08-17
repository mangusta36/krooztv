import type { Metadata } from "next";

import { BlogCard } from "@/components/BlogCard";
import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { StructuredData } from "@/components/StructuredData";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { blogArticles, blogDescription, blogPath, blogTitle } from "@/data/blog";
import { generalWhatsAppUrl, siteUrl } from "@/data/site";

const blogUrl = `${siteUrl}${blogPath}`;

export const metadata: Metadata = {
  title: "blog",
  description: blogDescription,
  alternates: {
    canonical: blogUrl
  },
  openGraph: {
    title: `${blogTitle} | krooz tv`,
    description: blogDescription,
    url: blogUrl,
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: blogTitle
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${blogTitle} | krooz tv`,
    description: blogDescription,
    images: ["/images/og-image.svg"]
  }
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: blogTitle,
  description: blogDescription,
  url: blogUrl,
  publisher: {
    "@type": "Organization",
    name: "krooz tv",
    url: siteUrl
  }
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
      item: blogUrl
    }
  ]
};

export default function BlogPage() {
  return (
    <>
      <StructuredData id="blog-schema" data={blogSchema} />
      <StructuredData id="blog-breadcrumb-schema" data={breadcrumbSchema} />
      <PageHero
        eyebrow="Blog"
        title="Practical IPTV guidance for choosing, setting up, and watching well."
        description="Explore long-form krooz tv guides to IPTV services, smart TV setup, compatible devices, sports streaming, equipment, provider reliability, and cable alternatives."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              {blogArticles.length} distinct IPTV guides
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              Each article answers a different search question with practical checks,
              examples, comparisons, FAQs, and verified internal routes.
            </p>
          </>
        }
      />

      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#102f5b]">
              krooz tv blog articles
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Browse current articles about IPTV setup, device compatibility,
              subscription decisions, live sports, equipment, and troubleshooting.
            </p>
          </div>

          {blogArticles.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {blogArticles.map((article) => (
                <BlogCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              <article className="md:col-span-2 xl:col-span-3 rounded-[24px] border border-slate-200 bg-slate-50 p-8 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#217a61]">
                  Development-ready
                </p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#102f5b]">
                  No blog posts have been published yet.
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                  The blog system is live and ready for article entries. Once you add
                  items to the blog data file, cards, article pages, metadata, schema,
                  and sitemap entries will render automatically.
                </p>
                <WhatsAppLink
                  href={generalWhatsAppUrl}
                  className="mt-6 inline-flex rounded-lg bg-[#102f5b] px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#173f73]"
                >
                  Contact Support
                </WhatsAppLink>
              </article>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
