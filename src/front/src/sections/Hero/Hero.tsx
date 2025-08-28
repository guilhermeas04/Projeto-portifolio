import React, { useEffect, useState } from "react";
import "./Hero.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import suaFoto from '../../assets/profile_picture.png';

function Hero() {
  const { t } = useLanguage();
  const fullName = t.hero.title;
  const [displayedName, setDisplayedName] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedName((prev) => prev + fullName[index]);
        setIndex(index + 1);
      }, 120);
      return () => clearTimeout(timeout);
    }
  }, [index, fullName]);

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <FadeInWrapper delay={200}>
          <div className="hero-text">
            <h1 className="pixel-font">
              {displayedName}
              {index < fullName.length && <span className="blinking-cursor">|</span>}
            </h1>
            <div className="social-icons-placeholder"></div>
            <p>{t.hero.subtitle}</p>
          </div>
        </FadeInWrapper>
        <FadeInWrapper delay={400}>
          <div className="hero-image-container">
            <img src={suaFoto} alt="Uma foto sua" className="hero-image" />
          </div>
        </FadeInWrapper>
      </div>
    </section>
  );
}

export default Hero;