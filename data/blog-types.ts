export type BlogContentBlock =
  | { type: "paragraph"; content: string }
  | { type: "heading"; level: 2 | 3; content: string }
  | { type: "list"; style: "ordered" | "unordered"; items: string[] }
  | {
      type: "image";
      image: { src: string; alt: string; width: number; height: number };
      caption?: string;
    }
  | { type: "table"; headers: string[]; rows: string[][]; caption?: string }
  | { type: "link"; href: string; label: string; description: string };

export type BlogArticle = {
  slug: string;
  primaryKeyword: string;
  searchIntent: "informational" | "commercial investigation";
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  introduction: string;
  category: string;
  keywords: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featuredImage: string;
  featuredImageWidth: number;
  featuredImageHeight: number;
  imageAlt: string;
  author: { name: string };
  content: BlogContentBlock[];
  faqs: { question: string; answer: string }[];
  cta: { title: string; description: string; href: string; label: string };
};

export const h2 = (content: string): BlogContentBlock => ({ type: "heading", level: 2, content });
export const h3 = (content: string): BlogContentBlock => ({ type: "heading", level: 3, content });
export const p = (content: string): BlogContentBlock => ({ type: "paragraph", content });
export const ul = (items: string[]): BlogContentBlock => ({ type: "list", style: "unordered", items });
export const ol = (items: string[]): BlogContentBlock => ({ type: "list", style: "ordered", items });
export const table = (headers: string[], rows: string[][], caption?: string): BlogContentBlock => ({
  type: "table",
  headers,
  rows,
  caption
});
export const link = (href: string, label: string, description: string): BlogContentBlock => ({
  type: "link",
  href,
  label,
  description
});

export const articleDefaults = {
  category: "IPTV Guides",
  publishedAt: "2026-08-14",
  updatedAt: "2026-08-14",
  featuredImage: "/images/streaming-devices.webp",
  featuredImageWidth: 1400,
  featuredImageHeight: 934,
  author: { name: "krooz tv Editorial Team" }
} as const;
