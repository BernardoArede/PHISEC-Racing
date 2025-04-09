import styles from '../styles/Footer.module.css';
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} PHISEC Racing. Todos os direitos reservados.<br/><br/>  
          Rua Pedro Nunes, 3030-199 Coimbra, ISEC
        </p>        
        <div className={styles.socialLinks}>
          <a href="https://www.instagram.com/phisecracing/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/phisecracing/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
          <a href="https://www.linkedin.com/company/phisecracing/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
