import "../style/General.scss"

import Header from "../compenents/Header";
import Hero from "../compenents/Hero";
import Headline from "../compenents/Headline";
import Target from "../compenents/Target";
import Feature from "../compenents/Feature";
import Action from "../compenents/Action";
import Steps from "../compenents/Steps";
import Integration from "../compenents/Integration";
import Testimonials from "../compenents/Testimonials";
import Simulator from "../compenents/Simulator";
import FAQ from "../compenents/FAQ";
import Footer from "../compenents/Footer";

import DefaultImg from "../assets/default_img.png"
import IAImg from "../assets/ia-image.png"
import LeadsImg from "../assets/leads-image.png"
import DashImg from "../assets/dashboard-image.png"
import DashImg2 from "../assets/dashboard-image-2.png"
import DashImg3 from "../assets/dashboard-image-3.png"



const Home = () => {


     return (
          <div className="landing-page-container">

               <Header />
               <Hero />
               
               <Headline >
                    <h2>
                         Ouispad est conçu pour accompagner <br/>
                         <span className="text-highlight">la réussite des professionnels comme vous</span>
                    </h2>
               </Headline>

               <Target />
               
               <Headline >
                    <h2>
                         La publicité digitale enfin <br/>
                         <span className="text-highlight">à votre portée</span>
                    </h2>
               </Headline>

               <Feature direction={false} image={IAImg}>
                    <h2>Laissez l’IA gérer vos campagnes</h2>
                    <p>Fini les heures passées à comprendre les rouages de la publicité en ligne. Notre intelligence artificielle s’occupe de tout :</p>
                    <ul>
                         <li>Création automatique de publicités percutantes.</li>
                         <li>Ciblage de clients les plus susceptibles d’être intéressés par vos services.</li>
                         <li>Optimisation et gestion de vos campagnes pour maximiser votre retour sur investissement.</li>
                    </ul>
                    <p>Le tout sans effort de votre part.</p>
               </Feature>
               
               <Feature direction={true} image={DashImg3}>
                    <h2>Une plateforme intuitive et accessible à tous</h2>
                    <p>Lancer une campagne publicitaire n’a jamais été aussi simple. Grâce à une interface épurée et un processus guidé, même sans aucune expérience, vous pouvez créer des annonces performantes en quelques clics. La publicité digitale devient enfin accessible à tous.</p>
               </Feature>
               
               <Feature direction={false} image={LeadsImg}>
                    <h2>Transformez vos prospects en clients fidèles</h2>
                    <p>Attirer des prospects, c’est bien, les transformer en clients, c’est mieux. Grâce à notre CRM intégré, vous suivez vos leads, organisez vos relances et améliorez votre taux de conversion sans effort. Tout est centralisé pour optimiser votre acquisition client.</p>
               </Feature>
               
               <Action />
               
               <Headline >
                    <h2>
                         3 étapes simples vous <br/>
                         séparent <span className="text-highlight">du succès !</span>
                    </h2>
               </Headline>

               <Steps />

               <Headline>
                    <h2>En partenariat avec <span className="text-highlight">les meilleurs</span></h2>
                    <p>Ouispad vous assure une visibilité optimale en diffusant vos publicités sur les réseaux sociaux et moteurs de recherche les plus consultés, grâce à nos partenariats stratégiques</p>
               </Headline>

               <Integration />
               
               <Headline >
                    <h2>Ça marche déjà pour nos utilisateurs. <br/><span className="text-highlight">Pourquoi pas vous ?</span></h2>
               </Headline>

               <Testimonials />
               
               {/* <Headline >
                    <span className="text-highlight">Simulator</span>
               </Headline>

               <Simulator /> */}

               <Headline >
                    <h2><span className="text-highlight">Questions fréquemment posées</span></h2>
               </Headline>

               <FAQ />

               <Headline >
                    <h2>Vous êtes à un clic de <span className="text-highlight">la réussite !</span></h2>
                    <p>Lancez votre première campagne et voyez les résultats.</p>
               </Headline>
               
               <Action />
               
               <Footer />


          </div>
     );
};

export default Home;
