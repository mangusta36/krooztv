import Image from "next/image";

import { Container } from "@/components/Container";
import { streamingItems } from "@/data/site";

export function StreamingSection() {
  return (
    <section className="border-y border-slate-100 bg-[#f7f9fc] py-24">
      <Container>
        <div className="mx-auto mb-14 max-w-4xl text-center"><h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#102f5b] md:text-4xl">Enjoy Flawless IPTV Streaming With Less Buffering</h2><p className="mt-5 text-base leading-8 text-slate-600">Watch sports, news, family entertainment, movies, and series through a simple, device-ready viewing experience.</p></div>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-[0_18px_42px_rgba(15,43,76,0.13)]"><Image src="/images/tv-sports.webp" alt="Remote control pointed at a sports broadcast" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" /></div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {streamingItems.map((item) => <article key={item.title} className="border-l-2 border-[#75d7b2] pl-5"><h3 className="text-xl font-extrabold tracking-[-0.015em] text-[#102f5b]">{item.title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p></article>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
