"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Database, Layout } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob" />
      <div className="absolute top-1/3 -right-10 w-72 h-72 bg-cyan-400/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div 
          className="relative w-full h-full min-h-[calc(100vh-8rem)] max-w-[1440px] mx-auto flex flex-col justify-between text-center gap-8 pt-[3rem] px-[1rem] pb-[1rem] md:pt-[2.5rem] md:px-[1.5rem] md:pb-[1.5rem] lg:pt-[4.5rem] lg:pr-[2.25rem] lg:pb-[2rem] lg:pl-[2.5rem]"
          style={{
            backgroundImage: "url('https://cdn.prod.website-files.com/63f38a8c92397a024fcb9ae8/64783f450dfdcf02d859f1c0_bg-card-hero_laptop.webp')",
            backgroundPosition: "0 0",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%"
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 text-sm font-medium text-white/80"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-[7rem] font-medium tracking-tight mb-8 uppercase leading-[0.9]"
          >
            {t("hero.titlePart1")} <span className="text-[#fdc448]">{t("hero.titlePart2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-[#02021e] transition-all duration-300 bg-white rounded-full hover:bg-white/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full sm:w-auto uppercase tracking-wide"
            >
              {t("hero.bookCall")}
              <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements (Desktop only) */}
      <div className="hidden lg:block absolute inset-0 pointer-events-none">
        <FloatingIcon icon={<Code2 className="w-8 h-8 text-blue-400" />} top="20%" left="15%" delay={0} />
        <FloatingIcon icon={<Database className="w-8 h-8 text-cyan-400" />} top="60%" left="10%" delay={1} />
        <FloatingIcon icon={<Layout className="w-8 h-8 text-purple-400" />} top="30%" right="15%" delay={2} />
      </div>
    </section>
  );
}

function FloatingIcon({ icon, top, left, right, delay }: { icon: React.ReactNode, top: string, left?: string, right?: string, delay: number }) {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-15, 15, -15] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
      className="absolute glass p-4 rounded-2xl"
      style={{ top, left, right }}
    >
      {icon}
    </motion.div>
  );
}
