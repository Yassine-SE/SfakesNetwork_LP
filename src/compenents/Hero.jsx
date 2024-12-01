import "../style/Hero.scss"

import dashImg from "../assets/dash_img.png"
import bgImg from "../assets/bg_hero.svg"
import facebookImg from "../assets/facebook_logo.png"
import instagramImg from "../assets/instagram_logo.png"

const Hero = () => {
     return (
          <section className="hero-container">
               <div className="hero-content-wrapper">

                    <div className="hero-content">
                         <h1>Effortless lead ad creation</h1>
                         <p>Simplify your ad creation process and reach your audience faster.</p>
                         <a className="primary-button" href="https://app.ouispad.fr/signup">Try it now</a>
                    </div>

               </div>
               
               <div className="hero-image-wrapper">
                    <img className="hero-image" src={dashImg} alt="Lead Management Dashboard" />

                    <div className="hero-logos">
                         <img className="facebook-icon" src={facebookImg} alt="" />
                         <img className="instagram-icon" src={instagramImg} alt="" />
                    </div>

                    <img className="hero-bg" src={bgImg} alt="" />

               </div>
               

          </section>
     );
};

export default Hero;
