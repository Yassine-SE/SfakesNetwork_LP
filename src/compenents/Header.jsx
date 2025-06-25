import { useState } from "react";
import "../style/Header.scss"
import logo from "../assets/SN_logo.svg"
// import logo from "../assets/SN_logo-white.svg"


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
                         <a onClick={() => menuClicked("About")}>À propos</a>
                         <a onClick={() => menuClicked("Services")}>Nos services</a>
                         <a onClick={() => menuClicked("Project")}>Projets</a>
                         <a onClick={() => menuClicked("Contact")}>Contactez-nous</a>
                    </nav>

                    <nav className="nav">
                         <a className="primary-button small" href="#" onClick={() => setIsMenuOpen(false)}>Obtenez un devis gratuit</a>
                    </nav>
               </div>
               
               </div>
          </header>
     );
};

export default Header;
