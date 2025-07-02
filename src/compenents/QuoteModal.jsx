import "../style/QuoteModal.scss"
import { useState } from 'react';

const QuoteModal = ({ isOpen, onClose }) => {
     
     const [form, setForm] = useState({
          name: '',
          email: '',
          phone: '',
          message: '',
     });

     const handleChange = (e) => {
          setForm({ ...form, [e.target.name]: e.target.value });
     };

     const handleSubmit = (e) => {
          e.preventDefault();

          const whatsappMessage = `Bonjour, je souhaite obtenir un devis gratuit.%0A%0A` +
               `Nom: ${form.name}%0A` +
               `Email: ${form.email}%0A` +
               `Téléphone: ${form.phone}%0A` +
               `Message: ${form.message}`;

          const whatsappURL = `https://wa.me/212671199919?text=${whatsappMessage}`;
          window.open(whatsappURL, '_blank');

          onClose(); // Close the modal after sending
     };

     if (!isOpen) return null;

     return (
          <section className="modal-container">
               <div className="modal-content">
                    <button className="close" onClick={onClose}>&times;</button>
                    <h2>Demandez votre devis gratuit</h2>
                    <form onSubmit={handleSubmit}>
                         <input name="name" type="text" placeholder="Nom complet" required onChange={handleChange} />
                         <input name="email" type="email" placeholder="Adresse e-mail" required onChange={handleChange} />
                         <input name="phone" type="tel" placeholder="Téléphone" onChange={handleChange} />
                         <textarea name="message" placeholder="Décrivez votre besoin..." rows="4" required onChange={handleChange}></textarea>
                         <button type="submit">Envoyer via WhatsApp</button>
                    </form>
               </div>
          </section>
     );
};

export default QuoteModal;
