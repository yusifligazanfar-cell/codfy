"use client";

import React from "react";
import { Lock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function InternshipCardSection() {
  const { t, activeLang } = useLanguage();

  const teamMembers = [
    { name: "Fehd", emoji: "👨🏽‍💻", color: "bg-amber-500/20 border border-amber-500/30", isYou: false },
    { name: "Ali", emoji: "👨🏻‍💻", color: "bg-red-500/20 border border-red-500/30", isYou: false },
    { name: t("internship.andYou"), emoji: "?", color: "bg-[#f5ca6b] shadow-[0_0_30px_rgba(245,202,107,0.3)]", isYou: true },
    { name: "Rehman", emoji: "👨🏼‍💻", color: "bg-lime-500/20 border border-lime-500/30", isYou: false },
    { name: "Leyla", emoji: "👩🏻‍💻", color: "bg-purple-500/20 border border-purple-500/30", isYou: false },
  ];

  return (
    <section className="w-full py-2 md:py-4 px-4 md:px-8 relative z-20">
      <div className="w-full bg-[#cc0000] rounded-[2rem] md:rounded-[40px] p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row items-stretch justify-between gap-8 md:gap-12 lg:gap-16">
        
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
          <h2 className={`font-black text-white tracking-tighter mb-6 md:mb-8 leading-[0.95] uppercase ${activeLang === "EN" ? "text-4xl sm:text-6xl md:text-7xl lg:text-8xl" : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"}`}>
            {t("internship.joinOur")} <span className="text-[#f5ca6b]">{t("internship.internship")}</span><br />{t("internship.program")}
          </h2>
          
          <p className="text-white/90 text-lg sm:text-xl md:text-[22px] font-medium mb-6 md:mb-8 leading-relaxed max-w-lg">
            {t("internship.question")}
          </p>
          
          <p className="text-white/70 text-base sm:text-lg font-medium max-w-lg">
            {t("internship.descPart1")} <a href="mailto:support@codfy.tech" className="text-white font-bold underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">support@codfy.tech</a>{t("internship.descPart2")}
          </p>
        </div>
        
        {/* Right Side: The Dark Browser Window */}
        <div className="w-full lg:w-1/2 bg-[#222222] rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col shadow-2xl relative overflow-hidden min-h-[250px] md:min-h-[400px]">
           
          {/* Mac Window Header & Title */}
          <div className="flex items-center w-full">
            {/* Mac Window Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56]"></div>
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f]"></div>
            </div>
            
            {/* Title / Address Bar */}
            <div className="flex-1 mx-3 md:mx-6 lg:mx-8">
              <div className="w-full bg-[#333333] rounded-md py-1 sm:py-1.5 flex items-center justify-center text-white/50 text-[10px] md:text-xs font-medium tracking-wider lowercase">
                www.codfy.tech
              </div>
            </div>
            
            <div className="w-[32px] sm:w-[42px] hidden md:block"></div>
          </div>
          
          {/* Team Avatars */}
          <div className="flex-1 flex flex-col justify-center w-full py-6 md:py-12">
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 sm:gap-4 w-full">
              {teamMembers.map((member, i) => (
                <div key={i} className="flex flex-col items-center gap-1 md:gap-3">
                  <div 
                    className={`w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer ${member.color}`}
                  >
                    {member.isYou ? (
                      <div className="text-[#222222] font-black text-xl md:text-5xl">?</div>
                    ) : (
                      <div className="text-lg md:text-3xl lg:text-4xl flex items-center justify-center gap-0.5">{member.emoji}</div>
                    )}
                  </div>
                  <span className="text-white/90 text-[9px] md:text-sm font-medium">{member.name}</span>
                </div>
              ))}
            </div>
          </div>
          


        </div>
        
      </div>
    </section>
  );
}
