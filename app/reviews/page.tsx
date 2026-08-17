import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = { title: "krooz tv reviews", description: "Read verified krooz tv review information when available.", alternates: { canonical: `${siteUrl}/reviews` } };

export default function ReviewsPage() {
  return <><PageHero eyebrow="krooz tv reviews" title="Customer feedback belongs in a clear, verifiable place." description="This route is ready for genuine customer reviews without invented ratings or testimonials." aside={<><strong className="text-lg text-white">Verified feedback only</strong><p className="mt-3 text-sm leading-7 text-slate-300">Connect an approved reviews source here when real feedback is available.</p></>} /><section className="py-20"><Container className="text-center"><h2 className="text-3xl font-bold text-[#102f5b]">Reviews coming from approved sources</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">No placeholder testimonials or fabricated customer counts are displayed.</p></Container></section></>;
}
