"use client";

import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-surface hover:bg-surface-hover border border-border text-xs font-bold text-muted hover:text-foreground transition-colors cursor-pointer select-none"
      aria-label={`Switch to ${language === "id" ? "English" : "Bahasa Indonesia"}`}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
    >
      <Globe className="w-3.5 h-3.5 text-accent" />
      <span className="font-sans uppercase tracking-wider">{language === "id" ? "ID" : "EN"}</span>
    </motion.button>
  );
}
