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
import FAQ from "../compenents/FAQ";
import Footer from "../compenents/Footer";
import Vision from "../compenents/Vision";

import DashImg from "../assets/dash_img.png"
import CreateImg from "../assets/Create.png"
import LeadsImg from "../assets/Leads.png"
import HistoryImg from "../assets/History.png"



const Home = () => {



     const features_content = [
          { direction: false, image: CreateImg, headline: "Boostez vos campagnes marketing grâce à notre solution !", text: "Suivez en temps réel les performances de vos campagnes avec notre outils intuitifs et détaillés. Analysez, optimisez, et maximisez vos résultats pour générer davantage de leads qualifiés." },
          { direction: true, image: DashImg, headline: "Transformez vos prospects en succès commerciaux !", text: "Organisez, suivez et qualifiez vos leads efficacement grâce à notre outil optimisé. Simplifiez la gestion de vos contacts et convertissez-les en opportunités concrètes." },
          { direction: false, image: LeadsImg, headline: "Restez connecté à vos prospects en toute simplicité !", text: "Centralisez, organisez et entretenez vos contacts avec notre outil intuitif. Assurez un suivi efficace pour construire des relations durables et fructueuses." },
          { direction: true, image: HistoryImg, headline: "Gérer vos prospects en toute simplicité !", text: "Centralisez, organisez et entretenez vos contacts avec notre outil intuitif. Assurez un suiviefficace pour construire des relations durables et fructueuses." },
     ]



     return (
          <div className="landing-page-container">

               <Header />
               <Hero />
               
               <Headline >
                    Ouispad est conçu pour accompagner<br/>
                    <span className="text-highlight">la réussite des professionnels comme vous</span>
               </Headline>

               <Target />
               
               <Headline >
                    Ouispad est conçu <span className="text-highlight">pour accompagner</span><br/>
                    la réussite des professionnels comme vous
               </Headline>

               {
                    features_content.map((item, index) => {
                         return (
                              <Feature key={index} direction={item.direction} headline={item.headline} text={item.text} image={item.image} />
                         )
                    })
               }
               
               <Action />
               
               <Headline >
                    Ouispad est conçu <span className="text-highlight">pour accompagner</span><br/>
                    la réussite des professionnels comme vous
               </Headline>

               <Steps />

               <Headline >
                    Ouispad est conçu <span className="text-highlight">pour accompagner</span><br/>
                    la réussite des professionnels comme vous
               </Headline>

               <Integration />
               
               <Headline >
                    <span className="text-highlight">What Our Clients Say</span><br/>
               </Headline>

               <Testimonials />
               
               <Headline >
                    <span className="text-highlight">Frequently Asked Questions</span>
               </Headline>

               <FAQ />

               <Headline >
                    Ouispad est conçu <span className="text-highlight">pour accompagner</span><br/>
                    la réussite des professionnels comme vous
               </Headline>
               
               <Action />
               
               <Footer />


          </div>
     );
};

export default Home;
