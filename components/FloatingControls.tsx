import { WhatsAppLink } from "@/components/WhatsAppLink";
import { generalWhatsAppUrl } from "@/data/site";

export function FloatingControls() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-40 flex justify-between px-5">
      <a href="#main" aria-label="Back to top" className="pointer-events-auto grid h-10 w-10 place-items-center rounded-lg bg-[#eb8424] text-white shadow-[0_8px_20px_rgba(109,57,9,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d87316]"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 14l6-6 6 6" /></svg></a>
      <WhatsAppLink href={generalWhatsAppUrl} aria-label="Contact krooz tv on WhatsApp" className="pointer-events-auto grid h-11 w-11 place-items-center rounded-full bg-[#eb8424] text-white shadow-[0_8px_20px_rgba(109,57,9,0.24)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#d87316]"><svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current" strokeWidth="2" strokeLinejoin="round"><path d="M4 5h16v11H9l-5 4V5z"/></svg></WhatsAppLink>
    </div>
  );
}
