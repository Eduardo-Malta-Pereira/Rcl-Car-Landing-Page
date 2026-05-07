import React from 'react';

function Gallery() {
  const images = [
    '/img/rcl_car_01.jpg',
    '/img/rcl_car_02.jpg',
    '/img/rcl_car_03.jpg'
  ];

  return (
    <section id="galeria" className="gallery-section">
      <h2>Nossa <span className="text-red">Galeria</span></h2>
      <p className="section-subtitle">Confira alguns dos nossos trabalhos e o ambiente da RCL Car</p>
      
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="gallery-img" 
            style={{ backgroundImage: `url("${img}")` }}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;