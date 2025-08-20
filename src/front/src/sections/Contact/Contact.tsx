import "./Contact.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";

function Contact() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="contact-section">
      <FadeInWrapper>
        <h2>{t.contact.title}</h2>
      </FadeInWrapper>
      <FadeInWrapper delay={200}>
        <ul>
          <li>
            <strong>in</strong> linkedin.com/user
          </li>
          <li>
            <strong>✉</strong> email@email.com.br
          </li>
          <li>
            <strong>gh</strong> github.com/user
          </li>
        </ul>
      </FadeInWrapper>
    </footer>
  );
}

export default Contact;
