import "../style/Header.scss"
import logo from "../assets/Ouispad-logo-white.svg"

const Header = () => {
     return (
          <header className="header-container">

               <div className="logo">
                    <img src={logo} alt="" />
               </div>

               <div className="header-nav">

                    <nav className="nav">
                         <a href="/">Accueil</a>
                         <a href="/#Vision">Vision</a>
                         <a href="/#Feature">Fonctionnalités</a>
                         {/* <a href="#Contact">Contact</a> */}
                    </nav>

                    <nav className="nav">
                         <a href="https://app.ouispad.fr/login">Login</a>
                         <a className="primary-button small" href="https://app.ouispad.fr/signup">Essayer maintenant</a>
                    </nav>

               </div>

          </header>
     );
};

export default Header;
