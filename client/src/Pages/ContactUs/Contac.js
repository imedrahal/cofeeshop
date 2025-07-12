import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import img from "../../assets/contact.webp";
import "./Contact.css";

const ContactUs = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      emailjs
        .sendForm(
          "service_g990vnf",
          "template_25jlles",
          form.current,
          "7c3QScS6N7Cqt4vWv"
        )
        .then(() => {
          setStatus("success");
          form.current.reset();
        })
        .catch(() => {
          setStatus("error");
        })
        .finally(() => {
          setIsSending(false);
          setTimeout(() => setStatus(null), 4000);
        });
    }, 3000);
  };

  return (
    <div className="contact-container">
      {status && (
        <motion.div
          className={`alert ${status}`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {status === "success"
            ? "✅ Message envoyé avec succès !"
            : "❌ Échec de l'envoi. Réessayez."}
        </motion.div>
      )}

      {/* ✅ Fullscreen loader */}
      {isSending && (
        <div className="fullscreen-loader">
          <div className="spinner"></div>
        </div>
      )}

      <motion.div
        className="contact-form"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required />
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        className="contact-image"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={img} alt="Contact illustration" />
      </motion.div>
    </div>
  );
};

export default ContactUs;
