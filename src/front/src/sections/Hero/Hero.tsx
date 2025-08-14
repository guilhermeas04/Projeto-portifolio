import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>LOREM IPSUM</h1>
          <div className="social-icons-placeholder">
            <span>●</span><span>●</span><span>●</span>
          </div>
          <p>Lorem ipsum placeholder text...</p>
        </div>
        <div className="hero-image-placeholder"></div>
      </div>
      <div className="scroll-down">Scroll Down ↓</div>
    </section>
  );
}

export default Hero;