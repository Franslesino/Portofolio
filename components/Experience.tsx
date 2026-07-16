"use client";

import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { experiences } from "@/lib/experience";

export default function Experience() {
  const { language } = useLanguage();

  return (
    <SectionWrapper id="experience" className="py-20 sm:py-28">
      <motion.span
        className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {language === "id" ? "Jalur Karir" : "Career Path"}
      </motion.span>
      <motion.h2
        className="text-3xl sm:text-4xl font-heading font-bold mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {language === "id" ? "Pengalaman Kerja" : "Work Experience"}
      </motion.h2>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const content = exp[language];
            return (
              <motion.div
                key={`${exp.company}-${content.period}`}
                className="relative pl-12 sm:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 sm:left-6.5 top-6 w-3 h-3 rounded-full bg-accent border-2 border-background shadow-lg shadow-accent/30" />

                {/* Card */}
                <motion.div
                  className="p-5 sm:p-6 rounded-xl bg-surface border border-border hover:border-accent/30 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-heading font-semibold text-foreground">
                        {content.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <Building2 className="w-3.5 h-3.5" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted bg-surface-hover px-3 py-1.5 rounded-full w-fit">
                      <Calendar className="w-3 h-3" />
                      {content.period}
                    </div>
                  </div>

                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {content.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs font-medium bg-accent-muted text-accent rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
