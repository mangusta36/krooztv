"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { WhatsAppLink } from "@/components/WhatsAppLink";

type MobileNavProps = {
  items: ReadonlyArray<{
    href: string;
    label: string;
  }>;
  clientHelpWhatsAppUrl: string;
};

export function MobileNav({ items, clientHelpWhatsAppUrl }: MobileNavProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden">
      <button type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)} className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 bg-white text-[#102f5b] shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
        <span className="sr-only">Toggle navigation</span>
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-none stroke-current" strokeWidth="2" strokeLinecap="round"><path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"} /></svg>
      </button>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="absolute left-4 right-4 top-[78px] overflow-hidden rounded-xl border border-slate-200/80 bg-white p-3 shadow-[0_20px_50px_rgba(8,31,65,0.16)]">
          {items.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return <Link key={item.href + item.label} href={item.href} onClick={() => setOpen(false)} className={`block rounded-lg px-4 py-3 text-sm font-semibold transition ${active ? "bg-[#edf8f4] text-[#147256]" : "text-[#173d6d] hover:bg-slate-50"}`}>{item.label}</Link>;
          })}
          <WhatsAppLink href={clientHelpWhatsAppUrl} onClick={() => setOpen(false)} className="mt-3 block rounded-lg bg-[#102f5b] px-4 py-3 text-center text-sm font-bold text-white">Client Area</WhatsAppLink>
        </nav>
      )}
    </div>
  );
}
