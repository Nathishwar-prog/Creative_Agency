"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhyChooseCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
    icon: Icon,
    title,
    description,
}) => {
    return (
        <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative flex flex-col items-start p-6 h-full bg-neutral-900/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 hover:border-cyan-500/20"
        >
            {/* Icon with glow */}
            <div className="mb-4 relative">
                <div className="absolute inset-0 bg-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <Icon className="w-8 h-8 text-cyan-400/80 group-hover:text-cyan-400 transition-colors duration-300 relative z-10" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-50 transition-colors duration-300">
                {title}
            </h3>

            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed">
                {description}
            </p>

            {/* Subtle Bottom Highlight */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </motion.div>
    );
};
