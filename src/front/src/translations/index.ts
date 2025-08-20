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
    title: "LOREM IPSUM",
    subtitle: "Lorem ipsum placeholder text...",
    scrollDown: "Scroll Down ↓",
  },
  about: {
    title: "SOBRE MIM",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  experience: {
    title: "EXPERIÊNCIAS",
    techCorp: {
      company: "TechCorp Solutions",
      role: "Desenvolvedor Full Stack",
      period: "2023 - Presente",
      description:
        "Desenvolvi e mantive aplicações web responsivas utilizando React, Node.js e MongoDB. Implementei funcionalidades de autenticação, dashboard administrativo e integração com APIs externas. Colaborei com uma equipe de 8 desenvolvedores em metodologias ágeis.",
    },
    startupXYZ: {
      company: "StartupXYZ",
      role: "Desenvolvedor Frontend",
      period: "2022 - 2023",
      description:
        "Criei interfaces de usuário modernas e intuitivas para aplicação mobile-first. Otimizei performance e acessibilidade, implementando design system consistente. Trabalhei com Figma para prototipagem e validação de UX.",
    },
    freelance: {
      company: "Freelance",
      role: "Desenvolvedor Web",
      period: "2021 - 2022",
      description:
        "Desenvolvi sites institucionais e e-commerces para diversos clientes. Implementei SEO, responsividade e integração com sistemas de pagamento. Gerenciamento completo do projeto desde briefing até deploy.",
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
    title: "LOREM IPSUM",
    subtitle: "Lorem ipsum placeholder text...",
    scrollDown: "Scroll Down ↓",
  },
  about: {
    title: "ABOUT ME",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  experience: {
    title: "EXPERIENCE",
    techCorp: {
      company: "TechCorp Solutions",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description:
        "Developed and maintained responsive web applications using React, Node.js and MongoDB. Implemented authentication features, administrative dashboard and integration with external APIs. Collaborated with a team of 8 developers using agile methodologies.",
    },
    startupXYZ: {
      company: "StartupXYZ",
      role: "Frontend Developer",
      period: "2022 - 2023",
      description:
        "Created modern and intuitive user interfaces for mobile-first applications. Optimized performance and accessibility, implementing consistent design system. Worked with Figma for prototyping and UX validation.",
    },
    freelance: {
      company: "Freelance",
      role: "Web Developer",
      period: "2021 - 2022",
      description:
        "Developed institutional websites and e-commerces for various clients. Implemented SEO, responsiveness and integration with payment systems. Complete project management from briefing to deployment.",
    },
  },
  projects: {
    title: "PROJECTS",
  },
  contact: {
    title: "CONTACT",
  },
};

// Objeto de traduções
export const translations = {
  pt: ptTranslations,
  en: enTranslations,
};

// Re-exportar a interface para manter compatibilidade
export type { Translations };
