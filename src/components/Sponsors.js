import {useEffect} from 'react';
import Header from './Header';
import styles from '../styles/global.module.css';
import style from '../styles/sponsors.module.css'
import Footer from './Footer';

import ipclogo from '../assets/images/sponsors/ipc.png';
import extramotionlogo from '../assets/images/sponsors/Logo_Extramotion.png';
import grumanlogo from '../assets/images/sponsors/Gruman.png';
import scaleOceanLogo from '../assets/images/sponsors/scaleocean.png';
import iseclogo from '../assets/images/sponsors/isec.png'
import isicomlogo from '../assets/images/sponsors/isicom.png'
import milwaukeelogo from '../assets/images/sponsors/milwaukee.png'
import obologo from '../assets/images/sponsors/obo.png'
import efapellogo from '../assets/images/sponsors/efapel.png'
import sofalcalogo from '../assets/images/sponsors/sofalca.png'
import cepralogo from '../assets/images/sponsors/cepra.png'
import coficablogo from '../assets/images/sponsors/coficab.png'
import kisssoftlogo from '../assets/images/sponsors/Kisssoft.png'
import aeiseclogo from '../assets/images/sponsors/aeisec.png'
import i2alogo from '../assets/images/sponsors/i2a.png'
import norelemlogo from '../assets/images/sponsors/norelem.png'


import ipdj from '../assets/images/sponsors/IPDJ.png'
import mixtronica from '../assets/images/sponsors/mixtronica.png'
import tubohidraulica from '../assets/images/sponsors/Tubo Hidraulica.png'
import smart3D from '../assets/images/sponsors/Smart3d.png'
import climaTTempo from '../assets/images/sponsors/Clima t tempo.png'
import RRMP from '../assets/images/sponsors/RRMP.png'

//Bronze
import Autorecar from '../assets/images/sponsors/Autorecar - 12cm.png'
import Bender from '../assets/images/sponsors/Bender - 12cm.png'
import Enapaq from '../assets/images/sponsors/Enepaq - 12cm.png'
import SingularPrint from '../assets/images/sponsors/Singular Print -12cm.png'
import Sofalca from '../assets/images/sponsors/Sofalca - 12cm.png'

import CadFlow from '../assets/images/sponsors/CADFLOW - 20 cm.png'

function Sponsors() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.container}>
      {/* Header comum */}
      <Header />
      
      <div className={style.imgContainer}>
        <h1 className={style.titleImage}>
          Without You It Would't Be Possible!</h1> 
      </div>

      {/* Seção de Platinum Sponsors */}
      <section className={style.sponsorsSectionPlatiunum}>
        
          <h2 className={style.sponsorsTitle}>Platinum</h2>
          
        <div className={style.sponsorsGrid}>
          <a href="https://www.ipc.pt/" target="_blank" rel="noopener noreferrer">
            <img src={ipclogo} alt="ipc" className={style.sponsorLogo} />
          </a>
          <a href="https://extramotion.com/" style={{ scale: "75%" }} target="_blank" rel="noopener noreferrer">
            <img src={extramotionlogo} alt="extramotion" className={style.sponsorLogo} />
          </a>
        </div>
      </section>

      {/* Seção de Gold Sponsors */}
      <section className={style.sponsorsSectionGold}>
        
          <h2 className={style.sponsorsGoldTitle}>Gold</h2>
         
        <div className={style.sponsorsGridGold}>
          <a href="https://gruman.com/" style={{ scale: "55%" }} target="_blank" rel="noopener noreferrer">
            <img src={grumanlogo} alt="ipc" className={style.sponsorLogo} />
          </a>
          <a href="https://scalesoceans.pt/" style={{ scale: "90%" }} target="_blank" rel="noopener noreferrer">
            <img src={scaleOceanLogo} alt="extramotion" className={style.sponsorLogo} />
          </a>
          <a href="https://www.cadflow.pt/" style={{ scale: "90%" }} target="_blank" rel="noopener noreferrer">
            <img src={CadFlow} alt="extramotion" className={style.sponsorLogo} />
          </a>
        </div>
      </section>

      {/* Seção de Silver Sponsors */}
      <section className={style.sponsorsSectionSilver}>
        
          <h2 className={style.sponsorsSilverTitle}>Silver</h2>
          
        <div className={style.sponsorsGridGold}>
          <a href="https://isicom.pt/" style={{ scale: "70%" }} target="_blank" rel="noopener noreferrer">
            <img src={isicomlogo} alt="isicom" className={style.sponsorLogo} />
          </a>
          <a href="https://pt.milwaukeetool.eu/" style={{ scale: "70%" }} target="_blank" rel="noopener noreferrer">
            <img src={milwaukeelogo} alt="milwaukeetool" className={style.sponsorLogo} />
          </a>
        </div>
      </section>

      {/* Seção de Bronze Sponsors */}
      <section className={style.sponsorsSectionBronze}>
        
          
          <h2 className={style.sponsorsBronzeTitle}>Bronze</h2>
          
        
        <div className={style.sponsorsGridGold}>
          <a href="https://www.obo.pt/" style={{ scale: "55%" }} target="_blank" rel="noopener noreferrer">
            <img src={obologo} alt="obo" className={style.sponsorLogo} />
          </a>
          <a href="https://www.efapel.pt/" style={{ scale: "80%" }} target="_blank" rel="noopener noreferrer">
            <img src={efapellogo} alt="efapel" className={style.sponsorLogo} />
          </a>
          <a href="https://www.sofalca.pt/pt/" style={{ scale: "70%" }} target="_blank" rel="noopener noreferrer">
            <img src={sofalcalogo} alt="sofalca" className={style.sponsorLogo} />
          </a>
          <a href="https://www.cepra.pt/" style={{ scale: "70%" }} target="_blank" rel="noopener noreferrer">
            <img src={cepralogo} alt="cepra" className={style.sponsorLogo} />
          </a>
          <a href="https://www.coficab.pt/" style={{ scale: "70%" }} target="_blank" rel="noopener noreferrer">
            <img src={coficablogo} alt="coficab" className={style.sponsorLogo} />
          </a>
          <a href="https://www.kisssoft.com/pt" style={{ scale: "70%" }} target="_blank" rel="noopener noreferrer">
            <img src={kisssoftlogo} alt="kisssoft" className={style.sponsorLogo} />
          </a>
          <a href="https://www.isec.pt/PT/Default.aspx" style={{ scale: "70%", marginTop:"30px"}} target="_blank" rel="noopener noreferrer">
            <img src={iseclogo} alt="extramotion" className={style.sponsorLogo} />
          </a>
          <a href="https://norelem.es/pt/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={norelemlogo} alt="norelem" className={style.sponsorLogo} />
        </a>
        <a href="https://g.co/kgs/gPMeHHV" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={Autorecar} alt="norelem" className={style.sponsorLogo} />
        </a>
        <a href="https://www.bender.de/en/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={Bender} alt="norelem" className={style.sponsorLogo} />
        </a>
        <a href="https://enepaq.com/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={Enapaq} alt="norelem" className={style.sponsorLogo} />
        </a>
        <a href="https://singularprint.pt/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={SingularPrint} alt="norelem" className={style.sponsorLogo} />
        </a>
    
        </div>
      </section>

      <section className={style.sponsorsSectionPartner}>
        
          
        <h2 className={style.sponsorsPartnerTitle}>Partners</h2>
        
      
      <div className={style.sponsorsGridGold}>
        <a href="https://aeisec.pt/" style={{ scale: "50%" }} target="_blank" rel="noopener noreferrer">
          <img src={aeiseclogo} alt="aeisec" className={style.sponsorLogo} />
        </a>
        <a href="https://www.ipc.pt/iid-e-empresas/instituto-de-investigac%CC%A7a%CC%83o-aplicada/" style={{ scale: "65%" }} target="_blank" rel="noopener noreferrer">
          <img src={i2alogo} alt="i2a" className={style.sponsorLogo} />
        </a>
        <a href="https://ipdj.gov.pt/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={ipdj} alt="norelem" className={style.sponsorLogo} />
        </a>
         <a href="https://mixtronica.com/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={mixtronica} alt="norelem" className={style.sponsorLogo} />
        </a>
         <a href="https://tubohidraulica.com/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={tubohidraulica} alt="norelem" className={style.sponsorLogo} />
        </a>
         <a href="https://www.smart3d.pt/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={smart3D} alt="norelem" className={style.sponsorLogo} />
        </a>
         <a href="https://climatizacaottempo.com/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={climaTTempo} alt="norelem" className={style.sponsorLogo} />
        </a>
         <a href="https://rrmp.eu/" style={{ scale: "70%",marginBottom: "60px"  }} target="_blank" rel="noopener noreferrer">
          <img src={RRMP} alt="norelem" className={style.sponsorLogo} />
        </a>
      </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Sponsors;