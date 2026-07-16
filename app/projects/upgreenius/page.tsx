"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";

const screenshotsData = {
  id: [
    {
      src: "/images/upgreenius/home.png",
      title: "Halaman Utama & Katalog Kursus",
      desc: "Landing page dengan daftar kursus yang tersedia, filter berdasarkan kategori, pencarian dinamis, dan promo banner. Menampilkan statistik jumlah siswa dan video per kursus.",
    },
    {
      src: "/images/upgreenius/courses.png",
      title: "Dashboard Kursus Saya",
      desc: "Halaman pribadi siswa yang menampilkan seluruh kursus yang sedang diikuti beserta progress belajar, status pembayaran, dan akses cepat ke materi kelas.",
    },
    {
      src: "/images/upgreenius/course-detail.png",
      title: "Detail Kursus & Materi Belajar",
      desc: "Halaman detail kursus lengkap dengan daftar modul pembelajaran, video materi, file tugas, serta navigasi section yang terstruktur rapi.",
    },
    {
      src: "/images/upgreenius/quiz.png",
      title: "Sistem Kuis & Bank Soal",
      desc: "Halaman pengerjaan kuis akhir secara interaktif dengan penghitung waktu (timer), soal acak dari bank soal, dan kalkulasi nilai otomatis.",
    },
    {
      src: "/images/upgreenius/checkout.png",
      title: "Transaksi & Payment Gateway",
      desc: "Halaman checkout dengan integrasi Midtrans untuk pembayaran kursus, input kode voucher diskon, dan riwayat transaksi real-time.",
    },
    {
      src: "/images/upgreenius/instructor-dashboard.png",
      title: "Dashboard Instruktur",
      desc: "Panel instruktur untuk mengelola materi belajar, absensi siswa, koreksi tugas, pembuatan bank soal, dan statistik performa kelas.",
    },
    {
      src: "/images/upgreenius/admin-dashboard.png",
      title: "Dashboard Admin",
      desc: "Panel administrasi dengan grafik ringkasan transaksi bulanan, manajemen pengguna multi-role, kelola kursus, voucher, dan promo banner.",
    },
  ],
  en: [
    {
      src: "/images/upgreenius/home.png",
      title: "Home Page & Course Catalog",
      desc: "Main landing page showcasing available courses, dynamic category filters, search input, and promotional banner sliders. Displays student enrollment counts and video previews.",
    },
    {
      src: "/images/upgreenius/courses.png",
      title: "My Courses Dashboard",
      desc: "Personalized student dashboard listing all active courses, learning progress indicators, invoice payment statuses, and direct access to lessons.",
    },
    {
      src: "/images/upgreenius/course-detail.png",
      title: "Course Details & Syllabus",
      desc: "Detailed course profile containing comprehensive lecture video players, module lists, file attachment assignments downloads, and navigation sidebar.",
    },
    {
      src: "/images/upgreenius/quiz.png",
      title: "Interactive Quiz System",
      desc: "Dedicated final examination interface featuring countdown timers, randomized questions populated from the question bank, and immediate grading algorithms.",
    },
    {
      src: "/images/upgreenius/checkout.png",
      title: "Transactions & Payment Gateway",
      desc: "Secured checkout page integrated directly with Midtrans api, supporting discount code redemptions, payment slips, and real-time transaction logs.",
    },
    {
      src: "/images/upgreenius/instructor-dashboard.png",
      title: "Instructor Dashboard",
      desc: "Dedicated panel for instructors to design courses syllabus, grade assignments uploads, manage class logs, populate question banks, and review performance graphs.",
    },
    {
      src: "/images/upgreenius/admin-dashboard.png",
      title: "Admin Dashboard",
      desc: "Comprehensive administrator panel displaying monthly transaction charts, multi-role user managers, course listings edit panels, vouchers, and promo sliders configuration.",
    },
  ]
};

const techStack = [
  { name: "Laravel 12" },
  { name: "Tailwind CSS" },
  { name: "Alpine.js" },
  { name: "PostgreSQL" },
  { name: "Midtrans" },
];

const highlightsData = {
  id: [
    {
      icon: "👥",
      title: "Sistem Multi-Role",
      desc: "Tiga peran pengguna (Siswa, Instruktur, Admin) dengan hak akses dan dashboard yang berbeda untuk setiap role.",
    },
    {
      icon: "💳",
      title: "Integrasi Midtrans Payment",
      desc: "Gerbang pembayaran terintegrasi langsung dengan Midtrans untuk pembelian kursus, termasuk notifikasi callback otomatis dan sistem voucher diskon.",
    },
    {
      icon: "📝",
      title: "Bank Soal & Kuis Otomatis",
      desc: "Instruktur dapat membuat bank soal dengan ratusan pertanyaan. Sistem mengacak soal secara otomatis untuk setiap siswa, lengkap dengan timer dan kalkulasi nilai instan.",
    },
    {
      icon: "📄",
      title: "Auto-Generate Sertifikat PDF",
      desc: "Sertifikat kelulusan dibuat secara otomatis menggunakan Dompdf setelah siswa menyelesaikan kuis akhir dengan nilai minimum yang ditentukan.",
    },
    {
      icon: "📊",
      title: "Absensi & Penjadwalan Kelas",
      desc: "Instruktur dapat mengatur jadwal sesi kelas dan mengelola kehadiran siswa secara real-time melalui dashboard khusus.",
    },
    {
      icon: "🔐",
      title: "OAuth Google Login",
      desc: "Login cepat dan aman menggunakan akun Google melalui Laravel Socialite, selain login email/password tradisional.",
    },
  ],
  en: [
    {
      icon: "👥",
      title: "Multi-Role Architecture",
      desc: "Three distinct user interfaces and authorization policies configured dynamically for Students, Instructors, and Administrators.",
    },
    {
      icon: "💳",
      title: "Midtrans Payment Integration",
      desc: "Seamless payment gateway integration with callback listener routes, automatic invoice generation, and custom checkout discount vouchers.",
    },
    {
      icon: "📝",
      title: "Randomized Quiz Engine",
      desc: "Populates examination feeds by dynamically drawing random questions from the query bank, complete with timers and instant grade logging.",
    },
    {
      icon: "📄",
      title: "Auto-Generated PDF Certificates",
      desc: "Instantly compiles customized graduation documents in PDF format using Dompdf libraries as soon as students pass their final exams.",
    },
    {
      icon: "📊",
      title: "Attendance & Scheduling",
      desc: "Lets instructors organize class rosters, log attendances in real-time, and manage syllabus timelines through a specialized editor.",
    },
    {
      icon: "🔐",
      title: "Google Social Login",
      desc: "Provides rapid authentication with Google account profiles using Laravel Socialite drivers alongside typical email sign-ups.",
    },
  ]
};

export default function UpgreeniusPage() {
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
            Proyek PBL Semester 5 · 2025
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 tracking-tight">
            UPGREENIUS
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8">
            {language === "id"
              ? "Hybrid Learning Management System (LMS) dengan sistem multi-role, payment gateway Midtrans, dan auto-generate sertifikat PDF."
              : "Hybrid Learning Management System (LMS) featuring a multi-role system, Midtrans payment gateway, and auto-generated PDF certificates."}
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
                ? "UPGREENIUS adalah aplikasi web Learning Management System (LMS) hybrid yang dikembangkan sebagai proyek Project-Based Learning (PBL) di semester 5. Platform ini dirancang untuk memfasilitasi pembelajaran daring dan luring dengan fitur manajemen kelas, pembayaran otomatis, dan sertifikasi digital."
                : "UPGREENIUS is a hybrid Learning Management System (LMS) web application developed as a Project-Based Learning (PBL) curriculum in semester 5. The platform facilitates virtual and hybrid courses, absolute classroom registries, payment gates, and certification logs."}
            </p>
            <p className="text-muted leading-relaxed text-lg">
              {language === "id"
                ? "Sebagai Full Stack Developer, saya bertanggung jawab atas arsitektur backend (Laravel, PostgreSQL, Midtrans API), frontend (Blade, Tailwind CSS, Alpine.js), serta seluruh integrasi sistem termasuk OAuth login, auto-generate PDF sertifikat, dan bank soal kuis otomatis."
                : "As a Full Stack Developer, I engineered the backend layout (Laravel, PostgreSQL, Midtrans API interfaces), frontend designs (Blade, Tailwind CSS, Alpine.js structures), and all major components such as Google logins, automatic certificate compilers, and dynamic examination boards."}
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
