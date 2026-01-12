"use client";


import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { ServicesGrid } from "@/components/services-grid";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { ProcessSection } from "@/components/process-section";
import { WhyChooseSection } from "@/components/why-choose-section";
import { WhoWeWorkWith } from "@/components/who-we-work-with";
import { TechStackMarquee } from "@/components/TechStackMarquee";
import { CTASection, FAQSection } from "@/components/faq-cta";

export default function Services() {
    return (
        <div className="flex flex-col ">
            <LampContainer>
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-8 bg-gradient-to-br from-slate-500 to-slate-900 dark:from-slate-300 dark:to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
                >
                    What We Do Best
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-4 max-w-2xl text-center text-lg text-muted-foreground md:text-xl"
                >
                    Creative Stack delivers end-to-end design, development, and AI solutions to help businesses build faster, scale smarter, and stand out.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mt-4 max-w-2xl text-center text-lg font-bold text-muted-foreground md:text-xl"
                >   <Link href="#service">
                        <ShinyButton className="mt-4 mx-auto me-7 max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
                            Explore Our Services
                        </ShinyButton>
                    </Link>

                    <Link href="/contact">
                        <ShinyButton className="mt-4 mx-auto max-w-2xl text-center text-lg text-muted-foreground md:text-xl">
                            Contact Us
                        </ShinyButton>
                    </Link>
                </motion.div>
            </LampContainer>
            <div className="mt-20" id="service">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.5,
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                    className="mt-4 mx-auto max-w-2xl text-center text-2xl font-medium tracking-tight text-slate-900 dark:text-slate-100 md:text-7xl "
                >
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Services</span>
                </motion.h1>
                <ServicesGrid />
            </div>

            {/* Tools & Tech Stack Section */}
            <div className="mt-20">
                <TechStackMarquee />
            </div>

            <div className="mt-20">
                <ProcessSection />
            </div>

            <div className="mt-10">
                <WhyChooseSection />
            </div>

            <div className="mt-20">
                <WhoWeWorkWith />
            </div>
            <div className="mt-20">
                <FAQSection />
            </div>
            <div className="mt-20">
                <CTASection />
            </div>
        </div>
    )
}