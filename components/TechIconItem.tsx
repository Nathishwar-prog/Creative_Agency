"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface TechIconItemProps {
    name: string;
    icon?: LucideIcon;
    iconSrc?: string; // URL for the original logo
    color?: string; // Hex color
}

export const TechIconItem = ({ name, icon: Icon, iconSrc, color = "#ffffff" }: TechIconItemProps) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            className="relative flex flex-col items-center justify-center p-2"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
        >
            {/* Container 
        - Uses a double-layer approach for the glass effect + border glow
      */}
            <div
                className={cn(
                    "relative flex h-24 w-24 items-center justify-center rounded-2xl",
                    "bg-neutral-950/80 backdrop-blur-md", // Base dark glass
                    "border border-white/5", // Subtle default border
                    "shadow-xl transition-all duration-500",
                    "group cursor-pointer overflow-hidden"
                )}
                style={{
                    // On hover, we apply a colored shadow based on the prop
                    boxShadow: isHovered
                        ? `0 10px 40px -10px ${color}40` // Hex + 40 (25% opacity)
                        : "0 10px 20px -10px rgba(0,0,0,0.5)",
                    borderColor: isHovered ? `${color}40` : "rgba(255,255,255,0.05)"
                }}
            >
                {/* 1. Internal Gradient Blob (Dynamic Background) */}
                <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-20"
                    style={{
                        background: `radial-gradient(circle at center, ${color}, transparent 70%)`,
                    }}
                />

                {/* 2. Top Shine/Reflection (Glass realism) */}
                <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

                {/* 3. Noise Texture (Premium feel) */}
                <div
                    className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none"
                    style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
                />

                {/* 4. The Icon or Image */}
                <div className="relative z-10 flex items-center justify-center">
                    {iconSrc ? (
                        <img
                            src={iconSrc}
                            alt={name}
                            className="h-10 w-10 object-contain transition-all duration-500 ease-out"
                            style={{
                                filter: isHovered ? "none" : "grayscale(100%) brightness(1.2)", // Brightness bump for dark mode visibility when grayscale
                                opacity: isHovered ? 1 : 0.7
                            }}
                        />
                    ) : Icon ? (
                        <Icon
                            className={cn(
                                "h-10 w-10 transition-all duration-500 ease-out",
                                "text-neutral-400 group-hover:text-white"
                            )}
                            style={{
                                filter: isHovered ? `drop-shadow(0 0 8px ${color})` : "none",
                                color: isHovered ? color : undefined
                            }}
                            strokeWidth={1.5}
                        />
                    ) : null}
                </div>
            </div>

            {/* Animated Tooltip */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="absolute -bottom-10 z-20 pointer-events-none"
                    >
                        <div className="relative flex items-center justify-center">
                            {/* Tooltip Arrow */}
                            <div className="absolute -top-1 h-2 w-2 rotate-45 border-l border-t border-white/10 bg-neutral-900" />

                            {/* Tooltip Content */}
                            <div className="whitespace-nowrap rounded-lg border border-white/10 bg-neutral-900/90 px-3 py-1.5 text-xs font-semibold text-neutral-200 shadow-xl backdrop-blur-md">
                                {name}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};