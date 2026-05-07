import React from 'react';
import { Star } from 'lucide-react';

function Testimonials() {
  return (
    <section id="depoimentos" className="testimonials-section">
      <h2>O que dizem nossos <span className="text-red">Clientes</span></h2>
      <p className="section-subtitle">A satisfação dos nossos clientes é nossa maior conquista</p>
      
      <div className="testimonials-grid">
        <div className="testimonial-card">
          <div className="stars">
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
          </div>
          <p className="quote">"Excelente atendimento! Meu carro nunca esteve tão bem cuidado. A equipe é extremamente profissional e atenciosa."</p>
          <div className="client-info">
            <h4>João Silva</h4>
            <span>Cliente desde 2020</span>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="stars">
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
          </div>
          <p className="quote">"Confio totalmente no trabalho da RCL Car. Sempre entregam além do esperado e com muita transparência."</p>
          <div className="client-info">
            <h4>Maria Santos</h4>
            <span>Cliente desde 2019</span>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="stars">
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
            <Star fill="#FFD700" color="#FFD700" size={20} />
          </div>
          <p className="quote">"O melhor centro de estética automotiva da região! Cuidado impecável com os detalhes e um atendimento premium que faz toda a diferença."</p>
          <div className="client-info">
            <h4>Carlos Oliveira</h4>
            <span>Cliente desde 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;