import React from 'react';
import { Link } from 'react-scroll';

function Hero() {
  return (
    <section 
      id="inicio" 
      className="hero-section"
      style={{ backgroundImage: `url("/img/hero_01.jpg")` }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Excelência em <span className="text-red">Cuidados Automotivos</span></h1>
        <p>Seu veículo merece o melhor. Serviços especializados com qualidade premium e atendimento personalizado.</p>
        <div className="hero-buttons">
          <Link to="contato" smooth={true} duration={500} offset={-70}>
            <button className="btn-red">Agende Agora &gt;</button>
          </Link>
          <Link to="servicos" smooth={true} duration={500} offset={-70}>
            <button className="btn-outline">Nossos Serviços</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;