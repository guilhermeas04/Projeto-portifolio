import "./Experience.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import { SiAdobeaftereffects, SiAdobepremierepro, SiAdobeillustrator, SiAdobephotoshop, SiKrita } from 'react-icons/si';
import DesignerLogo from '../../assets/desginerlogo.png';
import pucminasLogo from "../../assets/pucminaslog.jpg";
import drvetLogo from "../../assets/drvetlogo.png";

// Ajuste o tipo Technology para usar React.ReactNode
export type Technology = {
  name: string;
  icon?: React.ReactNode;
};

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: (string | Technology)[];
  isReversed?: boolean;
  index: number;
  image?: string;
}

const ExperienceItem = ({
  company,
  role,
  period,
  description,
  technologies,
  isReversed = false,
  index,
  image,
}: ExperienceItemProps) => (
  <FadeInWrapper delay={index * 200}>
    <div className={`experience-item ${isReversed ? "reversed" : ""}`}>
      <div className="experience-content">
        <div className="experience-text">
          <h3 className="company-name">{company}</h3>
          <span className="role">{role}</span>
          <span className="period">{period}</span>
          <p className="description">{description}</p>
          <div className="technologies">
            {technologies.map((tech, techIndex) => (
              typeof tech === 'object' && tech !== null ? (
                <span key={techIndex} className="tech-tag" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  {tech.icon}
                  <span style={{ color: '#dad9d7' }}>{tech.name}</span>
                </span>
              ) : (
                <span key={techIndex} className="tech-tag">{String(tech)}</span>
              )
            ))}
          </div>
        </div>
        <div className="experience-image">
          {image ? (
            <img src={image} alt={company} className={`experience-image-logo${company === 'Siematec Informática' ? ' less-zoom' : ''}`} />
          ) : (
            <div className="experience-image-placeholder"></div>
          )}
        </div>
      </div>
    </div>
  </FadeInWrapper>
);

// Adicione suporte à tradução dinâmica para experiências
function Experience() {
  const { t, language } = useLanguage();

  const experiences = language === "en"
    ? [
        {
          company: "Freelancer",
          role: "Graphic Designer",
          period: "2022 - 2023",
          description:
            "I worked as a freelance graphic designer, creating logos, visual identities, and 3D modeling for various clients and projects. My experience includes developing visual concepts aligned with brand identity and delivering final materials in optimized digital formats. I also worked with editing and modeling software (such as Photoshop, Illustrator, and Blender), exploring creative solutions for visual communication and branding.",
          technologies: [
            { name: "Adobe After Effects", icon: <SiAdobeaftereffects style={{ color: '#D291FF' }} /> },
            { name: "Sony Vegas", icon: <SiAdobepremierepro style={{ color: '#1A1A1A' }} /> },
            { name: "Adobe Illustrator", icon: <SiAdobeillustrator style={{ color: '#FF9A00' }} /> },
            { name: "Photoshop", icon: <SiAdobephotoshop style={{ color: '#31A8FF' }} /> },
            { name: "Krita", icon: <SiKrita style={{ color: '#3C87C3' }} /> }
          ],
          image: DesignerLogo
        },
        {
          company: "PUC MINAS - PROEX",
          role: "Data Intern",
          period: "2024 - 2025",
          description:
            "I worked as a data analysis intern at PUC Minas, handling, organizing, and interpreting information related to university extension projects and programs. I used tools like Power BI and Excel to build dashboards, reports, and indicators, supporting visualization and decision-making.",
          technologies: [
            { name: "Power BI" },
            { name: "Excel" }
          ],
          image: pucminasLogo,
        },
        {
          company: "Siematec Informática",
          role: "Customer Support Intern",
          period: "2025 - Present",
          description:
            "I work as a customer support intern for one of the most complete veterinary management systems in Brazil. My activities include direct customer service, requirements gathering, and monitoring system improvements, ensuring efficient platform use and contributing to the product's continuous evolution.",
          technologies: [
            { name: "Mirio" }
          ],
          image: drvetLogo,
        },
      ]
    : [
        {
          company: "Free Lancer",
          role: "Designer Gráfico",
          period: "2022 - 2023",
          description:
            "Atuei como freelancer em design gráfico, desenvolvendo logotipos, identidades visuais e modelagem 3D para diferentes tipos de clientes e projetos. Minha experiência inclui desde a criação de conceitos visuais alinhados à identidade da marca até a entrega final dos materiais em formatos digitais otimizados. Também trabalhei com softwares de edição e modelagem (como Photoshop, Illustrator e Blender), explorando soluções criativas para comunicação visual e branding.",
          technologies: [
            { name: "Adobe After Effects", icon: <SiAdobeaftereffects style={{ color: '#D291FF' }} /> },
            { name: "Sony Vegas", icon: <SiAdobepremierepro style={{ color: '#1A1A1A' }} /> },
            { name: "Adobe Illustrator", icon: <SiAdobeillustrator style={{ color: '#FF9A00' }} /> },
            { name: "Photoshop", icon: <SiAdobephotoshop style={{ color: '#31A8FF' }} /> },
            { name: "Krita", icon: <SiKrita style={{ color: '#3C87C3' }} /> }
          ],
          image: DesignerLogo
        },
        {
          company: "PUC MINAS - PROEX",
          role: "Estagiário de dados",
          period: "2024 - 2025",
          description:
            "Atuei como estagiário de análise de dados na PUC Minas, realizando tratamento, organização e interpretação de informações relacionadas a projetos e programas de extensão da universidade. Utilizei ferramentas como Power BI e Excel para construção de dashboards, relatórios e indicadores, apoiando na visualização e tomada de decisão.",
          technologies: [
            { name: "Power BI" },
            { name: "Excel" }
          ],
          image: pucminasLogo,
        },
        {
          company: "Siematec Informática",
          role: "Estagiário de suporte ao cliente",
          period: "2025 - Presente",
          description:
            "Atuo como estagiário de suporte ao cliente em um dos sistemas de gestão veterinária mais completos do Brasil. Minhas atividades incluem o atendimento direto aos clientes, o levantamento de requisitos e o acompanhamento de melhorias no sistema, garantindo eficiência no uso da plataforma e contribuindo para a evolução contínua do produto.",
          technologies: [
            { name: "Mirio" }
          ],
          image: drvetLogo,
        },
      ];

  return (
    <section id="experience" className="section">
      <FadeInWrapper>
        <h2>{t.experience.title}</h2>
      </FadeInWrapper>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <ExperienceItem
            key={index}
            company={exp.company}
            role={exp.role}
            period={exp.period}
            description={exp.description}
            technologies={exp.technologies}
            isReversed={index % 2 === 1}
            index={index}
            image={exp.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
