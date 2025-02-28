import { useState } from "react";
import "../style/Steps.scss"

import DefaultImg from "../assets/default_img.png"
import StepOne from "../assets/1.png"
import StepTwo from "../assets/2.png"
import Stepthree from "../assets/3.png"

const steps = [
     {
          id: 1,
          title: "1 - Renseignez-vos informations",
          content: "Répondez au questionnaire de notre IA pour lui permettre de mieux comprendre votre entreprise : secteur d’activité, client cible, objectifs…",
          image: StepOne,
     },
     {
          id: 2,
          title: "2 - Finalisez votre publicité",
          content: "Grâce à ces informations, Ouispad génère automatiquement une publicité adaptée à votre activité et à vos futurs clients. Vous pouvez modifier le texte, l’image et les paramètres (ex : budget, ciblage…) selon vos préférences.", 
          image: StepTwo,
     },
     {
          id: 3,
          title: "3 - Lancez votre campagne et suivez vos prospects",
          content: "Une fois votre publicité validée, elle est diffusée ! Il ne vous reste plus qu’à attendre vos premiers prospects et à les contacter. Un espace dédié vous permet de suivre et gérer efficacement vos leads.",
          image: Stepthree,
     },
];

const Steps = () => {

  const [activeStep, setActiveStep] = useState(1);

  return (
     <section className="steps-container">
          <div className="steps-wrapper">

          {/* Sidebar */}
          <div className="sidebar">
               {steps.map((step) => (
                    <>
                         <button
                              key={step.id}
                              className={`step-button ${activeStep === step.id ? "active" : ""}`}
                              onClick={() => setActiveStep(step.id)}
                         >
                              {step.id}
                         </button>
                         { step.id != 3 && <div class="step-button-linker"></div>}
                    </>
               ))}
          </div>

          {/* Content */}
          <div className="content">
               {steps.map( (step) => activeStep === step.id && (
                    <div key={step.id} className="step-content">
                         <h2>{step.title}</h2>
                         <p>{step.content}</p>
                         <img src={step.image} alt="" />
                    </div>
               ))}
          </div>

          </div>
     </section>
  );
}

export default Steps;