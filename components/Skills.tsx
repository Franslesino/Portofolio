"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { skills, skillCategories, type Skill } from "@/lib/skills";

function SkillBadge({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-surface-hover transition-all duration-300 cursor-default"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03, duration: 0.4 }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      <div className="w-2 h-2 rounded-full bg-accent group-hover:animate-pulse-slow" />
      <span className="text-sm font-medium text-foreground">{skill.name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const { language } = useLanguage();

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const getCategoryLabel = (key: string, defaultLabel: string) => {
    if (language === "en") {
      switch (key) {
        case "frontend":
          return "Frontend";
        case "backend":
          return "Backend / Database";
        case "tools":
          return "Tools & Software";
        case "design":
          return "Design & Others";
        default:
          return defaultLabel;
      }
    } else {
      switch (key) {
        case "frontend":
          return "Frontend";
        case "backend":
          return "Backend / Database";
        case "tools":
          return "Tools & Software";
        case "design":
          return "Design & Lainnya";
        default:
          return defaultLabel;
      }
    }
  };

  return (
    <SectionWrapper id="skills" className="py-20 sm:py-28">
      <motion.span
        className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {language === "id" ? "Keahlian" : "Tech Stack"}
      </motion.span>
      <motion.h2
        className="text-3xl sm:text-4xl font-heading font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        {language === "id" ? "Skills & Teknologi" : "Skills & Technology"}
      </motion.h2>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <button
          onClick={() => setActiveCategory("all")}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
            activeCategory === "all"
              ? "bg-accent text-white shadow-lg shadow-accent/25"
              : "bg-surface text-muted border border-border hover:text-foreground hover:border-accent/30"
          }`}
        >
          {language === "id" ? "Semua" : "All"}
        </button>
        {skillCategories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActiveCategory(cat.key)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 cursor-pointer ${
              activeCategory === cat.key
                ? "bg-accent text-white shadow-lg shadow-accent/25"
                : "bg-surface text-muted border border-border hover:text-foreground hover:border-accent/30"
            }`}
          >
            {getCategoryLabel(cat.key, cat.label)}
          </button>
        ))}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
        layout
      >
        {filteredSkills.map((skill, index) => (
          <SkillBadge key={skill.name} skill={skill} index={index} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
