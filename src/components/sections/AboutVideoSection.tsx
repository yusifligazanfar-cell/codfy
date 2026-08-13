"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { VideoModal } from "@/components/ui/VideoModal";

export function AboutVideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { t } = useLanguage();

  const togglePlay = () => {
    setIsVideoOpen(true);
  };

  return (
    <div className="w-full bg-white text-[#1d1d1f] py-8 lg:py-40 relative flex justify-center items-center z-20">
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
        
        {/* MASSIVE Video / Reel Container */}
        <div 
          onClick={togglePlay}
          className={`w-full h-[40vh] min-[400px]:h-[50vh] md:h-[80vh] rounded-[2rem] md:rounded-[4rem] overflow-hidden relative bg-black group shadow-[0_40px_100px_rgba(0,0,0,0.1)] mb-8 md:mb-20 cursor-pointer transform transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.01]`}
        >
          
          {/* The Video */}
          <div className="absolute left-0 top-1/2 w-full h-[300%] -translate-y-1/2 pointer-events-none z-0">
            <iframe 
              src="https://player.vimeo.com/video/1217051082?background=1&autoplay=1&loop=1&byline=0&title=0" 
              className={`absolute inset-0 w-full h-full transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-80 group-hover:opacity-60 group-hover:scale-[1.05]`}
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>

          {/* Glowing gradient overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 transition-opacity duration-700 opacity-100`}></div>

          {/* Centered Play Button */}
          <div className={`absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-700 opacity-100`}>
            <div className={`w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/30 transition-all duration-700 shadow-2xl group-hover:bg-white/20 group-hover:scale-110`}>
              <div className="w-0 h-0 border-y-[12px] md:border-y-[16px] border-y-transparent border-l-[20px] md:border-l-[28px] border-l-white ml-2"></div>
            </div>
          </div>

          {/* Hover State: Typography Overlay inside video */}
          <div className={`absolute bottom-10 left-10 md:bottom-16 md:left-16 z-30 transition-all duration-700 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0`}>
            <p className="text-white/70 text-lg md:text-xl font-medium tracking-widest uppercase mb-2">{t("aboutVideo.reel")}</p>
            <h3 className="text-white text-4xl md:text-6xl font-bold tracking-tight">
              {t("aboutVideo.play")}
            </h3>
          </div>
          
        </div>

        {/* ULTRA MODERN TYPOGRAPHY (Minimalist Stacked) */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center text-center mt-8 md:mt-12 mb-10 md:mb-20 z-20 relative px-4">
          
          <h3 className="text-[2.25rem] min-[400px]:text-4xl md:text-7xl lg:text-[7rem] font-bold text-[#1d1d1f] leading-[1.1] md:leading-[0.95] tracking-tight md:tracking-[-0.04em] font-[family-name:var(--font-geist-sans)] mb-8 md:mb-16">
            {t("aboutVideo.title1")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#1d1d1f] to-[#86868b]">{t("aboutVideo.title2")}</span>
          </h3>
          
          <p className="text-base min-[400px]:text-lg md:text-3xl lg:text-[2.5rem] font-medium text-[#86868b] leading-[1.4] md:leading-[1.3] tracking-tight md:tracking-[-0.02em] max-w-[1000px] font-[family-name:var(--font-geist-sans)]">
            {t("aboutVideo.desc")}
          </p>
          
        </div>

      </div>
      <VideoModal 
        isOpen={isVideoOpen} 
        videoSrc="https://player.vimeo.com/video/1217051082?autoplay=1" 
        onClose={() => setIsVideoOpen(false)} 
      />
    </div>
  );
}
