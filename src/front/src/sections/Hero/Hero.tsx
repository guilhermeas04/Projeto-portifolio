import "./Hero.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import suaFoto from '../../assets/profile_picture.png';

function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <FadeInWrapper delay={200}>
          <div className="hero-text">
            <h1>{t.hero.title}</h1>
            <div className="social-icons-placeholder"></div>
            <p>{t.hero.subtitle}</p>
          </div>
        </FadeInWrapper>
        <FadeInWrapper delay={400}>
          {/* O container da imagem é colocado dentro do FadeInWrapper */}
          <div className="hero-image-container">
            <img src={suaFoto} alt="Uma foto sua" className="hero-image" />
          </div>
        </FadeInWrapper>
      </div>
      <FadeInWrapper delay={600}>
        {/* O link de rolagem agora usa a tradução */}
        <a href="#about" className="scroll-down">
          {t.hero.scrollDown}
        </a>
      </FadeInWrapper>
    </section>
  );
}

export default Hero;