import "../style/Headline.scss"

const Headline = ({ children, text }) => {
     return (
          <section className="headline-container">
               <div className="headline-wrapper">

                    <h2>{children}</h2>
                    <p>{text}</p>

               </div>
          </section>
     );
};

export default Headline;
