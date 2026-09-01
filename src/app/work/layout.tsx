import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected websites, mobile apps and business applications from Elancier Solutions.",
  alternates: { canonical: "/work" },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
