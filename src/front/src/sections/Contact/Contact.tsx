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
            <strong>in</strong>{" "}
            <a
              href="https://www.linkedin.com/in/pedro-duart3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/pedro-duart3
            </a>
          </li>
          <li>
            <strong>✉</strong>{" "}
            <a href="mailto:artedudurty@gmail.com.br">
              artedudurty@gmail.com.br
            </a>
          </li>
          <li>
            <strong>gh</strong>{" "}
            <a
              href="https://github.com/pedrorodriguesduarte"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/pedrorodriguesduarte
            </a>
          </li>
        </ul>
      </FadeInWrapper>
    </footer>
  );
}

export default Contact;
