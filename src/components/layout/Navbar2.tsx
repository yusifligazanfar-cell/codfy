"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 
        ULTRA-MODERN AGENCY HEADER
        Minimalist. Only Logo and Menu button. 
        Uses mix-blend-difference so it dynamically contrasts with the page.
      */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 flex items-start justify-between mix-blend-difference pointer-events-none">
        
        {/* Logo */}
        <div className="pointer-events-auto">
          <Link href="/" className="relative block h-[24px] w-[90px] md:h-[30px] md:w-[110px] hover:opacity-70 transition-opacity">
            <Image 
              src="/images/footer-screenshot.png"
              alt="Codfy Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* Right Side: Start Project & Menu */}
        <div className="pointer-events-auto flex items-center gap-8">
          <Link 
            href="/contact"
            className="hidden md:block text-[12px] font-black uppercase tracking-[0.2em] text-white hover:text-[#f4c660] transition-colors"
          >
            Start Project
          </Link>
          
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="group flex flex-col items-end gap-[5px] hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white mb-1">
              {menuOpen ? "Close" : "Menu"}
            </span>
            <div className={`h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-8 rotate-45 translate-y-[7px]' : 'w-8 group-hover:w-10'}`} />
            <div className={`h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'w-8 -rotate-45' : 'w-6 group-hover:w-10'}`} />
          </button>
        </div>
      </header>

      {/* FULLSCREEN MASSIVE OVERLAY MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center px-6 md:px-24 pt-24 pb-12 overflow-hidden"
          >
            {/* Giant Background Text Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
              CODFY
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between h-full relative z-10 w-full max-w-7xl mx-auto gap-12">
              
              {/* Massive Navigation Links */}
              <nav className="flex flex-col gap-2 md:gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-center gap-6"
                    >
                      <span className="text-white/20 font-mono text-sm md:text-lg group-hover:text-[#f4c660] transition-colors">
                        0{i + 1}
                      </span>
                      <span className="text-[3rem] sm:text-[5rem] md:text-[6rem] lg:text-[8rem] font-black text-white uppercase tracking-tighter leading-none group-hover:text-[#f4c660] group-hover:translate-x-4 transition-all duration-500">
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
                className="flex flex-col gap-12 text-white/60"
              >
                <div className="flex flex-col gap-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">Get in touch</h4>
                  <a href="mailto:support@codfy.tech" className="text-xl md:text-3xl font-black text-white hover:text-[#f4c660] transition-colors">support@codfy.tech</a>
                  <a href="tel:+994555945100" className="text-lg md:text-xl font-bold hover:text-white transition-colors">+994 55 594 51 00</a>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 mb-2">Socials</h4>
                  <div className="flex gap-6">
                    <a href="https://www.instagram.com/codfy.tech?igsh=MXJ2endnNDVpb2kwOQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">Twitter</a>
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
