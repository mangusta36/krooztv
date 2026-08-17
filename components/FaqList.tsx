import { faqItems } from "@/data/site";
import { Container } from "@/components/Container";

function WorldMap() {
  return <svg viewBox="0 0 640 360" role="img" aria-label="Stylized world coverage map" className="w-full text-[#b8c8c2]"><g fill="currentColor" opacity=".68"><path d="M35 104l28-35 78-15 62 24 25 48-28 27-7 43-38 32-22-36-43-14-20-35-35-10zM184 221l39 18 24 58-27 52-30-38-18-57zM282 83l64-30 65 15 23 29-17 29-49 1-29 29-42-12-33-28zM337 151l55-13 39 38-8 61-43 72-33-31-26-76zM439 85l67-17 93 28 17 40-42 28-56-7-24 27-56-24-21-34zM512 244l49-14 48 31-22 43-54 6-31-32z"/></g><g fill="#79dcb7"><circle cx="120" cy="120" r="7"/><circle cx="205" cy="260" r="7"/><circle cx="352" cy="109" r="7"/><circle cx="380" cy="195" r="7"/><circle cx="510" cy="125" r="7"/><circle cx="558" cy="270" r="7"/></g></svg>;
}

export function FaqList() {
  return (
    <section id="faq" className="bg-white py-24">
      <Container>
        <h2 className="text-center text-3xl font-extrabold tracking-[-0.025em] text-[#102f5b] md:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-2xl border border-[#16345a] bg-[#061a35] shadow-[0_16px_38px_rgba(8,31,65,0.13)]">
            {faqItems.slice(0, 6).map((item) => <details key={item.question} className="group border-b border-white/10 px-5 last:border-0 open:bg-white/[0.025]"><summary className="flex cursor-pointer list-none items-center gap-4 py-5 text-sm font-semibold leading-6 text-[#79dcb7] transition-colors hover:text-[#9be8ca]"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg border border-[#79dcb7]/30 text-lg leading-none transition duration-200 group-open:rotate-45 group-open:bg-[#79dcb7]/10">+</span>{item.question}</summary><p className="pb-5 pl-11 pr-2 text-sm leading-7 text-slate-300">{item.answer}</p></details>)}
          </div>
          <div><WorldMap /><h3 className="mt-4 text-center text-2xl font-bold text-[#102f5b]">We are everywhere</h3><p className="mx-auto mt-3 max-w-md text-center text-sm leading-7 text-slate-600">Find setup guidance and answers whenever you need help with your krooz tv experience.</p></div>
        </div>
      </Container>
    </section>
  );
}
