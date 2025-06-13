import {useEffect, useState} from 'react';
import { HiChevronDoubleRight } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import styles from '../styles/global.module.css';
import style from '../styles/HomeScreen.module.css';  
import Header from './Header';
import imagebg from '../assets/images/Home_Image.webp';
import Footer from './Footer.js';



// Importando logotipos dos patrocinadores para a seção de platinum patrocinadores
import ipclogo from '../assets/images/sponsors/ipc.png';
import extramotionlogo from '../assets/images/sponsors/Logo_Extramotion.png';
import grumanlogo from '../assets/images/sponsors/Gruman.png';
import scaleOceanLogo from '../assets/images/sponsors/scaleocean.png';
import iseclogo from '../assets/images/sponsors/isec.png';


function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      {/* Seção Hero com a imagem por cima do header */}
      <section className={styles.hero}>
        <img src={imagebg} alt="header-image"  loading="lazy" className={styles.heroImage} style={{boxShadow:"10px #00000055"}} />
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Header no home */}
      <Header isHome={true} />
     
      {/* Resto do conteúdo da página */}
      <section className={styles.mainContent}>
      <div className={style.contentWrapper}>
          <h1 className={style.mainTitle}>BUILD TO LEARN. DRIVEN BY PASSION.</h1>
          <p className={style.mainText}>
          PHISEC Racing is the Formula Student team from the Polytechnic University of Coimbra, operating out of 
          the Coimbra Institute of Engineering. This project offers students a unique chance to apply classroom 
          knowledge and develop real-world skills, with the ultimate goal of creating capable, experienced, and 
          industry-ready engineers and managers.                        
          </p>
          <NavLink to= "/about" className={style.learnMoreButton}>LEARN MORE
            <HiChevronDoubleRight style={{marginBottom:"-1.5px"}}/>
          </NavLink>
      </div>


        <div className={styles.heroContent}>
          {/* Container superior único */}
          <NavLink to = "/fs" style={
            {textDecoration: 'none'}
          }>
          <div className={`${style.cardContainer} ${style.topCard} ${style.topCardBackground}`}>
            <p className={style.cardTitle}>FORMULA STUDENT</p>
          </div>
          </NavLink>

          {/* Linha com dois containers lado a lado */}
          <div className={style.bottomRow}>
          <NavLink to = "/becomePartner" style={
            {textDecoration: 'none'}
            }>
            <div className={`${style.cardContainer} ${style.bottomCard} ${style.bottomCard1Background}`}>
              <p className={style.cardTitle}>BECOME PARTNER</p>
            </div>
            </NavLink>
            <NavLink to = "/joinTeam" style={
            {textDecoration: 'none'}
            }>
            <div className={`${style.cardContainer} ${style.bottomCard} ${style.bottomCard2Background}`}>
              <p className={style.cardTitle}>JOIN THE TEAM</p>
            </div>
            </NavLink>
          </div>

          {/* Seção de Platinum Sponsors */}
          <section className={style.sponsorsSectionPlatiunum}>
            <h2 className={style.sponsorsTitle}>Platinum Sponsors</h2>
            <div className={style.sponsorsGrid}>
            <a href="https://www.ipc.pt/" target="_blank" rel="noopener noreferrer">
                <img src={ipclogo} alt="ipc" className={style.sponsorLogo} />
            </a>
            <a href="https://extramotion.com/"  style={{scale:"75%"}} target="_blank" rel="noopener noreferrer">
                <img src={extramotionlogo} alt="extramotion" className={style.sponsorLogo} />
            </a>
            </div>  
          </section>
          <section className={style.sponsorsSectionGold}>
            <h2 className={style.sponsorsGoldTitle}>Gold Sponsors</h2>
            <div className={style.sponsorsGridGold}>
            <a href="https://gruman.com/" style={{scale:"55%"}} target="_blank" rel="noopener noreferrer">
                <img src={grumanlogo} alt="ipc" className={style.sponsorLogo} />
            </a>
            <a href="https://scalesoceans.pt/" style={{scale:"90%"}} target="_blank" rel="noopener noreferrer">
                <img src={scaleOceanLogo} alt="extramotion" className={style.sponsorLogo} />
            </a>
            <a href="https://www.isec.pt/PT/Default.aspx" style={{scale:"70%"}} target="_blank" rel="noopener noreferrer">
                <img src={iseclogo} alt="extramotion" className={style.sponsorLogo} />
            </a>
            </div>  
          </section>
        </div>
      </section>
      <Footer styles={{marginBottom:"0px"}}/>
    </div>
    
    
  );
}

export default Home;
