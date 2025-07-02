import "../style/Footer.scss";
import logo from "../assets/SN_logo-white.svg";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {

    

    return (
        <footer id="Contact" className="footer-container">
            <div className="footer-wrapper">
                <div className="footer-logo">
                    <a href="/">
                        <img src={logo} alt="Ouispad" />
                    </a>
                </div>
                
                <div className="footer-links">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="tel:+212 671-199919">+212 671-199 919</a></li>
                        <li><a href="mailto:contact@sfakesnetwork.com">contact@sfakesnetwork.com</a></li>
                    </ul>
                </div>
                
                {/* <div className="footer-privacy">
                    <h4>Légal</h4>
                    <ul>
                        <li><a href="/privacy">politique de confidentialité</a></li>
                        <li><a href="/terms">Conditions d'utilisation</a></li>
                    </ul>
                </div> */}
                
                <div className="footer-social">
                    <h4>Suivez-nous</h4>
                    <div className="social-icons">
                        <a href="#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="#" rel="noopener noreferrer"><FaFacebookF /></a>
                        {/* <a href="#" rel="noopener noreferrer"><FaXTwitter /></a>
                        <a href="#" rel="noopener noreferrer"><FaLinkedinIn /></a> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
