import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { resellerWhatsAppUrl, siteUrl } from "@/data/site";

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
        title="Ask about the krooz tv reseller path."
        description="The reseller route is separate from a standard viewing subscription. Use the dedicated contact channel to request the current terms before making a decision."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              Confirm before joining
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              Ask for current pricing, onboarding steps, account tools, partner
              requirements, support scope, and applicable policies in writing.
            </p>
          </>
        }
      />

      <section className="py-20">
        <Container className="grid gap-4 lg:grid-cols-3">
          {[
            [
              "Clear positioning",
              "This route is for people evaluating a reseller relationship. Viewers who only need access should use the standard subscription page."
            ],
            [
              "Support-first onboarding",
              "Use the dedicated WhatsApp request to discuss the current onboarding process and available support."
            ],
            [
              "No earnings promises",
              "Evaluate the written terms, costs, responsibilities, service limitations, and customer-support obligations before committing."
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
      <section className="bg-white py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold text-[#102f5b]">Request current reseller information</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">The dedicated channel opens with a reseller inquiry so the conversation stays separate from customer account support.</p>
          <WhatsAppLink href={resellerWhatsAppUrl} className="mt-6 inline-flex rounded-lg bg-[#102f5b] px-6 py-3 text-sm font-bold text-white">Contact reseller support</WhatsAppLink>
        </Container>
      </section>
    </>
  );
}
