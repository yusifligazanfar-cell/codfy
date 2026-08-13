"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutMarquee() {
  const { t } = useLanguage();

  const phrase = `${t("about.radical")} • ${t("about.relentless")} • ${t("about.uncompromising")} • ${t("about.obsessive")} • `;

  return (
    <div className="w-full py-10 overflow-hidden bg-[#f4c660] transform -rotate-2 scale-110 relative z-30 shadow-xl">
      <div className="flex whitespace-nowrap animate-marquee">
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
          {phrase}{phrase}{phrase}{phrase}
        </h2>
      </div>
    </div>
  );
}
