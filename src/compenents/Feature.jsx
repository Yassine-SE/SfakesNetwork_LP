import "../style/Feature.scss"

// import imgBlob from "../assets/blob.svg"


const Feature = ({ direction, headline, text, image }) => {
     return (
          <section id="Feature" className={direction ? "feature-container right" : "feature-container" }>
               <div className="feature-wrapper">

                    { !direction &&
                    <>
                         <div className="feature-content-wrapper">
                              <h2>{headline}</h2>
                              <p>{text}</p>
                              {/* <a className="primary-button white" href="https://app.ouispad.fr/signup">Essayer maintenant !</a> */}
                         </div>

                         <div className="feature-image-wrapper">
                              <img className="feature-image" src={image} alt="" />
                              {/* <img className="blob-bg" src={imgBlob} alt="" /> */}
                         </div>

                    </>
                    }

                    
                    { direction &&
                    <>
                         <div className="feature-image-wrapper">
                              <img className="feature-image" src={image} alt="" />
                              {/* <img className="blob-bg" src={imgBlob2} alt="" /> */}
                         </div>
                         
                         <div className="feature-content-wrapper">
                              <h2>{headline}</h2>
                              <p>{text}</p>
                              {/* <a className="primary-button white" href="https://app.ouispad.fr/signup">Essayer maintenant !</a> */}
                         </div>
                         
                    </>
                    }

               </div>
          </section>
     );
};

export default Feature;
