"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Social Icons SVGs (Lucide removed branded icons)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const { activeLang, setActiveLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const ALL_LINKS = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.services"), href: "/services" },
    { name: t("nav.portfolio"), href: "/portfolio" },
    { name: t("nav.about"), href: "/about" },
    { name: t("nav.contact"), href: "/contact" },
  ];

  const displayLinks = ALL_LINKS.filter(link => {
    if (pathname === "/" && link.href === "/") return false;
    if (pathname !== "/" && link.href === pathname) return false;
    return true;
  });

  const [scrollDirection, setScrollDirection] = useState("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      {/* 
        SMART BRUTALIST HEADER
        - Matches the massive menu perfectly (full width).
        - ALWAYS hides when scrolled.
        - Only appears at the very top, or when the MENU IS OPEN.
      */}
      <header 
        className={`fixed left-0 right-0 z-[100] w-full flex items-center justify-between px-6 md:px-12 pointer-events-auto transition-all duration-500 ease-out py-8 bg-transparent ${
          isScrolled && !menuOpen ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        
        {/* Left Side: Socials */}
        <div className={`flex-1 flex items-center justify-start gap-4 md:gap-6 transition-opacity duration-300 ${menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <div className="hidden md:flex items-center gap-4 md:gap-6">
            <a href="https://www.instagram.com/codfy.tech?igsh=MXJ2endnNDVpb2kwOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className={`transition-all hover:scale-110 duration-300 ${isScrolled ? "text-white hover:text-[#f4c660]" : "text-black hover:text-black/50"}`}>
              <InstagramIcon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="#" className={`transition-all hover:scale-110 duration-300 ${isScrolled ? "text-white hover:text-[#f4c660]" : "text-black hover:text-black/50"}`}>
              <LinkedinIcon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a href="#" className={`transition-all hover:scale-110 duration-300 ${isScrolled ? "text-white hover:text-[#f4c660]" : "text-black hover:text-black/50"}`}>
              <TwitterIcon className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex items-center justify-center">
          <Link href="/" className="relative block h-[24px] w-[90px] md:h-[30px] md:w-[110px] hover:opacity-70 transition-transform hover:scale-105" onClick={() => setMenuOpen(false)}>
            <Image 
              src="/images/logo-transparent.png"
              alt="Codfy Logo"
              fill
              className={`object-contain object-center transition-all duration-500 ${
                isScrolled || menuOpen ? "invert-0" : "invert"
              }`}
              priority
            />
          </Link>
        </div>

        {/* Right Side: Lang, Start Project & Menu */}
        <div className="flex-1 flex items-center justify-end gap-3 md:gap-8">
          
          {/* Language Switcher (Editorial Dot Indicator) */}
          <div className="flex items-center gap-2 sm:gap-4 mr-2 sm:mr-8 text-[12px] sm:text-[14px] font-bold tracking-tighter uppercase">
            {(['AZ', 'EN', 'RU'] as const).map((lang) => (
              <button 
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`relative transition-colors duration-300 ${
                  lang === activeLang 
                    ? (isScrolled || menuOpen ? 'text-[#f4c660]' : 'text-black')
                    : (isScrolled || menuOpen ? 'text-white/30 hover:text-white' : 'text-black/30 hover:text-black')
                }`}
              >
                {/* Notification/Active Dot */}
                {lang === activeLang && (
                  <span className={`absolute -top-[2px] -right-[6px] w-[4px] h-[4px] rounded-full animate-pulse ${
                    isScrolled || menuOpen ? 'bg-white' : 'bg-[#f4c660]'
                  }`} />
                )}
                {lang}
              </button>
            ))}
          </div>

          {/* Start Project (Rolling Ticker Button) */}
          <Link 
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`hidden md:flex flex-col overflow-hidden h-[38px] w-[160px] rounded-full border transition-all duration-500 group ${
              isScrolled || menuOpen ? "border-white/20" : "border-black/20 hover:border-black"
            }`}
          >
            <div className="flex flex-col w-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-[38px]">
              <span className={`h-[38px] flex items-center justify-center text-[11px] font-black uppercase tracking-widest ${
                isScrolled || menuOpen ? "text-white" : "text-black"
              }`}>{t("nav.startProject")}</span>
              <span className={`h-[38px] flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest ${
                isScrolled || menuOpen ? "bg-[#f4c660] text-black" : "bg-black text-white"
              }`}>
                {t("nav.letsTalk")} <span className="text-[14px]">↗</span>
              </span>
            </div>
          </Link>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="group flex flex-col items-end justify-center gap-[6px] w-10 h-10 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <div className={`h-[2px] transition-all duration-300 ${isScrolled || menuOpen ? 'bg-white' : 'bg-black'} ${menuOpen ? 'w-8 rotate-45 translate-y-[4px]' : 'w-8 group-hover:w-10'}`} />
            <div className={`h-[2px] transition-all duration-300 ${isScrolled || menuOpen ? 'bg-white' : 'bg-black'} ${menuOpen ? 'w-8 -rotate-45 -translate-y-[4px]' : 'w-6 group-hover:w-10'}`} />
          </button>
        </div>
      </header>

      {/* 
        FLOATING MENU PEEK
        Appears from the right edge WHENEVER scrolled (since main navbar is hidden)
      */}
      <div 
        className={`fixed top-8 right-0 z-[90] transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] flex items-center justify-center bg-[#000000] border-y border-l border-white/10 rounded-l-full pl-6 pr-4 py-4 shadow-2xl ${
          isScrolled && !menuOpen
            ? "translate-x-0" 
            : "translate-x-[120%]"
        }`}
      >
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="group flex flex-col items-end justify-center gap-[6px] w-8 h-8 hover:opacity-70 transition-opacity"
          aria-label="Toggle menu"
        >
          <div className="h-[2px] bg-white transition-all duration-300 w-8 group-hover:w-10" />
          <div className="h-[2px] bg-white transition-all duration-300 w-6 group-hover:w-10" />
        </button>
      </div>

      {/* FULLSCREEN MASSIVE OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.2, ease: "easeIn" } }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-start md:justify-center px-6 md:px-24 pt-24 pb-12 overflow-y-auto"
          >
            {/* Giant Background Text Watermark */}
            <div className="fixed md:absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
              CODFY
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-start md:justify-between h-auto md:h-full relative z-10 w-full max-w-7xl mx-auto gap-12 mt-4 md:mt-0 pb-12 md:pb-0">
              
              {/* Massive Navigation Links */}
              <nav className="flex flex-col gap-2 md:gap-4">
                {displayLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <Link
                      href={link.href}
                      prefetch={true}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center gap-4 md:gap-6"
                    >
                      <span className="text-white/20 font-mono text-xs md:text-sm lg:text-lg group-hover:text-[#f4c660] transition-colors">
                        0{i + 1}
                      </span>
                      <span className="text-[2.5rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-black text-white uppercase tracking-tighter leading-none group-hover:text-[#f4c660] group-hover:translate-x-2 md:group-hover:translate-x-4 transition-all duration-500">
                        {link.name}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Right Side Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col gap-12 text-white/60 mt-8 md:mt-0"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">{t("nav.getInTouch")}</h4>
                  <a href="mailto:support@codfy.tech" className="text-xl md:text-3xl font-black text-white hover:text-[#f4c660] transition-colors">support@codfy.tech</a>
                  <a href="tel:+994555945100" className="text-lg md:text-xl font-bold hover:text-white transition-colors">+994 55 594 51 00</a>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">{t("nav.socials")}</h4>
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-8">
                    <a href="https://www.instagram.com/codfy.tech?igsh=MXJ2endnNDVpb2kwOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-[#f4c660] transition-colors">
                      <InstagramIcon className="w-5 h-5" />
                      <span>Instagram</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-[#f4c660] transition-colors">
                      <LinkedinIcon className="w-5 h-5" />
                      <span>LinkedIn</span>
                    </a>
                    <a href="#" className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest hover:text-[#f4c660] transition-colors">
                      <TwitterIcon className="w-5 h-5" />
                      <span>Twitter</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
