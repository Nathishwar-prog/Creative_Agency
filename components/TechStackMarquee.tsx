"use client";

import React from "react";
import { motion } from "framer-motion";
import { TechIconItem } from "@/components/TechIconItem";
import {
    Code, Codepen, Database, Globe, Layers, Layout, Server, Zap,
    Cpu, GitBranch, Command, Palette, Box, Workflow, Network, Key
} from "lucide-react";

// Mapping tools to Lucide icons and Simple Icons (via CDN)
const categories = [
    {
        title: "Frontend",
        tools: [
            { name: "Next.js", iconSrc: "https://cdn.simpleicons.org/nextdotjs/white", color: "#ffffff" },
            { name: "React", iconSrc: "https://cdn.simpleicons.org/react/61DAFB", color: "#61dafb" },
            { name: "Tailwind CSS", iconSrc: "https://cdn.simpleicons.org/tailwindcss/06B6D4", color: "#38bdf8" },
            { name: "TypeScript", iconSrc: "https://cdn.simpleicons.org/typescript/3178C6", color: "#3178c6" },
            { name: "Framer Motion", iconSrc: "https://cdn.simpleicons.org/framer/0055FF", color: "#ff0080" },
        ],
    },
    {
        title: "Backend",
        tools: [
            { name: "Node.js", iconSrc: "https://cdn.simpleicons.org/nodedotjs/339933", color: "#339933" },
            { name: "PostgreSQL", iconSrc: "https://cdn.simpleicons.org/postgresql/4169E1", color: "#336791" },
            { name: "Drizzle ORM", iconSrc: "https://cdn.simpleicons.org/drizzle/C5F74F", color: "#c5f74f" },
            { name: "Auth", icon: Key, color: "#fbbf24" }, // Keeping generic for now or use specific if known
        ],
    },
    {
        title: "AI & Data",
        tools: [
            { name: "LLMs", icon: Cpu, color: "#10a37f" },
            { name: "Agents", icon: Workflow, color: "#f5a623" },
            { name: "Pipeline", icon: Network, color: "#ff4f4f" },
            { name: "OpenAI", iconSrc: "https://cdn.simpleicons.org/openai/white", color: "#10a37f" },
        ],
    },
    {
        title: "Design",
        tools: [
            { name: "Figma", iconSrc: "https://cdn.simpleicons.org/figma/F24E1E", color: "#f24e1e" },
            { name: "Systems", icon: Box, color: "#a259ff" },
        ],
    },
    {
        title: "DevOps",
        tools: [
            { name: "Vercel", iconSrc: "https://cdn.simpleicons.org/vercel/white", color: "#ffffff" },
            { name: "Git", iconSrc: "https://cdn.simpleicons.org/git/F05032", color: "#f1502f" },
        ],
    },
];

export const TechStackMarquee = () => {
    const allTools = categories.flatMap((cat) => cat.tools);
    // Double the list to create a seamless loop
    const doubledTools = [...allTools, ...allTools];

    return (
        <section className="relative w-full overflow-hidden bg-neutral-950 py-30">
            {/* Background Decor */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-5xl px-6 text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 text-xs font-medium text-neutral-400 backdrop-blur-sm mb-6"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    Modern Technology Stack
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl"
                >
                    Built with the <span className="text-cyan-400">Best</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed"
                >
                    We leverage a cutting-edge stack to deliver robust, scalable, and high-performance solutions for the modern web.
                </motion.p>
            </div>

            {/* Marquee Track */}
            <div className="relative flex w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-neutral-950 to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-neutral-950 to-transparent" />

                {/* Container for the scrolling items.
          - 'py-12' provides vertical buffer for the tooltips (which appear at bottom).
          - 'gap-12' ensures items aren't too crowded.
        */}
                <div
                    className="flex min-w-full shrink-0 animate-scroll gap-12 py-12 group hover:[animation-play-state:paused]"
                    style={{ animationDuration: "60s" }}
                >
                    {doubledTools.map((tool, index) => (
                        <div key={`${tool.name}-${index}`} className="relative group/item">
                            <TechIconItem
                                name={tool.name}
                                icon={tool.icon}
                                iconSrc={tool.iconSrc}
                                color={tool.color}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style jsx global>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); } /* Move half way because list is doubled */
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
        </section>
    );
};