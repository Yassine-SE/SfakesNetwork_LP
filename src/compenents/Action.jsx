import "../style/Action.scss"
import { useState } from 'react';
import Headline from "./Headline";
import QuoteModal from './QuoteModal';

import { FiPhone } from "react-icons/fi";


const Action = () => {
     
     const [modalOpen, setModalOpen] = useState(false);

     return (
          <>

          <QuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
          
          
          <section className="action-container">
               
               <Headline >
                    <h2>Prêt à moderniser votre espace ?</h2>
                    <p>Contactez Sfakes Network dès aujourd’hui pour une consultation <br/>gratuite ou un devis personnalisé.</p>
               </Headline>

               <div className="action-wrapper">
                    <a id="Signup_btn" className="primary-button" onClick={() => setModalOpen(true)}>Obtenez un devis gratuit</a>
                    <a className="outline-button" href="tel:+212 671-199919"><FiPhone/> Appelez-nous</a>
               </div>
          </section>

          </>
     );
};

export default Action;
