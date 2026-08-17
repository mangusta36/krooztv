import Image from "next/image";

import { Container } from "@/components/Container";

const devices = [
  ["Smart TV, Smart Phone, Tablets, Android and TV BOX", "Use krooz tv on popular smart screens, phones, tablets, and Android-based television boxes."],
  ["MAG Devices & MAG Simulators", "Compatible portal-style devices can be configured using the setup information supplied for your account."],
  ["Laptop & Computers", "Install a compatible IPTV player on Windows or Mac and enjoy viewing on your computer."]
];

export function DeviceGrid() {
  return (
    <section className="bg-white py-24">
      <Container>
        <h2 className="mx-auto max-w-3xl text-center text-3xl font-extrabold tracking-[-0.025em] text-[#102f5b] md:text-4xl">Our IPTV Service Supports All Your Favorite Devices</h2>
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
          <div className="relative mx-auto aspect-[4/3] w-full max-w-[560px] overflow-hidden rounded-2xl bg-slate-100 shadow-[0_18px_42px_rgba(15,43,76,0.13)]">
            <Image src="/images/streaming-devices.webp" alt="Smartphone and television showing streaming applications" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>
          <div className="space-y-9">
            {devices.map(([title, description]) => <article key={title} className="flex gap-4"><span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#e7f8f1] text-sm font-black text-[#218d67]">✓</span><div><h3 className="text-lg font-extrabold tracking-[-0.01em] text-[#102f5b]">{title}</h3><p className="mt-2 text-sm leading-7 text-slate-600">{description}</p></div></article>)}
          </div>
        </div>
      </Container>
    </section>
  );
}
