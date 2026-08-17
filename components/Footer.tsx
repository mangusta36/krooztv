import Link from "next/link";

import { Brand } from "@/components/Brand";
import { Container } from "@/components/Container";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import {
  footerGroups,
  generalWhatsAppUrl,
  resellerWhatsAppUrl,
  trialHref
} from "@/data/site";

const quickLinks = [
  { label: "krooz tv Info", href: "/about" },
  { label: "Get Trial", href: trialHref, external: true },
  { label: "Subscribe Now", href: generalWhatsAppUrl, external: true },
  { label: "Become A Reseller", href: resellerWhatsAppUrl, external: true },
  { label: "How to Install", href: "/tutorials" },
  { label: "Blog", href: "/blog" }
];

export function Footer() {
  return (
    <>
      <section className="bg-white py-20">
        <Container className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => {
            const className = "mx-auto w-full max-w-[270px] rounded-md bg-[#111827] px-5 py-3.5 text-center text-xs font-bold uppercase tracking-[0.06em] text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:bg-[#102f5b]";

            return link.external ? (
              <WhatsAppLink key={link.label} href={link.href} className={className}>
                {link.label}
              </WhatsAppLink>
            ) : (
              <Link key={link.label} href={link.href} className={className}>
                {link.label}
              </Link>
            );
          })}
        </Container>
      </section>
      <footer className="border-t border-[#173557] bg-[#05162f] py-16 text-white">
        <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr_0.8fr_0.8fr]">
          <div>
            <Brand inverse />
            <WhatsAppLink href={generalWhatsAppUrl} className="mt-8 block text-2xl font-extrabold tracking-[-0.02em] text-[#58a7e6] transition-colors hover:text-[#81c2f2]">Contact us via live chat</WhatsAppLink>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">We are here to help with subscriptions, setup guidance, and account questions.</p>
          </div>
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-white/90">Customer care</h2>
            <p className="mt-5 text-xl font-semibold text-[#4299df]">Support for krooz tv</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">Use our contact page for approved support channels and service assistance.</p>
          </div>
          {footerGroups.slice(1).map((group) => (
            <div key={group.title}>
              <h2 className="text-sm font-bold uppercase tracking-[0.1em] text-white/90">{group.title === "Legal" ? "Importants" : "Information"}</h2>
              <ul className="mt-5 space-y-3 text-sm text-slate-300">
                {group.links.map((link) => <li key={link.href}><Link href={link.href} className="transition-colors hover:text-[#79dcb7]">{link.label}</Link></li>)}
              </ul>
            </div>
          ))}
        </Container>
        <Container className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-400">© 2026 krooz tv. All rights reserved.</Container>
      </footer>
    </>
  );
}
