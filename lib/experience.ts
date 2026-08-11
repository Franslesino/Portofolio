export interface Experience {
  company: string;
  id: {
    role: string;
    period: string;
    description: string;
    institution?: string;
  };
  en: {
    role: string;
    period: string;
    description: string;
    institution?: string;
  };
  techUsed: string[];
}

export const experiences: Experience[] = [
  {
    company: "Jakarta State Polytechnic",
    id: {
      role: "Frontend Developer & Data Engineer - SleepWell 2.0",
      period: "Mar 2026 - Jun 2026",
      institution: "Politeknik Negeri Jakarta",
      description:
        "Mengembangkan aplikasi web React dan Next.js dengan Tailwind CSS dan Supabase untuk memvisualisasikan data studi tidur serta menampilkan laporan diagnostik AI. Memproses file medis EDF menggunakan Python (MNE) dan ekstraksi fitur FFT untuk mengubah sinyal mentah ECG, EEG, SpO2, dan Resp menjadi dataset CSV statistik untuk model machine learning.",
    },
    en: {
      role: "Frontend Developer & Data Engineer - SleepWell 2.0",
      period: "Mar 2026 - Jun 2026",
      institution: "Jakarta State Polytechnic",
      description:
        "Developed a React and Next.js web application styled with Tailwind CSS and backed by Supabase to visualize sleep study data and display AI diagnostic reports. Processed medical EDF files using Python (MNE) and FFT feature extraction to transform raw ECG, EEG, SpO2, and Resp signals into statistical CSV datasets for machine learning models.",
    },
    techUsed: ["React", "Next.js", "Tailwind CSS", "Supabase", "Python", "MNE", "FFT", "Machine Learning"],
  },
  {
    company: "PT Canard Money Indonesia",
    id: {
      role: "Frontend Developer - Seas Voyage",
      period: "Jan 2026 - Feb 2026",
      description:
        "Mengembangkan platform pemesanan wisata bahari premium untuk penyewaan kapal pesiar menggunakan Next.js, Tailwind CSS v4, dan PostgreSQL. Membangun REST API kustom untuk mengelola data kapal, penetapan harga dinamis, dan katalog destinasi. Mengintegrasikan sistem i18n multibahasa yang mendukung 13+ bahasa serta merancang pengalaman pemesanan yang responsif mirip Airbnb.",
    },
    en: {
      role: "Frontend Developer - Seas Voyage",
      period: "Jan 2026 - Feb 2026",
      description:
        "Developed a premium marine tourism booking platform for yacht chartering using Next.js, Tailwind CSS v4, and PostgreSQL. Built custom REST APIs to manage vessel data, dynamic pricing, and destination cataloging. Integrated a robust multilingual i18n system supporting 13+ languages and designed a seamless, Airbnb-like booking experience.",
    },
    techUsed: ["Next.js", "Tailwind CSS v4", "PostgreSQL", "REST API", "TypeScript", "i18n"],
  },
  {
    company: "PT Canard Money Indonesia",
    id: {
      role: "Frontend Developer - Blue Voyage",
      period: "Des 2025 - Jan 2026",
      description:
        "Mengembangkan UI pemesanan kapal pesiar mewah dwibahasa menggunakan Next.js, TypeScript, dan Tailwind CSS. Mengonsumsi REST API (PostgreSQL via Supabase) untuk menampilkan katalog kapal dan ketersediaan kabin secara real-time, meningkatkan UX dengan filter pencarian dinamis dan animasi Framer Motion.",
    },
    en: {
      role: "Frontend Developer - Blue Voyage",
      period: "Dec 2025 - Jan 2026",
      description:
        "Developed a bilingual luxury liveaboard UI utilizing Next.js, TypeScript, and Tailwind CSS. Consumed REST APIs (PostgreSQL via Supabase) to render vessel catalogs and real-time cabin availability, enhancing UX with dynamic search filters and Framer Motion animations.",
    },
    techUsed: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "REST API", "Framer Motion", "i18n"],
  },
  {
    company: "Jakarta State Polytechnic",
    id: {
      role: "Full-Stack Developer - UPGREENIUS",
      period: "Agu 2025 - Des 2025",
      institution: "Politeknik Negeri Jakarta",
      description:
        "Mengembangkan aplikasi Learning Management System (LMS) hybrid menggunakan Laravel, Tailwind CSS, dan Alpine.js untuk mendukung manajemen kursus multi-role dan penjadwalan kelas. Mengintegrasikan payment gateway Midtrans untuk transaksi otomatis dan menerapkan generate sertifikat PDF otomatis dengan Dompdf.",
    },
    en: {
      role: "Full-Stack Developer - UPGREENIUS",
      period: "Aug 2025 - Dec 2025",
      institution: "Jakarta State Polytechnic",
      description:
        "Developed a hybrid Learning Management System (LMS) application using Laravel, Tailwind CSS, and Alpine.js to support multi-role course management and class scheduling. Integrated Midtrans payment gateway for automated transactions and implemented automatic PDF certificate generation with Dompdf.",
    },
    techUsed: ["Laravel", "Tailwind CSS", "Alpine.js", "Midtrans", "Dompdf", "PHP"],
  },
  {
    company: "Jakarta State Polytechnic",
    id: {
      role: "Full-Stack & Image Processing - SOTOSOP.IN",
      period: "Mei 2025 - Jun 2025",
      institution: "Politeknik Negeri Jakarta",
      description:
        "Mengembangkan sistem restorasi citra berbasis web menggunakan Django, OpenCV, dan Pillow. Mengimplementasikan algoritma pemrosesan citra digital seperti Fast Non-Local Means denoising, Laplacian sharpening, dan Lanczos upscaling yang terintegrasi dengan AJAX untuk pratinjau real-time.",
    },
    en: {
      role: "Full-Stack & Image Processing - SOTOSOP.IN",
      period: "May 2025 - Jun 2025",
      institution: "Jakarta State Polytechnic",
      description:
        "Developed a web-based image restoration system using Django, OpenCV, and Pillow. Implemented digital image processing algorithms such as Fast Non-Local Means denoising, Laplacian sharpening, and Lanczos upscaling integrated with AJAX for real-time preview.",
    },
    techUsed: ["Django", "OpenCV", "Pillow", "AJAX", "Python"],
  },
  {
    company: "CCIT FTUI",
    id: {
      role: "Full-Stack Developer & UI/UX Designer - Readiculous",
      period: "Mei 2025 - Jun 2025",
      description:
        "Mengembangkan aplikasi web pencarian dan review buku online menggunakan HTML5, Bootstrap 5, dan Firebase. Mengintegrasikan filter pencarian dinamis menggunakan Open Library API, sistem ulasan/rating pengguna secara real-time, dan sistem katalog bookmark persisten.",
    },
    en: {
      role: "Full-Stack Developer & UI/UX Designer - Readiculous",
      period: "May 2025 - Jun 2025",
      description:
        "Developed an online book search and review web application using HTML5, Bootstrap 5, and Firebase. Integrated dynamic search filters using Open Library API, real-time user review/rating system, and persistent bookmark catalog system.",
    },
    techUsed: ["HTML5", "Bootstrap 5", "Firebase", "Open Library API", "JavaScript"],
  },
  {
    company: "Jakarta State Polytechnic",
    id: {
      role: "UI/UX Designer - FoodEase",
      period: "Okt 2024 - Des 2024",
      institution: "Politeknik Negeri Jakarta",
      description:
        "Mendesain UI/UX menggunakan Figma dan mengembangkan sistem pelacak kebiasaan makan sehat, termasuk estimasi kalori dan protein. Sistem berfokus pada makanan sadar diet dan informasi nilai gizi.",
    },
    en: {
      role: "UI/UX Designer - FoodEase",
      period: "Oct 2024 - Dec 2024",
      institution: "Jakarta State Polytechnic",
      description:
        "Designed UI/UX using Figma and developed a healthy eating habits tracker system, including calorie and protein estimation. The system focuses on diet-conscious food and nutritional value information.",
    },
    techUsed: ["Figma", "UI/UX Design", "HTML", "CSS", "JavaScript"],
  },
  {
    company: "CCIT FTUI",
    id: {
      role: "Frontend Developer - Grocery Store Website",
      period: "Jun 2024 - Jun 2024",
      description:
        "Mengembangkan website toko kelontong online dengan fungsionalitas CRUD lengkap menggunakan HTML, CSS, dan JavaScript, mendemonstrasikan integrasi di sisi klien maupun server.",
    },
    en: {
      role: "Frontend Developer - Grocery Store Website",
      period: "Jun 2024 - Jun 2024",
      description:
        "Developed an online grocery store website with complete CRUD functionality using HTML, CSS, and JavaScript, demonstrating integration on both client and server sides.",
    },
    techUsed: ["HTML", "CSS", "JavaScript"],
  },
];
