"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/data/content";

type Props = {
  variant?: "primary" | "ghost";
  href: string;
  children: ReactNode;
  magnetic?: boolean;
  cursor?: string;
  className?: string;
};

export function MagneticButton({
  variant = "primary",
  href,
  children,
  magnetic = true,
  cursor = "btn",
  className = "",
}: Props) {
  const classNames = `btn btn--${variant} ${className}`;
  const inner = (
    <span className="btn__inner">
      <span className="btn__label">{children}</span>
      <span className="btn__arrow" aria-hidden>
        ↗
      </span>
    </span>
  );
  const extra = {
    className: classNames,
    "data-magnetic": magnetic ? "18" : undefined,
    "data-cursor": cursor,
  } as const;

  if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a href={href} {...extra}>
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} {...extra}>
      {inner}
    </Link>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();
  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
  return (
    <Link href={href} className={`nav-link ${active ? "is-active" : ""}`} data-cursor="link">
      <span>{children}</span>
    </Link>
  );
}

export function NavLinks() {
  return (
    <>
      {nav.map((item) => (
        <TextLink key={item.href} href={item.href}>
          {item.label}
        </TextLink>
      ))}
    </>
  );
}
