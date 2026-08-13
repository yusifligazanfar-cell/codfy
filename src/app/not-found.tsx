"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="flex-grow flex items-center justify-center pt-12 pb-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-200/40 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-[150px] md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-400 leading-none mb-4 font-geist">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-900 mb-6">
            Page Not Found
          </h2>
          <p className="text-slate-600 text-lg max-w-md mx-auto mb-10">
            The page you are looking for doesn&apos;t exist or has been moved. 
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-blue-500 rounded-full hover:bg-blue-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
