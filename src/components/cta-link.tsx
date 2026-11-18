import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CtaLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost";
  className?: string;
  download?: boolean | string;
  external?: boolean;
};

const variants = {
  default: "btn btn-g",
  secondary: "btn btn-m",
  outline: "btn btn-o",
  ghost: "kit-back",
};

export function CtaLink({
  href,
  children,
  variant = "default",
  className,
  download,
  external,
}: CtaLinkProps) {
  const opensNewTab = external ?? href.startsWith("http");
  return (
    <a
      href={href}
      download={download}
      target={opensNewTab ? "_blank" : undefined}
      rel={opensNewTab ? "noopener noreferrer" : undefined}
      className={cn(variants[variant], className)}
    >
      {children}
    </a>
  );
}
