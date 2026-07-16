export interface Experience {
  company: string;
  id: {
    role: string;
    period: string;
    description: string;
  };
  en: {
    role: string;
    period: string;
    description: string;
  };
  techUsed: string[];
}

export const experiences: Experience[] = [
  {
    company: "Jakarta State Polytechnic",
    id: {
      role: "Frontend Developer & Data Engineer - SleepWell 2.0",
      period: "Mar 2026 - Jun 2026",
      description:
        "Mengembangkan aplikasi web berbasis Next.js, Tailwind, dan Supabase untuk memvisualisasikan data studi tidur serta menampilkan laporan AI. Memproses file EDF menggunakan MNE dan Python untuk mengubah sinyal ECG, EEG, SpO2, dan Resp menjadi dataset CSV untuk model machine learning.",
    },
    en: {
      role: "Frontend Developer & Data Engineer - SleepWell 2.0",
      period: "Mar 2026 - Jun 2026",
      description:
        "Developed a Next.js, Tailwind, and Supabase-based web application to visualize sleep study data and display AI reports. Processed EDF files using MNE and Python to convert ECG, EEG, SpO2, and Resp signals into CSV datasets for machine learning models.",
    },
    techUsed: ["Next.js", "Tailwind CSS", "Supabase", "Python", "MNE", "Machine Learning"],
  },
  {
    company: "PT Canard Money Indonesia",
    id: {
      role: "Full-Stack Developer - Seas Voyage",
      period: "Jan 2026 - Feb 2026",
      description:
        "Mengembangkan aplikasi web pemesanan kapal liveaboard mewah menggunakan Next.js, Tailwind CSS, dan PostgreSQL, serta membangun API route kustom untuk memproses spesifikasi kapal dan ketersediaan kabin secara real-time. Platform ini difokuskan pada pariwisata bahari premium, penyewaan yacht, dan reservasi kabin di destinasi terpencil.",
    },
    en: {
      role: "Full-Stack Developer - Seas Voyage",
      period: "Jan 2026 - Feb 2026",
      description:
        "Developed a luxury liveaboard booking web application using Next.js, Tailwind CSS, and PostgreSQL, building custom API routes to query boat specifications and match cabin availability in real-time. The application functions similarly to lodging booking platforms like Airbnb but focuses on premium marine tourism, yacht chartering, and cabin bookings in remote destinations.",
    },
    techUsed: ["Next.js", "Tailwind CSS", "PostgreSQL", "TypeScript", "i18n"],
  },
  {
    company: "PT Canard Money Indonesia",
    id: {
      role: "Fullstack Developer - Blue Voyage",
      period: "Des 2025 - Feb 2026",
      description:
        "Mengembangkan aplikasi web pemesanan kapal pesiar mewah menggunakan Next.js, Tailwind CSS, dan PostgreSQL. Mengintegrasikan filter pencarian dinamis, sistem pencocokan ketersediaan kabin secara real-time, dan animasi interaktif menggunakan Framer Motion dengan dukungan multi-bahasa.",
    },
    en: {
      role: "Fullstack Developer - Blue Voyage",
      period: "Dec 2025 - Feb 2026",
      description:
        "Developed a luxury liveaboard booking web application using Next.js, Tailwind CSS, and PostgreSQL. Integrated dynamic search filters, a real-time cabin availability matching system, and interactive animations using Framer Motion with multi-language support.",
    },
    techUsed: ["Next.js", "Tailwind CSS", "PostgreSQL", "Framer Motion", "TypeScript"],
  },
  {
    company: "Jakarta State Polytechnic",
    id: {
      role: "Full-Stack Developer - UPGREENIUS",
      period: "Agu 2025 - Des 2025",
      description:
        "Mengembangkan aplikasi Learning Management System (LMS) hybrid menggunakan Laravel, Tailwind CSS, dan Alpine.js untuk mendukung manajemen kursus multi-role dan penjadwalan kelas. Mengintegrasikan payment gateway Midtrans untuk transaksi otomatis dan menerapkan generate sertifikat PDF otomatis dengan Dompdf.",
    },
    en: {
      role: "Full-Stack Developer - UPGREENIUS",
      period: "Aug 2025 - Dec 2025",
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
      description:
        "Mengembangkan sistem restorasi citra berbasis web menggunakan Django, OpenCV, dan Pillow. Mengimplementasikan algoritma pemrosesan citra digital seperti Fast Non-Local Means denoising, Laplacian sharpening, dan Lanczos upscaling yang terintegrasi dengan AJAX untuk pratinjau real-time.",
    },
    en: {
      role: "Full-Stack & Image Processing - SOTOSOP.IN",
      period: "May 2025 - Jun 2025",
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
      description:
        "Mendesain UI/UX menggunakan Figma dan mengembangkan sistem pelacak kebiasaan makan sehat, termasuk estimasi kalori dan protein. Sistem berfokus pada makanan sadar diet dan informasi nilai gizi.",
    },
    en: {
      role: "UI/UX Designer - FoodEase",
      period: "Oct 2024 - Dec 2024",
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
