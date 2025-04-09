import React, { useState, useEffect } from "react";
import styles from '../styles/BecomePartner.module.css';  // Importando o arquivo de CSS
import Header from './Header'
import Footer from "./Footer"

const JoinTheTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    studentNumber: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Configuração do e-mail
    const emailSubject = `Application to Join Formula Student Team`;
    const emailBody = `Hello Team,\n\nI am ${formData.name}, a student from the course ${formData.course}, with the student number ${formData.studentNumber}.\n\n${formData.message}\n\nBest regards,\n${formData.name}`;

    // Redirecionar para cliente de e-mail padrão
    window.location.href = `mailto:marketing.phisec@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

    // Limpar formulário
    setFormData({
      name: "",
      studentNumber: "",
      course: "",
      message: "",
    });
  };

  return (
    <section>
        <Header />
    <section className={styles.applicationFormSection} style={{marginTop:"50px"}}>
      <div className={styles.formContainer}>
        <h2 className={styles.formTitle}>Support Us!</h2>
        <p className={styles.formDescription}>
        If you are a sponsor interested in supporting our journey and investing in the future of engineering, we would love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className={styles.applicationForm}>
          {/* Nome Completo */}
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Full Name
            </label>
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

          {/* Company name */}
          <div className={styles.formGroup}>
              <label htmlFor="studentNumber" className={styles.formLabel}>
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.studentNumber}
                onChange={handleChange}
                required
                className={`${styles.formInput} ${styles.noSpin}`}  // Adicionando a classe personalizada
                placeholder="Enter your Company name"
              />
            </div>

      

          {/* Mensagem */}
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={styles.formTextarea}
              placeholder="Tell us your proposed partnership and how you can help us!"
              rows={4}
            />
          </div>

          {/* Botão Enviar */}
          <button
            type="submit"
            className={styles.formButton}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
    <Footer/>
    </section>
    
  );
};

export default JoinTheTeam;
