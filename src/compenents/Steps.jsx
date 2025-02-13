import { useState } from "react";
import "../style/Steps.scss"

const steps = [
     {
     id: 1,
     title: "Step 1",
     content:
          "",
     },
     {
     id: 2,
     title: "Step 2",
     content:
          "",
     },
     {
     id: 3,
     title: "Step 3",
     content:
          "",
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
                    </div>
               ))}
          </div>

          </div>
     </section>
  );
}

export default Steps;