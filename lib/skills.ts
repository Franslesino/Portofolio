export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "design";
}

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },

  // Backend & Languages
  { name: "Laravel", category: "backend" },
  { name: "PHP", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "Firebase", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Database Design", category: "backend" },
  { name: "Machine Learning", category: "backend" },

  // Tools & Software
  { name: "Git & GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "XAMPP", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Android Studio", category: "tools" },
  { name: "NetBeans", category: "tools" },

  // Design
  { name: "Figma", category: "design" },
  { name: "UI/UX Design", category: "design" },
  { name: "Wireframing", category: "design" },
  { name: "Image Processing", category: "design" },
];

export const skillCategories = [
  { key: "frontend" as const, label: "Frontend" },
  { key: "backend" as const, label: "Backend / Database" },
  { key: "tools" as const, label: "Tools & Software" },
  { key: "design" as const, label: "Design & Others" },
];
