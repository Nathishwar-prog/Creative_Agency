"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Code, Bot, TrendingUp } from "lucide-react";
import { WhyChooseCard } from "@/components/why-choose-card";

const features = [
    {
        icon: Heart,
        title: "Product-First Mindset",
        description: "Focus on real user value, not just visuals.",
    },
    {
        icon: Code,
        title: "Clean, Scalable Code",
        description: "Maintainable architecture built for growth.",
    },
    {
        icon: Bot,
        title: "AI-Driven Solutions",
        description: "Smart automation and AI where it truly matters.",
    },
    {
        icon: TrendingUp,
        title: "Long-Term Partnership",
        description: "We support, improve, and scale with you.",
    },
];

export function WhyChooseSection() {
    return (
        <section className="relative w-full py-20 overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl md:text-5xl font-bold tracking-tight text-white mb-3"
                    >
                        Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Creative Agency</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-neutral-400 text-sm md:text-base"
                    >
                        Built for quality, scale, and long-term success.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <WhyChooseCard {...feature} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
