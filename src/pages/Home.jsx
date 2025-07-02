import "../style/General.scss"

import Hero from "../compenents/Hero";
import Brand from "../compenents/Brands";
import Headline from "../compenents/Headline";
import Vision from "../compenents/Vision";
import Feature from "../compenents/Feature";
import Action from "../compenents/Action";
// import Steps from "../compenents/Steps";
// import Integration from "../compenents/Integration";
// import Testimonials from "../compenents/Testimonials";
// import FAQ from "../compenents/FAQ";
import Footer from "../compenents/Footer";

import Network_img from "../assets/Network_img.jpg"
import Surveillance_img from "../assets/Surveillance_img.jpg"
import Wifi_img from "../assets/Wifi_img.jpg"
import Access_img from "../assets/Access_img.jpg"
import Phone_img from "../assets/phone_img.jpg"
import Sound_img from "../assets/Sound_img.jpg"



const Home = () => {


     return (
          <div className="landing-page-container">

               <Hero />
               
               <Brand />

               <Headline>
                    <h2>Nos Services Technologiques Experts</h2>
                    <p>Découvrez notre gamme de services conçus pour améliorer votre sécurité, <br/>votre communication et votre confort de vie.</p>
                    {/* <p>Des réseaux sécurisés aux systèmes de surveillance intelligents et de sonorisation, <br/>nous offrons des solutions adaptées à vos besoins.</p> */}
               </Headline>
               
               <Feature direction={false} image={Network_img}>
                    <h2>Infrastructure réseau fiable pour une connectivité sans faille</h2>
                    {/* <p>Nous installons des réseaux filaires et sans fil pour les maisons et les entreprises. Que ce soit pour un nouveau bureau ou une mise à niveau, nous assurons une connexion rapide et sécurisée grâce aux routeurs, commutateurs et câblages structurés les plus récents.</p> */}
                    <p>Pour assurer une connectivité réseau fiable, sécurisée et sans faille, il est essentiel d'adopter une infrastructure robuste, qui comprend des mesures de sécurité, des stratégies de segmentation du réseau, et des protocoles de chiffrement.</p>
               </Feature>

               <Feature direction={true} image={Surveillance_img}>
                    <h2>Sécurité 24h/24 avec des systèmes de surveillance intelligents</h2>
                    <p>Protégez votre maison ou votre entreprise avec des caméras HD, détection de mouvement, vision nocturne et accès à distance via smartphone. Nos solutions CCTV sont conçues pour une surveillance en temps réel et un enregistrement sécurisé.</p>
               </Feature>
               
               <Feature direction={false} image={Wifi_img}>
                    <h2>Couverture WiFi complète pour rester connecté partout</h2>
                    <p>Fini les zones sans signal. Nous concevons et installons des réseaux WiFi professionnels avec couverture mesh pour toute la maison ou le bâtiment. Profitez d’un internet rapide et stable sur tous vos appareils.</p>
               </Feature>
               
               <Feature direction={true} image={Access_img}>
                    <h2>Contrôle d’accès intelligent et visiophones pour une sécurité renforcée</h2>
                    <p>Nous installons des systèmes de contrôle d’accès modernes tels que claviers, badges RFID et visiophones connectés. Gérez les entrées de votre maison ou entreprise en toute sécurité, avec des solutions fiables et faciles à utiliser.</p>
               </Feature>
               
               <Feature direction={false} image={Phone_img}>
                    <h2>Systèmes de téléphonie IP modernes pour une communication claire</h2>
                    <p>Nous installons des systèmes de téléphonie IP offrant une qualité audio optimale, une configuration flexible et une intégration complète à votre réseau. La solution idéale pour les entreprises souhaitant améliorer leurs communications internes et externes.</p>
               </Feature>
               
               <Feature direction={true} image={Sound_img}>
                    <h2>Solutions audio sur mesure pour tous les environnements</h2>
                    <p>Home cinéma, sonorisation de bureau ou système de diffusion publique — nous installons des systèmes audio de qualité adaptés à vos besoins. Profitez d’un son clair, puissant et immersif.</p>
               </Feature>
               
               <Vision />

               <Action />
               
               <Footer />


          </div>
     );
};

export default Home;
