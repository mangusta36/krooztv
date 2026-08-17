import Image from "next/image";

import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { generalWhatsAppUrl, heroHighlights, resellerWhatsAppUrl, trialHref } from "@/data/site";

export function Hero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden bg-[#061a35]">
      <Image src="/images/hero-sports.webp" alt="Friends watching a football match on television" fill priority className="scale-[1.02] object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,42,0.70),rgba(4,19,42,0.84))]" />
      <Container className="relative z-10 flex min-h-[650px] flex-col items-center justify-center py-16 text-center text-white sm:py-20">
        <h1 className="max-w-4xl break-words text-4xl font-extrabold leading-[1.12] tracking-[-0.025em] md:text-5xl lg:text-[54px]">krooz tv Official - Quality IPTV Subscription</h1>
        <ul className="mt-8 grid gap-x-10 gap-y-3 text-left text-[15px] font-medium text-white/90 sm:grid-cols-2">
          {heroHighlights.map((item) => <li key={item} className="flex min-w-0 items-center gap-3"><span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#74dab4] text-[12px] font-black text-[#06213d]">✓</span><span className="min-w-0">{item}</span></li>)}
        </ul>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <WhatsAppLink href={generalWhatsAppUrl} className="rounded-lg bg-[#68cda8] px-7 py-3.5 text-sm font-bold text-[#092344] shadow-[0_8px_24px_rgba(66,177,139,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#7ad9b7]">Subscribe Now</WhatsAppLink>
          <WhatsAppLink href={trialHref} className="rounded-lg border border-white/65 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/20">Get Trial</WhatsAppLink>
          <WhatsAppLink href={resellerWhatsAppUrl} className="rounded-lg bg-[#1b5798] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(9,34,71,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#2364aa]">Become a Reseller</WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}
