import Image from "next/image";

import { Container } from "@/components/Container";
import { whyChooseItems } from "@/data/site";

function FeatureIcon() {
  return <svg viewBox="0 0 48 48" aria-hidden="true" className="h-11 w-11 fill-none stroke-[#79dcb7]" strokeWidth="2"><rect x="5" y="9" width="38" height="27" rx="2"/><path d="M17 42h14M24 36v6M15 19h18M15 26h12"/></svg>;
}

export function WhyChooseSection() {
  return (
    <section className="relative overflow-hidden bg-[#061a35] py-24 text-white">
      <Image src="/images/reseller-cinema.webp" alt="" fill className="object-cover opacity-[0.10]" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,26,53,0.35),rgba(6,26,53,0.78))]" />
      <Container className="relative">
        <h2 className="text-center text-3xl font-extrabold tracking-[-0.025em] md:text-4xl">Why Choose Our Server</h2>
        <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseItems.map((item) => (
            <article key={item.title} className="text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-white/10 bg-white/[0.055]"><FeatureIcon /></div>
              <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
