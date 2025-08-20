import { useTranslation } from 'react-i18next';
import './About.css';

function About() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section id="about" className="section">
      <div className="language-selector-nav">
        <button
          className={i18n.language === 'pt' ? 'active' : ''}
          onClick={() => changeLanguage('pt')}
        >
          Português
        </button>
        <button
          className={i18n.language === 'en' ? 'active' : ''}
          onClick={() => changeLanguage('en')}
        >
          English
        </button>
      </div>
      <h2>{t('about_title')}</h2>
      <div className="about-content">
        <p>
          {t('about_text')}
        </p>
        {/* <div className="about-overlay-box"></div> */}
      </div>
    </section>
  );
}

export default About;