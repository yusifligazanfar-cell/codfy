"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export function AnimatedCounter({ value, suffix = "", prefix = "", label }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const incrementTime = (duration / end) * 2;

      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 font-geist">
        {prefix}{count}{suffix}
      </div>
      <div className="text-slate-500 text-sm tracking-wide uppercase">{label}</div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="py-20 border-y border-slate-200 bg-slate-50/50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter value={150} suffix="+" label="Projects Delivered" />
          <AnimatedCounter value={99} suffix="%" label="Client Satisfaction" />
          <AnimatedCounter value={10} suffix="+" label="Awards Won" />
          <AnimatedCounter value={50} suffix="M+" prefix="$" label="Revenue Generated" />
        </div>
      </div>
    </section>
  );
}
