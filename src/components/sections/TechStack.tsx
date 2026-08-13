"use client";

import { motion } from "framer-motion";

const technologies = [
  { category: "Frontend", items: ["React", "Next.js", "Vue", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "Spring Boot", "Laravel", "Go"] },
  { category: "Mobile", items: ["Flutter", "React Native", "Swift", "Kotlin"] },
  { category: "Infrastructure", items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel"] },
  { category: "Database", items: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "MySQL"] },
];

export function TechStack() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-purple-400 tracking-wider uppercase mb-4">Modern Stack</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Built with the Best Technologies
          </h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We use a curated selection of modern, battle-tested tools to ensure performance, security, and scalability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl"
            >
              <h4 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                {tech.category}
              </h4>
              <div className="flex flex-wrap gap-3">
                {tech.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-lg bg-white border border-slate-200 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
