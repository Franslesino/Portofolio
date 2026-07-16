export const personalInfo = {
  name: "Elando Franslesino",
  email: "elandooedo@gmail.com",
  phone: "+62895345431080",
  location: "Indonesia",
  id: {
    role: "Full Stack Developer",
    headline: "Halo, saya Elando Franslesino",
    subHeadline:
      "Full Stack Developer yang fokus membangun aplikasi web modern, handal, dan berorientasi pada pengguna dari frontend hingga backend.",
    aboutMe:
      "Saya adalah seorang Full Stack Developer dengan passion dalam mengembangkan sistem web yang efisien dari sisi backend sekaligus interaktif dan responsif dari sisi frontend. Saya percaya bahwa teknologi terbaik adalah yang tidak terasa, seamless, intuitif, dan membuat hidup lebih mudah. Saat ini saya mendalami ekosistem modern seperti React, Next.js, Node.js, dan database SQL/NoSQL, serta selalu bersemangat untuk memecahkan tantangan baru dan berkolaborasi dalam proyek-proyek berdampak.",
  },
  en: {
    role: "Full Stack Developer",
    headline: "Hi, I'm Elando Franslesino",
    subHeadline:
      "Full Stack Developer focused on building modern, reliable, and user-oriented web applications from frontend to backend.",
    aboutMe:
      "I am a Full Stack Developer with a passion for developing efficient backend systems that are both interactive and responsive on the frontend. I believe that the best technology is one that feels seamless, intuitive, and makes life easier. Currently, I am diving deep into modern ecosystems like React, Next.js, Node.js, and SQL/NoSQL databases, and am always excited to solve new challenges and collaborate on impactful projects.",
  },
} as const;

export const socialLinks = {
  github: "https://github.com/Franslesino",
  linkedin: "https://www.linkedin.com/in/elando-franslesino/",
  email: "mailto:elandooedo@gmail.com",
  whatsapp: "https://wa.me/62895345431080",
} as const;

export const siteMetadata = {
  title: "Elando Franslesino - Full Stack Developer Portfolio",
  description:
    "Personal portfolio website of Elando Franslesino, a Full Stack Developer specializing in React, Next.js, Node.js, and modern web databases. Explore my projects and get in touch.",
  url: "https://elando-portfolio.vercel.app",
  ogImage: "/images/og-image.png",
} as const;

export const navLinks = {
  id: [
    { label: "Tentang", href: "#about" },
    { label: "Proyek", href: "#projects" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Keahlian", href: "#skills" },
    { label: "Kontak", href: "#contact" },
  ],
  en: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
