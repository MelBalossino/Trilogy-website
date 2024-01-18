import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { BsList, BsXLg } from 'react-icons/bs';
import styles from './Header.module.css';
import { BsFacebook, BsInstagram, BsArrowRight, BsYoutube } from 'react-icons/bs'
import { GrLinkedinOption } from "react-icons/gr";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 700) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? `${styles.header} ${styles.scrolled}` : styles.header}>
      <div className={styles.logo}>
        <Link to='slider' spy={true} smooth={true} offset={-70} duration={500}>
          <img src="/images/trilogy_logo_2.png" alt="Trilogy logo" />
        </Link>
      </div>
      <nav className={styles.navigation}>
        <ul className={isOpen ? `${styles.navLinks} ${styles.show}` : styles.navLinks}>
          <li><Link to="empresas" spy={true} smooth={true} offset={-70} duration={500}>Empresas</Link></li>
          <li><Link to="sobre" spy={true} smooth={true} offset={-70} duration={500}>Sobre</Link></li>
          <li><Link to="servicos" spy={true} smooth={true} offset={-70} duration={500}>Serviços</Link></li>
          <li><Link to="glpi" spy={true} smooth={true} offset={-70} duration={500}>GLPI</Link></li>
          <li><Link to="landing" spy={true} smooth={true} offset={-70} duration={500}>Landing Page</Link></li>
          <li><Link to="contato" spy={true} smooth={true} offset={-70} duration={500}>Contato</Link></li>
          <div className={styles.divRedes}>
            <div>
              <a href='https://www.linkedin.com/company/trilogy-solutions-ltda/about/' target='blank' rel='noopener noreferrer'> <p><GrLinkedinOption className={styles.icon} aria-label='Linkedin icon' /></p> </a>
            </div>
            <div className={styles.iconItem}>
              <a href='https://www.instagram.com/trilogysolutions_/' target='blank' rel='noopener noreferrer'> <p> <BsInstagram className={styles.icon} aria-label='Instagram icon' /> </p></a>
            </div>
            <div className={styles.iconItem}>
              <a href='https://www.facebook.com/profile.php?id=100077314213655' target='blank' rel='noopener noreferrer'> <p><BsFacebook className={styles.icon} aria-label='Facebook icon' /></p> </a>
            </div>
          </div>
        </ul>

        <button className={styles.mobileMenuIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BsXLg aria-label='Close icon' /> : <BsList aria-label='Menu icon' />}
        </button>
      </nav>
    </header>
  );
};

export default Header;