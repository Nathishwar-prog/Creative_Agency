"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import  ProcessStep from "@/components/process-step";

const steps = [
    {
        stepNumber: "01",
        title: "Discover",
        description: "We dive deep into your vision, understanding your goals and target audience to build a solid strategy.",
        icon: Search,
    },
    {
        stepNumber: "02",
        title: "Design",
        description: "Crafting intuitive, high-fidelity prototypes that align with your brand and delight your users.",
        icon: PenTool,
    },
    {
        stepNumber: "03",
        title: "Build",
        description: "Turning designs into pixel-perfect, scalable code using modern frameworks and best practices.",
        icon: Code2,
    },
    {
        stepNumber: "04",
        title: "Launch & Support",
        description: "Deployment, final testing, and ongoing support to ensure your product grows with your business.",
        icon: Rocket,
    },
];

export function ProcessSection() {
    return (
        <section className="relative w-full py-24 bg-background overflow-hidden">
            {/* Subtle Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[100px] rounded-full translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        From Idea to Launch — <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Without the Stress</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-neutral-400"
                    >
                        A clear, transparent process that keeps projects efficient and stress-free.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                    {/* Desktop Connector Line Background */}
                    <div className="absolute top-12 left-0 w-full h-0.5 bg-neutral-800 hidden lg:block -z-10 opacity-50" />

                    {steps.map((step, index) => (
                        <ProcessStep
                            key={index}
                            {...step}
                            isLast={index === steps.length - 1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
