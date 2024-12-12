import { useState } from "react";
import "../style/Header.scss"
import logo from "../assets/Ouispad-logo-white.svg"

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     return (
          <header className="header-container">
               <div className="logo">
                    <img src={logo} alt="Ouispad Logo" />
               </div>

               <button className="mobile-menu-button" onClick={toggleMenu}>
                    {isMenuOpen ? "✕" : "☰"}
               </button>

               <div className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                    <nav className="nav">
                         <a href="/" onClick={() => setIsMenuOpen(false)}>Accueil</a>
                         <a href="/#Vision" onClick={() => setIsMenuOpen(false)}>Vision</a>
                         <a href="/#Feature" onClick={() => setIsMenuOpen(false)}>Fonctionnalités</a>
                    </nav>

                    <nav className="nav">
                         <a href="https://app.ouispad.fr/login" onClick={() => setIsMenuOpen(false)}>Se connecter</a>
                         <a className="primary-button small" href="https://app.ouispad.fr/signup" onClick={() => setIsMenuOpen(false)}>Essayer maintenant</a>
                    </nav>
               </div>
          </header>
     );
};

export default Header;
