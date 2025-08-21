import "./Experience.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  isReversed?: boolean;
  index: number;
}

const ExperienceItem = ({
  company,
  role,
  period,
  description,
  technologies,
  isReversed = false,
  index,
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
              <span key={techIndex} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="experience-image">
          <div className="experience-image-placeholder"></div>
        </div>
      </div>
    </div>
  </FadeInWrapper>
);

function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      company: t.experience.techCorp.company,
      role: t.experience.techCorp.role,
      period: t.experience.techCorp.period,
      description: t.experience.techCorp.description,
      technologies: ["React", "Node.js", "MongoDB", "TypeScript", "Docker"],
    },
    {
      company: t.experience.startupXYZ.company,
      role: t.experience.startupXYZ.role,
      period: t.experience.startupXYZ.period,
      description: t.experience.startupXYZ.description,
      technologies: [
        "React Native",
        "TypeScript",
        "Styled Components",
        "Figma",
      ],
    },
    {
      company: t.experience.freelance.company,
      role: t.experience.freelance.role,
      period: t.experience.freelance.period,
      description: t.experience.freelance.description,
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "WordPress",
        "WooCommerce",
        "SEO",
      ],
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
          />
        ))}
      </div>
    </section>
  );
}

export default Experience;
