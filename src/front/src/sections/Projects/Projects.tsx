import './Projects.css';

const ProjectCard = () => (
  <div className="project-card">
    <div className="project-image-placeholder"></div>
    <div className="project-text-placeholder short"></div>
    <div className="project-text-placeholder long"></div>
  </div>
);

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>PROJETOS</h2>
      <div className="projects-grid">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
}

export default Projects;