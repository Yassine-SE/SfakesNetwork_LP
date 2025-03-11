import { useState } from "react";
import "../style/Header.scss"
import logo from "../assets/Ouispad-logo-white.svg"
// import logo from "../assets/Ouispad-Logo.svg"


const scrollToSection = (id) => {
     document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     
     const menuClicked = (id) => {
          setIsMenuOpen(false)
          scrollToSection(id)
     };


     return (
          <header className="header-container">
               <div className="header-wrapper">

               <div className="logo">
                    <a href="/">
                         <img src={logo} alt="Ouispad Logo" />
                    </a>
               </div>

               <button className="mobile-menu-button" onClick={toggleMenu}>
                    {isMenuOpen ? "✕" : "☰"}
               </button>

               <div className={`header-nav ${isMenuOpen ? 'active' : ''}`}>
                    <nav className="nav">
                         <a onClick={() => menuClicked("Feature")}>Fonctionnalités</a>
                         <a onClick={() => menuClicked("Integration")}>Integration</a>
                         <a onClick={() => menuClicked("FAQ")}>FAQ</a>
                         {/* <a onClick={() => menuClicked("Pricing")}>Pricing</a> */}
                         <a onClick={() => menuClicked("Footer")}>Contact</a>
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
