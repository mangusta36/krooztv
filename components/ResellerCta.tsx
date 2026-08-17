import Image from "next/image";

import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { resellerWhatsAppUrl } from "@/data/site";

export function ResellerCta() {
  return (
    <section className="relative min-h-[430px] overflow-hidden bg-[#061a35] text-white">
      <Image src="/images/reseller-cinema.webp" alt="People enjoying entertainment on a large screen" fill className="object-cover" sizes="100vw" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,42,0.70),rgba(4,19,42,0.86))]" />
      <Container className="relative flex min-h-[430px] flex-col items-center justify-center py-20 text-center"><h2 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-[-0.025em] md:text-5xl">Need a Fast and Secure IPTV Server to Resell?</h2><p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">Build your reseller offering with krooz tv and a clear path for partner support.</p><WhatsAppLink href={resellerWhatsAppUrl} className="mt-8 rounded-lg bg-[#68cda8] px-8 py-3.5 text-sm font-bold text-[#092344] shadow-[0_8px_22px_rgba(62,175,137,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#79d9b7]">Become Our Partner</WhatsAppLink></Container>
    </section>
  );
}
