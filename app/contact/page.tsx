import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { contactOptions, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "contact us",
  description:
    "Review the krooz tv contact structure for general inquiries, subscription help, and technical assistance.",
  alternates: {
    canonical: `${siteUrl}/contact`
  }
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="A dedicated contact page that is ready for your real business channels."
        description="No phone numbers, emails, addresses, or chat claims are invented here. The page gives you a professional structure so approved contact details can be added later."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              Approved details only
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              Replace the placeholders below with the exact channels you want customers
              to use for sales, support, and technical assistance.
            </p>
          </>
        }
      />

      <section className="py-20">
        <Container className="grid gap-4 md:grid-cols-3">
          {contactOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-[20px] border border-white/10 bg-[rgba(10,19,34,0.82)] p-6 shadow-panel"
            >
              <h2 className="text-xl font-semibold text-white">{option.title}</h2>
              <p className="mt-3 text-sm leading-7 text-mist">{option.description}</p>
            </article>
          ))}
        </Container>
      </section>
    </>
  );
}
