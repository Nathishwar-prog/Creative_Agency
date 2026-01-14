"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroAnimation from "@/components/intro-animation";

export default function SiteIntroWrapper() {
    const [showIntro, setShowIntro] = useState(true);

    return (
        <AnimatePresence mode="wait">
            {showIntro && (
                <motion.div
                    key="site-intro"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[9999]"
                >
                    <IntroAnimation onComplete={() => {
                        setShowIntro(false);
                        window.dispatchEvent(new Event('intro-complete'));
                    }} />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
