"use client";

import * as React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 40, mass: 0.5 });

  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"
      style={{ scaleX }}
    />
  );
}

