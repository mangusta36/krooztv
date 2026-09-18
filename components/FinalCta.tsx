import { ButtonLink } from "./ButtonLink";
import { Container } from "./Container";

export function FinalCta() {
  return (
    <section className="py-20">
      <Container className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 shadow-panel">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-sky">
              Ready to continue?
            </p>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Move to plans, setup help, or support in one step.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="/subscription">See plans</ButtonLink>
            <ButtonLink href="/support" variant="secondary">
              Contact support
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
