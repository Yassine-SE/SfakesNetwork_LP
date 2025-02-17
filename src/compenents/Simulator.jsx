import { useState } from "react";
import "../style/Simulator.scss";

const Simulator = () => {

     const [budget, setBudget] = useState("");
     const [aov, setAov] = useState("");
     const [estimatedLeads, setEstimatedLeads] = useState(null);
     const [estimatedRevenu, setEstimatedRevenu] = useState(null);

     const LEADCOST = 10;

     const calculateLeads = () => {

          if (budget && aov) {

               let estimatedLeads = (parseFloat(budget) * 30 )/ LEADCOST;
               let estimatedRevenu = estimatedLeads * aov;

               setEstimatedLeads( estimatedLeads );
               setEstimatedRevenu( estimatedRevenu );


          } else {
               setEstimatedLeads(null);
          }

     };

     return (
     <section className="simulator-container">
          <div className="simulator-wrapper">
               
               {/* Input Section */}
               <div className="input-section">
               <h2 className="section-title">📊 Input Values</h2>
               <div className="input-group">
                    <label>Budget ($)</label>
                    <input
                    type="number"
                    placeholder="Enter budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    />
               </div>
               <div className="input-group">
                    <label>AOV ($)</label>
                    <input
                    type="number"
                    placeholder="Enter cost per lead"
                    value={aov}
                    onChange={(e) => setAov(e.target.value)}
                    />
               </div>

                    <a onClick={calculateLeads} className="primary-button">Calculate Estimated</a>
               </div>

               {/* Results Section */}
               <div className="results-section">
               <h2 className="section-title">📈 Results</h2>
               <div className="results-box">
                    <p className="results-text">
                    Estimated Leads: {estimatedLeads !== null ? estimatedLeads : "-"}
                    </p>
               </div>
               <div className="results-box">
                    <p className="results-text">
                    Estimated Revenu: {estimatedRevenu !== null ? estimatedRevenu : "-"}
                    </p>
               </div>
               </div>

          </div>
     </section>
     );
}

export default Simulator;