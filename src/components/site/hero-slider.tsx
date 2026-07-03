"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Replace these paths with your actual image paths in the public folder
const images = [
  "/heroimage1.png",
  "/heroimage2.png",
  "/heroimage3.png",
  "/heroimage4.png",
  "/heroimage5.png",
  "/heroimage6.png",
];

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200/50 dark:bg-slate-900/50 dark:ring-slate-800">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center bg-slate-200/50 text-slate-400 dark:bg-slate-800/50 dark:text-slate-500"
        >
          <img
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Pagination Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-indigo-600" : "w-1.5 bg-slate-400/50 hover:bg-slate-400"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
