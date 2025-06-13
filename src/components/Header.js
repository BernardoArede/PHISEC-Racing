import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/global.module.css';
import { HiOutlineChevronDown } from "react-icons/hi";
import { SlArrowDown } from "react-icons/sl";

function Header({ isHome = false }) {
  const [isFixed, setIsFixed] = useState(!isHome);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(`.${styles.hero}`);
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsFixed(window.scrollY >= heroHeight - 500);
      }
    };

    if (isHome) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isHome]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTeamDropdown = () => {
    if (isHome && window.scrollY === 0) {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
      setTimeout(() => {
        setIsTeamDropdownOpen(!isTeamDropdownOpen);
      }, 500); 
    } else {
      setIsTeamDropdownOpen(!isTeamDropdownOpen);
    }
  };

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <header className={`${styles.header} ${isFixed ? styles.fixed : ''}`}>
      <div className="flex items-center space-x-4">
        <NavLink to="/">
          <img src="/PHISECbranco.png" alt="Logo" className={styles.logo} />
        </NavLink>
      </div>
      {isHome && (
        <SlArrowDown
          style={{
            color: "white",
            fontSize: "30px",
            position: "absolute",
            top: "-46px",
            left: "50%",
            transform: "translateX(-50%)",
            cursor: "pointer"
          }}
          onClick={handleScrollDown }
        />
      )}

      <nav className={styles.nav}>
        <NavLink to="/about" className={styles.navLink}>About us</NavLink>
        <div 
          className={styles.navLink} 
          onMouseEnter={toggleTeamDropdown} 
          onMouseLeave={toggleTeamDropdown}
          style={{ position: 'relative' }}
        >
          Team
          <HiOutlineChevronDown style={{ marginBottom: "-3px", marginLeft: "4px" }} />
          {isTeamDropdownOpen && (
            <div className={styles.dropdown}>
              <NavLink to="/team/ph25" className={styles.dropdownItem}>2025</NavLink>
              <NavLink to="/team/ph24" className={styles.dropdownItem}>2024</NavLink>
              <NavLink to="/team/ph23" className={styles.dropdownItem}>2023</NavLink>
              <NavLink to="/team/ph09" className={styles.dropdownItem}>2009</NavLink>
              <NavLink to="/team/ph08" className={styles.dropdownItem}>2008</NavLink>
              <NavLink to="/team/ph07" className={styles.dropdownItem}>2007</NavLink>
              
            </div>
          )}
        </div>
        <NavLink to="/sponsors" className={styles.navLink}>Sponsors</NavLink>
        <NavLink to="/contact" className={styles.navLink}>Contact</NavLink>
      </nav>

      <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`${styles.navMobile} ${isMenuOpen ? styles.open : ''}`}>
        <NavLink to="/about" className={styles.navLink} onClick={toggleMenu}>About us</NavLink>
        <div className={styles.navLink} onClick={toggleTeamDropdown}>
          Team
          <HiOutlineChevronDown style={{ marginBottom: "-3px", marginLeft: "4px" }} />
          {isTeamDropdownOpen && (
            <div className={styles.dropdownMobile}>
              <NavLink to="/team/ph25" className={styles.dropdownItem}>2025</NavLink>
              <NavLink to="/team/ph24" className={styles.dropdownItem}>2024</NavLink>
              <NavLink to="/team/ph23" className={styles.dropdownItem}>2023</NavLink>
              <NavLink to="/team/ph09" className={styles.dropdownItem}>2009</NavLink>
              <NavLink to="/team/ph08" className={styles.dropdownItem}>2008</NavLink>
              <NavLink to="/team/ph07" className={styles.dropdownItem}>2007</NavLink>
              
            </div>
          )}
        </div>
        <NavLink to="/sponsors" className={styles.navLink} onClick={toggleMenu}>Sponsors</NavLink>
        <NavLink to="/contact" className={styles.navLink} onClick={toggleMenu}>Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;