import React, { useState, useEffect } from 'react';
import Header from './Header';
import Counter from './Counter';
import { motion } from "framer-motion";
import styles from '../styles/global.module.css';
import style from '../styles/About.module.css';
import Footer from './Footer';

// Importando as imagens
import eletronic from '../assets/icons_departments/eletronics_dep.png';
import aerodynamics from '../assets/icons_departments/aerodynamics_dep.png';
import chassis from '../assets/icons_departments/chassis_dep.png';
import operation from '../assets/icons_departments/operations_dep.png';
import powertrain from '../assets/icons_departments/powertrain_dep.png';
import suspension from '../assets/icons_departments/suspension_dep.png';
import vehicle from '../assets/icons_departments/vehicle_dynamics_dep.png';
import management from '../assets/icons_departments/management_dep.png'
import autonomous from '../assets/icons_departments/autonomous_dep.png'
import drivetrain from '../assets/icons_departments/Drivetrain_dep.png'

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const departments = [
    { id: 1, icon: eletronic, name: 'Electronics', description: 'The Electronics department focuses on embedded systems and low voltage electronic solutions.' },
    { id: 2, icon: aerodynamics, name: 'Aerodynamics', description: 'The Aerodynamics department works on optimizing airflow and vehicle performance.' },
    { id: 3, icon: chassis, name: 'Chassis', description: 'The Chassis department is responsible for the vehicle structure and impact atenuator.' },
    { id: 4, icon: operation, name: 'Operations', description: 'The Operations department manages non engeneering task like Business and Marketing.' },
    { id: 5, icon: powertrain, name: 'Powertrain', description: 'The Powertrain department handles the high Voltage propulsion system.' },
    { id: 6, icon: suspension, name: 'Suspension', description: 'The Suspension department develops damping and breaking system.' },
    { id: 7, icon: vehicle, name: 'Vehicle Dynamics', description: 'The Vehicle Dynamics department simulates and optimizes overall vehicle performance.' },
    { id: 8, icon: management, name: 'Management', description: 'Composed of the Team Leader and Technical Director, the Managment department oversees the whole team.' },
    { id: 9, icon: autonomous, name: 'Autonomous Systems', description: ' The autonomous department is responsable for all systems need for the car to operate by it self.' },
    { id: 10, icon: drivetrain, name: 'Drivetrain & Cooling', description: 'The Drivetrain & Cooling department designs and integrates power transmission components and thermal management systems to ensure efficient propulsion and optimal operating temperatures.' },
  ];

  return (
    <div className={style.container}>
      <Header isHome={false}/>
      <section className={style.intro}>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={style.title}
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={style.description}
        >
          PHISEC Racing, representing the Polytechnic University of Coimbra and operating from the Coimbra Institute of Engineering, was founded in 2006 in Coimbra, Portugal. Our team takes great pride in handling as much as possible internally, creating a hands-on learning environment where students can apply classroom knowledge and develop practical skills. Our ultimate aim is to produce capable, experienced, and industry-ready engineers and managers.
        </motion.p>
      </section>

      <section className={style.counterSection}>
        <div className={style.counterContainer}>
          <div className={style.counterCard}>
            <h1><Counter end={46} duration={1000} /></h1>
            <h3>Members</h3>
          </div>
          <div className={style.counterCard}>
            <h1><Counter end={12} duration={1000} /></h1>
            <h3>Courses</h3>
          </div>
          <div className={style.counterCard}>
            <h1><Counter end={9} duration={1000} /></h1>
            <h3>Departments</h3>
          </div>
        </div>
      </section>
      <section className={style.intro}>
       <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={style.description}
        >
          Our team has participated in the FSUK competitions, 
          starting with Class 3 in 2007 and moving to Class 1 in 2008 and Class 1/200 
          in 2009. After a period of dormancy, we reignited our passion for innovation 
          in 2022, shifting our focus to electric prototypes.
           Since then, we have been committed to establishing PHISEC Racing as a 
           consistent Formula Student team, achieving 3rd place overall
            in Class 2 at FSPT 23 and 2nd place overall in Class 2 at FSPT 24.
             
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className={style.description}
          style={{marginBottom:"-30px"}}
        >
          As we continue to grow and evolve, our long-term goal 
             is to ensure that PHISEC Racing remains a hub for future engineering talent, 
             providing a strong foundation for the next generation 
             of engineers and managers.
             
        </motion.p>



        
      </section>
      

      <section className={style.departments}>
        <div className={style.departmentsGrid}>
          {departments.map((dept) => (
            <div key={dept.id} className={style.departmentCard}>
              <img src={dept.icon} alt={dept.name} className={style.iconImage} />
              <h3>{dept.name}</h3>
              <p>{dept.description}</p>
            </div>
          ))}
        </div>


      </section>
      <Footer />
    </div>
  );
}

export default About;