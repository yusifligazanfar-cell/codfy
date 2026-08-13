"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted or rejected cookies
    const consent = localStorage.getItem("codfy_cookie_consent");
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("codfy_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("codfy_cookie_consent", "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 w-full md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:w-[90%] md:max-w-6xl z-[200] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 bg-[#f4c660] border-t-2 md:border-2 border-[#050505] shadow-[0px_-8px_24px_rgba(0,0,0,0.1)] md:shadow-[8px_8px_0px_0px_rgba(5,5,5,1)] p-4 md:px-8 md:py-6 rounded-t-3xl md:rounded-3xl"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 rounded-full bg-[#050505] flex items-center justify-center shrink-0 hidden sm:flex">
              <Cookie className="w-6 h-6 text-[#f4c660]" />
            </div>
            <div>
              <h3 className="font-black text-lg md:text-xl uppercase tracking-tight text-[#050505] font-geist leading-none mb-1">
                COOKIE PREFERENCES
              </h3>
              <p className="text-xs md:text-sm text-[#050505]/80 font-bold leading-relaxed max-w-2xl">
                WE USE COOKIES TO ENHANCE YOUR EXPERIENCE, SERVE PERSONALIZED CONTENT, AND ANALYZE OUR TRAFFIC. 
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <button 
              onClick={handleDecline}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl border-2 border-[#050505] text-[#050505] text-sm font-black uppercase tracking-wider hover:bg-[#050505] hover:text-[#f4c660] transition-colors"
            >
              DECLINE
            </button>
            <button 
              onClick={handleAccept}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl bg-[#050505] border-2 border-[#050505] text-[#f4c660] text-sm font-black uppercase tracking-wider hover:bg-white hover:text-[#050505] hover:border-white transition-colors shadow-sm"
            >
              ACCEPT ALL
            </button>
            <button 
              onClick={handleDecline}
              className="hidden md:flex ml-2 text-[#050505]/40 hover:text-[#050505] transition-colors p-2 rounded-full hover:bg-white/20"
              aria-label="Close"
            >
              <X className="w-6 h-6 stroke-[3]" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
