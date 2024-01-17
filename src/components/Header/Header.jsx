import React, { useState, useEffect } from 'react';
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
      if (offset > 80) {
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
        <img src="/images/trilogy_logo_2.png" alt="Logo" />
      </div>
      <nav className={styles.navigation}>
        <ul className={isOpen ? `${styles.navLinks} ${styles.show}` : styles.navLinks}>
          <li><a href="/servicos">Serviços</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/carreiras">GLPI</a></li>
        <li><a href="/tech-update">Tech Update</a></li>
        <li><a href="/vem-ser">Vem Ser</a></li>
        <li><a href="/contato">Contato</a></li>
        <div className={styles.divRedes}>
                                <div className={styles.iconItem}>
                                    <a href='https://www.linkedin.com/company/trilogy-solutions-ltda/about/' target='blank'> <p><GrLinkedinOption className={styles.icon} /></p> </a>
                                </div>
                                <div className={styles.iconItem}>
                                    <a href='https://www.instagram.com/trilogysolutions_/' target='blank'> <p> <BsInstagram className={styles.icon} /> </p></a>
                                </div>
                                <div className={styles.iconItem}>
                                    <a href='https://www.facebook.com/profile.php?id=100077314213655' target='blank'> <p><BsFacebook className={styles.icon} /></p> </a>
                                </div>
                            </div>
        </ul>
  
        <button className={styles.mobileMenuIcon} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <BsXLg /> : <BsList />}
        </button>
      </nav>
    </header>
  );
};

export default Header;