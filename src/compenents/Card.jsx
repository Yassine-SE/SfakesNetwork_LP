import "../style/Card.scss"

const Card = ({image, title, text}) => {
     return (
          <div className="card-container">
               <div className="card-wrapper">

                    <div className="card-img-overlay"></div>
                    <img src={image} alt="" />

                    <div className="card-content">
                         <h3>{title}</h3>
                         <p>{text}</p>
                    </div>

               </div>
          </div>
     );
};

export default Card;
