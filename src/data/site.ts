export const site = {
  name: "Abir Hossan",
  role: "Full-Stack Developer",
  github: "https://github.com/Abir-Hossan",
  linkedin: "https://www.linkedin.com/in/abir-hossan/",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "skabirhossan02@gmail.com",
  resumePath: "/resume/Abir_Hossan_Resume.pdf",
};

export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
] as const;
