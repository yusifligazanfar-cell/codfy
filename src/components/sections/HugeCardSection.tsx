"use client";

import React, { useState } from "react";
import { Play } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { VideoModal } from "@/components/ui/VideoModal";

export function HugeCardSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { t } = useLanguage();

  const togglePlay = () => {
    setIsVideoOpen(true);
  };

  return (
    <section className="w-full pt-2 md:pt-4 pb-2 md:pb-4 px-4 md:px-8 relative z-20">
      <div 
        className={`w-full max-w-[1800px] mx-auto h-[45vh] sm:h-[60vh] md:h-[85vh] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden relative cursor-pointer group shadow-2xl bg-black transform transition-transform duration-1000 hover:scale-[1.01]`}
        onClick={togglePlay}
      >
        {/* Play Icon in center */}
        <div className={`absolute inset-0 z-20 flex items-center justify-center pointer-events-none opacity-100 transition-all duration-500`}>
          <div className="w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full border-2 border-white/30 backdrop-blur-sm bg-white/10 flex items-center justify-center shadow-2xl group-hover:bg-white/20 group-hover:scale-110 transition-all duration-500">
            <Play className="w-6 h-6 sm:w-10 sm:h-10 md:w-14 md:h-14 text-white ml-1 sm:ml-2 md:ml-3 opacity-80" fill="white" />
          </div>
        </div>

        {/* The Video Cover GIF */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <img 
            src="/images/wakeup-cover.gif" 
            alt="Huge Card Video Cover"
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
        </div>
        
      </div>

      <VideoModal 
        isOpen={isVideoOpen} 
        videoSrc="https://player.vimeo.com/video/1217051188?autoplay=1" 
        onClose={() => setIsVideoOpen(false)} 
      />
    </section>
  );
}
