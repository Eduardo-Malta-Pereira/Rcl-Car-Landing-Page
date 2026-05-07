import React from 'react';

function About() {
  return (
    <section id="sobre" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>Sobre a <span className="text-red">RCL CAR</span></h2>
          <p>Somos uma empresa especializada em serviços automotivos de alta qualidade, comprometida em oferecer o melhor atendimento e soluções personalizadas para cada cliente.</p>
          <p>Nossa equipe de profissionais altamente qualificados utiliza tecnologia de ponta para garantir que seu veículo receba o tratamento que merece, combinando expertise técnica com paixão por automóveis.</p>
          <div className="stats-grid">
            <div className="stat-item">
              <h3 className="text-red">15+</h3>
              <p>Anos de Experiência</p>
            </div>
            <div className="stat-item">
              <h3 className="text-red">5000+</h3>
              <p>Clientes Satisfeitos</p>
            </div>
            <div className="stat-item">
              <h3 className="text-red">24/7</h3>
              <p>Suporte</p>
            </div>
            <div className="stat-item">
              <h3 className="text-red">100%</h3>
              <p>Garantia</p>
            </div>
          </div>
        </div>
        <div 
          className="about-image" 
          style={{ backgroundImage: `url("/img/sobre_01.jpg")` }}
        ></div>
      </div>
    </section>
  );
}

export default About;