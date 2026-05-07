import React from 'react';
import { Wrench, Sparkles, ShieldCheck, Zap, Settings } from 'lucide-react';

function Services() {
  const servicesList = [
    {
      title: "Restauração de faróis com proteção",
      description: "Recuperação da transparência original e aplicação de camada protetora contra amarelamento.",
      icon: <Sparkles color="white" size={24} />,
      imgFile: "servico_01.jpg"
    },
    {
      title: "Soldagem de plásticos",
      description: "Reparo especializado em peças plásticas, recuperando a resistência e o acabamento original.",
      icon: <Zap color="white" size={24} />,
      imgFile: "servico_02.jpg"
    },
    {
      title: "Vitrificação",
      description: "Proteção de pintura de alto nível com brilho profundo e resistência contra agentes externos.",
      icon: <ShieldCheck color="white" size={24} />,
      imgFile: "servico_03.jpg"
    },
    {
      title: "Alinhamento de para-choques",
      description: "Ajuste preciso de encaixes e vãos para devolver a simetria perfeita da carroceria.",
      icon: <Settings color="white" size={24} />,
      imgFile: "servico_04.jpg"
    },
    {
      title: "Pequenos reparos automotivos",
      description: "Soluções rápidas e eficientes para danos pontuais, mantendo a originalidade do veículo.",
      icon: <Wrench color="white" size={24} />,
      imgFile: "servico_05.jpg"
    }
  ];

  return (
    <section id="servicos" className="services-section">
      <h2>Nossos <span className="text-red">Serviços</span></h2>
      <p className="section-subtitle">Oferecemos soluções completas para manter seu veículo em perfeito estado</p>
      
      <div className="services-grid">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <div 
              className="service-image" 
              style={{ backgroundImage: `url("/img/${service.imgFile}")` }}
            >
              <div className="icon-wrapper bg-red">
                {service.icon}
              </div>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;