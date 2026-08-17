import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "IPTV reseller",
  description:
    "Explore the krooz tv reseller route with a cleaner explanation of the offer and next steps.",
  alternates: {
    canonical: `${siteUrl}/reseller`
  }
};

export default function ResellerPage() {
  return (
    <>
      <PageHero
        eyebrow="Reseller program"
        title="A reseller page that feels more professional and easier to trust."
        description="This page explains the reseller path in original language without inventing earnings, commissions, or guarantees that are not confirmed in the project."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              What to add later
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              Approved pricing, onboarding steps, partner requirements, and support
              details can be added here when the business terms are finalized.
            </p>
          </>
        }
      />

      <section className="py-20">
        <Container className="grid gap-4 lg:grid-cols-3">
          {[
            [
              "Clear positioning",
              "Explain who the reseller route is for and how it differs from a standard subscription flow."
            ],
            [
              "Support-first onboarding",
              "Make room for setup guidance, account creation steps, and policy information without clutter."
            ],
            [
              "Scalable layout",
              "The page is ready for forms, comparison tables, or a future client-area connection."
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
