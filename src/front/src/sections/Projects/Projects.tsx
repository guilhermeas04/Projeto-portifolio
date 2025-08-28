import { useRef, useEffect, useState } from "react";
import "./Projects.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import SFLogo from '../../assets/SFLogo.png';
import villaPisani from '../../assets/villapisani.gif';
import SGchamados from '../../assets/chamados.gif';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaDocker,FaJava   } from 'react-icons/fa';
import { SiSpringboot, SiC, SiApachemaven,SiAngular,SiMysql,SiMui  } from 'react-icons/si';

type Project = {
  year: string;
  title: string;
  description: string;
  image: string;
  languages?: string[];
  repo?: string;
};

function Projects() {
  const { t, language } = useLanguage();
  const projects: Project[] = [
    {
      year: "2023",
      title: language === "en" ? "Speed Fanatic" : "Speed Fanatic",
      description: language === "en"
        ? `Intuitive portal designed for Formula 1 fans, developed to facilitate access to information about the sport. The website offers a user-centric experience, making content accessible to both newcomers and experienced fans. It includes a forum with automated AI moderation, ensuring secure and organized discussions, in addition to providing an informative and engaging browsing experience.`
        : 'Portal intuitivo voltado para fãs de Fórmula 1, desenvolvido para facilitar o acesso a informações do esporte. O site oferece uma experiência centrada no usuário, tornando o conteúdo acessível tanto para novatos quanto para fãs experientes. Inclui um fórum com moderação automatizada por IA, garantindo discussões seguras e organizadas, além de proporcionar uma navegação informativa e envolvente.',
      image: SFLogo,
      languages: ["HTML", "CSS", "JavaScript", "Java", "Maven"]
    },
    {
      year: "2025",
      title: language === "en" ? "Villa Pisani" : "Villa Pisani",
      description: language === "en"
        ? `System for managing residential condominiums, focused on efficient communication, automation of administrative tasks, and use of common areas. Simple and intuitive interface for administration and residents.`
        : `Sistema para gestão de condomínios residenciais, focado em comunicação eficiente, automação de tarefas administrativas e uso das áreas comuns. Interface simples e intuitiva para administração e moradores.`,
      image: villaPisani,
      languages: ["Docker", "Angular", "HTML", "CSS", "JavaScript"],
      // repo: "https://github.com/DjairAugusto/CIT"
    },
    {
      year: "2025",
      title: language === "en" ? "Ticket Management system" : "Sistema Gerenciador de Chamados",
      description: language === "en"
        ? `A system developed to optimize the support workflow within an organization. It automates the management of requests, allowing users with different profiles to efficiently open, track, and close tickets. The system not only streamlines communication but also collects strategic data on resolution time and user satisfaction. This provides valuable insights for continuous service improvement and the optimization of productivity.`
        : `Sistema desenvolvido para otimizar o fluxo de trabalho de suporte em uma organização. Ele automatiza a gestão de solicitações, permitindo que usuários de diferentes perfis abram, acompanhem e fechem chamados de forma eficiente. O sistema não apenas agiliza a comunicação, mas também coleta dados estratégicos sobre o tempo de resolução e a satisfação do usuário. Isso oferece insights valiosos para a melhoria contínua dos serviços e a otimização da produtividade.`,
      image: SGchamados,
      languages: ["React","MUI","Spring Boot","MySQL"],
      // repo: "https://github.com/DjairAugusto/Hotelem"
    }
  ];
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

  useEffect(() => {
    if (timelineRef.current) {
      // Calcula a altura da linha central baseada nos projetos visíveis
      let height = 0;
      stepsRef.current.forEach((el, idx) => {
        if (el && visible[idx] && timelineRef.current) {
          const rect = el.getBoundingClientRect();
          const containerRect = timelineRef.current.parentElement?.getBoundingClientRect();
          if (containerRect) {
            const bottom = rect.bottom - containerRect.top;
            if (bottom > height) height = bottom;
          }
        }
      });
      // Altura mínima para garantir que a linha aparece no início
      timelineRef.current.style.height = `${Math.max(height, 100)}px`;
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
              ) : project.title === "Hotel em C" && project.repo ? (
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
                    {lang === 'Java' && <FaJava style={{ color: '#EA5B0C' }} />}
                    {lang === 'Maven' && <SiApachemaven style={{ color: '#C71A36' }} />}
                    {lang === 'React' && <FaReact style={{ color: '#61dafb' }} />}
                    {lang === 'Angular' && <SiAngular  style={{ color: '#DD0031' }} />}
                    {lang === "MySQL" && <SiMysql style={{ color: '#4479A1' }} /> }
                    {lang === "MUI" && <SiMui  style={{ color: '#007FFF' }} /> }
                    {lang === 'Docker' && <FaDocker style={{ color: '#2496ed' }} />}
                    {lang === 'Spring Boot' && <SiSpringboot style={{ color: '#6db33f' }} />}
                    {lang === 'C' && <SiC style={{ color: '#A8B9CC' }} />}
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
