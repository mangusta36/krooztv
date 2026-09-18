import type { Metadata } from "next";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "krooz tv Reviews",
  description: "This page is reserved for genuine, verifiable krooz tv customer feedback.",
  alternates: { canonical: `${siteUrl}/reviews` },
  robots: { index: false, follow: true }
};

export default function ReviewsPage() {
  return <><PageHero eyebrow="krooz tv reviews" title="No customer reviews are published on this page." description="krooz tv does not display ratings or testimonials here without a genuine, verifiable source." aside={<><strong className="text-lg text-white">No review claims</strong><p className="mt-3 text-sm leading-7 text-slate-300">Use the service information, setup guides, and current written terms when evaluating an IPTV subscription.</p></>} /><section className="py-20"><Container className="text-center"><h2 className="text-3xl font-bold text-[#102f5b]">Evaluate the published service details</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">Compare the current subscription information, device guidance, support route, and policies directly. This page remains out of search results while it contains no customer feedback.</p></Container></section></>;
}
