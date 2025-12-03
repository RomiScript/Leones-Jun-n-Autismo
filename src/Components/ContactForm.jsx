import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar email mediante Formspree
    fetch("https://formspree.io/f/mgvgyrrk", {
      method: "POST",
      headers: {
        "Accept": "application/json"
      },
      body: new FormData(e.target)
    }).then(() => {
      alert("¡Mensaje enviado con éxito!");
      setFormData({ name: "", email: "", message: "" });
    });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input 
        type="text" 
        name="name" 
        placeholder="Nombre" 
        required 
        value={formData.name}
        onChange={handleChange}
      />

      <input 
        type="email" 
        name="email" 
        placeholder="Email"
        required
        value={formData.email}
        onChange={handleChange}
      />

      <textarea 
        name="message"
        placeholder="Mensaje"
        required
        value={formData.message}
        onChange={handleChange}
      />

      <button type="submit" className="btn-2">Enviar</button>
    </form>
  );
}

export default ContactForm;
