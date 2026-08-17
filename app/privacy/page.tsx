import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "privacy policy",
  description: "Read the krooz tv privacy policy.",
  robots: {
    index: false,
    follow: true
  },
  alternates: {
    canonical: `${siteUrl}/privacy`
  }
};

export default function PrivacyPage() {
  return (
    <section className="py-20">
      <Container className="max-w-4xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-sky">
          Legal
        </p>
        <h1 className="text-5xl font-semibold tracking-[-0.05em] text-white">
          Privacy policy
        </h1>
        <p className="mt-6 text-base leading-8 text-mist">
          This placeholder policy page exists so the website contains a complete legal
          route structure and no dead footer links. Replace this content with the
          approved privacy policy for krooz tv before launch.
        </p>
        <p className="mt-4 text-base leading-8 text-mist">
          The current design preserves readability, semantic structure, and crawlable
          internal linking while waiting for final legal text.
        </p>
      </Container>
    </section>
  );
}
