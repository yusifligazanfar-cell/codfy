"use client";

import React from "react";
import Link from "next/link";
import { FooterCardSection } from "@/components/sections/FooterCardSection";

export function SuccessClient() {
  return (
    <div className="w-full bg-[#f4f4f5] text-[#050505] min-h-screen relative flex flex-col font-[family-name:var(--font-geist-sans)]">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-[#f4c660] opacity-20 blur-[150px] rounded-full mix-blend-multiply animate-pulse" />
      </div>

      <div className="flex-grow flex flex-col items-center justify-center pt-32 pb-20 w-full relative z-10">
        <div className="max-w-[1200px] w-full mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          
          <div className="w-20 h-20 md:w-32 md:h-32 bg-black text-white rounded-full flex items-center justify-center mb-8 shadow-2xl relative">
             <div className="absolute inset-0 border-2 border-black rounded-full animate-ping opacity-20" />
             <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f4c660" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-16 md:h-16">
               <polyline points="20 6 9 17 4 12"></polyline>
             </svg>
          </div>

          <h1 className="text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] font-black tracking-tighter uppercase leading-[0.85] mb-6">
            SUCCESSFULLY <br /> <span className="text-[#f4c660]">RECEIVED.</span>
          </h1>
          
          <p className="text-base md:text-2xl text-slate-600 max-w-2xl font-light tracking-tight leading-[1.3] uppercase mb-12">
            THANK YOU FOR REACHING OUT. OUR TEAM WILL GET BACK TO YOU SHORTLY WITH THE NEXT STEPS.
          </p>

          <Link 
            href="/" 
            className="group inline-flex items-center justify-center gap-4 bg-black text-white rounded-full px-8 py-4 transition-all duration-500 hover:bg-[#f4c660] hover:text-black hover:shadow-2xl hover:-translate-y-1"
          >
            <span className="text-sm md:text-base font-bold uppercase tracking-[0.2em]">
              BACK TO HOME
            </span>
            <div className="w-8 h-8 bg-white/10 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-500">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:-rotate-45">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </Link>

        </div>
      </div>

      <FooterCardSection />
    </div>
  );
}
