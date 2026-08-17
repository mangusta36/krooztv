import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = ""
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded px-6 py-4 text-sm font-semibold transition duration-200";
  const styles =
    variant === "primary"
      ? "bg-[#173f73] text-white"
      : "border border-[#173f73] bg-white text-[#173f73]";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
