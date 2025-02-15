import "../style/Testimonials.scss";
import { FaStar } from "react-icons/fa6";

const testimonials = [
    {
        name: "John Doe",
        review: "This platform is amazing! It has helped my business grow tremendously.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Jane Smith",
        review: "I love how simple and effective this service is. Highly recommended!",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Mark Wilson",
        review: "A game-changer for advertising. Easy to use and very efficient.",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Emily Johnson",
        review: "I saw results within days. Excellent tool!",
        rating: 4,
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        name: "Chris Brown",
        review: "The best investment I made for my business. It's worth every penny!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        name: "Sophia Martinez",
        review: "Super user-friendly and efficient. I recommend it to all my friends!",
        rating: 5,
        image: "https://randomuser.me/api/portraits/women/6.jpg"
    }
];

const Testimonials = () => {
    return (
        <section className="review-container">
            <div className="review-wrapper">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-card">
                        <img src={testimonial.image} alt={testimonial.name} className="profile-pic" />
                        <h3 className="reviewer-name">{testimonial.name}</h3>
                        <p className="review-text">{testimonial.review}</p>
                        <div className="star-rating">
                            {Array.from({ length: 5 }, (_, i) => (
                                <span key={i} className={i < testimonial.rating ? "star filled" : "star"}><FaStar /></span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
