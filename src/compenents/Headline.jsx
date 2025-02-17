import "../style/Headline.scss"

const Headline = ({ children }) => {
     return (
          <section className="headline-container">
               <div className="headline-wrapper">

                    {children}

               </div>
          </section>
     );
};

export default Headline;
