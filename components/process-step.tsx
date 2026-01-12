"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  LucideIcon, 
  Lightbulb, 
  Code2, 
  Rocket, 
  Search, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---
interface ProcessStepProps {
  stepNumber: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isLast?: boolean;
}

// --- Individual Process Step Card ---
const ProcessStep: React.FC<ProcessStepProps> = ({
  stepNumber,
  title,
  description,
  icon: Icon,
  isLast,
}) => {
  return (
    <div className="relative flex flex-1 flex-col items-center text-center md:items-start md:text-left">
      {/* Connector Line 
        - Mobile: Vertical line (bottom of icon)
        - Desktop: Horizontal line (right of icon)
      */}
      {!isLast && (
        <div className="absolute left-1/2 top-14 h-full w-[2px] -translate-x-1/2 bg-neutral-800 md:left-[2.5rem] md:top-[2.5rem] md:h-[2px] md:w-full md:translate-x-0">
          {/* Animated Beam */}
          <motion.div
            initial={{ height: 0, width: 0 }}
            whileInView={{ height: "100%", width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
            className="h-full w-full bg-gradient-to-b from-cyan-500 to-blue-600 md:bg-gradient-to-r"
          />
        </div>
      )}

      {/* Step Icon Container */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl group"
      >
        {/* Glow Halo */}
        <div className="absolute inset-0 rounded-2xl bg-cyan-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Inner Border Ring */}
        <div className="absolute inset-[2px] rounded-xl border border-neutral-800 bg-neutral-900/50" />
        
        {/* Icon */}
        <Icon className="relative z-10 h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-cyan-400" />
        
        {/* Step Number Badge */}
        <div className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-neutral-900 border border-neutral-800 text-xs font-bold text-neutral-500 shadow-lg">
          {stepNumber}
        </div>
      </motion.div>

      {/* Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="group relative w-full overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/30 p-6 backdrop-blur-sm transition-all duration-500 hover:border-cyan-500/30 hover:bg-neutral-900/60 hover:-translate-y-1"
      >
        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-cyan-100">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-400 transition-colors group-hover:text-neutral-300">
          {description}
        </p>

        {/* Decorative Corner Accent */}
        <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-cyan-500/20 blur-lg transition-all duration-500 group-hover:bg-cyan-500/40" />
      </motion.div>
    </div>
  );
};

// --- Main Demo / Section Component ---
export default ProcessStep;