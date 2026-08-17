import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { generalWhatsAppUrl } from "@/data/site";

export function EntertainmentSection() {
  return (
    <section className="bg-white pb-20">
      <Container>
        <div className="overflow-hidden rounded-b-[28px] shadow-[0_18px_45px_rgba(15,43,76,0.11)]">
          <div className="relative aspect-[16/7] min-h-[300px]"><Image src="/images/tv-sports.webp" alt="Live football playing on a television through an IPTV service" fill className="object-cover" sizes="(max-width: 1200px) 100vw, 1180px" /></div>
        </div>
        <div className="mx-auto max-w-4xl py-16 text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.025em] text-[#102f5b] md:text-4xl">What Is IPTV and How Does krooz tv Work?</h2>
          <p className="mt-6 text-base leading-8 text-slate-600">IPTV means Internet Protocol Television. Instead of receiving programming through a traditional cable line or satellite dish, a compatible player uses your internet connection to deliver live TV and on-demand content.</p>
          <p className="mt-4 text-base leading-8 text-slate-600">krooz tv brings live television, sports, movies, and series into one subscription experience. Choose a <Link href="/plans" className="font-semibold text-[#17835f] underline decoration-[#17835f]/30 underline-offset-4 hover:decoration-[#17835f]">plan that fits your viewing period</Link>, receive the relevant account details, and follow the <Link href="/tutorials" className="font-semibold text-[#17835f] underline decoration-[#17835f]/30 underline-offset-4 hover:decoration-[#17835f]">device setup guidance</Link> for your IPTV player.</p>
          <p className="mt-4 text-sm leading-7 text-slate-500">For a fuller introduction, read <Link href="/blog/what-is-iptv-vs-cable" className="font-semibold text-[#173f73] hover:underline">how IPTV differs from cable</Link>.</p>
          <WhatsAppLink href={generalWhatsAppUrl} className="mt-8 inline-flex rounded-lg bg-[#173f73] px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_20px_rgba(23,63,115,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0e2e59]">Subscribe Now</WhatsAppLink>
        </div>
      </Container>
    </section>
  );
}
