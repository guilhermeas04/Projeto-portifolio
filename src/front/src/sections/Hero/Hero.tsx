import "./Hero.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";

function Hero() {
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
          <div className="hero-image-placeholder"></div>
        </FadeInWrapper>
      </div>
      <FadeInWrapper delay={600}>
        <div className="scroll-down">{t.hero.scrollDown}</div>
      </FadeInWrapper>
    </section>
  );
}

export default Hero;
