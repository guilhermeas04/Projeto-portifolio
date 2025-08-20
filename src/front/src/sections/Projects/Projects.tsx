import "./Projects.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";

const ProjectCard = ({ index }: { index: number }) => (
  <FadeInWrapper delay={index * 200}>
    <div className="project-card">
      <div className="project-image-placeholder"></div>
      <div className="project-text-placeholder short"></div>
      <div className="project-text-placeholder long"></div>
    </div>
  </FadeInWrapper>
);

function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="section">
      <FadeInWrapper>
        <h2>{t.projects.title}</h2>
      </FadeInWrapper>
      <div className="projects-grid">
        <ProjectCard index={0} />
        <ProjectCard index={1} />
        <ProjectCard index={2} />
      </div>
    </section>
  );
}

export default Projects;
