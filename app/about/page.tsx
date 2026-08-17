import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "about us",
  description:
    "Learn how krooz tv presents its streaming service, support philosophy, and IPTV-focused customer journey.",
  alternates: {
    canonical: `${siteUrl}/about`
  }
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About krooz tv"
        title="A clearer service story built around viewing, setup, and support."
        description="This page keeps the brand presentation concise and professional without inventing founding dates, company awards, customer counts, or partnerships that are not confirmed."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              Brand direction
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              krooz tv is positioned here as a modern streaming service with a strong
              focus on subscription clarity, device flexibility, and accessible support.
            </p>
          </>
        }
      />

      <section className="py-20">
        <Container className="grid gap-4 lg:grid-cols-3">
          {[
            [
              "Service clarity",
              "The website is designed to help customers understand what is offered without forcing them through cluttered or repetitive sales messaging."
            ],
            [
              "Setup confidence",
              "Tutorials, device compatibility, and support information are treated as core parts of the experience."
            ],
            [
              "Global viewing mindset",
              "The information architecture supports international audiences and multi-device use in a cleaner, more modern format."
            ]
          ].map(([title, description]) => (
            <article
              key={title}
              className="rounded-[20px] border border-white/10 bg-[rgba(10,19,34,0.82)] p-6 shadow-panel"
            >
              <h2 className="text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-mist">{description}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
