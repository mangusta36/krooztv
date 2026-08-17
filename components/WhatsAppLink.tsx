import type { ComponentPropsWithoutRef } from "react";

type WhatsAppLinkProps = Omit<
  ComponentPropsWithoutRef<"a">,
  "href" | "rel" | "target"
> & {
  href: string;
};

export function WhatsAppLink({ href, children, ...props }: WhatsAppLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}
