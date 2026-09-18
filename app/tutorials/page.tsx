import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/Container";
import { PageHero } from "@/components/PageHero";
import { tutorialCategories, siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "installation tutorials",
  description:
    "Browse krooz tv installation tutorials organized by device family and setup path.",
  alternates: {
    canonical: `${siteUrl}/tutorials`
  }
};

export default function TutorialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Installation tutorials"
        title="IPTV setup, player, network, and troubleshooting guides."
        description="Start with your device and player, then check network requirements and use the troubleshooting workflow if playback is unstable."
        aside={
          <>
            <strong className="block text-lg font-semibold text-white">
              Choose the closest guide
            </strong>
            <p className="mt-3 text-sm leading-7 text-mist">
              Confirm your exact device model and operating system before installing an
              app or entering private account details.
            </p>
          </>
        }
      />

      <section className="py-20">
        <Container className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {tutorialCategories.map((item) => (
            <article
              key={item.title}
              className="rounded-[20px] border border-white/10 bg-[rgba(10,19,34,0.82)] p-6 shadow-panel"
            >
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-mist">{item.description}</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#217a61]">Setup guides</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[#102f5b]">
              Prepare the device, network, and app before installation.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                href: "/blog/setup-iptv-smart-tv",
                title: "Set up IPTV on a smart TV",
                description: "Follow the safe workflow for Samsung, LG, Android TV, Google TV, and Fire TV televisions."
              },
              {
                href: "/blog/iptv-compatible-devices",
                title: "Check IPTV device compatibility",
                description: "Compare native apps, streaming players, mobile devices, computers, browsers, and casting."
              },
              {
                href: "/blog/iptv-equipment-requirements",
                title: "Review IPTV equipment requirements",
                description: "Separate essential broadband and playback hardware from optional network and audio upgrades."
              },
              {
                href: "/blog/best-iptv-player-apps",
                title: "Compare IPTV player apps",
                description: "Choose a player by platform, login support, guide features, controls, and current app availability."
              },
              {
                href: "/blog/how-to-fix-iptv-buffering",
                title: "Troubleshoot buffering and freezing",
                description: "Isolate device, Wi-Fi, internet-route, player, and provider causes one controlled test at a time."
              }
            ].map((guide) => (
              <article key={guide.href} className="rounded-[20px] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-[#102f5b]">
                  <Link href={guide.href} className="transition-colors hover:text-[#217a61]">
                    {guide.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{guide.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
