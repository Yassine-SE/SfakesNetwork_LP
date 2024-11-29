import "../style/Feature.scss"

import dashImg from "../assets/dash_img.png"


const Feature = ({ direction, headline, text }) => {
     return (
          <section className={direction ? "feature-container right" : "feature-container" }>

               { !direction &&
               <>
                    <div className="feature-content-wrapper">
                         <h2>{headline}</h2>
                         <p>{text}</p>
                         <a className="primary-button" href="https://app.ouispad.fr/signup">Try it now</a>
                    </div>

                    <div className="feature-image-wrapper">
                         <img src={dashImg} alt="" />
                    </div>
               </>
               }

               
               { direction &&
               <>
                    <div className="feature-image-wrapper right">
                         <img src={dashImg} alt="" />
                    </div>
                    
                    <div className="feature-content-wrapper right">
                         <h2>{headline}</h2>
                         <p>{text}</p>
                         <a className="primary-button" href="https://app.ouispad.fr/signup">Try it now</a>
                    </div>
               </>
               }

          </section>
     );
};

export default Feature;
