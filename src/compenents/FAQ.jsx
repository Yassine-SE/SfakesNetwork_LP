import "../style/FAQ.scss";
import { useState } from "react";

const faqs = [
    {
        question: "What is this platform about?",
        answer: "Our platform helps businesses create and manage effective advertising campaigns with ease."
    },
    {
        question: "How can I get started?",
        answer: "Simply sign up, choose your advertising preferences, and launch your first campaign in minutes!"
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes! We offer a free trial so you can explore all features before committing to a plan."
    },
    {
        question: "Can I customize my ads?",
        answer: "Absolutely! You can tailor your ads to fit your brand, audience, and campaign goals."
    },
    {
        question: "What kind of support do you offer?",
        answer: "We provide 24/7 customer support to assist you with any questions or technical issues."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-container">
            <div className="faq-wrapper">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
                        <div className="faq-question">{faq.question}</div>
                        <div className="faq-answer">{activeIndex === index && faq.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
