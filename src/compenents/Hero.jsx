import "../style/Hero.scss"
import Header from "./Header";
import { FiPhone } from "react-icons/fi";


const Hero = () => {
     return (

          <section className="hero-section">
          
          <Header />
          
          
          <section className="hero-container">

               <div className="hero-wrapper">

               <div className="hero-content-wrapper">

                    <div className="hero-content">
                         <h1>Votre partenaire <span className="text-highlight">de confiance</span> <br/>en matière <span className="text-highlight">de sécurité </span>et <br/><span className="text-highlight">de connectivité</span></h1>
                         <p>Des installations de réseaux aux systèmes de surveillance <br/>et de sonorisation, nous vous proposons des solutions <br/>expertes adaptées à vos besoins.</p>
                         
                         <div className="hero-call-to-action">
                              <a id="Signup_btn" className="primary-button" href="#">Obtenez un devis gratuit</a>
                              <a className="outline-button white" href="tel:+212 671-199919"><FiPhone/> Appelez-nous</a>
                         </div>

                    </div>

               </div>
               
               <div className="hero-image-wrapper"></div>

               </div>
               
          </section>

          <div className="hero-image-container">
               <div className="left-shadow"></div>
          </div>
          
          </section>
     );
};

export default Hero;
