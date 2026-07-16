"use client";

import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, socialLinks } from "@/lib/constants";

export default function Footer() {
  const { language } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-border bg-surface/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-sm text-muted">
            <span>© {new Date().getFullYear()}</span>
            <span className="font-medium text-foreground">
              {personalInfo.name}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-muted hover:text-foreground transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-muted hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={socialLinks.email}
              aria-label="Send Email"
              className="text-muted hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-surface border border-border hover:border-accent/40 hover:bg-surface-hover transition-all text-muted hover:text-foreground cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
