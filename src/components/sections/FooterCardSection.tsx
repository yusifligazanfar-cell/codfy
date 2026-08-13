"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

export function FooterCardSection() {
  const { t } = useLanguage();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleAccordion = (name: string) => {
    setOpenAccordion(prev => prev === name ? null : name);
  };

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
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => {
          setIsSubmitted(false);
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
    <section className="w-full py-2 md:py-4 px-4 md:px-8 relative z-20">
      <div className="w-full bg-[#0a0a0a] rounded-3xl md:rounded-[40px] p-6 md:p-12 lg:p-16 flex flex-col gap-12 shadow-2xl border border-white/5">
        
        {/* Top: Brand Graphic & Newsletter */}
        <div className="w-full flex flex-col xl:flex-row items-center xl:items-end justify-between border-b border-white/10 pb-8 md:pb-12 gap-12 xl:gap-8">
          
          {/* Left: Massive Brand Graphic */}
          <div className="flex flex-col text-left w-full xl:w-3/5 relative h-[60px] sm:h-[100px] md:h-[150px] lg:h-[180px] xl:h-[220px]">
            <Image 
              src="/images/logo-transparent.png"
              alt="Codfy Logo"
              fill
              className="object-contain object-left invert brightness-0"
              priority
            />
          </div>

          {/* Right: Newsletter Subscription */}
          <div className="w-full xl:w-2/5 flex flex-col items-start xl:items-end text-left xl:text-right gap-4 pb-2">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter">
              {t("footer.stayInTheLoop")}
            </h3>
            <p className="text-white/60 text-sm md:text-base font-medium max-w-sm">
              {t("footer.subscribeDesc")}
            </p>
            {isSubmitted ? (
              <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-full px-6 py-3 md:py-4 mt-2 flex items-center justify-center gap-3 animate-in fade-in zoom-in duration-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5ca6b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-white font-bold uppercase tracking-widest text-sm">Successfully Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row items-center gap-2 sm:gap-4 mt-2">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Newsletter Subscription!" />
                <input 
                  type="email" 
                  name="email"
                  placeholder={t("footer.emailPlaceholder")} 
                  className="w-full sm:flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 md:py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#f5ca6b] transition-colors"
                  required
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-[#f5ca6b] text-[#0a0a0a] px-8 py-3 md:py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:scale-105 transition-all disabled:opacity-70 disabled:hover:bg-[#f5ca6b] disabled:hover:scale-100"
                >
                  {isSubmitting ? "..." : t("footer.subscribe")}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* Middle: Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-8 w-full border-b border-white/10 pb-4 md:pb-12">
          
          {/* Column 1: Company */}
          <div className="flex flex-col border-b border-white/10 md:border-none last:border-none">
            <button 
              className="flex md:hidden justify-between items-center w-full py-4 text-left" 
              onClick={() => toggleAccordion('company')}
            >
              <h4 className="text-white/50 text-xs font-mono tracking-widest uppercase">{t("footer.company")}</h4>
              <span className="text-white/50 text-xl font-mono">{openAccordion === 'company' ? '−' : '+'}</span>
            </button>
            <h4 className="hidden md:block text-white/50 text-xs font-mono tracking-widest uppercase mb-5">{t("footer.company")}</h4>
            <div className={`flex-col gap-4 pb-4 md:pb-0 ${openAccordion === 'company' ? 'flex' : 'hidden md:flex'}`}>
              <a href="#" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">{t("footer.aboutUs")}</a>
              <a href="#" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">{t("footer.portfolio")}</a>
              <a href="#" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">{t("footer.contact")}</a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="flex flex-col border-b border-white/10 md:border-none last:border-none">
            <button 
              className="flex md:hidden justify-between items-center w-full py-4 text-left" 
              onClick={() => toggleAccordion('services')}
            >
              <h4 className="text-white/50 text-xs font-mono tracking-widest uppercase">{t("footer.services")}</h4>
              <span className="text-white/50 text-xl font-mono">{openAccordion === 'services' ? '−' : '+'}</span>
            </button>
            <h4 className="hidden md:block text-white/50 text-xs font-mono tracking-widest uppercase mb-5">{t("footer.services")}</h4>
            <div className={`flex-col gap-4 pb-4 md:pb-0 ${openAccordion === 'services' ? 'flex' : 'hidden md:flex'}`}>
              <a href="#" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">{t("footer.aiAgents")}</a>
              <a href="#" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">{t("footer.websites")}</a>
              <a href="#" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">{t("footer.mobileApps")}</a>
              <a href="#" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">{t("footer.ecommerce")}</a>
              <a href="#" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">{t("footer.brandingDesign")}</a>
              <a href="#" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">{t("footer.crmAutomation")}</a>
            </div>
          </div>

          {/* Column 3: Global */}
          <div className="flex flex-col border-b border-white/10 md:border-none last:border-none">
            <button 
              className="flex md:hidden justify-between items-center w-full py-4 text-left" 
              onClick={() => toggleAccordion('global')}
            >
              <h4 className="text-white/50 text-xs font-mono tracking-widest uppercase">{t("footer.globalOffices")}</h4>
              <span className="text-white/50 text-xl font-mono">{openAccordion === 'global' ? '−' : '+'}</span>
            </button>
            <h4 className="hidden md:block text-white/50 text-xs font-mono tracking-widest uppercase mb-5">{t("footer.globalOffices")}</h4>
            <div className={`flex-col gap-4 pb-4 md:pb-0 ${openAccordion === 'global' ? 'flex' : 'hidden md:flex'}`}>
              <span className="text-white text-base font-bold">{t("footer.codfyAz")}</span>
              <span className="text-white/70 text-base font-bold">{t("footer.codfySe")} <span className="text-[10px] text-[#f5ca6b] uppercase tracking-widest ml-1">{t("footer.soon")}</span></span>
              <span className="text-white/70 text-base font-bold">{t("footer.codfyUae")} <span className="text-[10px] text-[#f5ca6b] uppercase tracking-widest ml-1">{t("footer.soon")}</span></span>
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="flex flex-col border-b border-white/10 md:border-none last:border-none">
            <button 
              className="flex md:hidden justify-between items-center w-full py-4 text-left" 
              onClick={() => toggleAccordion('connect')}
            >
              <h4 className="text-white/50 text-xs font-mono tracking-widest uppercase">{t("footer.connect")}</h4>
              <span className="text-white/50 text-xl font-mono">{openAccordion === 'connect' ? '−' : '+'}</span>
            </button>
            <h4 className="hidden md:block text-white/50 text-xs font-mono tracking-widest uppercase mb-5">{t("footer.connect")}</h4>
            <div className={`flex-col gap-4 pb-4 md:pb-0 ${openAccordion === 'connect' ? 'flex' : 'hidden md:flex'}`}>
              <a href="tel:+994555945100" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">+994 55 594 51 00</a>
              <a href="mailto:support@codfy.tech" className="text-white text-base font-bold hover:text-[#f5ca6b] hover:translate-x-2 transition-all">support@codfy.tech</a>
              
              <div className="flex items-center gap-3 mt-2">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#f5ca6b] hover:text-[#1a1a1a] hover:border-[#f5ca6b] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#f5ca6b] hover:text-[#1a1a1a] hover:border-[#f5ca6b] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#f5ca6b] hover:text-[#1a1a1a] hover:border-[#f5ca6b] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom: Copyright & Legal */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image 
              src="/images/logo-transparent.png" 
              alt="CODFY" 
              width={70} 
              height={22} 
              className="object-contain invert brightness-0" 
            />
            <span className="text-white/50 text-xs font-medium mt-1">{t("footer.rightsReserved")}</span>
          </div>
          
          <div className="flex items-center gap-6 text-xs font-bold text-white/70">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">{t("footer.privacyPolicy")}</Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">{t("footer.termsOfService")}</Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}
