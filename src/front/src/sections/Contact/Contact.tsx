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
                href="https://linkedin.com/user"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <HiOutlineMail size={28} />
              <a href="mailto:email@email.com.br">Email</a>
            </li>
            <li>
              <FaGithub size={28} />
              <a
                href="https://github.com/user"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <FaInstagram size={28} />
              <a
                href="https://instagram.com/user"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </FadeInWrapper>

        <FadeInWrapper delay={400}>
          <h2 className="form-title">Me envie um email!</h2>

          {/* ===== FORMULÁRIO ATUALIZADO ABAIXO ===== */}
          <form
            action="https://formspree.io/f/myzpqvza"
            method="POST"
            className="contact-form"
          >
            <input type="text" name="name" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu email" required />
            <textarea
              name="message"
              placeholder="Sua mensagem"
              rows={4} 
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
          {/* ===== FIM DO FORMULÁRIO ATUALIZADO ===== */}
          
        </FadeInWrapper>
      </div>
    </footer>
  );
}

export default Contact;