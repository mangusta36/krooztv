import Image from "next/image";

import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { generalWhatsAppUrl } from "@/data/site";

export function EntertainmentSection() {
  return (
    <section className="bg-white pb-20">
      <Container>
        <div className="overflow-hidden rounded-b-[28px] shadow-[0_18px_45px_rgba(15,43,76,0.11)]">
          <div className="relative aspect-[16/7] min-h-[300px]"><Image src="/images/tv-sports.webp" alt="Football streaming on a television" fill className="object-cover" sizes="(max-width: 1200px) 100vw, 1180px" /></div>
        </div>
        <div className="mx-auto max-w-4xl py-16 text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[#102f5b] md:text-4xl">Thousands of Worldwide Channels. A Fraction of Cable Costs.</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">krooz tv brings live television, sports, movies, and series together in one convenient subscription. Connect a compatible device to the internet, follow the setup guidance, and enjoy entertainment from around the world.</p>
          <WhatsAppLink href={generalWhatsAppUrl} className="mt-8 inline-flex rounded-lg bg-[#173f73] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,63,115,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0e2e59]">Subscribe Now</WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}
