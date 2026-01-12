"use client";

import React from "react";
import  ServiceCard  from "@/components/service-card";
import {
    Code,
    Palette,
    Rocket,
    Layers,
    BarChart3,
    Bot,
    AppWindow
} from "lucide-react";

const services = [
    {
        icon: Code,
        title: "Web Development",
        description: "Scalable, fast, and modern websites built for growth using the latest tech stack.",
        href :'/services/webdev',
    },
    {
        icon: AppWindow,
        title: "App Development",
        description: "Scalable, fast, and modern apps built for growth using the latest tech stack.",
        href :'/services/appdev',
    },
    {
        icon: Code,
        title: "AI Solutions & Agents",
        description: "Scalable, fast, and modern websites built for growth using the latest tech stack.",
        href :'/services/ai-solutions',
    },
    {
        icon: Code,
        title: "Wordpress & Shopify",
        description: "Scalable, fast, and modern websites built for growth using the latest tech stack.",
        href :'/services/wordpress',
    },
    {
        icon: Palette,
        title: "UI / UX Design",
        description: "User-centric interfaces that blend aesthetics with functionality for maximum engagement.",
        href :'/services/ui-ux',
    },
    {
        icon: Layers,
        title: "Branding & Identity",
        description: "Crafting unique visual identities that resonate with your audience and build trust.",
        href :'/services/branding',
    },
    {
        icon: Rocket,
        title: "SaaS Product Development",
        description: "End-to-end development of robust SaaS platforms, from MVP to enterprise scale.",
        href :'/services/saas',
    },
    {
        icon: BarChart3,
        title: "Performance Optimization",
        description: "Speeding up your digital assets to improve SEO rankings and user retention.",
        href :'/services/seo',
    },
    {
        icon: Bot,
        title: "Video Editing",
        description: "Integrating intelligent automation and AI features to future-proof your business.",
        href :'/services/video-editing',
    },
    {
        icon: Bot,
        title: "Logo Design",
        description: "Integrating intelligent automation and AI features to future-proof your business.",
        href :'/services/logo-design',
    },
    {
        icon: Bot,
        title: "Social Media Management",
        description: "Integrating intelligent automation and AI features to future-proof your business.",
        href :'/services/social-media-management',
    },
];

export function ServicesGrid() {
    return (
        <div className="container mx-auto max-w-7xl px-4 py-20 relative z-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        icon={service.icon}
                        title={service.title}
                        href={service.href}
                        description={service.description}
                        delay={index * 0.1}
                    />
                ))}
            </div>
        </div>
    );
}
