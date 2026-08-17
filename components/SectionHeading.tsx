type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center"
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}`}
    >
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#17835f]">
        {label}
      </p>
      <h2 className="text-balance text-4xl font-semibold tracking-[-0.04em] text-[#102f5b] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
