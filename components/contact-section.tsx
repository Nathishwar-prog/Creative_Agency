"use client";


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Mail,
  Layers,
  Cpu,
  Palette,
  Sparkles,
  Loader2,
  Send,
  Globe
} from 'lucide-react';

// --- Assets & Data ---

const PROJECT_TYPES = [
  { id: 'website', label: 'Website', icon: Globe },
  { id: 'webapp', label: 'Web App', icon: Layers },
  { id: 'ai', label: 'AI Solution', icon: Cpu },
  { id: 'design', label: 'UI / UX Design', icon: Palette },
  { id: 'unsure', label: 'Not sure yet', icon: Sparkles },
];

const TRUST_POINTS = [
  "No pressure conversations",
  "Founder-led collaboration",
  "Clear communication & timelines"
];

// --- Animation Variants ---

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, filter: 'blur(10px)' },
  visible: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: { type: 'spring', stiffness: 50, damping: 20 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, x: 100, rotateY: -15, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 40,
      damping: 20,
      delay: 0.4
    }
  }
};

// --- Sub-Components ---

const BackgroundEffects = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-black">
    {/* Noise Texture */}
    <div className="absolute inset-0 opacity-[0.12]" style={{ filter: 'url(#noise)' }} />
    <svg className="hidden">
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      </filter>
    </svg>

    {/* Moving Ambient Spotlights */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] bg-white/[0.03] rounded-full blur-[120px]"
    />

    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2],
        x: [0, -50, 0],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-zinc-800/20 rounded-full blur-[100px]"
    />

    {/* Subtle Grid */}
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }}
    />
  </div>
);

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full h-[2px] bg-zinc-800 rounded-full mb-8 overflow-hidden">
      <motion.div
        className="h-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
    </div>
  );
};

// --- Main Application Component ---

export default function ContactSection() {
  const [formData, setFormData] = useState({
    projectType: '',
    email: '',
    details: ''
  });

  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [focusedInput, setFocusedInput] = useState(false);

  // Handlers
  const handleOptionSelect = (id) => {
    setFormData(prev => ({ ...prev, projectType: id }));
    setTimeout(() => setStep(1), 400);
  };

  const handleNext = () => {
    if (step < 2) setStep(prev => prev + 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send details');

      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ projectType: '', email: '', details: '' });
    setStep(0);
    setIsSuccess(false);
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <div className="min-h-screen text-zinc-100 font-sans flex items-center justify-center p-4 md:p-8 lg:p-12 relative selection:bg-white selection:text-black overflow-hidden scrollbar-hide perspective-1000">
      <BackgroundEffects />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center z-10"
      >

        {/* LEFT COLUMN: Value Proposition */}
        <div className="space-y-10 lg:pr-8">
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-700/50 backdrop-blur-md text-zinc-300 text-xs font-medium uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Available for 2024</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Let’s Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600 inline-block">
                Something Real.
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl text-zinc-500 max-w-lg leading-relaxed font-light">
              Turn your concept into a digital reality. Whether it's a scalable platform or an AI integration, we craft the technology you need.
            </motion.p>
          </div>

          <motion.div variants={itemVariants} className="space-y-4 pt-4">
            {TRUST_POINTS.map((point, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-zinc-400 group cursor-default"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-white group-hover:border-white/40 group-hover:scale-110 transition-all duration-300">
                  <Check size={14} />
                </div>
                <span className="group-hover:text-white transition-colors">{point}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="pt-10 border-t border-zinc-800/50 flex flex-col sm:flex-row gap-10">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-3">Direct Contact</p>
              <a href="mailto:services.creativeagency@gmail.com" className="flex items-center gap-2 text-white hover:text-zinc-300 transition-colors group">
                <span className="font-medium text-lg">creativeagency@knowgrow.in</span>
                <ArrowRight size={16} className="-ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: Interactive Card */}
        <motion.div
          variants={cardVariants}
          className="relative perspective-1000"
        >
          {/* Card Container */}
          <div className="relative bg-zinc-950/80 backdrop-blur-xl border border-zinc-800 rounded-3xl shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent pointer-events-none" />

            <div className="p-8 md:p-10 min-h-[580px] flex flex-col relative z-10">

              {!isSuccess && <ProgressBar currentStep={step} totalSteps={3} />}

              <div className="flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">

                  {/* SUCCESS STATE */}
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                      className="text-center space-y-8 py-10"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                        className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                      >
                        <Send size={40} />
                      </motion.div>
                      <div className="space-y-2">
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-3xl font-bold text-white"
                        >
                          Request Sent
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-zinc-500"
                        >
                          We'll be in touch regarding your <span className="text-white">{PROJECT_TYPES.find(p => p.id === formData.projectType)?.label}</span> project shortly.
                        </motion.p>
                      </div>
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        onClick={resetForm}
                        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-0.5 mt-4"
                      >
                        Start another request <ArrowRight size={12} />
                      </motion.button>
                    </motion.div>
                  ) : (

                    /* FORM STEPS */
                    step === 0 ? (
                      /* STEP 1: Project Type Selection */
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 50, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <h2 className="text-3xl font-bold mb-2 text-white">The Goal.</h2>
                        <p className="text-zinc-500 mb-8">What are we building?</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {PROJECT_TYPES.map((item, i) => {
                            const Icon = item.icon;
                            const isSelected = formData.projectType === item.id;
                            return (
                              <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={item.id}
                                onClick={() => handleOptionSelect(item.id)}
                                className={`
                                  relative group flex items-center gap-4 p-5 rounded-2xl border text-left transition-all duration-300
                                  ${isSelected
                                    ? 'bg-white border-white text-black scale-[1.02] shadow-xl z-10'
                                    : 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:bg-zinc-900 hover:border-zinc-700 hover:text-zinc-200 hover:scale-[1.01]'
                                  }
                                `}
                              >
                                <Icon size={20} className={isSelected ? 'text-black' : 'text-zinc-500 group-hover:text-zinc-300'} />
                                <span className="font-medium tracking-wide">
                                  {item.label}
                                </span>
                              </motion.button>
                            );
                          })}
                        </div>
                      </motion.div>
                    ) : step === 1 ? (
                      /* STEP 2: Email Input */
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 50, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="text-3xl font-bold mb-2 text-white">The Connection.</h2>
                          <p className="text-zinc-500">Where should we send the proposal?</p>
                        </div>

                        <div className={`
                          relative group bg-zinc-900/50 rounded-2xl border-2 transition-all duration-300 overflow-hidden
                          ${focusedInput || formData.email ? 'border-white bg-black shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'border-zinc-800 hover:border-zinc-700'}
                        `}>
                          <input
                            type="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onFocus={() => setFocusedInput(true)}
                            onBlur={() => setFocusedInput(false)}
                            autoFocus
                            className="w-full bg-transparent p-6 text-xl text-white placeholder:text-zinc-700 outline-none"
                          />
                        </div>

                        <div className="flex items-center justify-between pt-6">
                          <button
                            onClick={() => setStep(0)}
                            className="text-sm text-zinc-600 hover:text-white transition-colors font-medium px-4 py-2"
                          >
                            Back
                          </button>
                          <button
                            onClick={handleNext}
                            disabled={!isValidEmail(formData.email)}
                            className={`
                              flex items-center gap-3 px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300
                              ${isValidEmail(formData.email)
                                ? 'bg-white text-black hover:bg-zinc-200 hover:scale-[1.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                                : 'bg-zinc-900 text-zinc-600 cursor-not-allowed border border-zinc-800'
                              }
                            `}
                          >
                            Continue <ArrowRight size={18} />
                          </button>
                        </div>
                      </motion.div>
                    ) : (
                      /* STEP 3: Details (Optional) */
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 50, filter: 'blur(5px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, x: -50, filter: 'blur(5px)' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                      >
                        <div>
                          <h2 className="text-3xl font-bold mb-2 text-white">The Details.</h2>
                          <p className="text-zinc-500">Anything specific we should know?</p>
                        </div>

                        <div className="relative group">
                          <textarea
                            value={formData.details}
                            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                            placeholder="E.g. We need a refresh for our SaaS landing page..."
                            className="w-full h-40 bg-zinc-900/30 border-2 border-zinc-800 focus:border-white focus:bg-black rounded-2xl p-6 text-white placeholder:text-zinc-700 outline-none resize-none transition-all duration-300 text-lg leading-relaxed shadow-inner"
                          />
                          <div className="absolute bottom-4 right-4 text-[10px] text-zinc-700 font-mono group-focus-within:text-zinc-500 transition-colors">OPTIONAL</div>
                        </div>

                        <div className="flex items-center justify-between pt-6">
                          <button
                            onClick={() => setStep(1)}
                            className="text-sm text-zinc-600 hover:text-white transition-colors font-medium px-4 py-2"
                          >
                            Back
                          </button>
                          <button
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`
                              flex items-center gap-3 px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-300
                              bg-white text-black hover:bg-zinc-200 hover:scale-[1.05] shadow-[0_0_30px_rgba(255,255,255,0.4)]
                            `}
                          >
                            {isSubmitting ? (
                              <Loader2 size={20} className="animate-spin" />
                            ) : (
                              <>
                                Send Request <ArrowRight size={20} />
                              </>
                            )}
                          </button>
                        </div>
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}