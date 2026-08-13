"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, CheckCircle, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and technical requirements to form a bulletproof strategy.",
    icon: Search,
  },
  {
    id: "02",
    title: "Design & Prototyping",
    description: "Our designers craft intuitive, pixel-perfect user interfaces and interactive prototypes for your approval.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Development",
    description: "We build scalable, secure architecture using modern tech stacks, following best practices and agile methodologies.",
    icon: Code,
  },
  {
    id: "04",
    title: "QA & Testing",
    description: "Rigorous automated and manual testing ensures your product is bug-free, fast, and works flawlessly across all devices.",
    icon: CheckCircle,
  },
  {
    id: "05",
    title: "Deployment",
    description: "Smooth sailing to production. We manage the cloud infrastructure, CI/CD pipelines, and app store submissions.",
    icon: Rocket,
  },
  {
    id: "06",
    title: "Support & Scaling",
    description: "Post-launch monitoring, maintenance, and feature iterations to ensure long-term success.",
    icon: HeartHandshake,
  },
];

export function ProcessTimeline() {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-sm font-semibold text-cyan-400 tracking-wider uppercase mb-4">How We Work</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            A Proven Process for Success
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Transparency, communication, and agility are at the core of our methodology.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-[#050914] border-4 border-blue-500 md:-translate-x-1/2 mt-1 md:mt-0 z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
                  
                  {/* Content Box */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16 text-left md:text-right"}`}>
                    <div className="glass-card p-6 md:p-8 rounded-2xl relative group hover:border-blue-500/30 transition-colors">
                      <div className={`text-blue-500/20 font-geist font-bold text-5xl absolute top-4 ${isEven ? "right-6" : "left-6 md:right-6 md:left-auto"}`}>
                        {step.id}
                      </div>
                      
                      <div className={`w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 relative z-10 ${!isEven && "md:ml-auto"}`}>
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      
                      <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">{step.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
