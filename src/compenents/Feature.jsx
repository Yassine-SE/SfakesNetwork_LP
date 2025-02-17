import "../style/Feature.scss"

// import imgBlob from "../assets/blob.svg"


const Feature = ({ direction, image, children }) => {
     return (
          <section id="Feature" className={direction ? "feature-container right" : "feature-container" }>
               <div className="feature-wrapper">

                    { !direction &&
                    <>
                         <div className="feature-content-wrapper">
                              {children}
                         </div>

                         <div className="feature-image-wrapper">
                              <img className="feature-image" src={image} alt="" />
                         </div>
                    </>
                    }

                    
                    { direction &&
                    <>
                         <div className="feature-image-wrapper">
                              <img className="feature-image" src={image} alt="" />
                         </div>
                         
                         <div className="feature-content-wrapper">
                              {children}
                         </div>
                    </>
                    }

               </div>
          </section>
     );
};

export default Feature;
