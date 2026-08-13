"use client";

import { FooterCardSection } from "@/components/sections/FooterCardSection";
import { PortfolioPageClientGrid } from "@/components/sections/PortfolioPageClientGrid";
import { useLanguage } from "@/context/LanguageContext";

const projects = [
  {
    title: "GEOWORKS | MARKAERBETE",
    tags: ["uxDesign", "uiDesign", "webDev", "techSupport"],
    href: "https://www.geoworks.se/",
    image: "/images/geoworks.png",
  },
  {
    title: "EVRIKA LİSEYİ",
    tags: ["webDev", "uxDesign", "uiDesign", "crm"],
    href: "https://evrikaliseyi.edu.az/",
    image: "/images/evrika.png",
  },
  {
    title: "JMB BRICK CO.",
    tags: ["uxDesign", "uiDesign", "webDev", "eCommerce"],
    href: "https://www.jmbbrickco.com/",
    image: "/images/jmb.png",
  },
  {
    title: "BIRMILYONYAPRAK",
    tags: ["uxDesign", "uiDesign", "shopify", "techSupport"],
    href: "https://birmilyonyaprak.com/",
    image: "/images/birmilyonyaprak.png",
  },
  {
    title: "HÜQUQ AI",
    tags: ["aiAutomation", "uxDesign", "uiDesign", "webDev"],
    href: "https://www.huquqai.az/chat",
    image: "/images/huquq.png",
  },
  {
    title: "LOVABLE",
    tags: ["motionDesign", "threeDAnimation", "afterEffects"],
    href: "",
    image: null,
    video: "https://player.vimeo.com/video/1217051084?autoplay=1",
    vimeoId: "1217051084",
    coverGif: "/images/lovable-cover.gif"
  },
  {
    title: "CLAUDE",
    tags: ["motionDesign", "threeDAnimation", "afterEffects"],
    href: "",
    image: null,
    video: "https://player.vimeo.com/video/1217051085?autoplay=1",
    vimeoId: "1217051085",
    coverGif: "/images/claude-cover.gif"
  },
  {
    title: "LINDY",
    tags: ["motionDesign", "threeDAnimation", "afterEffects"],
    href: "",
    image: null,
    video: "https://player.vimeo.com/video/1217051081?autoplay=1",
    vimeoId: "1217051081",
    coverGif: "/images/lindy-cover.gif"
  },
  {
    title: "SUPERGENT",
    tags: ["motionDesign", "threeDAnimation", "afterEffects"],
    href: "",
    image: null,
    video: "https://player.vimeo.com/video/1217051081?autoplay=1",
    vimeoId: "1217051081",
    coverGif: "/images/supergent-cover.gif"
  },
  {
    title: "ASRALI",
    tags: ["webDev", "techSupport", "erp", "crm"],
    href: "https://asrali.com/",
    image: "/images/asrali.png",
  },
];

export default function PortfolioPage() {
  const { t } = useLanguage();
  return (
    <div className="w-full bg-transparent text-black min-h-screen pt-20 md:pt-28 pb-0 overflow-hidden font-[family-name:var(--font-geist-sans)] selection:bg-[#f4c660] selection:text-black">
      
      {/* Header Section */}
      <div className="max-w-[1800px] w-full mx-auto px-6 md:px-12 mb-16 md:mb-24 relative z-30">
        <h1 className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[6.5rem] font-black tracking-tighter mb-2 uppercase text-[#050505] leading-[0.85] whitespace-nowrap">
          {t("portfolio.selected")} <br className="md:hidden" /> <span className="inline-block transition-transform duration-700 hover:[transform:rotateX(360deg)] hover:text-[#f4c660] cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>{t("portfolio.works")}</span><span className="text-[#f4c660]">.</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-[1.5rem] text-slate-600 max-w-sm lg:max-w-xl font-light tracking-tight leading-[1.3] uppercase mt-4">
          {t("portfolio.desc")}
        </p>
      </div>

      {/* Modern Image Grid */}
      <div className="w-full max-w-[1800px] mx-auto px-6 md:px-12 mb-32">
        <PortfolioPageClientGrid projects={projects} />
      </div>

      {/* Global Newsletter / Footer Card */}
      <div className="w-full">
        <FooterCardSection />
      </div>

    </div>
  );
}
