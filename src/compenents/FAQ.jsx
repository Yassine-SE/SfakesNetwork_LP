import "../style/FAQ.scss";
import { useState } from "react";

const faqs = [
    {
        question: "Quelles différences existent entre Ouispad et les plateformes publicitaires classiques comme Facebook ads ou Google ads ?",
        answer: "Ouispad se positionne comme la solution idéale pour les entrepreneurs à la recherche de résultats sans perte de temps ni complications. Grâce à notre plateforme intuitive, vous pouvez lancer une campagne efficace en quelques minutes, sans besoin de compétences techniques. Notre intelligence artificielle crée et optimise automatiquement vos publicités pour toucher un maximum de clients potentiels, tout en s'adaptant à votre budget. Vous obtiendrez des prospects en toute simplicité."
    },
    {
        question: "Ai-je besoin d'une page Facebook et d’un site internet pour mon entreprise pour utiliser votre plateforme ?",
        answer: "Oui ! Vous aurez besoin d'une page professionnelle et d’un site internet pour pouvoir lancer votre publicité depuis notre plateforme."
    },
    {
        question: "Combien coûte votre plateforme ?",
        answer: "Ouispad a pour mission de faciliter l'utilisation de la publicité digitale. Ainsi, nous nous positionnons en tant qu'intermédiaire. L’accès à notre plateforme est pour le moment sans frais. Cependant, la publicité sur les différents réseaux sociaux est facturée de manière indépendante par nos partenaires comme META."
    },
    {
        question: "Combien de prospects pourrais-je obtenir ?",
        answer: "Il est difficile de donner un chiffre précis. Cela dépend de votre budget quotidien et de la performance de votre publicité. Rassurez-vous, notre objectif est d’optimiser au maximum le potentiel de votre campagne publicitaire grâce à notre intelligence artificielle."
    },
    {
        question: "Combien je dois dépenser pour ma campagne publicitaire ?",
        answer: "Pour lancer votre campagne, vous devez définir un budget quotidien. Pour obtenir rapidement des prospects, nous conseillons un budget de minimum 5 euros / jour. Pas d'inquiétude, vous aurez la possibilité d'arrêter la campagne à tout moment. "
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="FAQ" className="faq-container">
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
