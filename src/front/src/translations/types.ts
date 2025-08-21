// Interface para as traduções
export interface Translations {
  header: {
    about: string;
    projects: string;
    experiences: string;
    contactMe: string;
  };
  hero: {
    title: string;
    subtitle: string;
    scrollDown: string;
  };
  about: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    techCorp: {
      company: string;
      role: string;
      period: string;
      description: string;
    };
    startupXYZ: {
      company: string;
      role: string;
      period: string;
      description: string;
    };
    freelance: {
      company: string;
      role: string;
      period: string;
      description: string;
    };
  };
  projects: {
    title: string;
  };
  contact: {
    title: string;
  };
}
