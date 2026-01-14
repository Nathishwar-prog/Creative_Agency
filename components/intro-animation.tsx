"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, AnimatePresence, useAnimation, Transition } from 'framer-motion';

/**
 * Creative Agency - Ultra Premium Edition (Enhanced)
 * Features:
 * - Geometric "Core" build-up
 * - High-contrast typography (Bold Sans + Light Serif)
 * - Liquid Masking text reveal
 * - Interactive Mesh Gradient Background
 * - Real-time Progress Counter
 */

interface IntroAnimationProps {
    onComplete?: () => void;
}

const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
    const [isReady, setIsReady] = useState(false);
    const [count, setCount] = useState(0);
    const [particles, setParticles] = useState<Array<{ id: number, x: number, y: number, size: number, duration: number }>>([]);

    // Progress counter spring
    const progressSpring = useSpring(0, { stiffness: 50, damping: 15 });
    const progressText = useTransform(progressSpring, (value) => `${Math.round(value)}%`);

    useEffect(() => {
        setIsReady(true);

        // Start counter animation
        progressSpring.set(100);

        // Trigger onComplete after animation finishes
        const timer = setTimeout(() => {
            onComplete?.();
        }, 3400); // adjusted timing

        // Counter updater for state (if needed for other logic, but spring handles display)
        const frame = setInterval(() => {
            const current = progressSpring.get();
            if (current >= 99) clearInterval(frame);
            setCount(Math.round(current));
        }, 50);

        return () => {
            clearTimeout(timer);
            clearInterval(frame);
        };
    }, [onComplete, progressSpring]);

    // Particle Generation (Client-side only to fix hydration)
    useEffect(() => {
        const newParticles = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 10 + 10,
        }));
        setParticles(newParticles);
    }, []);

    // Animation Configs
    const transition: Transition = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.95] as [number, number, number, number] };



    return (
        <div className="fixed inset-0 z-[9999] bg-[#020202] overflow-hidden flex items-center justify-center font-sans select-none cursor-none perspective-[1000px]">

            {/* --- LAYER 1: DYNAMIC MESH BACKGROUND --- */}
            <div className="absolute inset-0 z-0 opacity-60">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        filter: ["hue-rotate(0deg)", "hue-rotate(15deg)", "hue-rotate(0deg)"]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                        filter: ["hue-rotate(0deg)", "hue-rotate(-15deg)", "hue-rotate(0deg)"]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-purple-600/10 blur-[120px] rounded-full mix-blend-screen"
                />
            </div>

            {/* --- LAYER 1.5: FLOATING PARTICLES --- */}
            <div className="absolute inset-0 z-1 pointer-events-none">
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute bg-white/10 rounded-full"
                        style={{
                            width: p.size,
                            height: p.size,
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: p.duration,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </div>


            {/* --- LAYER 2: SCANLINES & NOISE --- */}
            <div className="absolute inset-0 z-10 opacity-[0.25] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-[#020202]" />
            </div>

            {/* --- LAYER 3: THE GEOMETRIC CORE --- */}
            <div className="absolute flex items-center justify-center z-20">
                <motion.div
                    initial={{ scale: 0, rotate: -45, opacity: 0 }}
                    animate={{ scale: [0, 1.2, 1], rotate: 0, opacity: [0, 1, 0.8] }}
                    transition={{ duration: 1.5, ease: "circOut" }}
                    className="w-40 h-40 border border-white/10 rounded-full flex items-center justify-center relative backdrop-blur-sm"
                >
                    <div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]" />

                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_25px_5px_rgba(34,211,238,0.6)]"
                    />

                    <svg className="absolute w-full h-full rotate-45">
                        <motion.circle
                            cx="80" cy="80" r="76" stroke="white" strokeWidth="0.5" fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.15 }}
                            transition={{ duration: 2, delay: 0.2 }}
                            strokeDasharray="4 4"
                        />
                        <motion.circle
                            cx="80" cy="80" r="60" stroke="rgba(34,211,238,0.5)" strokeWidth="1" fill="none"
                            initial={{ pathLength: 0, opacity: 0, rotate: 0 }}
                            animate={{ pathLength: 0.7, opacity: 0.3, rotate: 360 }}
                            transition={{ duration: 4, delay: 0.5, ease: "linear", repeat: Infinity }}
                        />
                    </svg>
                </motion.div>
            </div>

            {/* --- LAYER 4: TYPOGRAPHY REVEAL --- */}
            <div className="relative z-30 flex flex-col items-center">

                {/* Main Brand Title with Clip Path Glitch */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 overflow-hidden py-4">
                    <div className="overflow-hidden relative">
                        {/* Glitch Overlay */}
                        <motion.div
                            className="absolute inset-0 bg-cyan-500/20 mix-blend-overlay z-10"
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ duration: 0.4, delay: 0.9, ease: "anticipate" }}
                        />
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ ...transition, delay: 0.8 }}
                            className="text-6xl md:text-9xl font-black tracking-tighter text-white relative z-0"
                            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
                        >
                            CREATIVE
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden relative">
                        <motion.h1
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            transition={{ ...transition, delay: 1 }}
                            className="text-6xl md:text-9xl font-light italic tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-500"
                            style={{ fontFamily: 'serif' }}
                        >
                            Agency
                        </motion.h1>
                    </div>
                </div>

                {/* Progress Counter & Loading State */}
                <div className="flex items-center gap-4 mt-8 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 40 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-[1px] bg-cyan-400/50"
                    />
                    <motion.pre
                        className="text-sm font-mono text-cyan-400/80 w-12 text-center"
                    >
                        <motion.span>{progressText}</motion.span>
                    </motion.pre>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: 40 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="h-[1px] bg-cyan-400/50"
                    />
                </div>

                {/* Floating Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.8 }}
                    className="text-[10px] uppercase text-zinc-500 font-mono mt-2 tracking-[0.5em]"
                >
                    System Initialization
                </motion.div>
            </div>

            {/* --- LAYER 5: INTERACTIVE LIGHT SWEEP --- */}
            <motion.div
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 0.1, 0] }}
                transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 z-40 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent skew-x-12 pointer-events-none"
            />

            {/* UI Details */}
            <div className="absolute bottom-10 left-10 z-50 flex flex-col gap-1 mix-blend-difference">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2, duration: 1 }}
                    className="h-[1px] w-12 bg-white/50 mb-2 origin-left"
                />
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
                    <p className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">Lat: 34.0522</p>
                    <p className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest">Lng: -118.2437</p>
                </motion.div>
            </div>

            {/* Replay Action */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                onClick={(e) => { e.stopPropagation(); window.location.reload(); }}
                className="absolute bottom-10 right-10 z-50 group flex items-center gap-4 cursor-pointer"
            >
                <div className="relative overflow-hidden">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 group-hover:text-cyan-400 transition-colors block">Restart</span>
                    <motion.div className="absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                </div>

                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-cyan-400/50 group-hover:bg-cyan-900/10 transition-all">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-zinc-500 group-hover:text-cyan-400 transition-colors">
                        <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
                    </svg>
                </div>
            </motion.button>

        </div>
    );
};

export default IntroAnimation;
