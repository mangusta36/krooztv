import type { Metadata } from "next";

import { CoverageSection } from "@/components/CoverageSection";
import { DeviceGrid } from "@/components/DeviceGrid";
import { EntertainmentSection } from "@/components/EntertainmentSection";
import { FaqList } from "@/components/FaqList";
import { TrialCta } from "@/components/TrialCta";
import { Hero } from "@/components/Hero";
import { PricingSection } from "@/components/PricingSection";
import { ResellerCta } from "@/components/ResellerCta";
import { StreamingSection } from "@/components/StreamingSection";
import { StructuredData } from "@/components/StructuredData";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { faqItems, siteUrl } from "@/data/site";

const homeTitle = "krooz tv IPTV Subscription | Live TV & Sports";
const homeDescription =
  "Stream live TV, sports, movies, and series with krooz tv IPTV. Explore flexible plans, compatible devices, simple setup guidance, and support.";

export const metadata: Metadata = {
  title: {
    absolute: homeTitle
  },
  description: homeDescription,
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: siteUrl,
    siteName: "krooz tv",
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "krooz tv IPTV for live TV, sports, movies, and series"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [`${siteUrl}/images/og-image.svg`]
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.slice(0, 6).map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }))
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "krooz tv",
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: homeDescription
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "krooz tv",
  url: siteUrl,
  description: homeDescription
};

export default function HomePage() {
  return (
    <>
      <StructuredData id="org-schema" data={organizationSchema} />
      <StructuredData id="website-schema" data={websiteSchema} />
      <StructuredData id="faq-schema" data={faqSchema} />
      <Hero />
      <PricingSection />
      <EntertainmentSection />
      <CoverageSection />
      <WhyChooseSection />
      <DeviceGrid />
      <StreamingSection />
      <ResellerCta />
      <TrialCta />
      <FaqList />
    </>
  );
}
