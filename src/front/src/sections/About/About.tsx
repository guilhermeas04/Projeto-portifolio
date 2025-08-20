import "./About.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";

function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section">
      <FadeInWrapper>
        <h2>{t.about.title}</h2>
      </FadeInWrapper>
      <FadeInWrapper delay={200}>
        <div className="about-content">
          <p>{t.about.description}</p>
          <div className="about-overlay-box"></div>
        </div>
      </FadeInWrapper>
    </section>
  );
}

export default About;
