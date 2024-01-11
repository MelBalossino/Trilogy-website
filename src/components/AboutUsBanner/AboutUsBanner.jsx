import React from 'react'
import styles from './AboutBanner.module.css'

function AboutUsBanner() {
  return (
    <div className={styles.container}>
      <img src="/images/trilogy_logo_2.png" alt="Company Logo" className={styles.logo} />
      <h2>Trilogy Solutions</h2>
      <p>
        A Trilogy desenvolve e comercializa soluções tecnológicas que geram maior valor aos negócios.
      </p>
      <h4>LINHA DE SERVIÇOS</h4>
      <h3 className={styles.title}>Conheça as soluções que fazem os negócios crescerem.</h3>
    </div>
  );
};

export default AboutUsBanner