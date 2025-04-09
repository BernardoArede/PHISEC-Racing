import React, { useState, useEffect } from "react";
import styles from '../styles/JoinTheTeam.module.css';  // Importando o arquivo de CSS
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

    const emailSubject = `Application to Join Formula Student Team`;
    const emailBody = `Hello Team,\n\nI am ${formData.name}, a student from the course ${formData.course}, with the student number ${formData.studentNumber}.\n\n${formData.message}\n\nBest regards,\n${formData.name}`;

    window.location.href = `mailto:marketing.phisec@gmail.com?subject=${encodeURIComponent(
      emailSubject
    )}&body=${encodeURIComponent(emailBody)}`;

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
        <h2 className={styles.formTitle}>Join Our Formula Student Team!</h2>
        <p className={styles.formDescription}>
        If you’re a student interested in joining PHISEC Racing and eager to learn, we would love to hear from you.
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

          {/* Número de Aluno */}
          <div className={styles.formGroup}>
              <label htmlFor="studentNumber" className={styles.formLabel}>
                Student Number
              </label>
              <input
                type="number"
                id="studentNumber"
                name="studentNumber"
                value={formData.studentNumber}
                onChange={handleChange}
                required
                className={`${styles.formInput} ${styles.noSpin}`}  // Adicionando a classe personalizada
                placeholder="Enter your student number"
              />
            </div>

          {/* Curso */}
          <div className={styles.formGroup}>
            <label htmlFor="course" className={styles.formLabel}>
              Course
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className={styles.formInput}
              placeholder="Enter your course (e.g., Mechanical Engineering)"
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
              placeholder="Tell us why you want to join the team!"
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
