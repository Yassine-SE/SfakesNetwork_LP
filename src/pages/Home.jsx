import "../style/General.scss"

import Header from "../compenents/Header";
import Hero from "../compenents/Hero";
import Feature from "../compenents/Feature";
import Action from "../compenents/Action";
import Footer from "../compenents/Footer";



const Home = () => {



     const features_content = [
          { direction: false, headline: "Ad Creation Tools", text: "User-friendly interfaces to design effective ads." },
          { direction: true, headline: "Analytics Integration", text: "Insights to track campaign performance." },
          { direction: false, headline: "Lead Management", text: "Streamlined tools to organize and nurture your leads effectively." },
          { direction: true, headline: "Track contact", text: "Streamlined tools to organize and nurture your leads effectively." },
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
