"use client";

"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { VideoModal } from "@/components/ui/VideoModal";
import { useLanguage } from "@/context/LanguageContext";

const PROJECTS = [
  {
    title: "GeoWorks | Markaerbete AB",
    services: ["uxDesign", "uiDesign", "webDev", "techSupport"],
    gradient: "from-slate-100 to-slate-200",
    image: "/images/geoworks.png",
    link: "https://www.geoworks.se/",
  },
  {
    title: "Evrika Liseyi",
    services: ["webDev", "uxDesign", "uiDesign", "crm"],
    gradient: "from-slate-100 to-slate-200",
    image: "/images/evrika.png",
    link: "https://evrikaliseyi.edu.az",
  },
  {
    title: "JMB Brick Co.",
    services: ["uxDesign", "uiDesign", "webDev", "eCommerce"],
    gradient: "from-slate-100 to-slate-200",
    image: "/images/jmb.png",
    link: "https://www.jmbbrickco.com",
  },
  {
    title: "Birmilyonyaprak",
    services: ["uxDesign", "uiDesign", "shopify", "techSupport"],
    gradient: "from-slate-100 to-slate-200",
    image: "/images/birmilyonyaprak.png",
    link: "https://birmilyonyaprak.com",
  },
  {
    title: "Hüquq AI",
    services: ["aiAutomation", "uxDesign", "uiDesign", "webDev"],
    gradient: "from-slate-100 to-slate-200",
    image: "/images/huquq.png",
    link: "https://www.huquqai.az/chat",
  },
  {
    title: "LOVABLE",
    services: ["motionDesign", "threeDAnimation", "afterEffects"],
    gradient: "from-slate-100 to-slate-200",
    video: "https://player.vimeo.com/video/1217051084?autoplay=1",
    vimeoId: "1217051084",
    coverGif: "/images/lovable-cover.gif"
  },
  {
    title: "CLAUDE",
    services: ["motionDesign", "threeDAnimation", "afterEffects"],
    gradient: "from-[#FDF3E7] to-[#F7E1C8]",
    video: "https://player.vimeo.com/video/1217051085?autoplay=1",
    vimeoId: "1217051085",
    coverGif: "/images/claude-cover.gif"
  },
  {
    title: "LINDY",
    services: ["motionDesign", "threeDAnimation", "afterEffects"],
    gradient: "from-[#F7F7F7] to-[#EAEAEA]",
    video: "https://player.vimeo.com/video/1217051081?autoplay=1",
    vimeoId: "1217051081",
    coverGif: "/images/lindy-cover.gif"
  },
  {
    title: "SUPERGENT",
    services: ["motionDesign", "threeDAnimation", "afterEffects"],
    gradient: "from-[#F7F7F7] to-[#EAEAEA]",
    video: "https://player.vimeo.com/video/1217051081?autoplay=1",
    vimeoId: "1217051081",
    coverGif: "/images/supergent-cover.gif"
  },
  {
    title: "ASRALI",
    services: ["webDev", "techSupport", "erp", "crm"],
    gradient: "from-slate-100 to-slate-200",
    image: "/images/asrali.png",
    link: "https://asrali.com/",
  },

];

export default function PortfolioSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { t, activeLang } = useLanguage();

  return (
    <section id="portfolio" className="pt-16 pb-12 md:pt-24 md:pb-24 lg:py-24 bg-transparent relative">
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 md:mb-24 gap-4 md:gap-8 relative z-20">
          <h2 className={`font-black tracking-tighter uppercase text-[#050505] leading-[0.85] max-w-full break-words ${
            activeLang === 'EN' 
              ? 'text-[2.5rem] min-[375px]:text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem]' 
              : 'text-[2.25rem] min-[375px]:text-[2.75rem] sm:text-[4.5rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]'
          }`}>
            {t("portfolio.our")} <br />
            <span className="inline-block transition-transform duration-700 hover:[transform:rotateX(360deg)] hover:text-[#f4c660] cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>{t("portfolio.portfolio")}</span>
            <span className="text-[#f4c660]">.</span>
          </h2>
          
          <Link 
            href="/portfolio"
            className="group inline-flex items-center gap-2 sm:gap-4 text-base sm:text-lg md:text-xl font-bold uppercase tracking-widest text-[#050505] hover:text-[#f4c660] transition-colors"
          >
            {t("portfolio.seeAll")}
            <span className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#050505] flex items-center justify-center group-hover:border-[#f4c660] transition-colors">
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </div>

        {/* Grid Container: 3 cols on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-2 md:gap-2">
          {PROJECTS.map((project, idx) => (
            <a 
              key={idx} 
              href={project.link || "#"}
              target={project.link ? "_blank" : undefined}
              rel={project.link ? "noopener noreferrer" : undefined}
              className="group flex flex-col cursor-pointer"
              onClick={(e) => {
                if (project.video) {
                  e.preventDefault();
                  setActiveVideo(project.video);
                }
              }}
            >
              
              {/* Image/Placeholder Box (Slightly taller than a square) */}
              <div className="relative w-full aspect-[4/5] bg-slate-100 mb-6 overflow-hidden rounded-none border border-slate-200 transition-all duration-500">
                {(project as any).coverGif ? (
                  <img src={(project as any).coverGif} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                ) : (project as any).vimeoId ? (
                  <div className="absolute top-0 left-1/2 h-full w-[250%] -translate-x-1/2 pointer-events-none">
                    <iframe 
                      src={`https://player.vimeo.com/video/${(project as any).vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0`} 
                      className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.05]" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture" 
                      loading="lazy"
                    />
                  </div>
                ) : project.video ? (
                  <video src={project.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                ) : project.image ? (
                  <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 group-hover:scale-[1.03]`}></div>
                )}
                
                {/* Arrow Icon appears on hover */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-none bg-white border border-slate-200 flex items-center justify-center shadow-sm text-[#050505] group-hover:bg-[#f4c660] group-hover:border-[#f4c660] transition-all duration-500 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 z-10">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>

              {/* Text Section Underneath */}
              <div className="flex flex-col gap-1 px-2 mt-2 flex-grow">
                <h3 className="w-full text-[#050505] font-black uppercase tracking-tighter text-xl md:text-2xl lg:text-3xl leading-[0.95] group-hover:text-[#DD3636] transition-colors duration-300">
                  {project.title}
                </h3>
                
                {(project as any).subtitle && (
                  <p className="text-slate-500 text-lg font-light tracking-tight mt-1">
                    {(project as any).subtitle}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 text-[#050505]/70 text-xs md:text-sm font-medium mt-2">
                  {project.services.map(s => t(`tags.${s}`)).join(" • ")}
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
      
      {/* Video Modal */}
      <VideoModal 
        isOpen={!!activeVideo} 
        videoSrc={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </section>
  );
}
