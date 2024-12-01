import "../style/General.scss"

import Header from "../compenents/Header";
import Hero from "../compenents/Hero";
import Feature from "../compenents/Feature";
import Action from "../compenents/Action";
import Footer from "../compenents/Footer";



const Home = () => {



     const features_content = [
          { direction: false, headline: "Boostez vos campagnes marketing grâce à notre solution !", text: "Suivez en temps réel les performances de vos campagnes avec notre outils intuitifs et détaillés. Analysez, optimisez, et maximisez vos résultats pour générer davantage de leads qualifiés." },
          { direction: true, headline: "Transformez vos prospects en succès commerciaux !", text: "Organisez, suivez et qualifiez vos leads efficacement grâce à notre outil optimisé. Simplifiez la gestion de vos contacts et convertissez-les en opportunités concrètes." },
          { direction: false, headline: "Restez connecté à vos prospects en toute simplicité !", text: "Centralisez, organisez et entretenez vos contacts avec notre outil intuitif. Assurez un suivi efficace pour construire des relations durables et fructueuses." },
          { direction: true, headline: "Gérer vos prospects en toute simplicité !", text: "Centralisez, organisez et entretenez vos contacts avec notre ou8l intui8f. Assurez un suivi efficace pour construire des rela8ons durables et fructueuses." },
     ]



     return (
          <div className="landing-page-container">

               <Header />
               <Hero />

               {
                    features_content.map((item, index) => {
                         return (
                              <Feature key={index} direction={item.direction} headline={item.headline} text={item.text} />
                         )
                    })
               }
               
               <Action />
               <Footer />


          </div>
     );
};

export default Home;
