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
    title: "Djair Augusto",
  subtitle: "Gestor de projeto e desenvolvedor Front-end",
    scrollDown: "Saiba Mais ↓",
  },
  about: {
    title: "SOBRE MIM",
    description:
      "Sou o Djair Augusto, estudante de Engenharia de Software na PUC Minas, com foco em desenvolvimento Front-end, dados e metodologias ágeis. Tenho experiência com ferramentas como Git, Power BI, SQL e Docker, além de projetos envolvendo React, Spring e UX/UI.\n\nFora da programação, curto arte digital e sou bem eclético nas minhas referências. Na trilha sonora, o destaque fica pro indie rock.",
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

// Traduções em inglês atualizadas
const enTranslations: Translations = {
  header: {
    about: "ABOUT ME",
    projects: "PROJECTS",
    experiences: "EXPERIENCE",
    contactMe: "Contact Me →",
  },
  hero: {
    title: "Djair Augusto",
    subtitle: "Project manager and Front-end developer",
    scrollDown: "Learn More ↓",
  },
  about: {
    title: "ABOUT ME",
    description:
      "I'm Djair Augusto, a Software Engineering student at PUC Minas, focused on Front-end development, data, and agile methodologies. I have experience with tools such as Git, Power BI, SQL, and Docker, as well as projects involving React, Spring, and UX/UI.\n\nOutside programming, I enjoy digital art and have eclectic references. For the soundtrack, indie rock stands out.",
  },
  experience: {
    title: "EXPERIENCE",
    techCorp: {
      company: "TechCorp Solutions",
      role: "Full Stack Developer",
      period: "2023 - Present",
      description:
        "Developed and maintained responsive web applications using React, Node.js, and MongoDB. Implemented authentication features, administrative dashboard, and integration with external APIs. Collaborated with a team of 8 developers using agile methodologies.",
    },
    startupXYZ: {
      company: "StartupXYZ",
      role: "Frontend Developer",
      period: "2022 - 2023",
      description:
        "Created modern and intuitive user interfaces for mobile-first applications. Optimized performance and accessibility, implementing a consistent design system. Worked with Figma for prototyping and UX validation.",
    },
    freelance: {
      company: "Freelance",
      role: "Web Developer",
      period: "2021 - 2022",
      description:
        "Developed institutional websites and e-commerces for various clients. Implemented SEO, responsiveness, and integration with payment systems. Complete project management from briefing to deployment.",
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
