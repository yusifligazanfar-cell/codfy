"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface VideoModalProps {
  isOpen: boolean;
  videoSrc: string | null;
  onClose: () => void;
}

export function VideoModal({ isOpen, videoSrc, onClose }: VideoModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const modalContent = (
    <AnimatePresence>
      {isOpen && videoSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black p-4 md:p-12"
          onClick={onClose}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-[#f4c660] transition-colors z-50 group"
          >
            <X className="w-6 h-6 text-black group-hover:rotate-90 transition-transform duration-300" />
          </button>

          {/* Video Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {videoSrc.includes("vimeo.com") ? (
              <iframe 
                src={videoSrc}
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              />
            ) : (
              <video 
                src={videoSrc}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;
  return createPortal(modalContent, document.body);
}
