"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, LayoutGrid, Store, User } from "lucide-react";
import { AudienceCard } from "@/components/audience-card";

const audiences = [
    {
        icon: Rocket,
        title: "Startups",
        description: "Launch MVPs fast and scale with confidence.",
    },
    {
        icon: LayoutGrid,
        title: "SaaS Companies",
        description: "Build robust platforms that users love.",
    },
    {
        icon: Store,
        title: "Small Businesses",
        description: "Modernize your digital presence to grow revenue.",
    },
    {
        icon: User,
        title: "Founders & Creators",
        description: "Turn your unique vision into a digital reality.",
    },
];

export function WhoWeWorkWith() {
    return (
        <section className="relative w-full py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4"
                    >
                        Who We Work With
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-2xl md:text-4xl font-bold text-white max-w-2xl mx-auto"
                    >
                        We work with startups, founders, and growing businesses looking to build modern, scalable digital products.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {audiences.map((audience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <AudienceCard {...audience} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
