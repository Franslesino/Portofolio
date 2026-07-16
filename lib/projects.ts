export interface Project {
  id: {
    title: string;
    description: string;
  };
  en: {
    title: string;
    description: string;
  };
  image: string;
  url: string;
  techStack: string[];
  video?: string;
}

export const projects: Project[] = [
  {
    id: {
      title: "SleepWell 2.0 - Visualisasi & Laporan AI",
      description:
        "Aplikasi web Next.js untuk visualisasi data studi tidur dan laporan AI. Memproses file EDF menggunakan Python MNE untuk mengubah sinyal mentah EEG/ECG menjadi dataset ML.",
    },
    en: {
      title: "SleepWell 2.0 - Visualization & AI Reports",
      description:
        "Next.js web application for sleep study data visualization and AI reporting. Processes EDF files using Python MNE to convert raw EEG/ECG signals into ML datasets.",
    },
    image: "/images/projects/sleepwell-hero.png",
    url: "https://sleep-well.tech/",
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "Python", "MNE"],
  },
  {
    id: {
      title: "Blue Voyage - Aplikasi Web Booking Mewah",
      description:
        "Web pemesanan kapal pesiar mewah dengan filter pencarian dinamis, pencocokan ketersediaan kabin real-time, interaksi animasi Framer Motion, dan multi-bahasa.",
    },
    en: {
      title: "Blue Voyage - Luxury Booking Web App",
      description:
        "Luxury cruise booking web application with dynamic search filters, real-time cabin availability matching, Framer Motion animations, and multi-language support.",
    },
    image: "/images/bluevoyage/home.png",
    url: "/projects/blue-voyage",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "REST API", "i18n"],
  },
  {
    id: {
      title: "Seas Voyage - Pemesanan Perjalanan Laut Premium",
      description:
        "Platform pemesanan perjalanan laut premium dengan booking bar interaktif, katalog kapal liveaboard, destinasi wisata Indonesia, dan integrasi i18n multibahasa.",
    },
    en: {
      title: "Seas Voyage - Premium Sea Travel Booking",
      description:
        "Premium sea travel booking platform featuring an interactive booking bar, liveaboard boat catalog, Indonesian destinations explore, and multilingual i18n support.",
    },
    image: "/images/seasvoyage/home.png",
    url: "/projects/seasvoyage",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS v4", "PostgreSQL", "REST API", "i18n"],
  },
  {
    id: {
      title: "UPGREENIUS - Aplikasi Web LMS Hybrid",
      description:
        "Aplikasi Learning Management System hybrid dengan manajemen kelas multi-role, penjadwalan kelas, integrasi payment gateway Midtrans, dan auto-generate sertifikat PDF.",
    },
    en: {
      title: "UPGREENIUS - Hybrid LMS Web App",
      description:
        "Hybrid Learning Management System web application featuring multi-role class management, class scheduling, Midtrans payment gateway integration, and auto-generated PDF certificates.",
    },
    image: "/images/upgreenius/home.png",
    url: "/projects/upgreenius",
    techStack: ["Laravel", "Tailwind CSS", "Alpine.js", "Midtrans", "Dompdf", "PostgreSQL"],
  },
  {
    id: {
      title: "FoodEase - Pelacak Kebiasaan Sehat & UI/UX",
      description:
        "Perancangan UI/UX Figma dan pengembangan sistem pelacak kebiasaan makan sehat dengan kalkulator kalori dan estimasi protein.",
    },
    en: {
      title: "FoodEase - Healthy Habits Tracker & UI/UX",
      description:
        "Figma UI/UX design and development of a healthy eating habits tracker system with calorie calculator and protein estimation.",
    },
    image: "/images/projects/foodease.png",
    url: "https://www.figma.com/proto/jYzaJqntHETG1S6iAvJ728/Food-App?node-id=510-8255&t=9LusTkribxGndTLF-1&scaling=scale-down&content-scaling=fixed&page-id=220%3A3579&starting-point-node-id=220%3A3587&show-proto-sidebar=1",
    techStack: ["Figma", "UI/UX Design", "HTML", "CSS", "JavaScript"],
  },
];
