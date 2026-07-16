"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/lib/constants";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export default function Hero() {
  const { language } = useLanguage();
  const info = personalInfo[language];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-[128px] animate-pulse-slow [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[200px]" />
      </div>

      <motion.div
        className="mx-auto max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Side - Description */}
        <div className="md:col-span-7 flex flex-col items-start text-left order-2 md:order-1">
          {/* Greeting tag */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-accent-muted text-accent rounded-full border border-accent/20">
              {language === "id" ? "Siap Bekerja" : "Available for hire"}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-6 leading-tight"
          >
            {info.headline}
            <br />
            <span className="gradient-text">{info.role}</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-xl"
          >
            {info.subHeadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="/cv/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              Download CV
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-surface hover:bg-surface-hover text-foreground font-medium rounded-xl border border-border transition-all duration-300 hover:-translate-y-0.5"
            >
              {language === "id" ? "Lihat Proyek" : "View Projects"}
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Right Side - Photo (3:4 Ratio) */}
        <div className="md:col-span-5 flex justify-center md:justify-end order-1 md:order-2">
          <motion.div
            variants={itemVariants}
            className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[3/4] rounded-2xl overflow-hidden border border-border p-1.5 bg-surface/40 backdrop-blur-md shadow-2xl"
          >
            <div className="w-full h-full rounded-xl bg-surface flex items-center justify-center overflow-hidden relative border border-border/40">
              <Image 
                src="/images/projects/foto.png" 
                alt={personalInfo.name} 
                fill 
                className="object-cover w-full h-full" 
                priority
              />
              
              {/* Status indicator */}
              <div className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-500 rounded-full border-2 border-background shadow-md shadow-emerald-500/30 z-10" />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
