"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutMissionText() {
  const { t } = useLanguage();

  return (
    <div className="relative z-10 w-full max-w-[1200px]">
      <p className="text-[1.75rem] md:text-5xl lg:text-[4.5rem] font-black text-black leading-[1.3] md:leading-[1.1] tracking-tight">
        {t("about.part1")} 
        <span className="inline-block bg-black text-white px-2 py-0 md:px-4 md:py-1 mx-1 -rotate-1 rounded-lg md:rounded-xl shadow-lg leading-tight md:leading-normal">
          {t("about.products")}
        </span>, 
        <span className="inline-block border-2 border-black px-2 py-0 md:px-4 md:py-1 mx-1 rotate-1 rounded-lg md:rounded-xl leading-tight md:leading-normal">
          {t("about.brandExperiences")}
        </span> 
        {t("about.part2")}
      </p>
    </div>
  );
}
