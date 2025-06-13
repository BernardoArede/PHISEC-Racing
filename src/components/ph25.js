import { useEffect, useState } from "react";
import styles from "../styles/Team25.module.css";
import Header from "./Header.js";
import Footer from "./Footer.js";
import { FaLinkedinIn } from "react-icons/fa";
import { useCountdown } from "./useCountDown.js";

//phisec_admin
//PHISEC_Racing2024

import DianaSousa from '../assets/team_members/aero/Diana Sousa.jpg'
import EduardoCarvalho from '../assets/team_members/aero/Eduardo Carvalho.jpg'
import JoaoMorgado from '../assets/team_members/aero/Joao Morgado.jpg'
import MartimRibeiro from '../assets/team_members/aero/Martim Ribeiro.jpg'

import DiogoAlmeida from '../assets/team_members/chassi/Diogo Almeida.jpg'
import AntonioAlmeida from '../assets/team_members/chassi/Antonio Almeida.jpg'
import DiogoLaranjeiras from '../assets/team_members/chassi/Diogo Laranjeiras.jpg'
import TomasCorreia from '../assets/team_members/chassi/Tomas.jpg'
import Nicholas from '../assets/team_members/chassi/Nicolas.jpg'
import FranciscoMatos from '../assets/team_members/chassi/Francisco Matos.jpg'

import DiogoMarques from '../assets/team_members/autonomous/DiogoMarques.jpg'
import DiogoAlbuquerque from '../assets/team_members/autonomous/DiogoAlbuquerque.JPG'
import BernardoArede from '../assets/team_members/autonomous/BernardoArede.jpg'

//Falta um Tiago Qualquer
import DavidMagalhaes from '../assets/team_members/Drivetrain & Cooling/David Magalhaes.JPG'
import JoseAndrade from '../assets/team_members/Drivetrain & Cooling/Jose Miguel Andrade.JPG'
import MatheusPereira from '../assets/team_members/Drivetrain & Cooling/Matheus Alexandre Pereira.JPG'
import RodrigoFerreira from '../assets/team_members/Drivetrain & Cooling/Rodrigo Ferreira.JPG'

import TiagoGaspar from '../assets/team_members/eletronics/TiagoGaspar.JPG'
import Jordao from '../assets/team_members/eletronics/Jordao.JPG'
import Onorio from '../assets/team_members/eletronics/Onorio.JPG'
import Soeiro from '../assets/team_members/eletronics/Soeiro.JPG'
import Alexandre from '../assets/team_members/eletronics/AlexandreFerreira.JPG'
import AndreAlves from '../assets/team_members/eletronics/AndreAlves.JPG'

import VitorSimoes from '../assets/team_members/management/Vitor Simoes.JPG'
import JoaoCoelho from '../assets/team_members/management/JoaoCoelho.JPG'

//Suspension
import DinisCoelho from '../assets/team_members/suspension/DinisCoelho.JPG'
import BernardoSantos from '../assets/team_members/suspension/BernardoSantos.JPG'
import CarlosPaixao from '../assets/team_members/suspension/CarlosPaixao.JPG'
import LuisBugalho from '../assets/team_members/suspension/LuisBugalho.JPG'
import RafaelQuintino from '../assets/team_members/suspension/RafaelQuintino.JPG'
import FilipePontes from '../assets/team_members/suspension/FilipePontes.JPG'
import RodrigoCarvalho from '../assets/team_members/suspension/RodrigoCarvalho.JPG'

//VD

import LuisCarreira from '../assets/team_members/vd/LuisCarreira.JPG'
import InesCoutinho from '../assets/team_members/vd/InesCoutinho.JPG'
import Tiago from '../assets/team_members/vd/Tiago.JPG'
import CatarinaSilva from '../assets/team_members/vd/CatarinaSilva.JPG'
import MarianaSousa from '../assets/team_members/vd/MarianaSousa.JPG'


//

import DiogoFarias  from '../assets/team_members/operations/JoeMale.JPG'
import MafaldaPinto  from '../assets/team_members/operations/JoeFemale.JPG'
import RodrigoFerreiraVD  from '../assets/team_members/operations/JoeMale.JPG'
import LeonorJacinto  from '../assets/team_members/operations/Leonor Jacinto.JPG'
import GabrielaSilva from '../assets/team_members/operations/Beatriz.JPG'
import EdsonPereira  from '../assets/team_members/operations/Edson Pereira.JPG'
import { RiForward10Fill } from "react-icons/ri";


const PH25 = () => {

   const timeFSPT = useCountdown("2025-07-27T00:00:00");
  const timeFSS  = useCountdown("2025-08-04T00:00:00");
  // Countdown logic

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const [teamData, setTeamData] = useState({ departments: [] });
  // useEffect(() => {
  //   fetch("/api/team.ph")              
  //     .then(res => {
  //       if (!res.ok) throw new Error("Network response was not ok");
  //       return res.json();
  //     })
  //     .then(json => {
  //       setTeamData(json);
  //     })
  //     .catch(err => {
  //       console.error("Erro ao carregar dados da equipa:", err);
  //     });
  // }, []);

   const renderTimer = (label, date, timeLeft) => (
    <section className={styles.countdownSection} key={label}>
      <h1 className={styles.title}>{label}</h1>
      <h3 className={styles.date}>{date}</h3>
      <div className={styles.countdown}>
        {["days", "hours", "minutes", "seconds"].map(unit => (
          <div key={unit} className={styles.countdownItem}>
            <span className={styles.number}>{timeLeft[unit]}</span>
            <p className={styles.label}>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );


  // //TODO-> Database for include members
  const teamData = {
    departments: [
      {
        name: "Management",
        members: [
          { name: "Vitor Simões", photo: VitorSimoes, role: "Team Leader",      linkedin: "https://www.linkedin.com/in/sim%C3%B5esvitor/" },
          { name: "João Coelho",  photo: JoaoCoelho,  role: "Technical Director", linkedin: "https://www.linkedin.com/in/joao-francisco-coelho/" },
        ],
      },
      {
        name: "Eletronics & Powertrain",
        members: [
          { name: "André Alves",       photo: AndreAlves,  role: "Department Leader", linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Miguel Monteiro",   photo: Onorio,       role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Tiago Gaspar",      photo: TiagoGaspar,  role: "Team Member",       linkedin: "https://www.linkedin.com/in/tiagorgaspar/" },
          { name: "Francisco Soeiro",  photo: Soeiro,       role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Jordão Pereira",    photo: Jordao,       role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Alexandre Ferreira",photo: Alexandre,    role: "Team Member",       linkedin: "https://www.linkedin.com/in/alexandre-ferreira-7a4493358/?originalSubdomain=pt" },
        ],
      },
      {
        name: "Drivetrain & Cooling",
        members: [
          { name: "Matheus Pereira", photo: MatheusPereira,  role: "Department Leader", linkedin: "https://www.linkedin.com/in/matheus-alexandre-pereira-246a13272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
          { name: "David Magalhães", photo: DavidMagalhaes,   role: "Team Member",       linkedin: "https://www.linkedin.com/in/david-magalh%C3%A3es-189993334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
          { name: "José Dias",       photo: JoseAndrade,      role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Rodrigo Pereira", photo: RodrigoFerreira,  role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
        ],
      },
      {
        name: "Suspension",
        members: [
          { name: "Dinis Coelho",    photo: DinisCoelho,     role: "Department Leader", linkedin: "https://www.linkedin.com/in/dinis-coelho-555b481bb" },
          { name: "Rafael Quintino", photo: RafaelQuintino,  role: "Team Member",       linkedin: "https://www.linkedin.com/in/rafaelquintino/" },
          { name: "Carlos Paixão",   photo: CarlosPaixao,    role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Bernardo Santos", photo: BernardoSantos,   role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Luís Bugalho",    photo: LuisBugalho,     role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Filipe Ponte",   photo: FilipePontes,    role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Rodrigo Carvalho",   photo: RodrigoCarvalho,    role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
        ],
      },
      {
        name: "Vehicle Dynamics",
        members: [
          { name: "Luís Carreira",   photo: LuisCarreira,    role: "Department Leader", linkedin: "https://www.linkedin.com/in/luis-carreira/" },
          { name: "Tiago Cunha",     photo: Tiago,           role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Catarina Silva",  photo: CatarinaSilva,   role: "Team Member",       linkedin: "https://www.linkedin.com/in/catarina-silva-270a51314/" },
          { name: "Mariana Sousa",   photo: MarianaSousa,    role: "Team Member",       linkedin: "" },
          { name: "Inês Coutinho",   photo: InesCoutinho,    role: "Team Member",       linkedin: "https://www.linkedin.com/in/in%C3%AAs-coutinho-275266246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
        ],
      },
      {
        name: "Chassi & Aero",
        members: [
          { name: "João Morgado",    photo: JoaoMorgado,     role: "Department Leader", linkedin: "http://www.linkedin.com/in/joaomorgado03" },
          { name: "Diogo Almeida",   photo: DiogoAlmeida,    role: "Department Leader", linkedin: "https://www.linkedin.com/in/diogo-de-almeida-543882257/" },
          { name: "Martim Ribeiro",  photo: MartimRibeiro,   role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Eduardo Carvalho",photo: EduardoCarvalho, role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Nicholas Sanders",photo: Nicholas,        role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Diana Sousa",     photo: DianaSousa,      role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "António Almeida", photo: AntonioAlmeida,  role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Diogo Laranjeiras",photo: DiogoLaranjeiras,role: "Team Member",      linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Francisco Matos", photo: FranciscoMatos,  role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Tomás Correia",   photo: TomasCorreia,    role: "Team Member",       linkedin: "https://www.linkedin.com/in/tomascorreia005?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
        ],
      },
      {
        name: "Operations",
        members: [
          { name: "Edson Pereira",   photo: EdsonPereira,    role: "Team Member",       linkedin: "https://www.linkedin.com/in/edsonrdp?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
          { name: "Diogo Farias",    photo: DiogoFarias,     role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Mafalda Pinto",   photo: MafaldaPinto,    role: "Team Member",       linkedin: "https://www.linkedin.com/in/mafalda-p-358769176/" },
          { name: "Leonor Jacinto",  photo: LeonorJacinto,   role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Rodrigo Ferreira",photo: RodrigoFerreiraVD,role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Gabriela Silva",  photo: GabrielaSilva,   role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
        ],
      },
      {
        name: "Autonomous Systems",
        members: [
          { name: "Bernardo Arede",  photo: BernardoArede,   role: "Department Leader", linkedin: "https://www.linkedin.com/in/bernardo-arede-270083287/" },
          { name: "Diogo Marques",    photo: DiogoMarques,    role: "Team Member",       linkedin: "https://www.linkedin.com/company/phisecracing/posts/?feedView=all" },
          { name: "Diogo Albuquerque",photo: DiogoAlbuquerque,role: "Team Member",       linkedin: "https://www.linkedin.com/in/diogo-albuquerque-384a50349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
        ],
      },
    ],  

  };

  return (
    <div className={styles.teamPage}>
      <Header />

     <section className={styles.doubleCountDown}>
        {renderTimer("FSPT", "July 27, 2025", timeFSPT)}
        {renderTimer("FSS",  "August 04, 2025", timeFSS)}
      </section>



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