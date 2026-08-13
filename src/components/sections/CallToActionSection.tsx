"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export function CallToActionSection() {
  const { t, activeLang } = useLanguage();
  return (
    <section className="w-full bg-[#050505] py-16 md:py-32 lg:py-48 overflow-hidden relative z-20 border-t border-white/5 group">
      
      {/* Dramatic Blur-Reveal Background Memoji */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <Image 
          src="/memoji_yellow.png"
          alt="Codfy Memoji"
          fill
          className="object-cover opacity-10 group-hover:opacity-30 group-hover:scale-110 transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] blur-[100px] group-hover:blur-[50px] grayscale group-hover:grayscale-0"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 pointer-events-auto">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 sm:gap-16 xl:gap-8 w-full">
          
          {/* Left Side: Big Text UPPERCASE SADE */}
          <div className="w-full xl:w-2/3 relative z-10">
            <h2 className={`font-black tracking-tighter leading-[0.85] text-white uppercase drop-shadow-2xl flex flex-col items-start justify-center max-w-full break-words ${
              activeLang === 'EN' 
                ? 'text-[2.5rem] min-[375px]:text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[11rem]' 
                : 'text-3xl min-[375px]:text-4xl sm:text-[5rem] md:text-[7rem] lg:text-[9rem]'
            }`}>
              <span>{t("cta.haveA")}</span>
              <span className="text-[#f4c660] transition-colors duration-1000">{t("cta.project")}</span>
              <span className="text-white/40 mt-1 md:mt-2">{t("cta.inMind")}</span>
            </h2>
          </div>

          {/* Right Side: Arrow and Compact Uppercase Text */}
          <div className="w-full xl:w-1/3 flex flex-col items-start xl:items-end justify-center group">
            <Link href="/contact" className="flex flex-col items-start xl:items-end w-full xl:w-auto text-white no-underline relative">
              
              {/* Modern Minimal Arrow */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 sm:mb-8 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4">
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M 20 20 L 80 20 L 80 80" stroke="#f4c660" strokeWidth="8" strokeLinecap="square" strokeLinejoin="miter" />
                  <path d="M 20 80 L 80 20" stroke="#f4c660" strokeWidth="8" strokeLinecap="square" />
                </svg>
              </div>
              
              <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest uppercase text-white group-hover:text-[#f4c660] transition-colors">
                {t("cta.share")}
              </p>
              <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest uppercase text-[#f4c660] group-hover:text-white transition-colors">
                {t("cta.withUs")}
              </p>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
