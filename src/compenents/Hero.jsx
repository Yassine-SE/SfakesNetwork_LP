import "../style/Hero.scss"
import { FaStar } from "react-icons/fa6";

import heroImg from "../assets/hero_image_2.png"
import trust_image from "../assets/ouispad_reviews.png"
import metaPartner from "../assets/Fb-Badge.png"
import { IoPlayCircleOutline } from "react-icons/io5";

const Hero = () => {
     return (
          <section className="hero-container">
               <div className="hero-wrapper">

               <div className="hero-content-wrapper">

                    <div className="hero-content">
                         <h1>Des prospects de <br/><span className="text-highlight">Qualité, en Toute</span> <br/><span className="text-highlight">Simplicité.</span></h1>
                         <p>Une solution simple et performante pour concevoir, <br/>optimiser et suivre vos campagnes sur <br/>Facebook et Instagram.</p>
                         
                         <div className="hero-call-to-action">
                              <a className="primary-button" href="https://app.ouispad.fr/signup">Essayer maintenant !</a>
                              <a className="outline-button" href="#">How it works <IoPlayCircleOutline/></a>
                         </div>

                         <div className="hero-icons">
                              <img className="meta-icons" src={metaPartner} alt="" />
                              {/* <img className="trust-icons" src={trust_image} alt="" /> */}

                              <div className="reviews-badge">

                                   <div className="reviews-profiles">
                                        <div className="profile one">
                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s" alt="" />
                                        </div>
                                        <div className="profile two">
                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s" alt="" />
                                        </div>
                                        <div className="profile three">
                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s" alt="" />
                                        </div>
                                        <div className="profile four">
                                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s" alt="" />
                                        </div>
                                   </div>

                                   <div className="reviews-content">

                                        <div className="reviews-stars">
                                             <span class="star filled"><FaStar /></span>
                                             <span class="star filled"><FaStar /></span>
                                             <span class="star filled"><FaStar /></span>
                                             <span class="star filled"><FaStar /></span>
                                             <span class="star filled"><FaStar /></span>
                                        </div>
                                        
                                        <div className="reviews-text">
                                             Approuvé par les clients
                                        </div>

                                   </div>

                              </div>
                         </div>

                    </div>

               </div>
               
               <div className="hero-image-wrapper">
                    <img className="hero-image" src={heroImg} alt="Lead Management Dashboard" />

                    <div className="blob-bg">

                         <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                              <defs> 
                                   <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                                        <stop id="stop1" stop-color="#123e71" offset="0%"></stop>
                                        <stop id="stop2" stop-color="#123e71" offset="100%"></stop>
                                   </linearGradient>

                                   <filter id="soft-shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feDropShadow dx="0" dy="0" stdDeviation="5" flood-color="#123e71" flood-opacity="0.4"/>
                                   </filter>
                              </defs>

                              <path fill="url(#sw-gradient)" d="M19.9,-38.3C23.5,-32.5,22.3,-22.4,25.2,-15.3C28,-8.1,34.8,-4.1,36.3,0.8C37.7,5.7,33.8,11.5,29.9,16.8C26,22.1,22.2,26.9,17.2,29C12.2,31,6.1,30.3,0.5,29.4C-5.1,28.6,-10.3,27.7,-14.5,25.2C-18.7,22.7,-22,18.6,-27.3,14.2C-32.7,9.7,-40.1,4.9,-42.9,-1.6C-45.6,-8.1,-43.8,-16.2,-37.7,-19.3C-31.6,-22.5,-21.3,-20.8,-14.3,-24.6C-7.3,-28.4,-3.7,-37.7,2.3,-41.6C8.2,-45.6,16.4,-44.1,19.9,-38.3Z" 
                                   width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style={{ transition: "0.3s"}} filter="url(#soft-shadow)"></path>
                         </svg>

                    </div>
               </div>

               </div>
               
          </section>
     );
};

export default Hero;
