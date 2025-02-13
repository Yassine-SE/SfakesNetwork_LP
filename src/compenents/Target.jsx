import "../style/Target.scss"
import Card from "./Card";
import ImageTest from "../assets/ouispad_bg.jpg";
import Coach from "../assets/coach.jpg";
import Worker from "../assets/worker.jpg";
import Beauty from "../assets/beauty.jpg";
import Agent from "../assets/agent.jpg";

const Target = () => {
     return (
          <section className="target-container">

               <div className="target-wrapper">

                    <Card image={Coach} 
                         title={"Coachs et consultants indépendants"} 
                         text={"Coachs sportifs, formateurs et coach business…"} 
                    />
                    <Card image={Agent} 
                         title={"Professions de l’immobilier et du bâtiment"} 
                         text={"Agent immobilier ou artisan du bâtiment"} 
                    />
                    <Card image={Beauty} 
                         title={"Entreprises du bien-être et de l’esthétique"} 
                         text={"Que vous soyez esthéticienne, coiffeur, ou thérapeutes"} 
                    />
                    <Card image={Worker} 
                         title={"Entreprises de services locaux"} 
                         text={"Auto-écoles, photographes, traiteurs, services à domicile…"} 
                    />

               </div>

          </section>
     );
};

export default Target;
