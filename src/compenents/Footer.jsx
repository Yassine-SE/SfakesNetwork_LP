import "../style/Footer.scss"

import logo from "../assets/Ouispad-logo-white.svg"
import bgImg from "../assets/bg_hero.svg"


const Footer = () => {
     return (
          <footer className="footer-container">
               
               {/* <img className="footer-bg" src={bgImg} alt="" /> */}

               <div className="footer-wrapper">

                    <nav className="footer-nav">
                         <img className="logo" src={logo} alt="" />

                         <div className="links">
                              <a href="/privacy">Politique de confidentialité</a>
                              <a href="/terms">Conditions d'utilisation</a>
                         </div>
                    </nav>
                    
                    <p>© 2024 Ouispad. All rights reserved.</p>
                    
               </div>
               
          </footer>
     );
};

export default Footer;
