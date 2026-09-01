import Link from "next/link";
import Image from "next/image";
import { nav, services, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer__giant" aria-hidden>
        ELANCIER
      </div>
      <div className="container footer__grid">
        <div className="footer__brand">
          <Image src="/images/logo/inner_logo.png" alt="Elancier Solutions" width={152} height={50} />
          <p>
            Creative web and mobile development from Madurai. We design, develop, deploy and
            support digital products for ambitious businesses.
          </p>
        </div>
        <div>
          <p className="footer__label">Navigate</p>
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} data-cursor="link">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request-quote" data-cursor="link">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="footer__label">Services</p>
          <ul>
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <Link href={s.href} data-cursor="link">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer__label">Contact</p>
          <ul>
            {site.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href}>{p.display}</a>
              </li>
            ))}
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.address.city}</li>
          </ul>
          <ul className="footer__social">
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} target="_blank" rel="noreferrer" data-cursor="link">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} Elancier Solutions. All rights reserved.</p>
        <p>Madurai, Tamil Nadu</p>
      </div>
    </footer>
  );
}
