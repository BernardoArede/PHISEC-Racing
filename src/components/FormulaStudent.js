import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import Counter from "./Counter";
import style from "../styles/FormulaStudent.module.css";
import map from "../assets/images/map.png"
import image1 from "../assets/images/Event_Photo_FSPT23.jpg";
import image2 from "../assets/images/formula_student.jpg";
import image3 from "../assets/images/formula_student.jpg";
import image4 from "../assets/images/formula_student.jpg";

const FormulaStudent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    image1,
    image2,
    image3,
    image4,
    "../assets/images/bg.jpeg",
    "/assets/images/car2.jpg",
    "/assets/images/car3.jpg",
    "/assets/images/car4.jpg",
  ];
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  // Dados das provas estáticas e dinâmicas
  const staticTests = [
    { name: 'Cost & Manufacturing Analysis', points: 100 },
    { name: 'Presentation', points: 75 },
    { name: 'Design', points: 150 },
  ];
  
  const dynamicTests = [
    { name: 'Acceleration', points: 75 },
    { name: 'Skidpad', points: 50 },
    { name: 'Autocross', points: 150 },
    { name: 'Efficiency', points: 50 },
    { name: 'Endurance', points: 350 },
  ];

  // Calculando os totais
  const totalStaticPoints = staticTests.reduce((total, test) => total + test.points, 0);
  const totalDynamicPoints = dynamicTests.reduce((total, test) => total + test.points, 0);
  const totalPoints = totalStaticPoints + totalDynamicPoints;

  return (
    <div className={style.container}>
      {/* Header */}
      <Header />

      {/* Introdução */}
      <section className={style.intro}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={style.title}
        >
          Formula Student
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={style.description}
        >
          Formula Student (FS) is an international engineering competition where university students design, build, and race small formula-style cars. The aim is to provide hands-on experience and practical skills in engineering, project management, and teamwork. Students from various disciplines collaborate to create high-performance racing cars, competing against teams worldwide.

FS began in the United States in 1981 as Formula SAE, organized by the Society of Automotive Engineers (SAE). Since then, it has expanded globally, with competitions in Europe, Asia, and beyond. Events are held annually, allowing students to showcase their innovations and engineering prowess. The focus is not only on speed but also on design, efficiency, and presentation, making it a comprehensive learning experience.
        </motion.p>
      </section>

      {/* CRIAR UM COUNTER PARA O ANO DE FUNDAÇÃO, NÚMERO DE PROVAS ANUAIS, EQUIPAS ENVOLVIDAS NO PROJETO*/}

      {/* Seção Counter */}
      <section className={style.counterSection}>
        <div className={style.counterContainer}>
          <div className={style.counterCard}>
            <h1><Counter end={1981} duration={1000} /></h1>
            <h3>Foundation</h3>
          </div>
          <div className={style.counterCard}>
            <h1>+<Counter end={600} duration={1000} /></h1>
            <h3>University</h3>
          </div>
          <div className={style.counterCard}>
            <h1>+<Counter end={26} duration={1000} /></h1>
            <h3>Countries</h3>
          </div>
        </div>
      </section>

      {/* Seção ScoreBoard com pontuação */}
            <section className={style.scoreBoard}>
        <h2 className={style.title}>Total Test Score</h2>

        {/* Static Tests */}
        <div className={style.testCategory}>
          <h3 className={style.categoryTitle}>Static Tests</h3>
          <ul className={style.testList}>
            {staticTests.map((test, index) => (
              <li key={index} className={style.testItem}>
                <span className={style.testName}>{test.name}</span>
                <span className={style.testPoints}>{test.points} points</span>
              </li>
            ))}
          </ul>
          <div className={style.totalPoints}>
            <strong>Total Possible Points: {totalStaticPoints} points</strong>
          </div>
        </div>

        {/* Dynamic Tests */}
        <div className={style.testCategory}>
          <h3 className={style.categoryTitle}>Dynamic Tests</h3>
          <ul className={style.testList}>
            {dynamicTests.map((test, index) => (
              <li key={index} className={style.testItem}>
                <span className={style.testName}>{test.name}</span>
                <span className={style.testPoints}>{test.points} points</span>
              </li>
            ))}
          </ul>
          <div className={style.totalPoints}>
            <strong>Total Possible Points: {totalDynamicPoints} points</strong>
          </div>
        </div>

        {/* Total Score */}
        <div className={style.totalScore}>
          <h3>Total Score:</h3>
          <p>
            <strong>{totalPoints} points</strong> (Static + Dynamic)
          </p>
        </div>
      </section>
      {/*mapa de competições */}
      <section className={style.map}>
        <img src={map}></img>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FormulaStudent;
