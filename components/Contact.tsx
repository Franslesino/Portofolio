"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { personalInfo, socialLinks } from "@/lib/constants";

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate sending — in production, connect to an API route or service
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 3000);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: socialLinks.email,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: personalInfo.phone,
      href: socialLinks.whatsapp,
    },
    {
      icon: LinkedinIcon,
      label: "LinkedIn",
      value: language === "id" ? "Terhubung di LinkedIn" : "Connect on LinkedIn",
      href: socialLinks.linkedin,
    },
    {
      icon: GithubIcon,
      label: "GitHub",
      value: language === "id" ? "Lihat kode saya" : "View my code",
      href: socialLinks.github,
    },
  ];

  return (
    <SectionWrapper id="contact" className="py-20 sm:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left - Info */}
        <div>
          <motion.span
            className="inline-block text-accent text-sm font-medium tracking-wider uppercase mb-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {language === "id" ? "Hubungi Saya" : "Get in Touch"}
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl font-heading font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {language === "id" ? "Mari Berkolaborasi" : "Let's Collaborate"}
          </motion.h2>
          <motion.p
            className="text-muted leading-relaxed mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {language === "id"
              ? "Tertarik untuk bekerja sama atau punya pertanyaan? Jangan ragu untuk menghubungi saya melalui form di samping atau langsung via channel berikut."
              : "Interested in working together or have a question? Feel free to reach out to me via the form on the right or directly through the following channels."}
          </motion.p>

          <div className="space-y-3">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-surface border border-border hover:border-accent/30 hover:bg-surface-hover transition-all duration-300 group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ x: 4 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-muted uppercase tracking-wider">
                      {method.label}
                    </div>
                    <div className="text-sm font-medium text-foreground">
                      {method.value}
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Right - Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 p-6 sm:p-8 rounded-2xl bg-surface border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div>
            <label
              htmlFor="contact-name"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {language === "id" ? "Nama" : "Name"}
            </label>
            <input
              id="contact-name"
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder={language === "id" ? "Nama lengkap" : "Full name"}
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block text-sm font-medium text-foreground mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
              placeholder={language === "id" ? "email@contoh.com" : "email@example.com"}
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block text-sm font-medium text-foreground mb-2"
            >
              {language === "id" ? "Pesan" : "Message"}
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
              placeholder={
                language === "id"
                  ? "Ceritakan proyek atau kebutuhan Anda..."
                  : "Tell me about your project or needs..."
              }
            />
          </div>
          <motion.button
            type="submit"
            disabled={isSending}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-accent/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            whileTap={{ scale: 0.98 }}
          >
            {isSent ? (
              language === "id" ? "Terkirim! ✓" : "Sent! ✓"
            ) : isSending ? (
              language === "id" ? "Mengirim..." : "Sending..."
            ) : (
              <>
                <Send className="w-4 h-4" />
                {language === "id" ? "Kirim Pesan" : "Send Message"}
              </>
            )}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
