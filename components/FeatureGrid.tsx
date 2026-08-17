import { featureItems } from "@/data/site";

import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function FeatureGrid() {
  return (
    <section id="features" className="py-20">
      <Container>
        <SectionHeading
          label="Main features"
          title="Everything important stays easy to find."
          description="Each section is designed to communicate the service clearly, reduce friction, and help visitors reach the next step quickly."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[20px] border border-white/10 bg-[rgba(10,19,34,0.82)] p-6 shadow-panel"
            >
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
