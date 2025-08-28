import "./Contact.css";
import FadeInWrapper from "../../components/FadeInWrapper";
import { useLanguage } from "../../hooks/useLanguage";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="contact-section">
      <FadeInWrapper>
        <h2>{t.contact.title}</h2>
      </FadeInWrapper>

      <div className="contact-content-wrapper">
        <FadeInWrapper delay={200}>
          <ul className="contact-list">
            <li>
              <FaLinkedin size={28} />
              <a
                href="https://www.linkedin.com/in/guilherme-santos-47b2aa281"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <HiOutlineMail size={28} />
              <a >Email - guilhermesantos_@outlook.com</a>
            </li>
            <li>
              <FaGithub size={28} />
              <a
                href="https://github.com/guilhermeas04"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <FaInstagram size={28} />
              <a
                href="https://www.instagram.com/guilhermeas__"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </FadeInWrapper>
      </div>
    </footer>
  );
}

export default Contact;
