import { useState } from "react";
import "./Projects.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";

type Project = {
  year: string;
  title: string;
  description: string;
  image: string;
};

const projects: Project[] = [
  {
    year: "2021",
    title: "Primeiro Projeto",
    description: "Aplicação web simples com React e Node.js.",
    image: "/images/project1.png"
  },
  {
    year: "2022",
    title: "Sistema de Gestão",
    description: "Plataforma de controle financeiro com dashboard.",
    image: "/images/project2.png"
  },
  {
    year: "2023",
    title: "E-commerce",
    description: "Loja virtual com autenticação e carrinho de compras.",
    image: "/images/project3.png"
  },
  {
    year: "2024",
    title: "Plataforma SaaS",
    description: "Ferramenta de produtividade com integração de APIs.",
    image: "/images/project4.png"
  }
];

function Projects() {
  const { t } = useLanguage();
  const [visibleCount, setVisibleCount] = useState(0);

  const handleNext = () => {
    if (visibleCount < projects.length) {
      setVisibleCount((prev) => prev + 1);
    }
  };

  return (
    <section id="projects" className="section">
      <FadeInWrapper>
        <h2>{t.projects.title}</h2>
      </FadeInWrapper>

      <div className="timeline-container">
        {projects.slice(0, visibleCount).map((project, index) => (
          <FadeInWrapper key={index} delay={index * 200}>
            <div
              className={`timeline-step ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-year">{project.year}</div>
              <img
                src={project.image}
                alt={project.title}
                className="timeline-image"
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </FadeInWrapper>
        ))}
      </div>

      {visibleCount < projects.length && (
        <button className="timeline-button" onClick={handleNext}>
          Mostrar próximo
        </button>
      )}
    </section>
  );
}

export default Projects;
