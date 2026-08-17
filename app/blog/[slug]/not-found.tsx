import Link from "next/link";

import { Container } from "@/components/Container";

export default function BlogArticleNotFound() {
  return (
    <section className="bg-white py-24">
      <Container className="max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#217a61]">
          Blog article
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#102f5b]">
          This article is not available yet.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          The blog template is active, but this specific article has not been added to the
          site content collection yet.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-flex rounded-lg bg-[#102f5b] px-5 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#173f73]"
        >
          Back to Blog
        </Link>
      </Container>
    </section>
  );
}
