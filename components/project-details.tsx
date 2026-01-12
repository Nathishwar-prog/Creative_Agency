"use client";

import React, { useEffect, useRef, useState } from "react";
import { X, ExternalLink, Github, Layers, ArrowRight, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import type { Project } from "./3d-folder";

interface ProjectDetailsProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project | null;
}

// Extend the Project interface locally if needed, or rely on type assertion for new fields
// in a real app, you'd share this interface in a types file.
interface RichProject extends Project {
    tagline?: string;
    description?: string;
    problem?: string;
    solution?: string;
    technologies?: string[];
    features?: string[];
}

export function ProjectDetails({ isOpen, onClose, project }: ProjectDetailsProps) {
    const data = project as RichProject;
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isFullView, setIsFullView] = useState(false);

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Reset scroll on open
    useEffect(() => {
        if (isOpen && scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = 0;
        }
    }, [isOpen, project]);

    if (!data) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div key="project-details-modal" className="fixed inset-0 z-[100] flex items-center justify-center sm:p-4 md:p-6 lg:p-10">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="fixed inset-0 bg-background/80 backdrop-blur-md"
                        onClick={onClose}
                    />

                    {/* Modal Container */}
                    <motion.div
                        layoutId={`project-card-${data.id}`} // Optional: if you had shared layout ID in parent
                        initial={{ y: "20px", opacity: 0, scale: 0.95 }}
                        animate={{ y: "0px", opacity: 1, scale: 1 }}
                        exit={{ y: "20px", opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-6xl h-full max-h-[90vh] bg-card border border-border shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button Mobile/Absolute */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-all border border-white/10"
                        >
                            <X size={20} />
                        </button>

                        {/* --- LEFT: Image / Media Section --- */}
                        <div className="w-full md:w-5/12 lg:w-1/2 relative bg-zinc-900 overflow-hidden h-64 md:h-auto">
                            <motion.img
                                initial={{ scale: 1.1 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
                                src={data.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"}
                                alt={data.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-background" />

                            {/* Floating Tech Badges (Mobile/Tablet view mostly, or overlay) */}
                            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2 md:hidden">
                                {data.technologies?.slice(0, 3).map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-xs font-semibold bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* --- RIGHT: Content Section --- */}
                        <div
                            ref={scrollContainerRef}
                            className="w-full md:w-7/12 lg:w-1/2 flex flex-col overflow-y-auto relative scrollbar-hide bg-card"
                        >
                            <div className="p-6 md:p-10 lg:p-12 space-y-8 min-h-full">

                                {/* Header */}
                                <div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground uppercase mb-2">
                                            {data.title}
                                        </h2>
                                        <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
                                            {data.tagline || "Digital experience"}
                                        </p>
                                    </motion.div>

                                    {/* Tech Stack Desktop */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="hidden md:flex flex-wrap gap-2 mt-6"
                                    >
                                        {data.technologies?.map((tech) => (
                                            <span key={tech} className="px-3 py-1.5 text-xs md:text-sm font-medium bg-muted/50 border border-border rounded-lg text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors cursor-default">
                                                {tech}
                                            </span>
                                        ))}
                                    </motion.div>
                                </div>

                                <div className="w-full h-px bg-border/50" />

                                {/* Main Content Grid */}
                                <div className="grid grid-cols-1 gap-10">

                                    {/* Challenge & Solution */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                                                <Layers size={14} />
                                                <span>The Challenge</span>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {data.problem || data.description || "The challenge was to create a unified digital experience that resonates with the modern web while maintaining high performance standards."}
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs">
                                                <ArrowRight size={14} />
                                                <span>The Solution</span>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {data.solution || "We implemented a ground-up redesign using cutting-edge frontend technologies, ensuring responsiveness and accessibility across all devices."}
                                            </p>
                                        </div>
                                    </motion.div>

                                    {/* Key Features */}
                                    {data.features && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 }}
                                            className="space-y-4"
                                        >
                                            <h3 className="text-lg font-bold text-foreground">Key Highlights</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                {data.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/20 border border-border/50">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                        <span className="text-sm font-medium text-foreground/80">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    )}

                                </div>

                                {/* Footer / Actions */}
                                <div className="pt-10 mt-auto">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <button
                                            onClick={() => setIsFullView(true)}
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-primary/25 group"
                                        >
                                            <span>View Full Design</span>
                                            <Maximize2 size={18} className="group-hover:scale-110 transition-transform" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
            {isFullView && (
                <motion.div
                    key="full-view-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl overflow-y-auto"
                    onClick={() => setIsFullView(false)}
                >
                    <button
                        onClick={() => setIsFullView(false)}
                        className="fixed top-6 right-6 z-[210] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/10 group"
                    >
                        <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    <div className="min-h-full w-full flex items-start justify-center p-4 md:p-10">
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            src={data.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200"}
                            alt={data.title}
                            className="w-auto h-auto max-w-full rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
