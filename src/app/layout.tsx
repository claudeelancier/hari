import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Experience } from "@/components/Experience";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/PageLoader";
import { CustomCursor } from "@/components/CustomCursor";
import { site } from "@/data/content";

const display = Manrope({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Elancier Solutions | Web & Mobile Development, Madurai",
    template: "%s | Elancier Solutions",
  },
  description: site.description,
  keywords: [
    "web development Madurai",
    "mobile app development",
    "ecommerce development",
    "UI UX design",
    "digital marketing",
    "Elancier Solutions",
  ],
  authors: [{ name: "Elancier Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: "Elancier Solutions — Digital experiences that move business",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Elancier Solutions",
    description: site.description,
  },
  icons: { icon: "/favicon.png" },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phones[0].display,
      sameAs: site.social.map((s) => s.href),
      logo: `${site.url}/images/logo/logo.png`,
    },
    {
      "@type": "LocalBusiness",
      name: site.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.lines[0],
        addressLocality: "Madurai",
        addressRegion: "Tamil Nadu",
        postalCode: "625016",
        addressCountry: "IN",
      },
      telephone: site.phones[0].display,
      email: site.email,
      openingHours: "Mo-Fr 10:00-18:00",
    },
    {
      "@type": "WebSite",
      name: site.name,
      url: site.url,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Experience>
          <a className="skip" href="#main">
            Skip to content
          </a>
          <PageLoader />
          <CustomCursor />
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </Experience>
      </body>
    </html>
  );
}
