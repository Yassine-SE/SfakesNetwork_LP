import React from "react";
import "../style/Integration.scss";
import { FaInstagram, FaFacebook, FaGoogle, FaTiktok } from "react-icons/fa";
import Logo from "../assets/Ouispad-logo-white.svg";

const Integration = () => {
     return (
     
          <section id="Integration" className="integration-container">
               <div className="integration-wrapper">

                    {/* Central Glowing Icon */}
                    <div className="central-icon">
                         <img src={Logo} alt="Logo" />
                    </div>

                    {/* Social Media Icons */}
                    <div className="icon instagram">
                         <FaInstagram />
                    </div>

                    <div className="icon facebook">
                         <FaFacebook />
                    </div>

                    <div className="icon google">
                         <FaGoogle />
                         <div className="soon">Soon</div>
                    </div>

                    <div className="icon tiktok">
                         <FaTiktok />
                         <div className="soon">Soon</div>
                    </div>

                    <svg className="connection-lines" viewBox="0 0 1500 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M103 106C103 106 171 106 281.501 106C392.002 106 332.001 338 519.502 338C707.004 338 672.503 338 672.503 338" stroke="#F1885C" stroke-opacity="0.53" stroke-width="4"/>
                         <path d="M103 693C103 693 171 693 281.501 693C392.002 693 332.001 461 519.502 461C707.004 461 672.503 461 672.503 461" stroke="#F1885C" stroke-opacity="0.53" stroke-width="4"/>
                         <path d="M1397 106C1397 106 1329 106 1218.5 106C1108 106 1168 338 980.498 338C792.996 338 827.497 338 827.497 338" stroke="#F1885C" stroke-opacity="0.53" stroke-width="4"/>
                         <path d="M1397 693C1397 693 1329 693 1218.5 693C1108 693 1168 461 980.498 461C792.996 461 827.497 461 827.497 461" stroke="#F1885C" stroke-opacity="0.53" stroke-width="4"/>
                    </svg>


               </div>
          </section>
     );
};

export default Integration;