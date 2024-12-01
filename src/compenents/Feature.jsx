import "../style/Feature.scss"

import dashImg from "../assets/dash_img.png"
import imgBlob from "../assets/blob.svg"
import imgBlob2 from "../assets/blob_2.svg"
// import imgBlob3 from "../assets/blob_3.svg"


const Feature = ({ direction, headline, text }) => {
     return (
          <section className={direction ? "feature-container right" : "feature-container" }>
               <div className="feature-wrapper">

                    { !direction &&
                    <>
                         <div className="feature-content-wrapper">
                              <h2>{headline}</h2>
                              <p>{text}</p>
                              <a className="outline-button" href="https://app.ouispad.fr/signup">Essayer maintenant !</a>
                         </div>

                         <div className="feature-image-wrapper">
                              <img className="feature-image" src={dashImg} alt="" />
                              <img className="blob-bg" src={imgBlob} alt="" />
                         </div>

                         {/* <div className="feature-image-bg"></div> */}
                    </>
                    }

                    
                    { direction &&
                    <>
                         <div className="feature-image-wrapper">
                              <img className="feature-image" src={dashImg} alt="" />
                              <img className="blob-bg" src={imgBlob2} alt="" />
                         </div>
                         
                         <div className="feature-content-wrapper">
                              <h2>{headline}</h2>
                              <p>{text}</p>
                              <a className="outline-button" href="https://app.ouispad.fr/signup">Essayer maintenant !</a>
                         </div>
                         
                         {/* <div className="feature-image-bg"></div> */}
                         {/* <img className="blob-bg" src={imgBlob2} alt="" /> */}
                    </>
                    }

               </div>
          </section>
     );
};

export default Feature;
