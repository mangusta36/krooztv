import Link from "next/link";

import { Container } from "@/components/Container";

type BreadcrumbItem = {
  href?: string;
  label: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-slate-200/70 bg-white">
      <Container className="py-4">
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-slate-600">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.label} className="flex items-center gap-3">
                {item.href && !isLast ? (
                  <Link href={item.href} className="transition-colors hover:text-[#217a61]">
                    {item.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className="font-semibold text-[#173d6d]">
                    {item.label}
                  </span>
                )}
                {!isLast ? <span aria-hidden="true" className="text-slate-400">/</span> : null}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
