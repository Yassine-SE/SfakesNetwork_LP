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
                         <a href="#services">Home</a>
                         <a href="#services">Vision</a>
                         <a href="#features">Features</a>
                         <a href="#features">Team</a>
                         <a href="#contact">Contact</a>
                    </nav>

                    <nav className="nav">
                         <a href="https://app.ouispad.fr/login">Login</a>
                         <a className="primary-button small" href="https://app.ouispad.fr/signup">Get Started</a>
                    </nav>

               </div>

          </header>
     );
};

export default Header;
