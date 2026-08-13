"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';

// Native counting animation (runs once on mount)
function AnimatedNumber({ target, suffix = "" }: { target: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();
    
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Fast ease-out
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.round(easeProgress * target));
      
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    
    requestAnimationFrame(step);
  }, [target]);

  return <span>{count}{suffix}</span>;
}

export function AdvantagesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useLanguage();

  const stats = [
    {
      number: 13,
      suffix: "+",
      title: t("advantages.keyClients"),
      description: t("advantages.keyClientsDesc"),
    },
    {
      number: 12,
      suffix: "",
      title: t("advantages.expertTeam"),
      description: t("advantages.expertTeamDesc"),
    },
    {
      number: 12,
      suffix: "",
      title: t("advantages.yearsExperience"),
      description: t("advantages.yearsExperienceDesc"),
    }
  ];

  return (
    <section className="w-full h-[500px] md:h-[700px] lg:h-[800px] pt-4 md:pt-12 pb-2 md:pb-4 px-4 md:px-8 relative z-20">
      <div className="w-full h-full max-w-[1600px] mx-auto flex flex-col md:flex-row gap-2 md:gap-4">
        
        {stats.map((stat, i) => {
          const isActive = activeIndex === i;
          
          return (
            <div 
              key={i}
              onMouseEnter={() => setActiveIndex(i)}
              className={`group relative rounded-[32px] md:rounded-[48px] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden border ${
                isActive 
                  ? 'w-full h-[70%] md:h-full md:w-[70%] lg:w-[75%] bg-[#050505] border-[#f4c660]/40 shadow-[0_0_50px_rgba(244,198,96,0.1)]' 
                  : 'w-full h-[15%] md:h-full md:w-[15%] lg:w-[12.5%] bg-[#080808] border-white/5 cursor-pointer hover:border-[#f4c660]/30'
              }`}
            >
              
              {/* Technical Dot Grid (Only visible when active) */}
              <div 
                className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: 'radial-gradient(rgba(244,198,96,0.07) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
              />

              {/* VERTICAL TITLE (Shows when card is collapsed) */}
              <div 
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-500 delay-100 ${
                  isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <span className="text-white/40 tracking-[0.2em] md:tracking-[0.5em] uppercase font-bold text-sm md:text-base md:-rotate-90 whitespace-nowrap group-hover:text-[#f4c660] transition-colors duration-500">
                  {stat.title}
                </span>
              </div>

              {/* EXPANDED CONTENT (Shows when card is active) */}
              <div 
                className={`absolute inset-0 p-6 md:p-12 lg:p-16 flex flex-col justify-between transition-all duration-[500ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
              >
                {/* Top Bar with Rotating Arrow Stagger */}
                <div className={`flex justify-between items-start transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'translate-y-0 opacity-100 delay-[200ms]' : '-translate-y-8 opacity-0'}`}>
                  <h4 className="text-[#f4c660] text-xs md:text-lg tracking-[0.2em] uppercase font-extrabold mt-2 md:mt-4">
                    {stat.title}
                  </h4>
                  <div className={`w-10 h-10 md:w-16 md:h-16 rounded-full border-2 border-[#f4c660]/30 flex items-center justify-center text-[#f4c660] text-xl md:text-2xl transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'rotate-45 bg-[#f4c660]/10' : '-rotate-45'}`}>
                    ↗
                  </div>
                </div>

                {/* Bottom Content with Staggered Slide-up */}
                <div className="flex flex-col justify-between gap-0 relative z-10 mt-auto">
                  <div className={`transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'translate-y-0 opacity-100 scale-100 delay-[300ms]' : 'translate-y-20 opacity-0 scale-95'}`}>
                    {/* Solid exactly rgb(244, 198, 96) text with tight tracking and glowing shadow */}
                    <span className="text-[5rem] sm:text-[10rem] md:text-[18rem] lg:text-[26rem] font-black tracking-[-0.05em] leading-[0.75] text-[#f4c660] -ml-1 md:-ml-4 block drop-shadow-[0_15px_40px_rgba(244,198,96,0.25)]">
                      <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                    </span>
                  </div>
                  
                  <div className={`transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'translate-y-0 opacity-100 delay-[400ms]' : 'translate-y-12 opacity-0'}`}>
                    {/* Elegant, thin, MASSIVE typography for the description in WHITE */}
                    <p className="text-white/90 text-base min-[375px]:text-lg sm:text-2xl md:text-4xl lg:text-[3.5rem] font-light tracking-[-0.02em] max-w-4xl leading-[1.15] pb-2 md:pb-4 pt-2 md:pt-6">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
