import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { PricingSection } from "@/components/PricingSection";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingPlans, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "IPTV subscription plans",
  description:
    "Compare krooz tv IPTV subscription durations, prices, and supported viewing features in one place.",
  alternates: {
    canonical: `${siteUrl}/plans`
  }
};

export default function PlansPage() {
  return (
    <>
      <PageHero
        eyebrow="IPTV subscription"
        title="Plans organized for easier comparison and a cleaner subscribe flow."
        description="Compare the 1, 3, 6, and 12 month subscription options and choose the term that fits your viewing needs."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              Simple plan comparison
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              Pricing and inclusions are presented consistently so each subscription
              period is easy to compare before contacting krooz tv.
            </p>
          </>
        }
      />

      <PricingSection />

      <section className="py-20">
        <Container>
          <SectionHeading
            label="Plan notes"
            title="Choose the subscription period that works for you."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {pricingPlans.map((plan) => (
              <article
                key={plan.duration}
                className="rounded-[20px] border border-white/10 bg-[rgba(10,19,34,0.82)] p-6 shadow-panel"
              >
                <h2 className="text-2xl font-semibold text-white">{plan.duration}</h2>
                <p className="mt-3 text-sm leading-7 text-mist">{plan.description}</p>
                <p className="mt-4 text-sm font-semibold text-sky">
                  Current price: {plan.priceLabel}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <SectionHeading
            label="Before you subscribe"
            title="Use the buying guides to compare the complete service fit."
            description="Confirm content, provider transparency, cable-replacement needs, and sports requirements before choosing a subscription term."
          />
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              ["/blog/best-iptv-services-us", "Compare US IPTV services"],
              ["/blog/choose-reliable-iptv-provider", "Evaluate provider reliability"],
              ["/blog/can-iptv-replace-cable", "Decide whether IPTV can replace cable"],
              ["/blog/iptv-services-sports-fans", "Compare IPTV for sports fans"]
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-[20px] border border-slate-200 bg-slate-50 p-6 text-lg font-semibold text-[#102f5b] transition hover:border-[#79dcb7] hover:text-[#217a61]"
              >
                {label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
