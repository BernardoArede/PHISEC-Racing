import React, { useState, useEffect } from "react";
import styles from "../styles/Contact.module.css";
import Header from "./Header";
import Footer from "./Footer";
import DianaSousa from '../assets/team_members/aero/Diana Sousa.jpg'

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailSubject = `Contact Form Submission from ${formData.name}`;
    const emailBody = `Hello, My name is ${formData.name}.

${formData.message}
Best regards,
${formData.name} (${formData.email})`;
    window.location.href = `mailto:marketing.phisec@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Send us a Message</h2>
        <p className={styles.formDescription}>
          For general inquiries, please use the fields below to contact us.
        </p>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={styles.formInput}
              placeholder="Enter your full name"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.formInput}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.formTextarea}
              placeholder="Write your message here..."
              rows={4}
            />
          </div>
          <button type="submit" className={styles.formButton}>Send Message</button>
        </form>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.contactCard}>
          <img src={DianaSousa} alt="Vitor Simões" className={styles.contactImage} />
          <div className={styles.contactInfo}>
            <h2>Vitor Simões</h2>
            <p className={styles.role}>Team Leader</p>
            <p className={styles.email}>Email: <a href={`mailto:`}></a></p>
          </div>
        </div>
        <div className={styles.contactCard}>
          <img src={DianaSousa} alt="João Coelho" className={styles.contactImage} />
          <div className={styles.contactInfo}>
            <h2>João Coelho</h2>
            <p className={styles.role}>Technical Director</p>
            <p className={styles.email}>Email: <a href={`mailto:`}></a></p>
          </div>
        </div>
      </div>

      {/* Seção do Mapa */}
      <div className={styles.mapSection}>
        <h2 className={styles.mapTitle}>Find us here</h2>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.7697462887854!2d-8.414439825084768!3d40.191937382917786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f9916a32cfd3%3A0xca4589d604c71bc6!2sInstituto%20Superior%20de%20Engenharia%20de%20Coimbra!5e0!3m2!1spt-PT!2spt!4v1740666068153!5m2!1spt-PT!2spt"
            className={styles.mapIframe}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;