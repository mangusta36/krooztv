import { ReactNode } from "react";

import { Container } from "./Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  aside: ReactNode;
};

export function PageHero({ eyebrow, title, description, aside }: PageHeroProps) {
  return (
    <section className="bg-[#071a3b] py-20">
      <Container className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#79dcb7]">
            {eyebrow}
          </p>
          <h1 className="max-w-[13ch] text-balance text-5xl font-semibold leading-none tracking-[-0.05em] text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d7e1f0]">{description}</p>
        </div>
        <div className="rounded-[20px] border border-white/10 bg-[rgba(10,19,34,0.82)] p-6 shadow-panel">
          {aside}
        </div>
      </Container>
    </section>
  );
}
