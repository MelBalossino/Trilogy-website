import React from 'react';
import styles from './Services.module.css';
import oQueFazemos from './oQueFazemos';
import comoFazemos from './comoFazemos';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { BsArrowDownShort } from "react-icons/bs";

function Services() {
  const { ref, isVisible } = useScrollAnimation();

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.section}>
          <motion.div className={styles.header} ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={variants}>
            <BsArrowDownShort className={styles.arrowIcon} />
            <h2>O QUE FAZEMOS</h2>
          </motion.div>
          <hr className={styles.underline} />
          {oQueFazemos.map((service, index) => (
            <div className={styles.service} key={index}>
              <div className={styles.containerIcon}>
                <div className={styles.iconOQueFazemos}>{service.icon}</div>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.section}>
          <motion.div className={styles.header} ref={ref}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={variants}>
            <BsArrowDownShort className={styles.arrowIcon} />
            <h2>COMO FAZEMOS</h2>
          </motion.div>
          <hr className={styles.underline} />
          {comoFazemos.map((service, index) => (
            <div className={styles.service} key={index}>
              <div className={styles.containerIcon}>
                <div className={styles.iconComoFazemos}>{service.icon}</div>
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.scrollingTextContainer}>
        <div className={styles.scrollingText}>
          #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER
          #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER
          #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER
          #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER #TECH UP TOGETHER
        </div>
      </div>
    </>
  );
}

export default Services;