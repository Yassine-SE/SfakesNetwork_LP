import "../style/Brands.scss"

import tplink from "../assets/tplink.png"
import ruijie from "../assets/Ruijie.png"
import hikvision from "../assets/Hikvision.png"
import yamaha from "../assets/Yamaha.png"
import cisco from "../assets/cisco.png"


const Brands = () => {
     return (
          <section className="brands-container">
               <div className="brands-wrapper">

                    <div className="brands-logos">
                         <img src={ruijie} alt="Brand 1" />
                         <img src={tplink} alt="Brand 1" />
                         <img src={hikvision} alt="Brand 1" />
                         <img src={cisco} alt="Brand 1" />
                         <img src={yamaha} alt="Brand 1" />
                    </div>
                    
               </div>
          </section>
     );
};

export default Brands;
