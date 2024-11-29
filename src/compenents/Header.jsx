import "../style/Header.scss"
import logo from "../assets/Ouispad-logo-white.svg"

const Header = () => {
     return (
          <header className="header-container">

               <div className="logo">
                    <img src={logo} alt="" />
               </div>

               <nav className="nav">
                    <a href="#features">Features</a>
                    <a href="#services">Vision</a>
                    <a href="#contact">Contact</a>
               </nav>

               <nav className="nav">
                    <a href="https://app.ouispad.fr/login">Login</a>
                    <a className="primary-button small" href="https://app.ouispad.fr/signup">Get Started</a>
               </nav>

          </header>
     );
};

export default Header;
