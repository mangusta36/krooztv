import type { Metadata } from "next";

import PlansPage from "@/app/plans/page";
import { siteUrl } from "@/data/site";

export const metadata: Metadata = {
  title: "IPTV Subscription",
  description: "Compare krooz tv IPTV subscription options for live TV, sports, movies, and series.",
  alternates: { canonical: `${siteUrl}/subscription` }
};

export default PlansPage;
