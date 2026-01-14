"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface CreativeLogoProps {
  className?: string;
}

// Fixed Animation Variants (using safe easing)
const letterVariants: Variants = {
  initial: { y: "100%", opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" // Standard easing to avoid browser TypeError
    }
  }
};

const iconVariants: Variants = {
  initial: { scale: 0, rotate: -15 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2
    }
  }
};

export const CreativeLogo: React.FC<CreativeLogoProps> = ({ className }) => {
  const [startAnimation, setStartAnimation] = useState(false);
  const word1 = "Creative".split("");

  useEffect(() => {
    const handleIntroComplete = () => setStartAnimation(true);
    // If intro is not showing (e.g. fast refresh/dev), we might miss it?
    // In prod, intro always runs on reload.
    // We can also check if a global flag exists if we add persistence later.
    window.addEventListener("intro-complete", handleIntroComplete);

    // Fallback: If no intro event fires within 6s (failsafe), show logo.
    const timer = setTimeout(() => setStartAnimation(true), 6000);

    return () => {
      window.removeEventListener("intro-complete", handleIntroComplete);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Link
      href="/"
      className={cn(
        "fixed top-8 left-8 z-50 hidden md:flex items-center gap-4 group pointer-events-auto",
        className
      )}
    >
      {/* Dynamic Geometric Icon */}
      <motion.div
        className="relative w-12 h-12 flex items-center justify-center bg-foreground rounded-xl overflow-hidden"
        variants={iconVariants}
        initial="initial"
        animate={startAnimation ? "animate" : "initial"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg viewBox="0 0 40 40" className="w-8 h-8 fill-none stroke-background" strokeWidth="3">
          {/* Animated "C" Shape */}
          <motion.path
            d="M 28 12 C 28 12 12 12 12 20 C 12 28 28 28 28 28"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          />
          {/* Inner Accent Dot */}
          <motion.circle
            cx="22" cy="20" r="2"
            className="fill-primary stroke-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          />
        </svg>

        {/* Shine Overlay Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full"
          animate={{ translateX: ["100%", "-100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </motion.div>

      {/* Modern Typography Section */}
      <div className="flex flex-col justify-center">
        <motion.div
          initial="initial"
          animate={startAnimation ? "animate" : "initial"}
          transition={{ staggerChildren: 0.04, delayChildren: 0.3 }}
          className="flex overflow-hidden"
        >
          {word1.map((char, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className="text-2xl font-black tracking-tighter text-foreground"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <div className="flex items-center gap-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 16 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="h-[2px] bg-primary"
          />
          <motion.span
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary"
          >
            Agency
          </motion.span>
        </div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute -inset-2 bg-primary/5 blur-2xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </Link>
  );
};