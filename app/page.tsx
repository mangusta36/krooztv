import Script from "next/script";

import { CoverageSection } from "@/components/CoverageSection";
import { DeviceGrid } from "@/components/DeviceGrid";
import { EntertainmentSection } from "@/components/EntertainmentSection";
import { FaqList } from "@/components/FaqList";
import { TrialCta } from "@/components/TrialCta";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { ResellerCta } from "@/components/ResellerCta";
import { StreamingSection } from "@/components/StreamingSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { siteUrl } from "@/data/site";

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: "Can I use krooz tv on multiple devices?", acceptedAnswer: { "@type": "Answer", text: "Device connections depend on the selected subscription option." } }] };
const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", name: "krooz tv", url: siteUrl, logo: `${siteUrl}/images/og-image.svg` };

export default function HomePage() {
  return <><Script id="org-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} /><Script id="faq-schema" type="application/ld+json" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><Hero /><PricingSection /><EntertainmentSection /><CoverageSection /><WhyChooseSection /><DeviceGrid /><StreamingSection /><ResellerCta /><TrialCta /><FaqList /></>;
}
