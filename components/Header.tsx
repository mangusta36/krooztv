import Link from "next/link";

import { Brand } from "@/components/Brand";
import { Container } from "@/components/Container";
import { MobileNav } from "@/components/MobileNav";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { clientHelpWhatsAppUrl, navItems, secondaryNavItems } from "@/data/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/95 shadow-[0_6px_24px_rgba(8,31,65,0.08)] backdrop-blur-md">
      <Container className="flex min-h-[88px] items-center justify-between gap-5">
        <Brand />
        <nav className="hidden items-center xl:flex" aria-label="Primary">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative border-r border-slate-200/70 px-3 py-2 text-[12px] font-semibold tracking-[-0.01em] text-[#173d6d] transition-colors duration-200 hover:text-[#217a61] ${index === 0 ? "after:absolute after:inset-x-3 after:-bottom-2 after:h-0.5 after:rounded-full after:bg-[#68c8a5]" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <WhatsAppLink href={clientHelpWhatsAppUrl} className="hidden shrink-0 rounded-lg bg-[#102f5b] px-5 py-3 text-xs font-bold uppercase tracking-[0.06em] text-white shadow-[0_6px_16px_rgba(16,47,91,0.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#173f73] lg:inline-flex">
          Client Area
        </WhatsAppLink>
        <MobileNav />
      </Container>
      <div className="hidden border-t border-slate-100/80 py-3 md:block">
        <nav className="flex justify-center gap-9" aria-label="Secondary">
          {secondaryNavItems.map((item) => (
            <Link key={item.href + item.label} href={item.href} className="text-[12px] font-semibold text-[#173d6d] transition-colors hover:text-[#217a61]">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
