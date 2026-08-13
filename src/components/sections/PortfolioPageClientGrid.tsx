"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { VideoModal } from "@/components/ui/VideoModal";
import { useLanguage } from "@/context/LanguageContext";

interface Project {
  title: string;
  tags: string[];
  href: string;
  image: string | null;
  video?: string;
  vimeoId?: string;
  coverGif?: string;
}

export function PortfolioPageClientGrid({ projects }: { projects: Project[] }) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const { t } = useLanguage();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-2 md:gap-2">
        {projects.map((p, i) => (
          <a 
            key={i} 
            href={p.href} 
            target={p.href.startsWith('http') || p.href.startsWith('/videos') ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group flex flex-col cursor-pointer"
            onClick={(e) => {
              if (p.video) {
                e.preventDefault();
                setActiveVideo(p.video);
              }
            }}
          >
            
            {/* Image Box - Exact Main Page Style */}
            <div className="relative w-full aspect-[4/5] bg-slate-100 mb-6 overflow-hidden rounded-none border border-slate-200 transition-all duration-500">
              {p.coverGif ? (
                <img src={p.coverGif} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              ) : p.vimeoId ? (
                <div className="absolute top-0 left-1/2 h-full w-[250%] -translate-x-1/2 pointer-events-none">
                  <iframe 
                    src={`https://player.vimeo.com/video/${p.vimeoId}?background=1&autoplay=1&loop=1&byline=0&title=0`} 
                    className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-[1.05]" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture" 
                    loading="lazy"
                  />
                </div>
              ) : p.video ? (
                <video src={p.video} autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              ) : p.image ? (
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
              )}
              
              {/* Floating Arrow - Exact Main Page Style */}
              <div className="absolute top-6 right-6 w-12 h-12 rounded-none bg-white border border-slate-200 flex items-center justify-center shadow-sm text-[#050505] group-hover:bg-[#f4c660] group-hover:border-[#f4c660] transition-all duration-500 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 z-10">
                <ArrowUpRight className="w-6 h-6" />
              </div>
            </div>

            {/* Text Area - Exact Main Page Style */}
            <div className="flex flex-col gap-1 px-2 mt-2 flex-grow">
              <h3 className="w-full text-[#050505] font-black uppercase tracking-tighter text-xl md:text-2xl lg:text-3xl leading-[0.95] group-hover:text-[#DD3636] transition-colors duration-300">
                {p.title}
              </h3>
              <div className="flex flex-wrap gap-2 text-slate-600 text-xs md:text-sm font-light uppercase tracking-tight mt-2">
                {p.tags.map(tag => t(`tags.${tag}`)).join(" • ")}
              </div>
            </div>
          </a>
        ))}
      </div>

      <VideoModal 
        isOpen={!!activeVideo} 
        videoSrc={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </>
  );
}
