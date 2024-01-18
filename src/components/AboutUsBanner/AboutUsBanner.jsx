import React from 'react'
import styles from './AboutBanner.module.css'
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { motion } from 'framer-motion';

function AboutUsBanner() {
  const { ref, isVisible } = useScrollAnimation();

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className={styles.container} id='sobre'>
      <motion.img
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        variants={variants}
        src="/images/trilogy_logo_2.png"
        alt="Company Logo"
        className={styles.logo}
      />
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={variants}
      >
        <h2>Trilogy Solutions</h2>
      </motion.h2>
      <motion.p
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.4 }}
        variants={variants}
      >
        <p>
          A Trilogy desenvolve e comercializa soluções tecnológicas que geram maior valor aos negócios.
        </p>
      </motion.p>
      <motion.h4
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.6 }}
        variants={variants}
      >
        <h4>LINHA DE SERVIÇOS</h4>
      </motion.h4>
      <motion.h3
        ref={ref}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={{ duration: 0.5, delay: 0.8 }}
        variants={variants}
      >
        <h3 className={styles.title}>Conheça as soluções que fazem os negócios crescerem.</h3>
      </motion.h3>
    </div>
  );
};

export default AboutUsBanner