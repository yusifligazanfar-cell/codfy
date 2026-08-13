"use client";

import React from 'react';
import { 
  ArrowRight, 
  Cpu, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Network, 
  Settings, 
  TrendingUp,
  Video,
  Palette,
  Rocket
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

const services = [
  {
    key: "aiAgents",
    href: "http://localhost:3000/#",
    icon: Cpu
  },
  {
    key: "websites",
    href: "http://localhost:3000/#",
    icon: Globe
  },
  {
    key: "ecommerce",
    href: "http://localhost:3000/#",
    icon: ShoppingCart
  },
  {
    key: "mobileApps",
    href: "http://localhost:3000/#",
    icon: Smartphone
  },
  {
    key: "crm",
    href: "http://localhost:3000/#",
    icon: Network
  },
  {
    key: "automation",
    href: "http://localhost:3000/#",
    icon: Settings
  },
  {
    key: "marketing",
    href: "http://localhost:3000/#",
    icon: TrendingUp
  },
  {
    key: "motionDesign",
    href: "http://localhost:3000/#",
    icon: Video
  },
  {
    key: "branding",
    href: "http://localhost:3000/#",
    icon: Palette
  },
  {
    key: "startup",
    href: "http://localhost:3000/#",
    icon: Rocket
  }
];

export function ServicesListSection() {
  const { t, activeLang } = useLanguage();

  return (
    <section className="w-full bg-white text-black py-20 md:py-32 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#f4c660]/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        
        {/* Section Header - Portfolio Style */}
        <div className="mb-16 md:mb-24 overflow-x-auto pb-4">
          <h2 className="text-[2.25rem] min-[375px]:text-[2.75rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] font-black tracking-tighter uppercase text-[#050505] leading-[0.85] whitespace-nowrap mb-8">
            {t("servicesList.our")} <br />
            <span className="inline-block transition-transform duration-700 hover:[transform:rotateX(360deg)] hover:text-[#f4c660] cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>{t("servicesList.directions")}</span>
            <span className="text-[#f4c660]">.</span>
          </h2>
          <div className="border-t-2 border-black/10 pt-10" />
        </div>

        {/* 2-Column Pure Typography Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-20">
          {services.map((s, i) => {
            return (
              <Link 
                key={i} 
                href={s.href} 
                target="_blank"
                className="group flex flex-col p-8 lg:p-10 bg-gradient-to-br from-indigo-50/60 via-purple-50/30 to-amber-50/50 border border-black/5 rounded-3xl hover:from-[#f4c660] hover:to-[#f4c660] hover:via-[#f4c660] transition-all duration-[500ms] overflow-hidden relative cursor-pointer min-h-[380px] lg:min-h-[420px] h-auto shadow-sm hover:shadow-xl hover:shadow-[#f4c660]/30"
              >
                
                {/* Top Content Area: Title and Description aligned top-left */}
                <div className="relative z-20 w-full flex flex-col items-start text-left mb-auto gap-6">
                  <h3 className={`font-black tracking-tighter text-black uppercase transition-colors duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] leading-[0.9] ${
                    activeLang === 'EN' 
                      ? 'text-4xl md:text-5xl lg:text-[4rem] xl:text-[4.5rem]' 
                      : 'text-3xl md:text-4xl lg:text-[3rem] xl:text-[3.5rem] break-words'
                  }`}>
                    {t(`servicesList.${s.key}`)}
                  </h3>
                  <p className="text-black/70 group-hover:text-black/90 text-base lg:text-lg font-medium leading-relaxed max-w-[95%] transition-colors duration-[500ms]">
                    {t(`servicesList.${s.key}Desc`)}
                  </p>
                </div>

                {/* Bottom Content Area: Arrow */}
                <div className="relative z-20 flex justify-end items-end w-full mt-8">
                  <div className="w-14 h-14 rounded-full border border-black/10 flex items-center justify-center shrink-0 bg-white shadow-sm group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] text-black transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] -rotate-45 group-hover:rotate-0">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </div>
                </div>

              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
