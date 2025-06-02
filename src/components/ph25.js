import { useEffect, useState } from "react";
import styles from "../styles/Team25.module.css"; // Note: changed to Team25.module.css
import Header from "./Header.js";
import Footer from "./Footer.js";
import { FaLinkedinIn } from "react-icons/fa";


import DianaSousa from '../assets/team_members/aero/Diana Sousa.jpg'
import EduardoCarvalho from '../assets/team_members/aero/Eduardo Carvalho.jpg'
import JoaoMorgado from '../assets/team_members/aero/João Morgado.jpg'
import MartimRibeiro from '../assets/team_members/aero/Martim Ribeiro.jpg'

import DiogoAlmeida from '../assets/team_members/chassi/Diogo Almeida.jpg'
import AntonioAlmeida from '../assets/team_members/chassi/António Almeida.jpg'
import DiogoLaranjeiras from '../assets/team_members/chassi/Diogo Laranjeiras.jpg'
import Tomas from '../assets/team_members/chassi/Tomás.jpg'
import Nicholas from '../assets/team_members/chassi/Nicolas.jpg'
import FranciscoMatos from '../assets/team_members/chassi/Francisco Matos.jpg'

import DiogoMarques from '../assets/team_members/autonomous/DiogoMarques.jpg'
import DiogoAlbuquerque from '../assets/team_members/autonomous/DiogoAlbuquerque.JPG'
import BernardoArede from '../assets/team_members/autonomous/BernardoArede.jpg'

//Falta um Tiago Qualquer
import DavidMagalhaes from '../assets/team_members/Drivetrain & Cooling/David Magalhães.JPG'
import JoseAndrade from '../assets/team_members/Drivetrain & Cooling/José Miguel Andrade.JPG'
import MatheusPereira from '../assets/team_members/Drivetrain & Cooling/Matheus Alexandre Pereira.JPG'
import RodrigoFerreira from '../assets/team_members/Drivetrain & Cooling/Rodrigo Ferreira.JPG'

import TiagoGaspar from '../assets/team_members/eletronics/TiagoGaspar.JPG'
import Jordao from '../assets/team_members/eletronics/Jordao.JPG'
import Onorio from '../assets/team_members/eletronics/Onorio.JPG'
import Soeiro from '../assets/team_members/eletronics/Soeiro.JPG'
import Alexandre from '../assets/team_members/eletronics/AlexandreFerreira.JPG'
import AndreAlves from '../assets/team_members/eletronics/AndreAlves.JPG'

import VitorSimoes from '../assets/team_members/management/Vitor Simões.JPG'
import JoaoCoelho from '../assets/team_members/management/JoaoCoelho.JPG'



//Suspensão
//Falta Filipe Pontes
//Luis Bugalho
//Bernardo Santos




const PH25 = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Countdown logic
  useEffect(() => {
    // Set the target date for the Rollout (June 11, 2025)
    // The date is already in the past from the current date. I'm assuming you want it to count down to a future event for PH25.
    // I'll set it to a future date, e.g., June 11, 2026, for demonstration.
    // IMPORTANT: Adjust this date to your actual PH25 rollout date!
    const targetDate = new Date("2025-06-11T00:00:00").getTime(); // Example: June 11, 2025

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);
    return () => clearInterval(timerInterval); // Cleanup on unmount
  }, []);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Your team data for PH25
  const teamData = {
    // Removed teamPhoto and competition/carSpecs as requested for PH25
    departments: [
      {
        name: "Management",
        members: [
          { name: "Vitor Simões", photo: VitorSimoes, role: "Team Leader", linkedin: "https://www.linkedin.com/in/sim%C3%B5esvitor/" },
          { name: "João Coelho", photo: JoaoCoelho, role: "Technical Director", linkedin: "https://linkedin.com" },
        ],
      },
      {
        name: "Eletronics & Powertrain",
        members: [
          { name: "André Alves", photo: AndreAlves, role: "Department Leader", linkedin: "https://linkedin.com" },
          { name: "Miguel Monteiro", photo: Onorio, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Tiago Gaspar", photo: TiagoGaspar, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Francisco Soeiro", photo: Soeiro, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Jordão Pereira", photo: Jordao, role: "Team Member", linkedin: "https://linkedin.com" },
            { name: "Alexandre Ferreira", photo: Alexandre, role: "Team Member", linkedin: "https://linkedin.com" },
        ],
      },
      {
        name: "Drivetrain & Cooling",
        members: [
          { name: "Matheus Pereira", photo: MatheusPereira, role: "Department Leader", linkedin: "https://linkedin.com" },
          { name: "David Magalhães", photo: DavidMagalhaes, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "José Dias", photo: JoseAndrade, role: "Team Member", linkedin: "https://linkedin.com" },
           { name: "Rodrigo Pereira", photo: RodrigoFerreira, role: "Team Member", linkedin: "https://linkedin.com" },
        ],
      },
      {
        name: "Suspension",
        members: [
          { name: "Dinis Coelho", photo: "url_dinis_coelho", role: "Department Leader", linkedin: "https://www.linkedin.com/in/dinis-coelho-555b481bb/?trk=opento_nprofile_details" },
          { name: "Rafael Quintino", photo: "url_rafael_quintino", role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Carlos Paixão", photo: "url_carlos_paixao", role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Rodrigo Carvalho", photo: "url_rodrigo_carvalho", role: "Team Member", linkedin: "https://linkedin.com" },
        ],
      },
      {
        name: "Vehicle Dynamics",
        members: [
          { name: "Luís Carreira", photo: BernardoArede , role: "Department Leader", linkedin: "https://linkedin.com" },
          { name: "Tiago Cunha", photo: "url_tiago_cunha", role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Catarina Silva", photo: "url_catarina_silva", role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Mariana Sousa", photo: "url_mariana_sousa", role: "", linkedin: "" },
        ],
      },
      {
        name: "Chassi & Aero",
        members: [
          { name: "João Morgado", photo: JoaoMorgado, role: "Department Leader", linkedin: "https://linkedin.com" },
          { name: "Diogo Almeida", photo: DiogoAlmeida, role: "Department Leader", linkedin: "https://linkedin.com" },
          { name: "Martim Ribeiro", photo: MartimRibeiro, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Eduardo Carvalho", photo: EduardoCarvalho, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Nicholas Sanders", photo: Nicholas, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Diana Sousa", photo: DianaSousa, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "António Almeida", photo: AntonioAlmeida, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Diogo Laranjeiras", photo: DiogoLaranjeiras, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Francisco Matos", photo: FranciscoMatos, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Tomás", photo: Tomas, role: "Team Member", linkedin: "https://linkedin.com" },
        ],
      },
      {
        name: "Operations",
        members: [
          { name: "Diogo Farias", photo: "url_diogo_farias", role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Mafalda Pinto", photo: "url_mafalda_pinto", role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Leonor Jacinto", photo: "url_leonor_jacinto", role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Rodrigo Ferreira", photo: "url_rodrigo_ferreira", role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Beatriz X", photo: "url_leonor_jacinto", role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Edson Pereira", photo: "url_rodrigo_ferreira", role: "Team Member", linkedin: "https://linkedin.com" },
        
        ],
      
      },
      {
        name: "Autonomous Systems",
        members: [
          { name: "Bernardo Arede", photo: BernardoArede, role: "Department Leader", linkedin: "https://linkedin.com" },
          { name: "Diogo Marques", photo: DiogoMarques, role: "Team Member", linkedin: "https://linkedin.com" },
          { name: "Diogo Albuquerque", photo: DiogoAlbuquerque, role: "Team Member", linkedin: "https://linkedin.com" },
        
        ],
      
      },
    ],
  };

  return (
    <div className={styles.teamPage}>
      <Header />

      {/* Countdown Section at the top */}
      <section className={styles.countdownSection}>
        <h1 className={styles.title}>ROLLOUT</h1>
        {/* IMPORTANT: Update the date below to your actual PH25 rollout date */}
        <h3 className={styles.date}>June 11, 2025</h3> {/* Example date */}
        <div className={styles.countdown}>
          {["days", "hours", "minutes", "seconds"].map((unit) => (
            <div key={unit} className={styles.countdownItem}>
              <span className={styles.number}>{timeLeft[unit]}</span>
              <p className={styles.label}>{unit.charAt(0).toUpperCase() + unit.slice(1)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Removed the photoSection and mainContent (car specs + results) */}
      {/* The departments section will now directly follow the countdown */}

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
                    member.role && member.role.includes("Leader") ? styles.teamLeader : ""
                  }`}
                >
                  <div className={styles.memberImage}>
                    <img src={member.photo} alt={member.name} />
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkedinIcon}
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
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

export default PH25;