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
      src: "/images/bluevoyage/home.png",
      title: "Halaman Utama (Beranda)",
      desc: "Halaman depan yang dinamis dengan video latar laut, navigasi bahasa, dan widget pencarian utama untuk memulai reservasi perjalanan.",
    },
    {
      src: "/images/bluevoyage/results.png",
      title: "Hasil Pencarian & Filter Kapal",
      desc: "Halaman interaktif yang menampilkan daftar armada kapal pesiar yang tersedia sesuai kriteria tanggal, jumlah tamu, dan destinasi yang dipilih.",
    },
    {
      src: "/images/bluevoyage/destinations.png",
      title: "Eksplorasi Destinasi Wisata",
      desc: "Katalog destinasi wisata unggulan di Kepulauan Togean dan Pulau Komodo dengan rincian keunikan alam dan aktivitas di tiap lokasi.",
    },
    {
      src: "/images/bluevoyage/boat.png",
      title: "Spesifikasi & Detail Armada",
      desc: "Halaman profil lengkap kapal pesiar (liveaboard), menampilkan foto kabin, area dek, fasilitas onboard, serta spesifikasi teknis kapal.",
    },
    {
      src: "/images/bluevoyage/activity.png",
      title: "Aktivitas Perjalanan",
      desc: "Informasi lengkap kegiatan petualangan bahari mulai dari snorkeling, scuba diving, trekking pulau, hingga bersantai di pantai pasir putih.",
    },
    {
      src: "/images/bluevoyage/satwa.png",
      title: "Keanekaragaman Margasatwa (Wildlife)",
      desc: "Halaman edukatif mengenai satwa endemik yang dapat ditemui sepanjang perjalanan, seperti Komodo Dragon dan keindahan terumbu karang bawah laut.",
    },
    {
      src: "/images/bluevoyage/local%20community.png",
      title: "Pemberdayaan Komunitas Lokal",
      desc: "Showcase inisiatif sosial dan kunjungan budaya ke desa-desa nelayan lokal untuk mendukung ekonomi berkelanjutan masyarakat Togean.",
    },
    {
      src: "/images/bluevoyage/signature%20programs.png",
      title: "Program Unggulan & Paket Khas",
      desc: "Panduan mengenai program perjalanan tematik yang dirancang secara khusus untuk memberikan pengalaman wisata bahari yang autentik.",
    },
  ],
  en: [
    {
      src: "/images/bluevoyage/home.png",
      title: "Main Landing Page",
      desc: "Dynamic homepage featuring a fullscreen background video, multilingual navigation, and the main search widget to initiate travel bookings.",
    },
    {
      src: "/images/bluevoyage/results.png",
      title: "Search Results & Yacht Filters",
      desc: "Interactive results page showcasing available liveaboard fleets based on selected travel dates, guest counts, and destinations.",
    },
    {
      src: "/images/bluevoyage/destinations.png",
      title: "Destinations Catalog",
      desc: "Showcase of premium travel destinations in Togean Islands and Komodo, highlighting scenic routes and local activities.",
    },
    {
      src: "/images/bluevoyage/boat.png",
      title: "Fleet Specifications & Cabin Details",
      desc: "Complete profile page of a yacht, displaying cabin photos, deck areas, onboard amenities, and comprehensive technical specifications.",
    },
    {
      src: "/images/bluevoyage/activity.png",
      title: "On-Trip Activities",
      desc: "Guides and suggestions for marine adventures, including snorkeling, scuba diving, island trekking, and beach relaxation.",
    },
    {
      src: "/images/bluevoyage/satwa.png",
      title: "Wildlife Diversity",
      desc: "Educational page highlighting native species, coral reef formations, Komodo dragons, and local ecosystem conservation.",
    },
    {
      src: "/images/bluevoyage/local%20community.png",
      title: "Local Community Empowerment",
      desc: "Showcasing social initiatives and cultural visits to local fishing villages to promote sustainable tourism in the region.",
    },
    {
      src: "/images/bluevoyage/signature%20programs.png",
      title: "Signature Programs & Packages",
      desc: "Curated itineraries and themed sea travel packages designed for authentic and immersive marine tourism experiences.",
    },
  ]
};

const techStack = [
  { name: "Next.js", color: "bg-black/10 text-zinc-800" },
  { name: "TypeScript", color: "bg-blue-50 text-blue-700" },
  { name: "Tailwind CSS", color: "bg-cyan-50 text-cyan-700" },
  { name: "PostgreSQL", color: "bg-indigo-50 text-indigo-700" },
  { name: "REST API", color: "bg-orange-50 text-orange-700" },
  { name: "i18n", color: "bg-green-50 text-green-700" },
  { name: "Supabase", color: "bg-emerald-50 text-emerald-700" },
];

const highlightsData = {
  id: [
    {
      icon: "🔍",
      title: "Pencarian & Filter Dinamis",
      desc: "Filter pencarian kapal dan destinasi secara real-time tanpa reload halaman, menggunakan React state management yang efisien.",
    },
    {
      icon: "🛏️",
      title: "Pencocokan Kabin Otomatis",
      desc: "Sistem pencocokan ketersediaan kabin otomatis berdasarkan tanggal dan jumlah tamu yang dipilih user, langsung terhubung ke database.",
    },
    {
      icon: "🌍",
      title: "Dukungan Multi-Bahasa",
      desc: "Website tersedia dalam dua bahasa (Bahasa Indonesia & English) menggunakan sistem i18n dengan file konfigurasi locale terpisah.",
    },
    {
      icon: "✨",
      title: "Animasi Premium",
      desc: "Animasi scroll, hover, dan transisi halaman yang halus menggunakan Framer Motion untuk menciptakan pengalaman pengguna yang mewah.",
    },
  ],
  en: [
    {
      icon: "🔍",
      title: "Dynamic Search & Filter",
      desc: "Real-time yacht and destination filtering without page reloads, using efficient client-side React state management.",
    },
    {
      icon: "🛏️",
      title: "Cabin Availability Matching",
      desc: "Automatic matching system that filters cabin availability by dates and guest capacities, querying database real-time.",
    },
    {
      icon: "🌍",
      title: "Multi-Language Support",
      desc: "Website available in both Indonesian and English using a structured locale files i18n system.",
    },
    {
      icon: "✨",
      title: "Premium Animations",
      desc: "Smooth page transitions, scroll animations, and interactive hover feedback built with Framer Motion.",
    },
  ]
};

export default function BlueVoyagePage() {
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

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-background border-b border-border py-24">
        <motion.div
          className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-widest uppercase bg-surface text-muted rounded-full border border-border">
            PT Canard Money Indonesia · Des 2025 – Feb 2026
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            Blue Voyage
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8">
            {language === "id" 
              ? "Platform pemesanan liveaboard mewah untuk wisata bahari di Kepulauan Togean, Sulawesi Tengah."
              : "Luxury liveaboard booking platform for marine tourism in Togean Islands, Central Sulawesi."}
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
                ? "Blue Voyage adalah aplikasi web liveaboard booking untuk wisata bahari premium di Kepulauan Togean, Sulawesi Tengah. Dikembangkan sebagai produk komersial untuk PT Canard Money Indonesia, platform ini dirancang untuk memudahkan wisatawan lokal dan mancanegara dalam memesan paket wisata laut eksklusif."
                : "Blue Voyage is a luxury liveaboard booking web application designed for premium marine tourism in the Togean Islands, Central Sulawesi. Built as a commercial product for PT Canard Money Indonesia, the platform facilitates seamless yacht charter and cabin bookings for domestic and international tourists."}
            </p>
            <p className="text-muted leading-relaxed text-lg">
              {language === "id"
                ? "Sebagai Fullstack Developer, saya bertanggung jawab membangun seluruh arsitektur web dari frontend (UI/UX dengan Next.js & Tailwind CSS) hingga backend (API Routes & integrasi PostgreSQL), termasuk sistem pencocokan ketersediaan kabin secara real-time dan dukungan multi-bahasa."
                : "As a Fullstack Developer, I was responsible for building the entire web architecture from the frontend (UI/UX with Next.js & Tailwind CSS) to the backend (API Routes & PostgreSQL integration), including real-time cabin availability matching and multilingual i18n support."}
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
                    src={`${shot.src}?v=3`}
                    alt={shot.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
                {/* Text */}
                <div className="w-full md:w-[40%]">
                  <h3 className="text-2xl font-bold mb-4">{shot.title}</h3>
                  <p className="text-muted leading-relaxed">{shot.desc}</p>
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
