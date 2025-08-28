import "./Experience.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import { SiPhp, SiHtml5, SiCss3, SiJavascript,SiMysql } from 'react-icons/si';
import hinovaLogo from "../../assets/logo-hinova.png";

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
          company: "HINOVA Group",
          role: "Software Development Intern",
          period: "2024 - Present",
          description:
            "I work supporting the software development lifecycle, including requirements analysis, code maintenance, and implementing new features. I contribute to bug fixes, functional testing, and technical documentation, while maintaining direct contact with clients to understand their problems and ensure effective solutions. I participate in project tracking meetings, apply versioning best practices, agile methodologies, and technologies used by the team, developing practical skills in programming, problem-solving, and team work.",
          technologies: [
            { name: "Php", icon: <SiPhp style={{ color: '#777BB4' }} /> },
            { name: "HTML", icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
            { name: "CSS", icon: <SiCss3 style={{ color: '#1572B6' }} /> },
            { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
            { name: "MySQL", icon: <SiMysql style={{ color: '#4479A1' }} /> }
          ],
          image: hinovaLogo,
        },
      ]
    : [
        {
          company: "Grupo HINOVA",
          role: "Estagiário em Desenvolvimento de Software",
          period: "2024 - Presente",
          description:
            "Atuo no apoio ao ciclo de desenvolvimento de sistemas, incluindo análise de requisitos, manutenção de código e implementação de novas funcionalidades. Contribuo com correções de bugs, testes funcionais e documentação técnica, mantendo contato direto com clientes para entender problemas e garantir soluções eficazes. Participo de reuniões de acompanhamento de projetos, aplico boas práticas de versionamento, metodologias ágeis e tecnologias utilizadas pela equipe, desenvolvendo habilidades práticas em programação, resolução de problemas e colaboração em equipe",
          technologies: [
            { name: "Php", icon: <SiPhp style={{ color: '#777BB4' }} /> },
            { name: "HTML", icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
            { name: "CSS", icon: <SiCss3 style={{ color: '#1572B6' }} /> },
            { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} /> }, 
            { name: "MySQL", icon: <SiMysql style={{ color: '#4479A1' }} /> }
          ],
          image: hinovaLogo,
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
