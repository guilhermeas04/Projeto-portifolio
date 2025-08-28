import { useRef, useEffect, useState } from "react";
import "./Projects.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import GifRoutine from '../../assets/GifRoutine.gif';
import CitLog from '../../assets/CitLog.png';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDocker } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';

type Project = {
  year: string;
  title: string;
  description: string;
  image: string;
  languages?: string[];
  repo?: string;
};

const projects: Project[] = [
  {
    year: "2024",
    title: "Clever Routine",
    description: `Ferramenta online para ajudar os usuários a gerenciar o tempo de estudo de forma eficiente e evitar a procrastinação.\n\n- Sistema de calendário\n- Método Pomodoro\n- Playlist musical\n- Sistema de conquistas`,
    image: GifRoutine,
    languages: ["HTML", "CSS", "JavaScript"]
  },
  {
    year: "2024",
    title: "CIT",
    description: `Sistema para gestão de condomínios residenciais, focado em comunicação eficiente, automação de tarefas administrativas e uso das áreas comuns. Interface simples e intuitiva para administração e moradores.`,
    image: CitLog,
    languages: ["Docker", "React", "HTML", "CSS", "JavaScript", "Spring Boot"],
    repo: "https://github.com/DjairAugusto/CIT"
  },
  {
    year: "2023",
    title: "E-commerce",
    description: "Loja virtual com autenticação e carrinho de compras.",
    image: "/images/project3.png"
  }
];

function Projects() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(Array(projects.length).fill(false));
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-index'));
            setVisible((prev) => {
              const updated = [...prev];
              updated[idx] = true;
              return updated;
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    stepsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Calcula a altura da linha central baseada nos projetos visíveis
  useEffect(() => {
    if (timelineRef.current) {
      // Garante que a linha central sempre vai até o final da timeline
      const container = timelineRef.current.parentElement;
      if (container) {
        timelineRef.current.style.height = `${container.scrollHeight}px`;
      }
    }
  }, [visible]);

  return (
    <section id="projects" className="section">
      <FadeInWrapper>
        <h2>{t.projects.title}</h2>
      </FadeInWrapper>
      <div className="timeline-container" style={{ position: 'relative' }}>
        <div ref={timelineRef} className="timeline-center-line" />
        {projects.map((project, index) => (
          <div
            key={index}
            ref={el => { stepsRef.current[index] = el; }}
            data-index={index}
            className={`timeline-step ${index % 2 === 0 ? "left" : "right"} ${visible[index] ? "visible" : ""}`}
          >
            <div className="timeline-year">{project.year}</div>
            <h3>
              {project.title === "Clever Routine" ? (
                <a
                  href="https://github.com/DjairAugusto/CleverRoutine"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#dad9d7', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  {project.title}
                </a>
              ) : project.title === "CIT" && project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#dad9d7', textDecoration: 'underline', cursor: 'pointer' }}
                >
                  {project.title}
                </a>
              ) : (
                project.title
              )}
            </h3>
            <img
              src={project.image}
              alt={project.title}
              className="timeline-image"
            />
            <p>{project.description}</p>
            {project.languages && (
              <div className="project-languages">
                {project.languages.map(lang => (
                  <span className={`lang-tag lang-${lang.toLowerCase()}`} key={lang} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    {lang === 'HTML' && <FaHtml5 style={{ color: '#e44d26' }} />}
                    {lang === 'CSS' && <FaCss3Alt style={{ color: '#2965f1' }} />}
                    {lang === 'JavaScript' && <FaJsSquare style={{ color: '#f7df1e' }} />}
                    {lang === 'React' && <FaReact style={{ color: '#61dafb' }} />}
                    {lang === 'Docker' && <FaDocker style={{ color: '#2496ed' }} />}
                    {lang === 'Spring Boot' && <SiSpringboot style={{ color: '#6db33f' }} />}
                    <span style={{ color: '#dad9d7', marginLeft: 2 }}>{lang}</span>
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
