import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export function PricingPreview() {
  return (
    <section className="py-20">
      <Container className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-panel">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <SectionHeading
            label="Plans"
            title="Plan presentation that stays clear on every screen."
            description="No pricing data was available in the provided project files, so the plans page focuses on comparison structure and next steps without inventing amounts."
            align="left"
          />
          <ButtonLink href="/plans">Open plan details</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
