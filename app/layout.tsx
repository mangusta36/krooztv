import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/Footer";
import { FloatingControls } from "@/components/FloatingControls";
import { Header } from "@/components/Header";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "krooz tv | IPTV subscription, live TV, sports, movies, and series",
    template: "%s | krooz tv"
  },
  description:
    "krooz tv presents IPTV subscription plans, trial access, reseller information, installation tutorials, and device-ready streaming support.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "krooz tv | IPTV subscription, live TV, sports, movies, and series",
    description:
      "A modern IPTV website with subscription plans, tutorials, reseller flow, and multi-device support.",
    url: siteUrl,
    siteName: "krooz tv",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "krooz tv"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "krooz tv | IPTV subscription, live TV, sports, movies, and series",
    description:
      "A modern IPTV website with subscription plans, tutorials, reseller flow, and multi-device support.",
    images: ["/images/og-image.svg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <a
          href="#main"
          className="absolute left-4 top-[-3rem] z-50 rounded-full bg-white px-4 py-3 text-black focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingControls />
      </body>
    </html>
  );
}
