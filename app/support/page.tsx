import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { clientHelpWhatsAppUrl, supportCards, tutorialCategories, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "IPTV Setup and Account Support",
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
        title="Get help with your account, device setup, or playback."
        description="Start with the tutorials and troubleshooting guides, then use the client help channel with your device and connection details if the issue continues."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              Faster troubleshooting
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              Note the device model, player app, network type, affected content, error
              message, and troubleshooting steps you have already tried.
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

      <section className="bg-white py-16">
        <Container className="text-center">
          <h2 className="text-3xl font-semibold text-[#102f5b]">Still need help?</h2>
          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-600">Use the published client help channel after checking the relevant setup or troubleshooting guide.</p>
          <WhatsAppLink href={clientHelpWhatsAppUrl} className="mt-6 inline-flex rounded-lg bg-[#102f5b] px-6 py-3 text-sm font-bold text-white">Contact client help</WhatsAppLink>
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
