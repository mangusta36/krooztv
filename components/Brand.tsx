import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" aria-label="krooz tv home" className="inline-flex items-center gap-2">
      <span className={`grid h-10 w-10 place-items-center rounded-full border-2 text-xs font-black ${inverse ? "border-[#56a8e8] text-white" : "border-[#174b86] text-[#174b86]"}`}>
        KTV
      </span>
      <span className={`text-lg font-extrabold tracking-[-0.04em] ${inverse ? "text-white" : "text-[#102f5b]"}`}>
        krooz tv
      </span>
    </Link>
  );
}
