import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Review the plan options",
    description: "Start with the plans page to compare what is currently presented."
  },
  {
    number: "02",
    title: "Choose your setup path",
    description: "Use the support page for device guidance and account help."
  },
  {
    number: "03",
    title: "Settle in and browse",
    description: "Move between live TV, sports, movies, and series with less friction."
  }
];

export function Steps() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading label="How it works" title="A shorter path from visit to viewing." />
        <div className="grid gap-4 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-[20px] border border-white/10 bg-[rgba(10,19,34,0.82)] p-6 shadow-panel"
            >
              <span className="text-sm font-bold text-[#ff9164]">{step.number}</span>
              <h3 className="mt-4 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-mist">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
