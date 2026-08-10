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
        "Mengembangkan aplikasi web React dan Next.js dengan Tailwind CSS dan Supabase untuk memvisualisasikan data studi tidur serta menampilkan laporan diagnostik AI. Memproses file medis EDF menggunakan Python (MNE) dan ekstraksi fitur FFT untuk mengubah sinyal mentah ECG, EEG, SpO2, dan Resp menjadi dataset CSV statistik untuk model machine learning.",
    },
    en: {
      title: "SleepWell 2.0 - Visualization & AI Reports",
      description:
        "Developed a React and Next.js web application styled with Tailwind CSS and backed by Supabase to visualize sleep study data and display AI diagnostic reports. Processed medical EDF files using Python (MNE) and FFT feature extraction to transform raw ECG, EEG, SpO2, and Resp signals into statistical CSV datasets for machine learning models.",
    },
    image: "/images/projects/sleepwell-hero.png",
    url: "https://sleep-well.tech/",
    techStack: ["React", "Next.js", "Tailwind CSS", "Supabase", "Python", "MNE", "FFT"],
  },
  {
    id: {
      title: "Blue Voyage - Aplikasi Web Booking Mewah",
      description:
        "Mengembangkan UI pemesanan kapal pesiar mewah dwibahasa menggunakan Next.js, TypeScript, dan Tailwind CSS. Mengonsumsi REST API (PostgreSQL via Supabase) untuk menampilkan katalog kapal dan ketersediaan kabin secara real-time, meningkatkan UX dengan filter pencarian dinamis dan animasi Framer Motion.",
    },
    en: {
      title: "Blue Voyage - Luxury Booking Web App",
      description:
        "Developed a bilingual luxury liveaboard UI utilizing Next.js, TypeScript, and Tailwind CSS. Consumed REST APIs (PostgreSQL via Supabase) to render vessel catalogs and real-time cabin availability, enhancing UX with dynamic search filters and Framer Motion animations.",
    },
    image: "/images/bluevoyage/home.png",
    url: "/projects/blue-voyage",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "REST API", "i18n"],
  },
  {
    id: {
      title: "Seas Voyage - Pemesanan Perjalanan Laut Premium",
      description:
        "Mengembangkan platform pemesanan wisata bahari premium untuk penyewaan kapal pesiar menggunakan Next.js, Tailwind CSS v4, dan PostgreSQL. Membangun REST API kustom untuk mengelola data kapal, penetapan harga dinamis, dan katalog destinasi. Mengintegrasikan sistem i18n multibahasa yang mendukung 13+ bahasa serta merancang pengalaman pemesanan yang responsif mirip Airbnb.",
    },
    en: {
      title: "Seas Voyage - Premium Sea Travel Booking",
      description:
        "Developed a premium marine tourism booking platform for yacht chartering using Next.js, Tailwind CSS v4, and PostgreSQL. Built custom REST APIs to manage vessel data, dynamic pricing, and destination cataloging. Integrated a robust multilingual i18n system supporting 13+ languages and designed a seamless, Airbnb-like booking experience.",
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
