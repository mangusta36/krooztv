import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "refund policy",
  description: "Review the krooz tv refund policy structure.",
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: `${siteUrl}/refund-policy`
  }
};

export default function RefundPolicyPage() {
  return (
    <section className="py-20">
      <Container className="max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky">
          Legal
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white">
          Refund policy
        </h1>
        <p className="mt-6 text-base leading-8 text-mist">
          This page is intentionally structured as a placeholder until the actual refund
          terms for krooz tv are approved. No guarantees or refund conditions are
          invented here.
        </p>
        <p className="mt-4 text-base leading-8 text-mist">
          Add your final eligibility terms, request process, timing expectations, and
          exclusions in this route before production launch.
        </p>
      </Container>
    </section>
  );
}
