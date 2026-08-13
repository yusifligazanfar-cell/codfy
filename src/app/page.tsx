import { ShowcaseVideoSection } from "@/components/sections/ShowcaseVideoSection";
import { GlobalMapSection } from "@/components/sections/GlobalMapSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import { HugeCardSection } from "@/components/sections/HugeCardSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { InternshipCardSection } from "@/components/sections/InternshipCardSection";
import { FooterCardSection } from "@/components/sections/FooterCardSection";


import { CallToActionSection } from "@/components/sections/CallToActionSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <ShowcaseVideoSection />
      <PortfolioSection />
      <CallToActionSection />
      <GlobalMapSection />
      <AdvantagesSection />
      <HugeCardSection />
      <InternshipCardSection />
      <FooterCardSection />

    </div>
  );
}
