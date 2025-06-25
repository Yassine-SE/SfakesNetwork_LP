import "../style/Vision.scss"

import About_us from "../assets/About_us.jpg"

const Vision = () => {
     return (
          <section id="About" className="vision-container">

               <div className="vision-image-container">
                    <img src={About_us} alt="About us" />
               </div>

               <div className="vision-content-wrapper">
                    <div className="vision-content">
                         <h2>À propos de nous</h2>
                         <p>Sfakes Network est un fournisseur de confiance de solutions technologiques sur mesure pour les particuliers et les entreprises. Nous sommes spécialisés dans l'installation professionnelle d'infrastructures réseau, de systèmes de surveillance intelligents, de couverture Wi-Fi, d'alarmes de sécurité et de systèmes audio avancés.</p>
                         <p>Notre mission est d'apporter sécurité, rapidité et simplicité à vos opérations quotidiennes. Que vous soyez un petit bureau ou un grand bâtiment, notre équipe d'experts vous garantit une installation fluide, du matériel moderne et un support de qualité.</p>
                    </div>
               </div>
               
          </section>
     );
};

export default Vision;
