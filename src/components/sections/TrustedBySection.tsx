"use client";

import React from "react";
import { 
  Layers, 
  CircleDashed, 
  Globe2 
} from "lucide-react";

const BRANDS = [
  { name: "NOKIA", icon: null, type: "nokia" },
  { name: "Bumble", icon: Layers, type: "bumble" },
  { name: "Schibsted", icon: CircleDashed, type: "schibsted" },
  { name: "Opera", icon: null, type: "opera" },
  { name: "Bonterra", icon: Globe2, type: "bonterra" },
  { name: "zoom", icon: null, type: "zoom" },
];

const BrandLogo = ({ brand }: { brand: any }) => {
  if (brand.type === "nokia") {
    return <div className="text-slate-800 font-sans font-black text-4xl tracking-[0.2em]">{brand.name}</div>;
  }
  if (brand.type === "opera") {
    return (
      <div className="flex items-center gap-2 text-slate-800 font-sans text-3xl tracking-tight">
        <div className="w-10 h-10 rounded-full border-[4px] border-slate-800 flex items-center justify-center">
          <div className="w-8 h-10 rounded-full border-l-[4px] border-slate-800 -ml-1"></div>
        </div>
        Opera
      </div>
    );
  }
  if (brand.type === "zoom") {
    return <div className="text-slate-800 font-sans font-extrabold text-4xl tracking-tighter lowercase">{brand.name}</div>;
  }
  
  // Default with icon
  const fontClass = brand.type === "schibsted" ? "font-serif font-bold tracking-tight" : "font-sans font-bold";
  return (
    <div className={`flex items-center gap-2 text-slate-800 text-3xl ${fontClass}`}>
      <brand.icon className="w-9 h-9" />
      {brand.name}
    </div>
  );
};

export default function TrustedBySection() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* The Box */}
        <fieldset className="relative border-2 border-[#fdc448] rounded-[2rem] px-10 pb-8 pt-6 flex items-center justify-center transition-colors duration-300">
          
          <legend className="block text-slate-500 text-[13px] sm:text-sm font-medium tracking-wide px-6 mx-auto text-center whitespace-nowrap">
            Trusted by global brands & SMBs in the US and Europe
          </legend>

          {/* Logos Container */}
          <div className="w-full flex items-center justify-between gap-8 md:gap-12 overflow-x-auto no-scrollbar">
            {BRANDS.map((brand, idx) => (
              <div key={idx} className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300 cursor-pointer">
                <BrandLogo brand={brand} />
              </div>
            ))}
          </div>

        </fieldset>

      </div>
    </section>
  );
}
