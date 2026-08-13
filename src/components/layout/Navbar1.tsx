"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 
        Ultra-Modern Navbar using mix-blend-difference.
        This makes the white text automatically invert the background color behind it.
        It perfectly adapts to light (Hero) and dark (Footer/CTA) sections seamlessly!
      */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 flex items-center justify-between mix-blend-difference pointer-events-none">
        
        {/* Logo - The black background of the image does nothing in difference blend, while the white text inverts the background! */}
        <Link href="/" className="pointer-events-auto relative h-[24px] w-[90px] md:h-[30px] md:w-[110px] group transition-transform duration-500 hover:scale-105">
          <Image 
            src="/images/footer-screenshot.png"
            alt="Codfy Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="pointer-events-auto text-[12px] md:text-[14px] font-black text-white uppercase tracking-[0.25em] hover:opacity-50 transition-opacity duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="pointer-events-auto text-[12px] md:text-[14px] font-black text-white uppercase tracking-[0.25em] transition-all duration-300 relative group overflow-hidden flex items-center gap-2"
          >
            <span>Start Project</span>
            <div className="w-8 h-[2px] bg-white transform origin-left transition-transform duration-500 group-hover:scale-x-150" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="pointer-events-auto md:hidden text-white hover:opacity-50 transition-opacity"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </header>

      {/* Mobile Nav Overlay (Not mix-blend-difference, just standard overlay) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-4xl font-black text-white hover:text-[#f4c660] transition-colors uppercase tracking-tighter"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-bold text-[#050505] bg-[#f4c660] px-10 py-4 rounded-full uppercase tracking-widest"
                >
                  START PROJECT
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
