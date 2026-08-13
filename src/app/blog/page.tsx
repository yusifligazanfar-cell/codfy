import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | CODFY",
  description: "Insights, engineering deep dives, and company news from the Codfy team.",
};

const posts = [
  {
    title: "The Future of Web Development with Next.js 15",
    category: "Engineering",
    date: "Oct 24, 2026",
    excerpt: "Exploring the new features in Next.js 15 and how server components are changing the frontend landscape.",
    imageColor: "from-blue-600 to-indigo-600",
  },
  {
    title: "Designing for Dark Mode: Beyond Inverting Colors",
    category: "Design",
    date: "Sep 12, 2026",
    excerpt: "A comprehensive guide to creating accessible, aesthetic, and premium dark mode experiences.",
    imageColor: "from-purple-600 to-pink-600",
  },
  {
    title: "Migrating from REST to GraphQL in Enterprise Apps",
    category: "Architecture",
    date: "Aug 05, 2026",
    excerpt: "Lessons learned from migrating a multi-million user application from REST to GraphQL.",
    imageColor: "from-emerald-600 to-teal-600",
  },
  {
    title: "State Management in React: A 2026 Perspective",
    category: "Engineering",
    date: "Jul 18, 2026",
    excerpt: "Comparing Zustand, Jotai, Redux Toolkit, and built-in React Context for modern applications.",
    imageColor: "from-orange-600 to-red-600",
  },
];

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-200/40 blur-[150px] rounded-full pointer-events-none" />
        <div className="container mx-auto px-6 text-center max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900">Insights & Engineering</h1>
          <p className="text-xl text-slate-600">
            Thoughts, tutorials, and insights from our team of designers and developers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <Link key={index} href={`#`} className="group block h-full">
              <div className="glass-card rounded-3xl overflow-hidden border border-slate-200 group-hover:border-blue-300 transition-all duration-300 h-full flex flex-col group-hover:-translate-y-2">
                
                <div className={`h-48 bg-gradient-to-br ${post.imageColor} relative overflow-hidden`}>
                   <div className="absolute inset-0 bg-black/10" />
                   {/* Decorative pattern could go here */}
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-slate-500 text-sm">{post.date}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-slate-900 font-medium text-sm group-hover:text-blue-600 transition-colors mt-auto">
                    Read Article 
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
