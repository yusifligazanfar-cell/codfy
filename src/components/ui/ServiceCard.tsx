"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href?: string;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, href = "/services", delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="group"
    >
      <Link href={href} className="block h-full">
        <div className="h-full glass-card rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30">
          
          {/* Hover Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <Icon className="w-7 h-7 text-blue-400" />
            </div>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{title}</h3>
            
            <p className="text-slate-600 text-sm leading-relaxed mb-6 group-hover:text-slate-900 transition-colors">
              {description}
            </p>
            
            <div className="flex items-center text-blue-400 font-medium text-sm group-hover:text-blue-300">
              Learn more 
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
