import "../style/Testimonials.scss";
import { FaStar } from "react-icons/fa6";

const testimonials = [
    {
        name: "Lisa , Freelance",
        review: "Grâce à Ouispad, j’ai pu lancer ma première campagne publicitaire sans aucune connaissance en marketing. L’IA s’occupe de tout et les résultats sont au rendez-vous !",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
        name: "Thibaut , Vidéaste",
        review: "En plus de la gestion des publicités, l’espace de suivi des prospects est un vrai plus. Je peux organiser mes contacts et optimiser mes relances facilement",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Thomas,  Coach Sportif",
        review: "Je n’y connaissais rien en publicité digitale, mais Ouispad m’a permis de lancer ma campagne en quelques clics. Super outil pour les indépendants et petites entreprises !",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Emma, Photographe",
        review: "En plus d’une plateforme intuitive, l’équipe Ouispad est toujours disponible pour répondre à mes questions. Un vrai plus pour les entrepreneurs !",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    // {
    //     name: "Chris Brown",
    //     review: "The best investment I made for my business. It's worth every penny!",
    //     rating: 5,
    //     image: "https://randomuser.me/api/portraits/men/5.jpg"
    // },
    // {
    //     name: "Sophia Martinez",
    //     review: "Super user-friendly and efficient. I recommend it to all my friends!",
    //     rating: 5,
    //     image: "https://randomuser.me/api/portraits/women/6.jpg"
    // }
];

const Testimonials = () => {
    return (
        <section className="review-container">
            <div className="review-wrapper">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} className="profile-pic" />
                        {/* <h3 className="review-title">{testimonial.title}</h3> */}
                        <p className="review-text">{testimonial.review}</p>
                        <div className="star-rating">
                            {Array.from({ length: 5 }, (_, i) => (
                                <span key={i} className={i < testimonial.rating ? "star filled" : "star"}><FaStar /></span>
                            ))}
                        </div>
                        <p className="review-name">{testimonial.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
