import { Hero } from "@/components/home/Hero";
import { ClientMarquee } from "@/components/home/ClientMarquee";
import { AgencyIntro } from "@/components/home/AgencyIntro";
import { ServiceList } from "@/components/home/ServiceList";
import { ProcessStory } from "@/components/home/ProcessStory";
import { TechMarquee } from "@/components/home/TechMarquee";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { Industries } from "@/components/home/Industries";
import { WhyElancier } from "@/components/home/WhyElancier";
import { StatsBand } from "@/components/home/StatsBand";
import { DedicatedCTA } from "@/components/home/DedicatedCTA";
import { ClientExperience } from "@/components/home/ClientExperience";
import { FinalCTA } from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <AgencyIntro />
      <ServiceList />
      <ProcessStory />
      <TechMarquee />
      <PortfolioSection />
      <Industries />
      <WhyElancier />
      <StatsBand />
      <DedicatedCTA />
      <ClientExperience />
      <FinalCTA />
    </>
  );
}
