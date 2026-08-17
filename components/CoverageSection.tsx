import { Container } from "@/components/Container";

export function CoverageSection() {
  return (
    <section className="border-y border-slate-100 bg-[#f7f9fc] py-20 text-center">
      <Container>
        <h2 className="text-3xl font-extrabold tracking-[-0.025em] text-[#102f5b] md:text-4xl">krooz tv IPTV for International Viewers</h2>
        <p className="mx-auto mt-6 max-w-4xl text-base leading-8 text-slate-600">krooz tv is designed for viewers interested in live and on-demand entertainment across North America, the United Kingdom, Europe, Latin America, Africa, the Middle East, and other regions. Content availability can vary by subscription and location.</p>
      </Container>
    </section>
  );
}
