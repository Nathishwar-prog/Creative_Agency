"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, ArrowRight, Zap, Shield, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

// --- ServiceCard Component ---

interface ServiceCardProps {
    icon: React.ElementType;
    title: string;
    description: string;
    href: string;
    className?: string;
    delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    icon: Icon,
    title,
    description,
    href,
    className,
    delay = 0,
}) => {
    return (
        <Link href={href} >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={cn(
                    "group relative h-full w-full overflow-hidden rounded-3xl p-[1px] transition-all duration-500",
                    className
                )}
            >
                {/* 1. The Moving Gradient Border (Behind the Glass) */}
                <div className="absolute inset-[-50%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_45%,#0ea5e9_50%,transparent_55%,transparent_100%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Fallback subtle border for non-hover state */}
                <div className="absolute inset-0 rounded-3xl border border-white/5 transition-colors group-hover:border-white/0" />

                {/* 2. The Glass Container (Inner Card) */}
                <div className="relative flex h-full flex-col justify-between rounded-[23px] bg-neutral-950/80 backdrop-blur-xl p-8 transition-all duration-500 group-hover:bg-neutral-950/70">

                    {/* Decorative Noise Texture */}
                    <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>

                    {/* Top Highlight (simulating light hitting the glass edge) */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />

                    <div className="relative z-10 flex flex-col gap-6">
                        {/* Icon Section with Glow */}
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/0 border border-white/10 shadow-inner group-hover:shadow-[0_0_20px_-5px_rgba(14,165,233,0.4)] transition-all duration-500">
                            <Icon className="h-7 w-7 text-neutral-300 group-hover:text-cyan-400 transition-colors duration-500" />
                        </div>

                        {/* Text Content */}
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-cyan-100 transition-colors">
                                {title}
                            </h3>
                            <p className="text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors">
                                {description}
                            </p>
                        </div>
                    </div>

                    {/* Bottom Actions */}
                    <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-medium text-neutral-500 transition-all duration-300 group-hover:text-cyan-400 group-hover:gap-3">
                        <span>Explore Service</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                </div>
            </motion.div>

        </Link>
    );
};

// --- Demo Section ---



export default ServiceCard;