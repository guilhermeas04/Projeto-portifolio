import { useState } from "react";
import "./Projects.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import { projectsTranslations } from "../../translations"; // ← CORRIGIDO

// importa imagens da pasta src/assets
import project1Img from "../../assets/products-grid.webp";
import tipoImg from "../../assets/tipo.png";
import project3Img from "../../assets/hero-sige-lite-screen.png";
import saasImg from "../../assets/SaaS_image013-3.png";

const projectImages = [tipoImg, project3Img, project1Img, saasImg];

function Projects() {
  const { t, language } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(0);

  const handleNext = () => {
    if (visibleCount < projectsTranslations[language as "pt" | "en"].length) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  const buttonText = language === "pt" ? "Mostrar próximo" : "Show next";

  return (
    <section id="projects" className="section">
      <FadeInWrapper>
        <h2>{t.projects.title}</h2>
      </FadeInWrapper>

      <div className="timeline-container">
        {projectsTranslations[language as "pt" | "en"]
          .slice(0, visibleCount)
          .map((project, index) => (
            <FadeInWrapper key={index} delay={index * 200}>
              <div
                className={`timeline-step ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="timeline-year">{project.year}</div>
                <img
                  src={projectImages[index]}
                  alt={project.title}
                  className="timeline-image"
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </FadeInWrapper>
          ))}
      </div>

      {visibleCount < projectsTranslations[language as "pt" | "en"].length && (
        <button className="timeline-button" onClick={handleNext}>
          {buttonText}
        </button>
      )}
    </section>
  );
}

export default Projects;
