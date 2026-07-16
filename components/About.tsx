"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, FolderOpen } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo } from "@/lib/constants";

export default function About() {
  const { language } = useLanguage();
  const info = personalInfo[language];

  const stats = [
    { 
      icon: Briefcase, 
      value: "1+", 
      label: language === "id" ? "Tahun Pengalaman" : "Year of Experience" 
    },
    { 
      icon: FolderOpen, 
      value: "5+", 
      label: language === "id" ? "Proyek Utama" : "Core Projects" 
    },
    { 
      icon: Code, 
      value: "10+", 
      label: language === "id" ? "Tech Stack Utama" : "Core Tech Stack" 
    },
  ];

  return (
    <SectionWrapper id="about" className="py-20 sm:py-28">
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        {/* Text Content */}
        <div className="lg:col-span-3">
          <motion.span
            className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {language === "id" ? "Tentang Saya" : "About Me"}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {language === "id" ? (
              <>
                Membangun pengalaman digital yang{" "}
                <span className="gradient-text">berkesan</span>
              </>
            ) : (
              <>
                Building <span className="gradient-text">memorable</span> digital experiences
              </>
            )}
          </motion.h2>
          <motion.p
            className="text-muted leading-relaxed text-base sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {info.aboutMe}
          </motion.p>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-bold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
