"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Types ---

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

// --- Data ---

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines depend on scope and complexity. Most websites take 2–4 weeks, while larger web or AI projects may take 4–8 weeks."
  },
  {
    question: "Do you work with startups and small teams?",
    answer: "Yes. We frequently work with startups, founders, and growing businesses at different stages, from idea to scale."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Absolutely. We offer ongoing support, maintenance, and optimization to ensure your product continues to perform well."
  },
  {
    question: "Can you help with product ideas and planning?",
    answer: "Yes. We help refine ideas, define features, and plan scalable solutions before development begins."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, battle-tested technologies like Next.js, React, AI/LLMs, PostgreSQL, and Figma to build fast and reliable products."
  },
  {
    question: "How do we get started?",
    answer: "Simply contact us with your project details. We’ll review your requirements and schedule a discovery call."
  }
];

// --- Components ---

/**
 * Individual FAQ Accordion Item
 */
const FAQItem = ({ question, answer, isOpen, onClick, index }: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={cn(
        "border-b border-white/5 last:border-0",
        isOpen ? "bg-white/[0.02]" : "bg-transparent"
      )}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-cyan-400"
        aria-expanded={isOpen}
      >
        <span className={cn("text-lg font-medium text-white", isOpen && "text-cyan-400")}>
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "circOut" }}
          className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70"
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-neutral-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/**
 * Main FAQ Section
 */
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full bg-neutral-950 py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-white md:text-5xl"
          >
            Frequently Asked <span className="text-cyan-400">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-neutral-400"
          >
            Answers to common questions about working with Creative Stack.
          </motion.p>
        </div>

        <div className="rounded-2xl border border-white/5 bg-neutral-900/20 px-6 backdrop-blur-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Final CTA Section
 */
export const CTASection = () => {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-950 py-32 px-6">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-blue-500/30 blur-[100px] animate-pulse" />
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-black tracking-tight text-transparent md:text-7xl">
            Have a project in mind? <br />
            Let’s build something <span className="text-cyan-400">impactful.</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-8 max-w-2xl text-xl text-neutral-400"
        >
          Tell us about your idea, and we’ll help you turn it into a high-quality digital product.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-cyan-500 px-8 py-4 text-lg font-bold text-neutral-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.5)]"
          >
            <span>Start a Project</span>
            <Sparkles className="h-5 w-5 fill-neutral-950" />
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </motion.button>

          <button className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-medium text-white transition-colors hover:text-cyan-400">
            Book a Free Consultation
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .group-hover\:animate-shimmer:hover {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
};

// --- Export Demo Container ---

export default function AgencyFAQAndCTA() {
  return (
    <div className="bg-neutral-950 text-white">
      <FAQSection />
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <CTASection />
    </div>
  );
}