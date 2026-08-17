import Link from "next/link";

import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { getPlanWhatsAppUrl, pricingPlans, siteUrl } from "@/data/site";

export function PricingSection() {
  return (
    <section className="bg-white py-20 md:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-[850px] text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[#102f5b] md:text-4xl">krooz tv IPTV Plans for Flexible Viewing</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">Compare monthly and longer subscription options for live TV, sports, movies, and series on compatible devices.</p>
          <Link href="/" className="mt-3 inline-block text-sm font-bold text-[#17835f]">{siteUrl.replace("https://", "")} is the official website for krooz tv</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pricingPlans.map((plan) => (
            <article key={plan.duration} className="group flex min-h-[520px] flex-col rounded-2xl border border-slate-200/90 bg-white px-6 py-8 text-center shadow-[0_10px_32px_rgba(15,43,76,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#8bd8bc] hover:shadow-[0_18px_42px_rgba(15,43,76,0.13)]">
              <h3 className="min-h-16 text-[22px] font-extrabold leading-tight tracking-[-0.02em] text-[#102f5b]">{plan.duration}</h3>
              <p className="my-5 text-[46px] font-extrabold tracking-[-0.04em] text-[#173f73]">{plan.priceLabel}</p>
              <div className="mb-6 h-px bg-slate-100" />
              <ul className="space-y-3.5 text-left text-sm leading-6 text-slate-600">
                {plan.features.map((feature) => <li key={feature} className="flex gap-3"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#e8f8f2] text-[11px] font-black text-[#25956c]">✓</span><span>{feature}</span></li>)}
              </ul>
              <WhatsAppLink href={getPlanWhatsAppUrl(plan)} className="mt-auto rounded-lg bg-[#173f73] px-5 py-3.5 text-sm font-bold text-white shadow-[0_7px_18px_rgba(23,63,115,0.16)] transition duration-200 hover:bg-[#0e2e59]">{plan.cta}</WhatsAppLink>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
