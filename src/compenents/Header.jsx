import { useState } from "react";
import "../style/Header.scss"
import logo from "../assets/Ouispad-logo-white.svg"
// import logo from "../assets/Ouispad-Logo.svg"

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     return (
          <header className="header-container">
               <div className="header-wrapper">

               <div className="logo">
                    <img src={logo} alt="Ouispad Logo" />
               </div>

               <button className="mobile-menu-button" onClick={toggleMenu}>
                    {isMenuOpen ? "✕" : "☰"}
               </button>

               <div className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                    <nav className="nav">
                         <a href="/#Feature" onClick={() => setIsMenuOpen(false)}>Fonctionnalités</a>
                         <a href="/#Integration" onClick={() => setIsMenuOpen(false)}>Integration</a>
                         <a href="/#FAQ" onClick={() => setIsMenuOpen(false)}>FAQ</a>
                         <a href="/#Pricing" onClick={() => setIsMenuOpen(false)}>Pricing</a>
                         <a href="/#Contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
                    </nav>

                    <nav className="nav">
                         <a className="signin-button" href="https://app.ouispad.fr/login" onClick={() => setIsMenuOpen(false)}>Se connecter</a>
                         <a className="primary-button small" href="https://app.ouispad.fr/signup" onClick={() => setIsMenuOpen(false)}>S'inscrire</a>
                    </nav>
               </div>
               
               </div>
          </header>
     );
};

export default Header;
