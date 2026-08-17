import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import type { BlogContentBlock } from "@/data/blog";

type BlogRichContentProps = {
  content: BlogContentBlock[];
};

const inlineLinkPattern = /\[([^\]]+)\]\((\/[^)]*)\)/g;

function renderInlineLinks(content: string, key: string) {
  const matches = Array.from(content.matchAll(inlineLinkPattern));

  if (matches.length === 0) {
    return content;
  }

  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  matches.forEach((match, index) => {
    const [fullMatch, label, href] = match;
    const matchIndex = match.index ?? 0;

    if (matchIndex > lastIndex) {
      nodes.push(content.slice(lastIndex, matchIndex));
    }

    nodes.push(
      <Link
        key={`${key}-inline-link-${index}`}
        href={href}
        className="font-semibold text-[#17694f] underline decoration-[#75d7b2] decoration-2 underline-offset-4 transition-colors hover:text-[#102f5b]"
      >
        {label}
      </Link>
    );

    lastIndex = matchIndex + fullMatch.length;
  });

  if (lastIndex < content.length) {
    nodes.push(content.slice(lastIndex));
  }

  return nodes;
}

export function BlogRichContent({ content }: BlogRichContentProps) {
  return (
    <div className="space-y-8">
      {content.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === "paragraph") {
          return (
            <p key={key} className="text-base leading-8 text-slate-700">
              {renderInlineLinks(block.content, key)}
            </p>
          );
        }

        if (block.type === "heading") {
          if (block.level === 2) {
            return (
              <h2 key={key} className="text-3xl font-semibold tracking-[-0.03em] text-[#102f5b]">
                {block.content}
              </h2>
            );
          }

          return (
            <h3 key={key} className="text-2xl font-semibold tracking-[-0.02em] text-[#173d6d]">
              {block.content}
            </h3>
          );
        }

        if (block.type === "list") {
          const ListTag = block.style === "ordered" ? "ol" : "ul";

          return (
            <ListTag
              key={key}
              className={`space-y-3 pl-6 text-base leading-8 text-slate-700 ${
                block.style === "ordered" ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item) => (
                <li key={item}>{renderInlineLinks(item, `${key}-${item}`)}</li>
              ))}
            </ListTag>
          );
        }

        if (block.type === "image") {
          return (
            <figure key={key} className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50">
              <Image
                src={block.image.src}
                alt={block.image.alt}
                width={block.image.width}
                height={block.image.height}
                loading="lazy"
                className="h-auto w-full"
              />
              {block.caption ? (
                <figcaption className="px-5 py-4 text-sm leading-6 text-slate-500">
                  {renderInlineLinks(block.caption, `${key}-caption`)}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        if (block.type === "table") {
          return (
            <figure key={key} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white">
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      {block.headers.map((header) => (
                        <th key={header} className="px-5 py-4 text-sm font-semibold text-[#102f5b]">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={`${key}-row-${rowIndex}`} className="border-t border-slate-200">
                        {row.map((cell, cellIndex) => (
                          <td key={`${key}-cell-${rowIndex}-${cellIndex}`} className="px-5 py-4 text-sm leading-7 text-slate-700">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {block.caption ? (
                <figcaption className="border-t border-slate-200 px-5 py-4 text-sm leading-6 text-slate-500">
                  {renderInlineLinks(block.caption, `${key}-caption`)}
                </figcaption>
              ) : null}
            </figure>
          );
        }

        return (
          <div key={key} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-[#102f5b]">
              <Link href={block.href} className="transition-colors hover:text-[#217a61]">
                {block.label}
              </Link>
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-700">{block.description}</p>
          </div>
        );
      })}
    </div>
  );
}
