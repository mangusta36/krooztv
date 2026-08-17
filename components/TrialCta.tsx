import Image from "next/image";

import { WhatsAppLink } from "@/components/WhatsAppLink";
import { trialHref } from "@/data/site";

export function TrialCta() {
  return (
    <section className="grid min-h-[420px] overflow-hidden bg-[#819a90] lg:grid-cols-2">
      <div className="flex items-center px-6 py-16 text-white sm:px-12 lg:justify-end lg:py-20">
        <div className="w-full max-w-[580px]">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">Enjoy Sports, Movies, TV Shows & More</p>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-[-0.025em] md:text-5xl">Enjoy Your Trial</h2>
          <p className="mt-4 text-lg text-white/85">Explore the viewing experience before subscribing.</p>
          <WhatsAppLink href={trialHref} className="mt-8 inline-flex rounded-lg bg-white px-7 py-3.5 text-sm font-bold text-[#294d47] shadow-[0_8px_20px_rgba(26,56,48,0.16)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#f6fbf9] focus-visible:outline-white">Get Trial</WhatsAppLink>
        </div>
      </div>
      <div className="relative min-h-[360px]">
        <Image src="/images/family-living-room.webp" alt="Family at home enjoying connected devices" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#819a90]/20 to-transparent lg:from-[#819a90]/10" />
      </div>
    </section>
  );
}
