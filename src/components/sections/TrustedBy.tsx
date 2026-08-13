"use client";

import { motion } from "framer-motion";

const clients = [
  { name: "TechCorp", logo: "TechCorp" },
  { name: "Innovate AI", logo: "Innovate AI" },
  { name: "Global Finance", logo: "Global Finance" },
  { name: "Stellar Cloud", logo: "Stellar Cloud" },
  { name: "Nexus Health", logo: "Nexus Health" },
  { name: "Quantum Data", logo: "Quantum Data" },
];

export function TrustedBy() {
  return (
    <section className="py-20 border-y border-slate-200 bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <p className="text-center text-sm font-semibold text-slate-500 tracking-wider uppercase mb-10">
          Trusted by innovative companies worldwide
        </p>
        
        <div className="relative flex overflow-hidden group">
          <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-slate-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-slate-50 to-transparent z-10" />

          {/* Marquee track */}
          <motion.div
            className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          >
            {/* Double the array for seamless looping */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity grayscale hover:grayscale-0"
              >
                <span className="text-2xl font-bold font-geist text-slate-600">{client.logo}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
