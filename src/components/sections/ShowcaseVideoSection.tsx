"use client";

import { motion } from "framer-motion";
import { Play, X, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { VideoModal } from "@/components/ui/VideoModal";

export function ShowcaseVideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const { t, activeLang } = useLanguage();

  return (
    <section className="relative w-full bg-transparent text-[#02021e] pt-12 pb-0 md:pb-8 lg:pt-24 lg:pb-8">
      <div className="container mx-auto px-2 min-[400px]:px-4 md:px-12 relative z-10">
        <div 
          className="relative w-full h-full max-w-[1440px] mx-auto flex flex-col items-center text-center gap-6 md:gap-12 pt-2 px-0 md:pt-4 md:px-[1.5rem] md:pb-[1.5rem] lg:pt-4 lg:pr-[2.25rem] lg:pb-[2rem] lg:pl-[2.5rem]"
        >


          {/* Visuals Row */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-stretch justify-center gap-0 lg:gap-8 w-full lg:h-[40rem] lg:min-h-[40rem] relative z-20 group">

            {/* Video Card Side — shows FIRST on mobile, SECOND on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start items-center relative z-10 w-full h-[18rem] min-[400px]:h-[22rem] sm:h-[28rem] lg:flex-1 lg:h-full transition-transform duration-700 ease-in-out group-hover:-translate-y-16 lg:group-hover:translate-y-0"
            >
              {/* The video container */}
              <div 
                className="relative w-full lg:w-[28rem] max-w-full h-full rounded-[1.5rem] overflow-hidden bg-[#02021e] shadow-[0_40px_100px_rgba(0,0,0,0.2)] border-4 border-white/20 group cursor-pointer transform-gpu"
                onClick={() => setIsVideoOpen(true)}
              >
                
                {/* Video Cover Image */}
                <div className="absolute inset-0 overflow-hidden rounded-[1.5rem] bg-[#02021e]">
                  <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700 rounded-[1.5rem]" />
                  <div className="absolute inset-0 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-700">
                    <img 
                      src="/images/wakeup-cover.gif" 
                      alt="Video Cover"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.05]" 
                    />
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#fdc448] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(253,196,72,0.4)] group-hover:bg-[#ffda82] transition-all group-hover:scale-110 duration-300">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-[#02021e] fill-[#02021e] ml-1" />
                  </div>
                </div>

              </div>
            </motion.div>
            
            {/* Huge Folder Icon Side — shows SECOND on mobile, FIRST on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex-1 lg:flex-[1.5] flex justify-center lg:justify-end items-center relative w-full h-auto min-h-[22rem] sm:min-h-[30rem] lg:h-full z-30 -mt-40 lg:mt-0 transition-transform duration-700 ease-in-out"
            >
              <div className="relative w-full lg:w-[54rem] max-w-full aspect-[4/3] sm:aspect-[4/3] lg:aspect-auto lg:h-full drop-shadow-[0_40px_80px_rgba(37,99,235,0.3)] flex justify-center items-center">
                {/* Provided Image as Folder */}
                <img 
                  src="https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6478406e98d928dcf090e1ca_bg-card-hero_tablet.webp" 
                  alt="Background pattern base" 
                  className="w-full h-full object-fill rounded-[1.5rem] brightness-[1.2]"
                />
                
                {/* #DD3636 Color Overlay */}
                <div 
                  className="absolute inset-0 bg-[#DD3636] mix-blend-color pointer-events-none rounded-[1.5rem]"
                  style={{
                    WebkitMaskImage: 'url("https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6478406e98d928dcf090e1ca_bg-card-hero_tablet.webp")',
                    WebkitMaskSize: '100% 100%',
                    WebkitMaskRepeat: 'no-repeat',
                    maskImage: 'url("https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/6478406e98d928dcf090e1ca_bg-card-hero_tablet.webp")',
                    maskSize: '100% 100%',
                    maskRepeat: 'no-repeat'
                  }}
                />
                
                {/* Text Overlay on Folder */}
                <div className="absolute inset-0 flex flex-col items-start justify-between p-4 min-[400px]:p-6 sm:p-10 md:p-12 text-left z-10 w-full h-full">
                  <div className="pt-2 md:pt-4 w-full flex-1 flex flex-col justify-center">
                    <h2 className={`font-black tracking-tighter mb-2 uppercase text-white leading-[0.9] md:leading-[0.85] w-full ${activeLang === "EN" ? "text-[1.5rem] min-[400px]:text-[1.75rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[6.5rem]" : "text-[1.25rem] min-[400px]:text-[1.5rem] sm:text-[3rem] md:text-[4.25rem] lg:text-[5rem] xl:text-[5.5rem]"}`}>
                      {t("showcase.title1")} <span className="text-[#f4c660]">{t("showcase.title2")}</span>
                    </h2>
                  </div>

                  <div className="w-full pb-2 md:pb-6">
                    <div className="w-full h-px bg-white/20 mb-3 md:mb-6" />
                    <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3 sm:gap-6 w-full">
                      <p className="text-xs min-[400px]:text-sm sm:text-base md:text-xl lg:text-[1.5rem] text-white/90 max-w-sm lg:max-w-xl font-light tracking-tight leading-[1.3]">
                        {t("showcase.desc")}
                      </p>
                      <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center pl-4 sm:pl-6 md:pl-8 pr-1 md:pr-2 py-1 md:py-2 text-xs sm:text-sm md:text-lg font-bold text-[#02021e] transition-all duration-300 bg-[#fdc448] rounded-full uppercase tracking-wide whitespace-nowrap"
                      >
                        <span className="mr-2 sm:mr-3 md:mr-4">{t("showcase.bookCall")}</span>
                        <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#02021e] text-[#fdc448] rounded-full transition-all duration-500 group-hover:bg-white group-hover:text-[#02021e]">
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform duration-500 group-hover:-rotate-45" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      <VideoModal 
        isOpen={isVideoOpen} 
        videoSrc="https://player.vimeo.com/video/1217051082?autoplay=1" 
        onClose={() => setIsVideoOpen(false)} 
      />
    </section>
  );
}
