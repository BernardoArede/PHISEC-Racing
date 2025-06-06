import { useEffect, useState } from "react";
import styles from "../styles/Team24.module.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import teamImage from "../assets/images/background_01.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn } from "react-icons/fa";
import image1 from "../assets/images/team_photo24.jpg";

const ph24 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamData = {
    teamPhoto: teamImage,
    competition: {
      name: "    Formula Student Portugal",
      flag: (
        <img
          src="https://flagcdn.com/w320/pt.png"
          alt="Bandeira de Portugal"
          width="28"
          height="22"
        />
      ),
      results: {
        overall: "2º Place",
        engineeringDesign: "2º Place",
        costAndManufacturing: "2º Place",
        businessPlanPresentation: "2º Place",
      },
    },
    carSpecs: {
      engine: "EMRAX 228 HV",
      power: "50kW",
      topSpeed: "140 km/h",
      weight: "280kg",
      chassis: "Spaceframe",
      tractive: "6.5kW/h - 300V",
      wheelbase: "1572mm",
      acceleration: "4.3s (0-75m)",
    },
    photos: [image1],
  };

  return (
    <div className={styles.teamPage}>
      <Header />

      {/* Foto geral da equipa */}
      <section className={styles.photoSection}>
        <AnimatePresence mode="wait">
          {/* Imagem atual */}
          <motion.img
            key={currentIndex}
            src={teamData.photos[currentIndex]}
            alt={`Team member ${currentIndex + 1}`}
            style={{ width: "100%", height: "auto" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
          />

          {/* Próxima imagem */}
          <motion.img
            key={nextIndex}
            src={teamData.photos[nextIndex]}
            alt={`Team member ${nextIndex + 1}`}
            style={{ width: "100%", height: "auto" }}
            initial={{ opacity: 1 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            onLoad={() => setIsLoaded(true)}
          />
        </AnimatePresence>
      </section>

      {/* Container principal (especificações + resultados) */}
      <div className={styles.mainContent}>
        {/* Especificações e resultados lado a lado */}

        {/* Especificações do carro */}
        <div className={styles.carSpecs}>
          <h1>2024 - Class 2</h1>
          <ul>
            <li>
              <strong>Weight:</strong> {teamData.carSpecs.weight}
            </li>
            <li>
              <strong>Wheelbase:</strong> {teamData.carSpecs.wheelbase}
            </li>
            <li>
              <strong>Chassis Type:</strong> {teamData.carSpecs.chassis}
            </li>
            <li>
              <strong>Motor:</strong> {teamData.carSpecs.engine}
            </li>
            <li>
              <strong>Tractive System:</strong> {teamData.carSpecs.tractive}
            </li>
            <li>
              <strong>Acceleration (0-75m):</strong>{" "}
              {teamData.carSpecs.acceleration}
            </li>
            <li>
              <strong>Top Speed:</strong> {teamData.carSpecs.topSpeed}
            </li>
          </ul>
        </div>

        {/* Resultados */}
        <div className={styles.results}>
          <h1>
            {teamData.competition.flag}
            {teamData.competition.name}
          </h1>
          <ul>
            <li>
              <strong>Overall:</strong> {teamData.competition.results.overall}
            </li>
            <li>
              <strong>Engineering Design:</strong>{" "}
              {teamData.competition.results.engineeringDesign}
            </li>
            <li>
              <strong>Cost and Manufacturing:</strong>{" "}
              {teamData.competition.results.costAndManufacturing}
            </li>
            <li>
              <strong>Business Plan Presentation:</strong>{" "}
              {teamData.competition.results.businessPlanPresentation}
            </li>
          </ul>
        </div>
      </div>

{/*
      <div className={styles.departmentsContainer}>
        {teamData.departments.map((dept, index) => (
          <div key={index} className={styles.department}>
            <h3>{dept.name}</h3>
            <div className={styles.members}>
              {dept.members.map((member, idx) => (
                <div
                  key={idx}
                  className={`${styles.memberCard} ${
                    member.role.includes("Leader") ? styles.teamLeader : ""
                  }`}
                >
                  <div className={styles.memberImage}>
                    <img src={member.photo} alt={member.name} />
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkedinIcon}
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <p>{member.name}</p>
                  {member.role && (
                    <span className={styles.role}>{member.role}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      <Footer />
    </div>
  );
};

export default ph24;
