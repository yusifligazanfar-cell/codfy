"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutDirectionsSection() {
  const { t, activeLang } = useLanguage();

  const directions = [
    { key: "aiAgents", link: "http://localhost:3000/#" },
    { key: "websites", link: "http://localhost:3000/#" },
    { key: "ecommerce", link: "http://localhost:3000/#" },
    { key: "mobileApps", link: "http://localhost:3000/#" },
    { key: "crm", link: "http://localhost:3000/#" },
    { key: "automation", link: "http://localhost:3000/#" },
    { key: "marketing", link: "http://localhost:3000/#" },
    { key: "motionDesign", link: "http://localhost:3000/#" },
    { key: "branding", link: "http://localhost:3000/#" },
    { key: "startup", link: "http://localhost:3000/#" },
  ];

  return (
    <div className="w-full bg-white text-black py-8 lg:py-32 px-4 md:px-8 lg:px-12 relative z-10 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 lg:mb-24 w-full">
          <h2 className={`font-black uppercase tracking-tighter leading-[0.85] text-black max-w-full ${
            activeLang === 'EN' 
              ? 'text-5xl sm:text-6xl md:text-8xl lg:text-[9rem]' 
              : 'text-[10.5vw] sm:text-6xl md:text-8xl lg:text-[9rem]'
          }`}>
            {t("servicesList.our")}<br />{t("servicesList.directions")}<span className="text-[#f4c660]">.</span>
          </h2>
          <p className="text-xs md:text-sm max-w-[280px] font-bold text-black/50 mt-8 md:mt-0 md:pb-4 text-left md:text-right uppercase tracking-[0.2em] leading-relaxed">
            {t("about.corePillars")}
          </p>
        </div>

        <div className="w-full flex flex-col border-t-2 border-black/20">
          {directions.map((dir, i) => (
            <a 
              key={i} 
              href={dir.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 sm:py-10 md:py-16 border-b-2 border-black/20 hover:bg-black hover:text-white transition-colors duration-500 px-4 md:px-8 -mx-4 md:-mx-8 cursor-pointer"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 sm:gap-4 md:gap-12 w-full md:w-1/2 min-w-0 pr-4">
                <span className="text-lg sm:text-xl md:text-3xl font-bold text-black/30 group-hover:text-[#f4c660] transition-colors duration-500 shrink-0">
                  {(i+1).toString().padStart(2, '0')}
                </span>
                <h3 className={`font-black uppercase tracking-tighter text-black group-hover:text-white transition-colors duration-300 leading-[0.9] md:leading-none break-words hyphens-auto ${
                  activeLang === 'EN' ? 'text-[2.5rem] sm:text-4xl md:text-6xl' : 'text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl'
                }`}>
                  {t(`servicesList.${dir.key}`)}
                </h3>
              </div>
              <div className="w-full md:w-1/2 flex items-end md:items-center justify-between mt-4 md:mt-0 md:pl-8 lg:pl-16 min-w-0 gap-4">
                <p className="text-sm sm:text-base md:text-xl font-medium max-w-lg text-black/70 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
                  {t(`servicesList.${dir.key}Desc`)}
                </p>
                <span className="text-3xl sm:text-4xl md:text-6xl opacity-100 md:opacity-0 translate-x-0 md:-translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 text-black/20 md:text-black group-hover:text-[#f4c660] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] shrink-0 self-end md:self-auto">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
