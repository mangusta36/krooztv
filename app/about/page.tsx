import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "About krooz tv IPTV",
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
        title="IPTV subscriptions with setup guidance built into the journey."
        description="krooz tv provides subscription options for live and on-demand viewing, with device guidance, tutorials, and a direct help path for setup questions."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              What the site covers
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              Compare viewing periods, check compatible devices, follow setup guidance,
              and contact the service through the published WhatsApp channel.
            </p>
          </>
        }
      />

      <section className="py-20">
        <Container className="grid gap-4 lg:grid-cols-3">
          {[
            [
              "Service clarity",
              "Subscription periods and current prices are published together so visitors can compare the available options before making contact."
            ],
            [
              "Setup confidence",
              "Tutorials cover device compatibility, player selection, network preparation, and common playback troubleshooting."
            ],
            [
              "Service limits",
              "Content, picture quality, connections, and device support can vary. Confirm the current details for your location and setup before subscribing."
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
