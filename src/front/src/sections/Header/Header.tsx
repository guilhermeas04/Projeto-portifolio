import { Link } from "react-scroll";
import "./Header.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";
import HeaderIcon from "../../assets/HeaderIcon.png";

function Header() {
  const { t, language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <FadeInWrapper>
        <div className="logo">
          <img
            src={HeaderIcon}
            alt="Logo"
            style={{ height: "64px", maxHeight: "100%", width: "auto" }}
          />
        </div>
      </FadeInWrapper>
      <FadeInWrapper delay={200}>
        <nav>
          <Link to="about" spy={true} smooth={true} duration={500}>
            {t.header.about}
          </Link>
          <Link to="projects" spy={true} smooth={true} duration={500}>
            {t.header.projects}
          </Link>
          <Link to="experience" spy={true} smooth={true} duration={500}>
            {t.header.experiences}
          </Link>
        </nav>
      </FadeInWrapper>
      <div className="header-right">
        <FadeInWrapper delay={300}>
          <button
            className="language-toggle"
            onClick={toggleLanguage}
            aria-label={`Switch to ${
              language === "pt" ? "English" : "Português"
            }`}
          >
            {language === "pt" ? "EN" : "PT"}
          </button>
        </FadeInWrapper>
        <FadeInWrapper delay={400}>
          <a href="#contact" className="contact-link">
            {t.header.contactMe}
          </a>
        </FadeInWrapper>
      </div>
    </header>
  );
}

export default Header;
