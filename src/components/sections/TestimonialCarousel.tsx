"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Codfy completely transformed our digital presence. Their attention to detail and engineering quality is unmatched in the industry.",
    author: "Sarah Jenkins",
    role: "CTO, TechCorp",
  },
  {
    quote: "The ERP system they built saved us thousands of hours in manual data entry. Truly a world-class team that delivers on their promises.",
    author: "Michael Chang",
    role: "Operations Director, Global Finance",
  },
  {
    quote: "Working with Codfy felt like having an elite in-house development team. Their UI/UX design is just as good as their code.",
    author: "Elena Rodriguez",
    role: "Founder, Innovate AI",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-400 tracking-wider uppercase mb-4">Client Success</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Don&apos;t Just Take Our Word For It
          </h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute top-0 left-0 text-blue-500/10 w-32 h-32 -translate-x-12 -translate-y-12 pointer-events-none">
            <Quote className="w-full h-full" />
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-16 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-xl md:text-3xl font-medium text-slate-900 leading-relaxed mb-10">
                  &quot;{testimonials[currentIndex].quote}&quot;
                </p>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-1">{testimonials[currentIndex].author}</h4>
                  <p className="text-blue-600 text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentIndex ? "bg-blue-600" : "bg-slate-200"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
