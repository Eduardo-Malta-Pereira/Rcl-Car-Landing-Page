import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/img/rcl_car_logo.jpg`} alt="RCL CAR Logo" style={{width: '50px', borderRadius: '8px'}} />
        <h2>RCL CAR</h2>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
      </div>

      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <Link to="inicio" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Início</Link>
        <Link to="sobre" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Sobre</Link>
        <Link to="servicos" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Serviços</Link>
        <Link to="depoimentos" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Clientes</Link>
        <Link to="galeria" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Galeria</Link>
        <Link to="contato" smooth={true} duration={500} offset={-70} onClick={toggleMenu}>Contato</Link>
        <Link to="contato" smooth={true} duration={500} offset={-70} onClick={toggleMenu} className="mobile-only">
          <button className="btn-red">Fale Conosco</button>
        </Link>
      </nav>

      <Link to="contato" smooth={true} duration={500} offset={-70} className="desktop-only">
        <button className="btn-red">Fale Conosco</button>
      </Link>
    </header>
  );
}

export default Header;