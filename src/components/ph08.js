import { useEffect, useState } from "react";
import styles from "../styles/Team24.module.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedinIn  } from "react-icons/fa";
import image1 from "../assets/images/2007.webp";



const ph08 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const teamData = {
      teamPhoto: image1,
      competition: {
        name: "    Formula Student UK",
        flag: (
          <img
            src="https://flagcdn.com/w320/gb.png"
            alt="Bandeira de UK"
            width="28"
            height="22"
          />
        ),
        results: {
          overall: "60º Place",
          engineeringDesign: "60º Place",
          costAndManufacturing: "42º Place",
          businessPlanPresentation: "53º Place",
          acceleration: "DNS",
          skidpad: "DNS",
          autocross: "DNS",
          endurance: "DNS",
        },
      },
      carSpecs: {
        engine: "CBR600 f4i",
        power: "110cV",
        topSpeed: "150 km/h",
        weight: "252kg",
        chassis: "Spaceframe",
        wheelbase: "1680mm",
        acceleration: "6.2s (0-75m)",
      },
      photos: [image1],
      departments: [
        
      ],
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
              style={{ width: "100%", height: "auto"}}
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
              <h1>2008 - Class 1</h1>
              <ul>
                <li><strong>Weight:</strong> {teamData.carSpecs.weight}</li>
                <li><strong>Wheelbase:</strong> {teamData.carSpecs.wheelbase}</li>
                <li><strong>Chassis Type:</strong> {teamData.carSpecs.chassis}</li>
                <li><strong>Motor:</strong> {teamData.carSpecs.engine}</li>
                <li><strong>Acceleration (0-75m):</strong> {teamData.carSpecs.acceleration}</li>
                <li><strong>Top Speed:</strong> {teamData.carSpecs.topSpeed}</li>
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
                  <strong>Engineering Design:</strong> {teamData.competition.results.engineeringDesign}
                </li>
                <li>
                  <strong>Cost and Manufacturing:</strong> {teamData.competition.results.costAndManufacturing}
                </li>
                <li>
                  <strong>Business Plan Presentation:</strong> {teamData.competition.results.businessPlanPresentation}
                </li>
                <li>
                  <strong>Acceleration:</strong> {teamData.competition.results.acceleration}
                </li>
                <li>
                    <strong>Skidpad:</strong> {teamData.competition.results.skidpad}
                </li>
                <li>
                    <strong>Endurance:</strong> {teamData.competition.results.endurance}
                </li>
                <li>
                    <strong>Autocross:</strong> {teamData.competition.results.autocross}
                </li>
                
              </ul>
          </div>
        </div>
  
        {/* Departamentos */}
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
              {member.role && <span className={styles.role}>{member.role}</span>}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
  
        <Footer />
      </div>
    );
  };
  
  export default ph08;