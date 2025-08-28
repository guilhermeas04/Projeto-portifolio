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
    title: "Guilherme Santos",
  subtitle: "Engenheiro de Software e Desenvolvedor Full Stack",
    scrollDown: "Saiba Mais ↓",
  },
  about: {
    title: "SOBRE MIM",
    description:
      "Sou Guilherme Santos, estudante de Engenharia de Software na PUC Minas, com foco em desenvolvimento full stack, com maior afinidade pelo back-end. Tenho experiência em linguagens como Java, C++, JavaScript e PHP, além de conhecimentos em HTML, CSS, SQL, Git e Docker. Também já desenvolvi projetos com Spring Boot, React, Angular, Laravel e Bootstrap, o que me proporcionou uma visão ampla sobre diferentes arquiteturas e tecnologias do mercado. No âmbito pessoal, sou apaixonado por esportes, especialmente futebol, sendo um torcedor fanático do Atlético Mineiro. Além disso, gosto muito de música e considero meu gosto bastante eclético.",
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
      "I'm Guilherme Santos, a Software Engineering student at PUC Minas, focused on full stack development, with a stronger affinity for back-end. I have experience in languages such as Java, C++, JavaScript and PHP, as well as knowledge in HTML, CSS, SQL, Git, and Docker. I have also developed projects using Spring Boot, React, Angular, Laravel, and Bootstrap, which has given me a broad understanding of different architectures and market technologies. In my personal life, I am passionate about sports, especially football/soccer, and a huge Atlético Mineiro fan. I also  enjoy music and consider my taste to be very eclectic.",
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
