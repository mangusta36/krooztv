import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "dmca",
  description: "Review the krooz tv DMCA policy structure.",
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: `${siteUrl}/dmca`
  }
};

export default function DmcaPage() {
  return (
    <section className="py-20">
      <Container className="max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky">
          Legal
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white">DMCA</h1>
        <p className="mt-6 text-base leading-8 text-mist">
          This DMCA page is a framework for later completion. It should be updated with
          the final notice procedure, rights-holder contact method, and any approved
          policy language for krooz tv.
        </p>
        <p className="mt-4 text-base leading-8 text-mist">
          The current version avoids fabricating legal claims or copying text from the
          reference website.
        </p>
      </Container>
    </section>
  );
}
