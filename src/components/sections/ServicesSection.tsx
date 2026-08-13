"use client";

import { ServiceCard } from "@/components/ui/ServiceCard";
import { Monitor, Smartphone, Cpu, Cloud, Paintbrush, Database } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description: "High-performance, responsive web applications built with modern frameworks like React, Next.js, and Node.js.",
    icon: Monitor,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile experiences for iOS and Android using Flutter and React Native.",
    icon: Smartphone,
  },
  {
    title: "AI Solutions",
    description: "Intelligent automation and machine learning integrations to give your business a competitive edge.",
    icon: Cpu,
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable, secure, and reliable cloud architectures deployed on AWS, Google Cloud, or Azure.",
    icon: Cloud,
  },
  {
    title: "UI/UX Design",
    description: "User-centric design that combines aesthetics with intuitive functionality to maximize engagement.",
    icon: Paintbrush,
  },
  {
    title: "Enterprise Systems",
    description: "Custom ERP and CRM solutions tailored to streamline your complex business operations.",
    icon: Database,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-4">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
            Engineering Excellence
          </h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            From visionary startups to Fortune 500 enterprises, we deliver end-to-end digital solutions that solve real-world problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
