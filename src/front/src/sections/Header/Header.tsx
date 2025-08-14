import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">[X]</div>
      <nav>
        <Link to="about" spy={true} smooth={true} duration={500}>SOBRE MIM</Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>PROJETOS</Link>
        <Link to="experience" spy={true} smooth={true} duration={500}>EXPERIÊNCIAS</Link>
      </nav>
      <a href="#contact" className="contact-link">Fale Comigo →</a>
    </header>
  );
}

export default Header;