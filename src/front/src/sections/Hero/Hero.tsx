import React from "react";
import "./Hero.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import pedroImg from "../../assets/pedro.png"; // <-- import correto

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <FadeInWrapper delay={200}>
          <div className="hero-text">
            <h1>{t.hero.title}</h1>
            <div className="social-icons-placeholder">
              <span>●</span>
              <span>●</span>
              <span>●</span>
            </div>
            <p>{t.hero.subtitle}</p>
          </div>
        </FadeInWrapper>
        <FadeInWrapper delay={400}>
          <img
            src={pedroImg} // <-- usar a variável importada
            alt="Pedro Duarte"
            className="hero-image"
          />
        </FadeInWrapper>
      </div>
    </section>
  );
};

export default Hero;
