"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const screenshotsData = {
  id: [
    {
      src: "/images/seasvoyage/home.png",
      title: "Landing Page & Hero",
      desc: "Halaman utama dengan hero section fullscreen, smart booking bar yang mengikuti scroll, dan navigasi multibahasa. Menampilkan pencarian destinasi, tanggal, dan jumlah tamu secara interaktif.",
    },
    {
      src: "/images/seasvoyage/promos.png",
      title: "Promo & Penawaran Spesial",
      desc: "Section penawaran spesial dengan badge diskon menarik, informasi operator kapal, harga asli vs harga promo, dan carousel interaktif yang responsif di semua perangkat.",
    },
    {
      src: "/images/seasvoyage/ships.png",
      title: "Cruise Packages",
      desc: "Katalog lengkap paket pelayaran kapal pesiar mewah, menampilkan rincian durasi perjalanan, operator, harga promo, dan kapasitas kabin untuk setiap paket.",
      canvaLink: "https://canva.link/0naa79f7a85bgqi",
    },
    {
      src: "/images/seasvoyage/destinations.png",
      title: "Experience",
      desc: "Galeri foto dan panduan aktivitas petualangan laut premium mulai dari snorkeling, scuba diving, hingga tracking pulau di berbagai destinasi eksotis Indonesia.",
      canvaLink: "https://www.canva.com/design/DAHPWmlG9nc/tC3KnKpKu61BA4rJUAyJEA/edit",
    },
    {
      src: "/images/seasvoyage/10.png",
      title: "Explore Indonesian Destinations",
      desc: "Halaman eksplorasi destinasi premium Indonesia yang interaktif, menampilkan keindahan alam bawah laut, spot selam terbaik, serta informasi panduan aktivitas khusus untuk setiap kepulauan eksotis.",
    },
    {
      src: "/images/seasvoyage/detail ship.png",
      title: "Pemesanan",
      desc: "Proses pemesanan dan reservasi kabin secara langsung, menyajikan informasi harga per malam, fasilitas kamar, dan form pengisian data tamu.",
      canvaLink: "https://canva.link/0gld1h4747p1lnf",
    },
  ],
  en: [
    {
      src: "/images/seasvoyage/home.png",
      title: "Landing Page & Hero",
      desc: "Main landing page with a fullscreen hero section, scroll-bound smart booking bar, and multilingual navigation. Features interactive search inputs for destinations, dates, and guests.",
    },
    {
      src: "/images/seasvoyage/promos.png",
      title: "Promos & Special Offers",
      desc: "Special offers section featuring attractive discount badges, operator info, retail vs promo pricing comparisons, and responsive touch-enabled carousels.",
    },
    {
      src: "/images/seasvoyage/ships.png",
      title: "Cruise Packages",
      desc: "Complete catalog of luxury cruise packages, showcasing trip duration details, operator name, promotional pricing, and cabin capacity specifications.",
      canvaLink: "https://canva.link/0naa79f7a85bgqi",
    },
    {
      src: "/images/seasvoyage/destinations.png",
      title: "Experience",
      desc: "Photo gallery and activity guides for premium marine adventures including snorkeling, scuba diving, and island trekking across exotic Indonesian locations.",
      canvaLink: "https://www.canva.com/design/DAHPWmlG9nc/tC3KnKpKu61BA4rJUAyJEA/edit",
    },
    {
      src: "/images/seasvoyage/10.png",
      title: "Explore Indonesian Destinations",
      desc: "Interactive explore page displaying premium Indonesian destinations, featuring underwater scenic highlights, diving spots, and activity guides for exotic archipelagos.",
    },
    {
      src: "/images/seasvoyage/detail ship.png",
      title: "Booking & Reservation",
      desc: "Direct booking and cabin reservation flow, presenting room prices per night, suite amenities lists, and the guest credentials form.",
      canvaLink: "https://canva.link/0gld1h4747p1lnf",
    },
  ]
};

const techStack = [
  { name: "Next.js 16" },
  { name: "React 19" },
  { name: "TypeScript" },
  { name: "Tailwind CSS v4" },
  { name: "REST API" },
  { name: "PostgreSQL" },
  { name: "i18n" },
];

const highlightsData = {
  id: [
    {
      icon: "🌍",
      title: "Multi-Language (i18n)",
      desc: "Dukungan internasionalisasi dengan 13+ bahasa termasuk Inggris, Indonesia, Jerman, Prancis, dan lainnya. Routing berbasis bahasa otomatis (/en, /id, /de, /fr).",
    },
    {
      icon: "🔍",
      title: "Smart Booking Bar",
      desc: "Bar pencarian cerdas yang berubah posisi secara dinamis: tampil di bawah hero section, lalu menempel di header saat pengguna scroll ke bawah halaman.",
    },
    {
      icon: "🚢",
      title: "Katalog Kapal Interaktif",
      desc: "Galeri armada kapal pesiar lengkap dengan detail kabin, spesifikasi teknis, foto interior/eksterior, jadwal pelayaran, dan kalkulasi harga otomatis.",
    },
    {
      icon: "🏝️",
      title: "Penjelajah Destinasi",
      desc: "Halaman destinasi wisata Indonesia yang kaya konten: panduan perjalanan, galeri foto, paket cruise tersedia, dan informasi aktivitas di setiap lokasi.",
    },
    {
      icon: "💰",
      title: "Promo & Dynamic Pricing",
      desc: "Sistem penawaran spesial dengan badge diskon, harga coret, dan carousel promo yang menarik perhatian pengunjung dengan animasi Framer Motion.",
    },
    {
      icon: "⚡",
      title: "Static Export & Performance",
      desc: "Optimasi performa maksimal dengan static export Next.js untuk loading ultra-cepat, server-side rendering, dan image optimization otomatis.",
    },
  ],
  en: [
    {
      icon: "🌍",
      title: "Multi-Language (i18n)",
      desc: "Internationalization support with 13+ languages including English, Indonesian, German, French, and more. Automated language routing (/en, /id, /de, /fr).",
    },
    {
      icon: "🔍",
      title: "Smart Booking Bar",
      desc: "Smart search bar that switches position dynamically: loads below the hero section and snaps to the header as the user scrolls down.",
    },
    {
      icon: "🚢",
      title: "Interactive Vessel Directory",
      desc: "Yacht fleet gallery complete with cabin layouts, technical specifications, interior/exterior photos, cruise schedules, and automatic price calculations.",
    },
    {
      icon: "🏝️",
      title: "Destination Explorer",
      desc: "Richly detailed Indonesian destinations directory: travel guides, photo galleries, available cruises, and local activities guides.",
    },
    {
      icon: "💰",
      title: "Promos & Dynamic Pricing",
      desc: "Special offers system featuring discount badges, strike-through original pricing, and promotional carousels powered by Framer Motion.",
    },
    {
      icon: "⚡",
      title: "Static Export & Performance",
      desc: "Maximum performance optimization using Next.js static export for ultra-fast loading speeds, pre-rendering, and image assets optimization.",
    },
  ]
};

export default function SeasVoyagePage() {
  const { language } = useLanguage();
  const screenshots = screenshotsData[language];
  const highlights = highlightsData[language];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation Controls */}
      <div className="fixed top-6 left-6 right-6 z-50 flex items-center justify-between pointer-events-none">
        <div className="pointer-events-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 bg-surface/90 backdrop-blur-md border border-border rounded-full text-sm font-medium text-muted hover:text-foreground shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "id" ? "Kembali ke Portofolio" : "Back to Portfolio"}
          </Link>
        </div>
        <div className="flex items-center gap-2 pointer-events-auto">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>

      {/* Hero Section - Clean */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-background border-b border-border py-24">
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-surface text-muted rounded-full border border-border">
            Freelance Project · PT Canard Money Indonesia · 2025
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            SEAS VOYAGE
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8">
            {language === "id"
              ? "Platform pemesanan perjalanan laut premium dengan smart booking bar, katalog kapal interaktif, dan dukungan multibahasa 13+ bahasa."
              : "Premium sea travel booking platform featuring a smart booking bar, interactive boat catalog, and multilingual support for 13+ languages."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="px-3 py-1.5 text-xs font-semibold bg-surface text-muted rounded-full border border-border"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-20">
        {/* About Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">
            {language === "id" ? "Tentang Proyek" : "About the Project"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-muted leading-relaxed text-lg">
              {language === "id"
                ? "Seas Voyage (Comodo Cruise) adalah platform booking perjalanan laut premium yang dikembangkan untuk PT Canard Money Indonesia. Aplikasi ini memungkinkan wisatawan untuk menjelajahi destinasi eksotis Indonesia seperti Komodo, Raja Ampat, dan Kepulauan Togean melalui pengalaman kapal pesiar mewah."
                : "Seas Voyage (Comodo Cruise) is a premium sea travel booking platform developed for PT Canard Money Indonesia. The application enables travelers to explore exotic Indonesian destinations such as Komodo, Raja Ampat, and Togean Islands through luxury cruise experiences."}
            </p>
            <p className="text-muted leading-relaxed text-lg">
              {language === "id"
                ? "Sebagai Fullstack Developer, saya berkontribusi dalam perancangan arsitektur modern Next.js v16 dengan integrasi multi-bahasa yang dinamis, UI interaktif dengan Framer Motion, database PostgreSQL untuk katalog kapal, serta optimalisasi server-side rendering untuk performa terbaik."
                : "As a Fullstack Developer, I contributed to designing the modern Next.js v16 architecture with dynamic multilingual integrations, interactive user interfaces with Framer Motion, PostgreSQL database configurations for fleet cataloging, and server-side rendering optimizations for maximum performance."}
            </p>
          </div>
        </motion.section>

        {/* Key Highlights */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-10">
            {language === "id" ? "Fitur Utama" : "Key Features"}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-surface border border-border hover:border-accent/40 hover:bg-accent-muted transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Screenshot Gallery */}
        <section>
          <motion.h2
            className="text-3xl font-bold mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {language === "id" ? "Tampilan Halaman" : "Page Showcases"}
          </motion.h2>
          <div className="space-y-20">
            {screenshots.map((shot, i) => (
              <motion.div
                key={shot.title}
                className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Image */}
                <div className="w-full md:w-[60%] aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-border relative bg-surface flex-shrink-0">
                  <img
                    src={`${shot.src}?v=1`}
                    alt={shot.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
                {/* Text */}
                <div className="w-full md:w-[40%]">
                  <h3 className="text-2xl font-bold mb-4">{shot.title}</h3>
                  <p className="text-muted leading-relaxed mb-4">{shot.desc}</p>
                  {shot.canvaLink && (
                    <div className="mt-4">
                      <a
                        href={shot.canvaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#00c4cc] hover:bg-[#00b0b8] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
                      >
                        <ExternalLink className="w-4 h-4" />
                        {language === "id" ? "Buka Halaman Lengkap di Canva" : "View Full Page on Canva"}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Footer CTA */}
        <motion.div
          className="mt-24 text-center py-16 rounded-3xl bg-surface border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-3">
            {language === "id" ? "Tertarik dengan proyek serupa?" : "Interested in a similar project?"}
          </h3>
          <p className="text-muted mb-6">
            {language === "id" ? "Hubungi saya untuk berdiskusi lebih lanjut." : "Get in touch to discuss further."}
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white hover:bg-accent-hover font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "id" ? "Kembali ke Portofolio" : "Back to Portfolio"}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
