"use client";

import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AudienceCardProps {
    icon: LucideIcon;
    title: string;
    description?: string;
}

export const AudienceCard: React.FC<AudienceCardProps> = ({
    icon: Icon,
    title,
    description,
}) => {
    return (
        <motion.div
            whileHover={{ y: -3 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="flex flex-col items-center text-center p-6 h-full bg-neutral-900/30 border border-white/5 rounded-2xl hover:bg-neutral-900/50 hover:border-cyan-500/10 transition-colors duration-300"
        >
            <div className="mb-4 p-3 rounded-full bg-neutral-800/50 border border-white/5 text-cyan-400">
                <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-white mb-2">
                {title}
            </h3>

            {description && (
                <p className="text-sm text-neutral-400">
                    {description}
                </p>
            )}
        </motion.div>
    );
};
