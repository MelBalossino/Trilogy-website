import React from 'react'
import styles from './AboutBanner.module.css'

function AboutUsBanner () {
  return (
    <div className={styles.container}>
        <img src="/images/trilogy_logo_2.png" alt="Company Logo" className={styles.logo} />
        <h2>Trilogy Solutions</h2>
        <p>
          A Trilogy desenvolve e comercializa soluções tecnológicas que geram maior valor aos negócios.
        </p>
      </div>
  );
};

export default AboutUsBanner