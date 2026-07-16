"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import SectionWrapper from "./SectionWrapper";
import { projects, type Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

function ProjectCard({ project, isActive }: ProjectCardProps) {
  const { language } = useLanguage();
  const isExternal = project.url.startsWith("http") || project.url.startsWith("//");
  const content = project[language];

  return (
    <motion.a
      href={project.url}
      target={isExternal ? "_blank" : "_self"}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`group block rounded-2xl overflow-hidden bg-surface text-foreground border border-border shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-accent/40 ${
        isActive ? "opacity-100" : "opacity-50 scale-95"
      }`}
      whileHover={{ y: -4 }}
      aria-label={`View project: ${content.title}`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Thumbnail / Photo - Left Side */}
        <div className="relative w-full md:w-[45%] aspect-video md:aspect-[4/3] bg-surface-hover overflow-hidden flex-shrink-0">
          {project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full"
            />
          ) : (
            <Image
              src={project.image}
              alt={content.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 400px"
              priority
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-2 rounded-lg bg-accent text-white shadow-md">
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Content - Right Side */}
        <div className="p-6 sm:p-8 flex flex-col justify-center flex-1">
          <h3 className="text-xl font-heading font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
            {content.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed mb-6">
            {content.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-md border border-accent/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectCarousel() {
  const [current, setCurrent] = useState(0);
  const total = projects.length;
  const { language } = useLanguage();

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  // Touch/swipe support
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
    setTouchStart(null);
  };

  return (
    <SectionWrapper id="projects" className="py-20 sm:py-28">
      {/* Header */}
      <div className="mb-12">
        <motion.span
          className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          Selected Works
        </motion.span>
        <motion.h2
          className="text-3xl sm:text-4xl font-heading font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {language === "id" ? "Proyek Terbaik Saya" : "My Best Projects"}
        </motion.h2>
      </div>

      {/* Carousel Wrapper with buttons on the sides */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow Button */}
        <button
          onClick={prev}
          className="absolute left-0 lg:-left-16 z-10 p-3 rounded-full bg-white text-zinc-900 shadow-lg border border-zinc-200 hover:bg-zinc-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Previous project"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Content Area */}
        <div
          className="w-full max-w-4xl overflow-hidden px-12 lg:px-0"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ProjectCard project={projects[current]} isActive={true} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={next}
          className="absolute right-0 lg:-right-16 z-10 p-3 rounded-full bg-white text-zinc-900 shadow-lg border border-zinc-200 hover:bg-zinc-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
          aria-label="Next project"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              index === current
                ? "w-8 bg-accent"
                : "w-2 bg-border hover:bg-muted"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
