"use client";

import React, { useState } from "react";
import Link from 'next/link';
import { FooterCardSection } from "@/components/sections/FooterCardSection";
import { useLanguage } from "@/context/LanguageContext";

export function ContactClient() {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successStatus, setSuccessStatus] = useState<"idle" | "showing" | "fading-out">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const res = await fetch("https://formsubmit.co/ajax/support@codfy.tech", {
        method: "POST",
        headers: { 
          'Accept': 'application/json'
        },
        body: formData
      });
      
      if (res.ok) {
        setSuccessStatus("showing");
        form.reset();
        
        // Start fading out after 4 seconds
        setTimeout(() => {
          setSuccessStatus("fading-out");
        }, 4000);
        
        // Fully revert back to form after 5 seconds
        setTimeout(() => {
          setSuccessStatus("idle");
        }, 5000);
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong, please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full bg-transparent text-[#050505] min-h-screen relative flex flex-col overflow-hidden font-[family-name:var(--font-geist-sans)]">
      
      <div className="flex-grow flex flex-col items-center justify-start pt-12 min-[400px]:pt-16 lg:pt-32 pb-10 lg:pb-20 w-full">
        
        {/* Top Section: Grid for responsive reordering */}
        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-8 lg:gap-y-0 mb-16 md:mb-24">
        
          {/* 1. Heading (Order 1 on mobile, Col 1 Row 1 on desktop) */}
          <div className="order-1 lg:col-start-1 lg:row-start-1 pb-4 lg:pb-12 max-w-full overflow-hidden">
            <h1 className="text-[3rem] min-[400px]:text-[3.5rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem] 2xl:text-[6.5rem] font-black tracking-tighter mb-4 md:mb-6 uppercase text-[#050505] leading-[0.85] break-words hyphens-auto w-full">
              {t("contact.lets")} <br className="hidden md:block"/> <span className="inline-block transition-transform duration-700 hover:[transform:rotateX(360deg)] hover:text-[#f4c660] cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>{t("contact.talk")}</span><span className="text-[#f4c660]">.</span>
            </h1>
            <p className="text-base md:text-xl lg:text-[1.5rem] text-slate-600 max-w-sm lg:max-w-xl font-light tracking-tight leading-[1.3] uppercase mt-4 break-words">
              {t("contact.lookingForChallenges")}
            </p>
          </div>

          {/* 2. Form (Order 2 on mobile, Col 2 Row 1-span-2 on desktop) */}
          <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:mt-6 w-full relative min-h-[400px] md:min-h-[500px]">
            
            {/* Success Message Overlay */}
            {successStatus !== "idle" && (
              <div className={`absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-6 md:gap-8 w-full max-w-[700px] ml-auto bg-black text-white rounded-[2rem] p-8 text-center shadow-2xl z-50 transition-all duration-1000 ${successStatus === "showing" ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95 pointer-events-none"}`}>
                <div className="w-20 h-20 bg-[#f4c660] text-black rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(244,198,96,0.3)]">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight">SUCCESSFULLY <br/><span className="text-[#f4c660]">RECEIVED.</span></h3>
                <p className="text-white/60 font-medium uppercase tracking-widest text-xs md:text-sm max-w-sm">THANK YOU FOR REACHING OUT. OUR TEAM WILL GET BACK TO YOU SHORTLY.</p>
              </div>
            )}

            {/* The Form */}
            <form onSubmit={handleSubmit} className={`flex flex-col gap-8 md:gap-16 w-full max-w-[700px] ml-auto relative z-40 transition-all duration-1000 ${successStatus !== "idle" ? "opacity-0 pointer-events-none blur-md scale-95" : "opacity-100 blur-none scale-100"}`}>
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Form Submission!" />
                
                {/* Input Group */}
                <div className="flex flex-col gap-2 md:gap-4 relative group">
                  <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-black">{t("contact.q1")}</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder={t("contact.p1")}
                    className="w-full bg-transparent border-b-2 border-black/10 pb-2 md:pb-4 text-xl md:text-5xl font-medium placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none"
                  />
                </div>

                {/* Input Group */}
                <div className="flex flex-col gap-2 md:gap-4 relative group">
                  <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-black">{t("contact.q2")}</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder={t("contact.p2")}
                    className="w-full bg-transparent border-b-2 border-black/10 pb-2 md:pb-4 text-xl md:text-5xl font-medium placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none"
                  />
                </div>

                {/* Input Group */}
                <div className="flex flex-col gap-2 md:gap-4 relative group">
                  <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-black">{t("contact.q3")}</label>
                  <input 
                    type="text" 
                    name="service"
                    required
                    placeholder={t("contact.p3")}
                    className="w-full bg-transparent border-b-2 border-black/10 pb-2 md:pb-4 text-xl md:text-5xl font-medium placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none"
                  />
                </div>

                {/* Input Group */}
                <div className="flex flex-col gap-2 md:gap-4 relative group">
                  <label className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-black">{t("contact.q4")}</label>
                  <textarea 
                    name="message"
                    required
                    rows={2}
                    placeholder={t("contact.p4")}
                    className="w-full bg-transparent border-b-2 border-black/10 pb-2 md:pb-4 text-lg md:text-4xl font-medium placeholder:text-black/20 focus:outline-none focus:border-black transition-colors rounded-none resize-none"
                  />
                </div>

                {/* Submit Button - Premium Pill */}
                <div className="mt-4 md:mt-8">
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="group w-full md:w-auto inline-flex items-center justify-between gap-4 md:gap-8 bg-black text-white rounded-full pl-6 md:pl-8 pr-1.5 md:pr-2 py-1.5 md:py-2 transition-all duration-500 hover:bg-[#f4c660] hover:text-black hover:shadow-2xl hover:-translate-y-1 disabled:opacity-70 disabled:hover:bg-black disabled:hover:text-white disabled:hover:-translate-y-0"
                  >
                    <span className="text-xs md:text-base font-bold uppercase tracking-[0.2em] py-3 md:py-4">
                      {isSubmitting ? "SENDING..." : t("contact.sendMessage")}
                    </span>
                    <div className="w-10 h-10 md:w-16 md:h-16 bg-white/10 group-hover:bg-white rounded-full flex items-center justify-center transition-all duration-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:-rotate-45 group-hover:text-black md:w-6 md:h-6">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </button>
                </div>
              </form>
          </div>

          {/* 3. Contact Info (Order 3 on mobile, Col 1 Row 2 on desktop) */}
          <div className="order-3 lg:col-start-1 lg:row-start-2 flex flex-col justify-end mt-12 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10 md:gap-y-16 border-t border-black/10 pt-8 md:pt-12">
              <div className="flex flex-col gap-2 md:gap-4">
                <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#a1a1a6]">{t("contact.email")}</h4>
                <a href="mailto:support@codfy.tech" className="text-xl md:text-2xl lg:text-3xl font-bold hover:text-[#f4c660] transition-colors break-words">support@codfy.tech</a>
              </div>
              
              <div className="flex flex-col gap-2 md:gap-4 z-10">
                <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#a1a1a6]">{t("contact.headquarters")}</h4>
                <p className="text-xl md:text-2xl font-bold leading-tight">
                  {t("contact.bakuAzerbaijan")} <br />
                  <span className="text-[#a1a1a6] text-sm md:text-base lg:text-lg">{t("contact.globalOperations")}</span>
                </p>
              </div>

              <div className="col-span-1 sm:col-span-2 flex flex-col gap-4 mt-4 md:mt-8">
                 <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-[#a1a1a6]">{t("contact.legal")}</h4>
                 <div className="flex flex-col">
                    <Link href="/privacy-policy" className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter hover:text-[#f4c660] transition-colors flex items-center justify-between group border-b border-black/10 pb-4 pt-2 md:pb-6 md:pt-4">
                      {t("contact.privacyPolicy")}
                      <span className="text-xl md:text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↗</span>
                    </Link>
                    <Link href="/terms-of-service" className="text-2xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter hover:text-[#f4c660] transition-colors flex items-center justify-between group border-b border-black/10 pb-4 pt-4 md:pb-6 md:pt-6">
                      {t("contact.termsOfService")}
                      <span className="text-xl md:text-3xl opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">↗</span>
                    </Link>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Centered WhatsApp Card */}
        <div className="w-full px-4 md:px-8 flex flex-col items-center">
          <div className="flex items-center gap-4 mb-8 md:mb-12 w-full opacity-40">
            <div className="flex-1 h-[1px] bg-black"></div>
            <span className="text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-black whitespace-nowrap text-center">
              {t("contact.preferInstant")}
            </span>
            <div className="flex-1 h-[1px] bg-black"></div>
          </div>
          
          <a 
            href="https://wa.me/994555945100" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group w-full bg-[#050505] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10 hover:scale-[1.01] transition-transform duration-700 shadow-2xl overflow-hidden relative"
          >
              {/* Extremely subtle hover background reaction */}
              <div className="absolute inset-0 bg-[#25D366] opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none" />

              {/* Left Side: Avatar and Identity */}
              <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-8 z-10">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full bg-white/5 flex items-center justify-center text-5xl sm:text-7xl md:text-8xl shadow-inner border border-white/5 group-hover:border-[#25D366]/30 transition-colors duration-500">
                    👩🏻‍💻
                  </div>
                  <div className="absolute bottom-1 right-1 md:bottom-4 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-[#25D366] rounded-full border-4 border-[#050505] flex items-center justify-center shadow-[0_0_20px_#25D366]">
                    <div className="w-full h-full bg-[#25D366] rounded-full animate-ping opacity-75" />
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-none group-hover:text-[#f4c660] transition-colors duration-500">
                    Leyla
                  </span>
                  <span className="text-white/60 text-lg md:text-xl lg:text-2xl font-medium mt-1 md:mt-4">
                    {t("contact.projectManager")}
                  </span>
                  <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 mt-3 md:mt-4 text-[#25D366] text-xs md:text-base font-bold tracking-[0.2em] uppercase">
                    <span className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                    {t("contact.onlineStatus")}
                  </div>
                </div>
              </div>

              {/* Right Side: Brutalist Action Pill */}
              <div className="z-10 w-full lg:w-auto mt-2 lg:mt-0">
                <div className="flex items-center justify-between lg:justify-center gap-4 md:gap-6 bg-white text-black rounded-full px-6 py-4 md:px-12 md:py-6 group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-500 w-full lg:w-auto">
                  <span className="text-base min-[400px]:text-lg md:text-3xl font-black uppercase tracking-widest whitespace-nowrap">
                    {t("contact.startChat")}
                  </span>
                  <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-white group-hover:text-[#25D366] transition-colors duration-500">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="transform group-hover:scale-110 transition-transform duration-500 w-5 h-5 md:w-6 md:h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      {/* Global Newsletter / Footer Card at bottom for consistency */}
      <div className="w-full">
        <FooterCardSection />
      </div>
    </div>
  );
}
