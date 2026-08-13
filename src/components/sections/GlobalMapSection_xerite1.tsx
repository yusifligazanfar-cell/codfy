"use client";

import React, { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, Line } from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://unpkg.com/world-atlas@2.0.2/countries-110m.json";

const MARKERS = [
  { name: "USA", coordinates: [-95.7129, 37.0902] as [number, number], flag: "🇺🇸", offset: -35 },
  { name: "Ireland", coordinates: [-8.2439, 53.4129] as [number, number], flag: "🇮🇪", offset: -35 },
  { name: "Germany", coordinates: [10.4515, 51.1657] as [number, number], flag: "🇩🇪", offset: -35 },
  { name: "Azerbaijan", coordinates: [47.5769, 40.1431] as [number, number], flag: "🇦🇿", offset: 35 },
  { name: "Turkey", coordinates: [35.2433, 38.9637] as [number, number], flag: "🇹🇷", offset: 35 },
  { name: "UAE", coordinates: [53.8478, 23.4241] as [number, number], flag: "🇦🇪", offset: 35 },
  { name: "Russia", coordinates: [105.3188, 61.5240] as [number, number], flag: "🇷🇺", offset: -35 },
  { name: "Kazakhstan", coordinates: [66.9237, 48.0196] as [number, number], flag: "🇰🇿", offset: -35 },
];

const HUB = [47.5769, 40.1431] as [number, number]; // Azerbaijan

export function GlobalMapSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-transparent relative overflow-visible h-[100vh] w-[100vw] ml-[calc(50%-50vw)] flex items-center">
      
      {/* Absolute floating Title over the map */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 z-30 w-full px-4 text-center pointer-events-none">
        <h2 className="text-6xl md:text-8xl font-suisse font-black text-[#02021e] uppercase tracking-tighter relative inline-block">
          Global <span className="text-[#fdc448]">Network</span>
        </h2>
        <p className="mt-4 text-slate-500 text-xl md:text-2xl font-medium tracking-wide max-w-3xl mx-auto">
          We build digital products that drive growth across borders and continents.
        </p>
      </div>

      {/* Massive Full-Width Auto-Panning Map Container */}
      <div className="w-full h-full relative overflow-hidden flex items-center">
        
        {/* Colorful Abstract Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#fdc448]/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

        {/* The Map wrapper statically centered and massive */}
        <div className="w-full max-w-[2400px] mx-auto h-full relative flex items-center justify-center px-4 md:px-12">
          <ComposableMap
            projectionConfig={{
              scale: 350, 
              center: [0, 20] // Exact center so map is fully drawn
            }}
            width={2000}
            height={900}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          >
            <defs>
              <linearGradient id="network-line" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fdc448" />
                <stop offset="100%" stopColor="#DD3636" />
              </linearGradient>
            </defs>

            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill="#f8fafc" 
                    stroke="#cbd5e1" 
                    strokeWidth={1}
                    style={{
                      default: { outline: "none", transition: "all 0.3s" },
                      hover: { fill: "#fef3c7", outline: "none", transition: "all 0.3s" },
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
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeDasharray="6 8"
                  className="opacity-70"
                />
              );
            })}

            {/* Custom Modern Markers */}
            {MARKERS.map(({ name, coordinates, flag, offset }) => (
              <Marker key={name} coordinates={coordinates}>
                <g className="cursor-default">
                  
                  {/* Glowing Connection Hub Node */}
                  <circle 
                    r={20} 
                    fill="transparent" 
                    stroke={name === "Azerbaijan" ? "#DD3636" : "#fdc448"} 
                    strokeWidth={1.5} 
                    className="animate-ping opacity-30" 
                    style={{ animationDuration: '3s' }} 
                  />
                  
                  {/* Inner Colorful Node */}
                  <circle 
                    r={7} 
                    fill={name === "Azerbaijan" ? "#DD3636" : "#fdc448"} 
                    stroke="#ffffff" 
                    strokeWidth={2.5} 
                    className="drop-shadow-lg" 
                  />
                  
                  {/* Ultra-Modern Floating Flag Tag */}
                  <g transform={`translate(0, ${offset})`}>
                    <rect x="-35" y="-18" width="70" height="36" rx="18" fill="#ffffff" stroke="#fdc448" strokeWidth="1.5" className="drop-shadow-2xl" />
                    
                    <text
                      textAnchor="middle"
                      y="7"
                      style={{ 
                        fontFamily: "system-ui, -apple-system, sans-serif", 
                        fontSize: "22px",
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
