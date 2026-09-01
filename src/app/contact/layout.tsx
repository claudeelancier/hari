import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Elancier Solutions in Madurai. Phone +91 81446 88721, email admin@elancier.com.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
