"use client";

import React, { useState, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    AnimatePresence
} from "framer-motion";
import {
    ArrowRight,
    Code2,
    Rocket,
    Layout,
    Database,
    Cpu,
    CheckCircle2,
    Zap,
    ShieldCheck,
    Search,
    Layers,
    ChevronDown,
    Globe,
    Terminal,
    Sparkles,
    MousePointer2
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// --- Premium Animation System ---

const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
            delay
        }
    })
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const glassCardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    },
    hover: {
        y: -8,
        scale: 1.01,
        transition: { duration: 0.4, ease: "easeOut" }
    }
};

// --- Glass Components ---

const GlassCard = ({ children, className, ...props }: any) => (
    <motion.div
        variants={glassCardVariant}
        whileHover="hover"
        className={cn(
            "relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-colors duration-500 hover:bg-white/[0.04] hover:border-white/[0.15]",
            className
        )}
        {...props}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {children}
    </motion.div>
);

const SectionHeading = ({ children, className, align = "left" }: { children: React.ReactNode; className?: string, align?: "left" | "center" }) => (
    <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        className={cn(
            "text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6",
            align === "center" && "text-center mx-auto",
            className
        )}
    >
        {children}
    </motion.h2>
);

const SectionText = ({ children, className, align = "left" }: { children: React.ReactNode; className?: string, align?: "left" | "center" }) => (
    <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeUpVariant}
        custom={0.1}
        className={cn(
            "text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed",
            align === "center" && "text-center mx-auto",
            className
        )}
    >
        {children}
    </motion.p>
);

// --- Data ---

const SERVICES = [
    {
        title: "Marketing Websites",
        description: "Immersive, high-performance digital experiences designed to captivate and convert.",
        icon: Globe,
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "SaaS Platforms",
        description: "Scalable, multi-tenant architectures built for rapid growth and reliability.",
        icon: Layers,
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "Web Applications",
        description: "Complex business logic translated into intuitive, responsive interfaces.",
        icon: Code2,
        gradient: "from-orange-500/20 to-red-500/20"
    },
    {
        title: "Dashboards",
        description: "Data-rich admin panels with real-time visualization and analytics.",
        icon: Layout,
        gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
        title: "AI Integrations",
        description: "Next-generation features powered by LLMs, Agents, and automation.",
        icon: Cpu,
        gradient: "from-indigo-500/20 to-violet-500/20"
    },
    {
        title: "E-Commerce",
        description: "Secure, frictionless shopping journeys optimized for revenue.",
        icon: Rocket,
        gradient: "from-yellow-500/20 to-orange-500/20"
    }
];

const PROCESS_STEPS = [
    {
        title: "Discover",
        desc: "Strategy & Requirements"
    },
    {
        title: "Design",
        desc: "UX/UI & Systems"
    },
    {
        title: "Build",
        desc: "Development & Testing"
    },
    {
        title: "Launch",
        desc: "Deploy & Scale"
    }
];

const FAQS = [
    {
        q: "How do you handle project timelines?",
        a: "We believe in transparent, iterative delivery. A typical high-performance brochure site takes 3-5 weeks, while complex web applications usually range from 2-4 months. We provide a detailed Gantt chart during onboarding."
    },
    {
        q: "Do you offer post-launch support?",
        a: "Excellence requires maintenance. We offer tailored retainer packages that include security updates, performance monitoring, and iterative feature enhancements to keep your product ahead of the curve."
    },
    {
        q: "How does your tech stack benefit me?",
        a: "We use Next.js and modern React for a specific reason: Speed and SEO. This stack ensures your site loads instantly, ranks better on Google, and provides an app-like feel that retains users."
    }
];

const TECH_STACK = ["Next.js", "React", "TypeScript", "Tailwind", "Node.js", "PostgreSQL", "Supabase", "motion", "OpenAI"];

// --- Main Page Component ---

export default function WebDevPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef });
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <div ref={containerRef} className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-white/20 overflow-x-hidden">

            {/* Background Ambience */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow delay-1000" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150" />
            </div>

            {/* 1. HERO SECTION */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 pt-32 pb-20 z-10">
                <div className="max-w-5xl mx-auto text-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-sm font-medium text-zinc-300 mb-8 mx-auto hover:bg-white/[0.08] transition-colors cursor-default"
                    >
                        <Sparkles size={14} className="text-yellow-200" />
                        <span className="tracking-wide">Modern Web Engineering</span>
                    </motion.div>

                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] mb-8 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
                    >
                        <motion.span variants={fadeUpVariant} className="block">Digital Products</motion.span>
                        <motion.span variants={fadeUpVariant} className="block">Built for <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">Growth</span></motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                    >
                        We define, design, and develop premium web applications that set new industry standards for performance and aesthetics.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link
                            href="/contact"
                            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity" />
                            <span className="relative flex items-center gap-2">
                                Start Project <ArrowRight size={18} />
                            </span>
                        </Link>
                        <Link
                            href="/contact?type=consultation"
                            className="px-8 py-4 text-zinc-300 font-medium hover:text-white transition-colors border-b border-transparent hover:border-white/20"
                        >
                            Consultation
                        </Link>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
                >
                    <span className="text-[10px] uppercase tracking-widest">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-500 to-transparent"
                    />
                </motion.div>
            </section>

            {/* 2. SERVICES GRID */}
            <section className="py-32 px-6 z-10 relative">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20">
                        <SectionHeading>Capabilities</SectionHeading>
                        <SectionText>Comprehensive expertise across the modern web stack.</SectionText>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {SERVICES.map((service, index) => (
                            <GlassCard key={index} className="group p-8 min-h-[300px] flex flex-col justify-between">
                                <div>
                                    <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br border border-white/10", service.gradient)}>
                                        <service.icon size={28} className="text-white drop-shadow-md" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">{service.title}</h3>
                                    <p className="text-zinc-400 leading-relaxed font-light">{service.description}</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-white/40 group-hover:text-white transition-colors mt-8 uppercase tracking-widest">
                                    Explore <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </GlassCard>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* 3. DIFFERENCE (Why Us) */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <SectionHeading>Beyond Code.</SectionHeading>
                        <SectionText className="mb-12">
                            We aren't just developers. We are product partners. We align engineering decisions with your business strategy to create assets, not liabilities.
                        </SectionText>

                        <div className="space-y-6">
                            {[
                                { icon: Zap, label: "Performance Obsessed", desc: "Sub-100ms interactions and perfect Lighthouse scores." },
                                { icon: Search, label: "Search Optimized", desc: "Semantic architecture that search engines love." },
                                { icon: ShieldCheck, label: "Enterprise Security", desc: "Bank-grade data protection standards." }
                            ].map((item, i) => (
                                <GlassCard key={i} className="flex items-center gap-6 p-6 rounded-2xl md:rounded-2xl bg-white/[0.01]">
                                    <div className="w-12 h-12 rounded-full bg-white/[0.05] flex items-center justify-center border border-white/10 text-white shrink-0">
                                        <item.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{item.label}</h4>
                                        <p className="text-sm text-zinc-400">{item.desc}</p>
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        style={{ y }}
                        className="relative hidden lg:block"
                    >
                        {/* Abstract Code/Visual */}
                        <div className="relative z-10 aspect-square rounded-[3rem] overflow-hidden border border-white/10 bg-zinc-900 shadow-2xl">
                            <div className="absolute inset-0 bg-grid-white/[0.03]" />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10" />

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col gap-4">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                </div>
                                <div className="space-y-3 opacity-50">
                                    <div className="h-2 w-1/3 bg-white/20 rounded-full" />
                                    <div className="h-2 w-2/3 bg-white/20 rounded-full" />
                                    <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                                    <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                                </div>
                                <div className="mt-auto p-4 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center gap-3">
                                    <CheckCircle2 className="text-blue-400" size={20} />
                                    <span className="text-blue-100 font-mono text-xs">Build Successful: 420ms</span>
                                </div>
                            </div>
                        </div>

                        {/* Decor */}
                        <div className="absolute -z-10 -bottom-10 -right-10 w-2/3 h-2/3 bg-blue-600/20 blur-[100px] rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* 4. PROCESS */}
            <section className="py-32 px-6 z-10 relative bg-white/[0.01]">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading align="center">The Process</SectionHeading>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                        {PROCESS_STEPS.map((step, i) => (
                            <div key={i} className="relative group">
                                {/* Dot */}
                                <div className="w-4 h-4 rounded-full bg-zinc-900 border-2 border-white/20 relative z-10 mb-8 mx-auto md:mx-0 group-hover:border-blue-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                                    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                <GlassCard className="p-6 text-center md:text-left hover:bg-white/[0.03]">
                                    <span className="text-4xl font-bold text-white/10 mb-2 block font-mono">0{i + 1}</span>
                                    <h3 className="text-xl font-bold text-white mb-1">{step.title}</h3>
                                    <p className="text-sm text-zinc-400">{step.desc}</p>
                                </GlassCard>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TECH STACK */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-500 mb-10">Powered by the best</p>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-5">
                        {TECH_STACK.map((tech, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-sm text-zinc-400 font-medium hover:text-white hover:border-white/20 hover:bg-white/10 hover:scale-105 transition-all cursor-default"
                            >
                                {tech}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ */}
            <section className="py-32 px-6 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <SectionHeading align="center">Common Questions</SectionHeading>

                    <div className="mt-12 space-y-4">
                        {FAQS.map((faq, i) => (
                            <GlassCard key={i} className="rounded-2xl overflow-hidden bg-black/20 border-white/5">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={cn("text-lg font-medium transition-colors", openFaq === i ? "text-white" : "text-zinc-400")}>{faq.q}</span>
                                    <ChevronDown className={cn("text-zinc-500 transition-transform duration-300", openFaq === i ? "rotate-180 text-white" : "")} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="px-6 pb-6 text-zinc-400 leading-relaxed border-t border-white/5 pt-4">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </GlassCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="py-32 px-6 relative overflow-hidden z-10">
                <GlassCard className="max-w-5xl mx-auto text-center p-12 md:p-20 border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent">
                    {/* Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative text-4xl md:text-6xl font-bold text-white mb-6"
                    >
                        Ready to build <br className="hidden md:block" />
                        something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">extraordinary?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative text-xl text-zinc-400 mb-10 max-w-2xl mx-auto"
                    >
                        Let's turn your vision into a high-performance digital reality.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <Link
                            href="/contact"
                            className="relative inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full overflow-hidden group hover:scale-105 transition-transform"
                        >
                            <span className="relative z-10">Start Your Project</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </motion.div>
                </GlassCard>
            </section>

        </div>
    );
}