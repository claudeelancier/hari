"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MagneticButton, NavLinks } from "./MagneticButton";
import { nav } from "@/data/content";
import gsap from "gsap";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", open);
    return () => document.body.classList.remove("nav-open");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const links = document.querySelectorAll(".mobile-nav__link");
    gsap.fromTo(
      links,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.7, ease: "power3.out", delay: 0.12 }
    );
    gsap.fromTo(
      ".mobile-nav__cta",
      { y: 24, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, delay: 0.45, ease: "power3.out" }
    );
  }, [open]);

  return (
    <>
      <header className="site-header">
        <div className="site-header__bar">
          <Link href="/" className="brand" data-cursor="link" aria-label="Elancier home">
            <Image
              src="/images/logo/inner_logo.png"
              alt="Elancier Solutions"
              width={152}
              height={50}
              priority
            />
          </Link>
          <nav className="site-header__nav" aria-label="Primary">
            <NavLinks />
          </nav>
          <div className="site-header__end">
            <MagneticButton href="/request-quote" className="btn--header">
              Start a Project
            </MagneticButton>
            <button
              className="menu-toggle"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>
      <div className={`mobile-nav ${open ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-hidden={!open}>
        <div className="mobile-nav__bg" />
        <nav className="mobile-nav__list">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="mobile-nav__link" onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <div className="mobile-nav__cta">
            <MagneticButton href="/request-quote" magnetic={false}>
              Request a Quote
            </MagneticButton>
          </div>
        </nav>
      </div>
    </>
  );
}
