import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "terms of use",
  description: "Read the krooz tv terms of use.",
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: `${siteUrl}/terms`
  }
};

export default function TermsPage() {
  return (
    <section className="py-20">
      <Container className="max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky">
          Legal
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white">
          Terms of use
        </h1>
        <p className="mt-6 text-base leading-8 text-mist">
          This placeholder terms page is included to complete the site architecture
          with working legal routes and a professional footer structure. Replace this
          page with the approved terms for krooz tv before production launch.
        </p>
        <p className="mt-4 text-base leading-8 text-mist">
          The page is intentionally simple, semantic, and lightweight to keep
          accessibility and performance strong.
        </p>
      </Container>
    </section>
  );
}
