import type { Translations } from "./types";

// Traduções em português
const ptTranslations: Translations = {
  header: {
    about: "SOBRE MIM",
    projects: "PROJETOS",
    experiences: "EXPERIÊNCIAS",
    contactMe: "Fale Comigo →",
  },
  hero: {
    title: "Pedro Duarte",
    subtitle: "Engenheiro de Software | 20 anos",
    scrollDown: "Role para Baixo ↓",
  },
  about: {
    title: "SOBRE MIM",
    description:
      "Sou Engenheiro de Software de 20 anos, apaixonado por tecnologia e inovação. Participei do HackaTruck em 2025, realizei um intercâmbio em 2024 e conquistei o título de Melhor em TI em 2024. Busco sempre unir eficiência, aprendizado e criatividade nos projetos em que atuo.",
  },
  experience: {
    title: "EXPERIÊNCIAS",
    techCorp: {
      company: "E-commerce Náutico",
      role: "Assistente",
      period: "2023",
      description:
        "Atuei como assistente em um e-commerce especializado na venda de barcos, auxiliando em processos digitais e suporte ao cliente.",
    },
    startupXYZ: {
      company: "Projeto de Gestão de Obra",
      role: "Desenvolvedor Full Stack",
      period: "2024",
      description:
        "Desenvolvi um sistema completo de gestão de obras, atuando no frontend e backend, com foco em eficiência e organização de processos.",
    },
    freelance: {
      company: "HackaTruck",
      role: "Estudante",
      period: "2025",
      description:
        "Participei do programa HackaTruck Makerspace, com foco em desenvolvimento mobile, inovação e tecnologias emergentes.",
    },
  },
  projects: {
    title: "PROJETOS",
  },
  contact: {
    title: "CONTATO",
  },
};

// Traduções em inglês
const enTranslations: Translations = {
  header: {
    about: "ABOUT ME",
    projects: "PROJECTS",
    experiences: "EXPERIENCE",
    contactMe: "Contact Me →",
  },
  hero: {
    title: "Pedro Duarte",
    subtitle: "Software Engineer | 20 years old",
    scrollDown: "Scroll Down ↓",
  },
  about: {
    title: "ABOUT ME",
    description:
      "I am a 20-year-old Software Engineer, passionate about technology and innovation. I participated in HackaTruck in 2025, did an exchange program in 2024, and was awarded Best in IT in 2024. I always seek to combine efficiency, continuous learning, and creativity in my projects.",
  },
  experience: {
    title: "EXPERIENCE",
    techCorp: {
      company: "Nautical E-commerce",
      role: "Assistant",
      period: "2023",
      description:
        "Worked as an assistant in an e-commerce specialized in boat sales, supporting digital processes and customer service.",
    },
    startupXYZ: {
      company: "Construction Management Project",
      role: "Full Stack Developer",
      period: "2024",
      description:
        "Developed a complete construction management system, working on both frontend and backend, focused on efficiency and process organization.",
    },
    freelance: {
      company: "HackaTruck",
      role: "Student",
      period: "2025",
      description:
        "Participated in the HackaTruck Makerspace program, focused on mobile development, innovation, and emerging technologies.",
    },
  },
  projects: {
    title: "PROJECTS",
  },
  contact: {
    title: "CONTACT",
  },
};

// Traduções dos projetos
export const projectsTranslations = {
  pt: [
    {
      year: "2024",
      title: "Primeiro Projeto",
      description: "Aplicação web simples com React e Node.js.",
    },
    {
      year: "2024",
      title: "Sistema de Gestão",
      description: "Plataforma de controle financeiro com dashboard.",
    },
    {
      year: "2024",
      title: "E-commerce",
      description: "Loja virtual com autenticação e carrinho de compras.",
    },
    {
      year: "2025",
      title: "Plataforma SaaS",
      description: "Ferramenta de produtividade com integração de APIs.",
    },
  ],
  en: [
    {
      year: "2024",
      title: "First Project",
      description: "Simple web application with React and Node.js.",
    },
    {
      year: "2024",
      title: "Management System",
      description: "Financial control platform with dashboard.",
    },
    {
      year: "2024",
      title: "E-commerce",
      description: "Online store with authentication and shopping cart.",
    },
    {
      year: "2025",
      title: "SaaS Platform",
      description: "Productivity tool with API integrations.",
    },
  ],
};

// Objeto de traduções
export const translations = {
  pt: ptTranslations,
  en: enTranslations,
};

// Re-exportar a interface
export type { Translations };
