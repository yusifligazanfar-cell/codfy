"use client";

import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, Line, Graticule } from "react-simple-maps";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const MARKERS = [
  { name: "USA", coordinates: [-95.7129, 37.0902] as [number, number], flag: "🇺🇸", offset: -120 },
  { name: "UK", coordinates: [-3.4360, 55.3781] as [number, number], flag: "🇬🇧", offset: -150 },
  { name: "Sweden", coordinates: [18.6435, 60.1282] as [number, number], flag: "🇸🇪", offset: -120 },
  { name: "Germany", coordinates: [10.4515, 51.1657] as [number, number], flag: "🇩🇪", offset: -100 },
  { name: "Turkey", coordinates: [35.2433, 38.9637] as [number, number], flag: "🇹🇷", offset: 120 },
  { name: "UAE", coordinates: [53.8478, 23.4241] as [number, number], flag: "🇦🇪", offset: 120 },
  { name: "Russia", coordinates: [105.3188, 61.5240] as [number, number], flag: "🇷🇺", offset: -120 },
  { name: "Azerbaijan", coordinates: [47.5769, 40.1431] as [number, number], flag: "🇦🇿", offset: -150 }, // Hub
];

const HUB = [47.5769, 40.1431] as [number, number]; // Azerbaijan

export function GlobalMapSection() {
  const [mounted, setMounted] = useState(false);
  const { t, activeLang } = useLanguage();

  // Mouse tracking for dynamic gradient
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <section className="bg-transparent relative overflow-hidden h-auto w-full flex flex-col pt-24 pb-0">
      
      {/* Premium Modern Dot Grid Background Pattern */}
      <div 
        className="absolute inset-0 -z-40 pointer-events-none opacity-70"
        style={{
          backgroundImage: 'radial-gradient(#64748b 2px, transparent 2px)',
          backgroundSize: '32px 32px',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
          maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
        }}
      />

      {/* Subtle Blueprint Square Grid Background Pattern */}
      <div 
        className="absolute inset-0 -z-30 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(to right, #64748b 1px, transparent 1px), linear-gradient(to bottom, #64748b 1px, transparent 1px)',
          backgroundSize: '128px 128px',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)',
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 20%, transparent 100%)'
        }}
      />

      {/* Global Styles for Animations */}
      <style>{`
        @keyframes flow-data {
          to { stroke-dashoffset: -45; }
        }
        .flowing-line {
          animation: flow-data 1.5s linear infinite;
        }
      `}</style>
      
      {/* Interactive Cursor-Following Gradient */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
        }}
        className="fixed top-0 left-0 w-[600px] h-[600px] md:w-[1000px] md:h-[1000px] bg-gradient-to-tr from-blue-500/60 via-cyan-400/50 to-transparent rounded-full blur-[100px] pointer-events-none -z-20 -ml-[300px] -mt-[300px] md:-ml-[500px] md:-mt-[500px]"
      />
      
      {/* Title placed normally in the flow, but hovering over the map */}
      <div className="w-full max-w-[2400px] mx-auto px-4 sm:px-6 md:px-12 relative z-30 pointer-events-none">
        <h2 className={`font-black tracking-tighter mb-2 uppercase text-[#050505] leading-[0.9] md:leading-[0.85] flex flex-col md:block max-w-full break-words ${
          activeLang === 'EN' 
            ? 'text-[2rem] min-[375px]:text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[6rem] xl:text-[6.5rem]' 
            : 'text-2xl min-[375px]:text-3xl sm:text-4xl md:text-[5rem] lg:text-[6rem] xl:text-[6.5rem]'
        }`}>
          <span>{t("globalNetwork.global")}</span> <span className="inline-block transition-transform duration-700 hover:[transform:rotateX(360deg)] hover:text-[#f4c660] pointer-events-auto cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>{t("globalNetwork.network")}</span><span className="text-[#f4c660] hidden md:inline">.</span>
        </h2>
        <p className="text-sm min-[375px]:text-base sm:text-lg md:text-xl lg:text-[1.5rem] text-slate-600 max-w-[280px] sm:max-w-sm lg:max-w-xl font-light tracking-tight leading-[1.3] uppercase mt-2 md:mt-4 pointer-events-auto">
          {t("globalNetwork.desc")}
        </p>
      </div>

      {/* Massive Full-Width Map Container sliding up under the text and pulling up the section below */}
      <div className="w-full min-h-[450px] sm:min-h-[600px] md:min-h-[1200px] relative overflow-hidden flex items-center justify-center -mt-16 sm:-mt-32 md:-mt-64 -mb-8 md:-mb-24 z-10">
        
        {/* Soft, Subtle Yellow Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#f5ca6b]/20 rounded-full blur-[150px] -z-10 pointer-events-none" />

        {/* Massive Rotating Geometric Radar / Compass Ring */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[1800px] h-[1800px] -ml-[900px] -mt-[900px] rounded-full pointer-events-none -z-10 border-[2px] border-dashed border-slate-300 opacity-50"
        >
          <div className="absolute top-[10%] left-[10%] right-[10%] bottom-[10%] rounded-full border-[3px] border-dotted border-slate-300/50" />
          <div className="absolute top-[20%] left-[20%] right-[20%] bottom-[20%] rounded-full border-[1px] border-dashed border-[#f5ca6b]/40" />
          
          {/* Subtle Crosshairs */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-slate-300/50 -translate-x-1/2" />
          <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-slate-300/50 -translate-y-1/2" />
        </motion.div>

        {/* The Map wrapper statically centered and massive */}
        <div className="w-full max-w-[3200px] mx-auto h-full relative flex items-center justify-center">
          <ComposableMap
            projectionConfig={{
              scale: 650, // Massive scale
              center: [10, 25] // Safe center to prevent clipping
            }}
            width={3600} // Increased width to match scale and prevent side clipping
            height={2200} // Increased height to prevent top/bottom clipping
            className="origin-center object-cover md:object-contain"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="network-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5ca6b" />
                <stop offset="100%" stopColor="#DD3636" />
              </linearGradient>
            </defs>

            {/* Global Graticule (Lat/Long Grid overlaying the ocean) as a modern dense background pattern */}
            <Graticule step={[5, 5]} stroke="#94a3b8" strokeWidth={0.5} strokeDasharray="3 6" className="opacity-40" />

            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies
                  .filter((geo) => geo.id !== "010" && geo.properties?.name !== "Antarctica") // Safely filter out Antarctica
                  .map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#e2e8f0" 
                      stroke="#475569" 
                      strokeWidth={1.5}
                      style={{
                        default: { outline: "none", transition: "all 0.3s" },
                        hover: { fill: "#f4c660", stroke: "#050505", outline: "none", transition: "all 0.3s" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
              }
            </Geographies>

            {/* Colorful Network Connections */}
            {MARKERS.map(({ name, coordinates }) => {
              if (name === "Azerbaijan") return null; 
              return (
                <Line
                  key={`line-${name}`}
                  from={HUB}
                  to={coordinates}
                  stroke="url(#network-line)"
                  strokeWidth={8}
                  strokeLinecap="round"
                  strokeDasharray="20 25"
                  className="opacity-70 flowing-line"
                />
              );
            })}

            {/* Custom Modern Markers */}
            {MARKERS.map(({ name, coordinates, flag, offset }) => (
              <Marker key={name} coordinates={coordinates}>
                <g className="cursor-default">
                  
                  {/* Glowing Connection Hub Node */}
                  <circle 
                    r={80} 
                    fill="transparent" 
                    stroke={name === "Azerbaijan" ? "#DD3636" : "#fdc448"} 
                    strokeWidth={5} 
                    className="animate-ping opacity-30" 
                    style={{ animationDuration: '3s' }} 
                  />
                  
                  {/* Inner Colorful Node */}
                  <circle 
                    r={25} 
                    fill={name === "Azerbaijan" ? "#DD3636" : "#fdc448"} 
                    stroke="#ffffff" 
                    strokeWidth={8} 
                    className="drop-shadow-lg" 
                  />
                  
                  {/* Ultra-Modern Floating Flag Tag */}
                  <g transform={`translate(0, ${offset})`}>
                    <rect x="-120" y="-60" width="240" height="120" rx="60" fill="#ffffff" stroke="#fdc448" strokeWidth="5" className="drop-shadow-2xl" />
                    
                    <text
                      textAnchor="middle"
                      y="25"
                      style={{ 
                        fontFamily: "system-ui, -apple-system, sans-serif", 
                        fontSize: "70px",
                        pointerEvents: "none"
                      }}
                    >
                      {flag}
                    </text>
                  </g>
                  
                </g>
              </Marker>
            ))}
          </ComposableMap>
        </div>
      </div>
    </section>
  );
}
