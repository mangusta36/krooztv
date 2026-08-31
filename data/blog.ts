import type { BlogArticle, BlogContentBlock } from "./blog-types";
import { bestIptvServices } from "./blog/best-iptv-services-us";
import { iptvExplained } from "./blog/what-is-iptv-vs-cable";
import { smartTvSetup } from "./blog/setup-iptv-smart-tv";
import { reliableProvider } from "./blog/choose-reliable-iptv-provider";
import { liveSports } from "./blog/stream-live-sports-iptv";
import { iptvEquipment } from "./blog/iptv-equipment-requirements";
import { replaceCable } from "./blog/can-iptv-replace-cable";
import { sportsComparison } from "./blog/iptv-services-sports-fans";
import { compatibleDevices } from "./blog/iptv-compatible-devices";
import { internetSpeed } from "./blog/iptv-internet-speed";
import { fixBuffering } from "./blog/how-to-fix-iptv-buffering";
import { bestPlayerApps } from "./blog/best-iptv-player-apps";
import { siteUrl } from "./site";

export type { BlogArticle, BlogContentBlock } from "./blog-types";

export const blogPath = "/blog";
export const blogTitle = "IPTV guides and streaming advice";
export const blogDescription =
  "Practical, independent-minded guides to IPTV services, setup, devices, sports, internet speed, and alternatives to cable.";

export const blogArticles: BlogArticle[] = [
  bestIptvServices,
  iptvExplained,
  smartTvSetup,
  reliableProvider,
  liveSports,
  iptvEquipment,
  replaceCable,
  sportsComparison,
  compatibleDevices,
  internetSpeed,
  fixBuffering,
  bestPlayerApps
];

export function getArticleWordCount(article: BlogArticle) {
  const contentText = article.content.flatMap((block) => {
    if (block.type === "paragraph" || block.type === "heading") return [block.content];
    if (block.type === "list") return block.items;
    if (block.type === "table") return [...block.headers, ...block.rows.flat(), block.caption ?? ""];
    if (block.type === "image") return [block.caption ?? "", block.image.alt];
    return [block.label, block.description];
  });
  const faqText = article.faqs.flatMap((faq) => [faq.question, faq.answer]);
  const text = [
    article.title,
    article.introduction,
    ...contentText,
    ...faqText,
    article.cta.title,
    article.cta.description
  ].join(" ");

  return text.match(/[\p{L}\p{N}]+(?:['’-][\p{L}\p{N}]+)*/gu)?.length ?? 0;
}

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getBlogArticleUrl(slug: string) {
  return `${siteUrl}${blogPath}/${slug}`;
}

export function getRelatedArticles(article: BlogArticle) {
  const linkedSlugs = article.content
    .filter((block): block is Extract<BlogContentBlock, { type: "link" }> => block.type === "link")
    .map((block) => block.href.replace(`${blogPath}/`, ""));

  const linked = linkedSlugs
    .map((slug) => getBlogArticle(slug))
    .filter(
      (candidate): candidate is BlogArticle =>
        candidate !== undefined && candidate.slug !== article.slug
    );

  const fallback = blogArticles.filter(
    (candidate) => candidate.slug !== article.slug && !linked.some((item) => item.slug === candidate.slug)
  );

  return [...linked, ...fallback].slice(0, 3);
}
