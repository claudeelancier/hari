import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Start a project enquiry with Elancier Solutions — website, mobile, ecommerce, UI/UX or marketing.",
  alternates: { canonical: "/request-quote" },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
