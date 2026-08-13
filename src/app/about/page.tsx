import { TrustedBy } from "@/components/sections/TrustedBy";
import { FooterCardSection } from "@/components/sections/FooterCardSection";
import { AdvantagesSection } from "@/components/sections/AdvantagesSection";
import { AboutVideoSection } from "@/components/sections/AboutVideoSection";
import Image from "next/image";

import { AboutMissionText } from "@/components/sections/AboutMissionText";
import { AboutMarquee } from "@/components/sections/AboutMarquee";
import { AboutDirectionsSection } from "@/components/sections/AboutDirectionsSection";

export const metadata = {
  title: "Şirkət haqqında | CODFY",
  description: "Bespoke Digital Engineering",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-black selection:text-[#f4c660] overflow-x-hidden w-full max-w-[100vw]">
      
      {/* 1. MANIFESTO HERO (Grid Typographic Layout) */}
      <div className="w-full pt-20 lg:pt-48 pb-8 lg:pb-20 px-4 md:px-8 lg:px-12 max-w-[1800px] mx-auto min-h-0 lg:min-h-[85vh] flex flex-col justify-between">
        
        {/* Architectural Bento Grid Typography Lockup */}
        <div className="w-full flex-grow flex flex-col justify-center my-8 lg:my-0">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-[2px] lg:gap-[4px] bg-black border-[2px] lg:border-[4px] border-black w-full text-center font-black uppercase text-[28vw] md:text-[15vw] lg:text-[13vw] leading-[1.1] text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 md:hover:translate-x-2 md:hover:translate-y-2 transition-all duration-300">
            
            {/* ROW 1: W E [space] A R E */}
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">W</div>
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">E</div>
            <div className="bg-[#fcfcfc] flex items-center justify-center py-2 lg:py-4 relative overflow-hidden">
               {/* Diagonal modern lines in the empty space */}
               <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#000_10px,#000_20px)]"></div>
            </div>
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">A</div>
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">R</div>
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">E</div>
            
            {/* ROW 2: C O D F Y . */}
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">C</div>
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">O</div>
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">D</div>
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">F</div>
            <div className="bg-white hover:bg-black hover:text-white transition-colors duration-300 flex items-center justify-center py-2 lg:py-4">Y</div>
            <div className="bg-white text-[#f4c660] hover:bg-[#f4c660] hover:text-black transition-colors duration-300 flex items-center justify-center py-2 lg:py-4 animate-pulse">.</div>
            
          </div>
        </div>
        
        {/* Modern Brutalist Grid for Mission & Impact */}
        <div className="w-full mt-6 lg:mt-32 border-t-2 border-black pt-6 lg:pt-16 flex flex-col gap-6 lg:gap-16 relative">
          
          {/* Primary Statement */}
          <AboutMissionText />
        </div>
      </div>

      {/* 2. CODFY REAL IMPACT METRICS (Imported from Main Page) */}
      <div className="w-full relative z-10 bg-white py-0 lg:py-24">
        <AdvantagesSection />
      </div>

      {/* 2.5 WHO WE ARE (ABOUT CODFY) */}
      <AboutVideoSection />

      {/* 3. THE MARQUEE SEPARATOR */}
      <AboutMarquee />

      {/* 4. OUR DIRECTIONS */}
      <AboutDirectionsSection />



      <FooterCardSection />
    </div>
  );
}
