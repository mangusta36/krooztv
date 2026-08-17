import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { supportCards, tutorialCategories, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "support",
  description:
    "See how krooz tv support, setup guidance, and customer assistance are organized across the site.",
  alternates: {
    canonical: `${siteUrl}/support`
  }
};

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Support"
        title="Support is structured to feel visible before and after signup."
        description="This page explains how assistance can be organized for setup, subscription questions, and general help without inventing contact details that have not been approved yet."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              Ready for real contact channels
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              Add your final email address, ticket flow, chat widget, or other business
              support channel here when it is confirmed.
            </p>
          </>
        }
      />

      <section className="py-20">
        <Container className="grid gap-4 lg:grid-cols-3">
          {supportCards.map((item) => (
            <article
              key={item.title}
              className="rounded-[20px] border border-white/10 bg-[rgba(10,19,34,0.82)] p-6 shadow-panel"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading
            label="Setup coverage"
            title="Support works best when it is paired with a clear tutorials structure."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {tutorialCategories.map((item) => (
              <article
                key={item.title}
                className="rounded-[20px] border border-white/10 bg-[rgba(10,19,34,0.82)] p-6 shadow-panel"
              >
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
