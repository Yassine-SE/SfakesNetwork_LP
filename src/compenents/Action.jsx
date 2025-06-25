import "../style/Action.scss"
import Headline from "./Headline";

import { FiPhone } from "react-icons/fi";


const Action = () => {
     return (
          <section className="action-container">
               
               <Headline >
                    <h2>Prêt à moderniser votre espace ?</h2>
                    <p>Contactez Sfakes Network dès aujourd’hui pour une consultation <br/>gratuite ou un devis personnalisé.</p>
               </Headline>

               <div className="action-wrapper">
                    <a id="Signup_btn" className="primary-button" href="#">Obtenez un devis gratuit</a>
                    <a className="outline-button" href="#"><FiPhone/> Appelez-nous</a>
               </div>
          </section>
     );
};

export default Action;
