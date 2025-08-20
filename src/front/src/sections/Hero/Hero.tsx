import './Hero.css';
import suaFoto from '../../assets/profile_picture.jpg';
function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">

        <div className="hero-text">
          <h1>[Seu nome aqui TESTE TESTE]</h1>
          
          <p>Engenheiro de Software.</p>
        </div>
        {/* Adicione a tag <img> aqui */}
        <div className="hero-image-container"> 
          <img src={suaFoto} alt="Uma foto sua" className="hero-image" />
        </div>
      </div>
      <a href="#about" className="scroll-down">Veja Mais! ↓</a>
    </section>
  );
}

export default Hero;