import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { clientHelpWhatsAppUrl, contactOptions, generalWhatsAppUrl, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact krooz tv",
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
        title="Contact krooz tv for subscription and setup help."
        description="Use the published WhatsApp channel for plan questions, trial requests, account help, device setup, or playback troubleshooting."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              Include useful details
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              For technical help, include your device, IPTV player, connection type,
              affected channel, and the time the issue occurred.
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
      <section className="bg-white py-16">
        <Container className="flex flex-wrap justify-center gap-4">
          <WhatsAppLink href={generalWhatsAppUrl} className="rounded-lg bg-[#102f5b] px-6 py-3 text-sm font-bold text-white">Ask about plans or a trial</WhatsAppLink>
          <WhatsAppLink href={clientHelpWhatsAppUrl} className="rounded-lg border border-[#102f5b] px-6 py-3 text-sm font-bold text-[#102f5b]">Get account or setup help</WhatsAppLink>
        </Container>
      </section>
    </>
  );
}
