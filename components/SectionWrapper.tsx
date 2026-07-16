"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  delay = 0,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={`w-full px-4 sm:px-6 lg:px-8 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      custom={delay}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </motion.section>
  );
}
