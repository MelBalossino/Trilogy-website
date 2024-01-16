import React from 'react';
import styles from './Services.module.css';
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { BsArrowDownShort } from "react-icons/bs";

import { BsDisplay, BsDatabase, BsClockHistory, BsLink, BsFillPersonCheckFill,  } from "react-icons/bs";
import { AiOutlineTeam } from "react-icons/ai";

function Services () {
  const oQueFazemos = [ 
    {
      icon: <BsDisplay />,
      title: 'Soluções Digitais',
      description: 'Produtos digitais mobile, Web ou novos serviços.'
    },
    {
      icon: <BsDatabase />,
      title: 'Dados, IA Machine Learning',
      description: 'Produtos de dados alinhados aos seus objetivos de growth.'
    },
    {
      icon: <BsClockHistory />,
      title: 'Transformação Ágil',
      description: 'Agilidade do nível estratégico ao operacional.'
    },
    {
      icon: <BsLink />,
      title: 'Plataformas e Alianças Tecnológicas',
      description: 'Integrações estratégicas que potencializam seus resultados.'
    }
  ]

  const comoFazemos = [
    {
      icon: <AiOutlineTeam />,
      title: 'Squads Dedicadas Gerenciadas',
      description: 'Equipes de trabalho conectadas para resolver os objetivos do negócio.'
    },
    {
      icon: <BsFillPersonCheckFill />,
      title: 'Smartsourcing',
      description: 'Alocação de pessoas altamente capacitadas com um modelo de funcionamento único no mercado.'
    },
    {
      icon: <BsLink />,
      title: 'Vem Ser Trilogy',
      description: 'Programa de aceleração de conhecimento técnico, capacitando profissionais que podem ser alocados em sua empresa.'
    }
  ]

  const { ref, isVisible } = useScrollAnimation();

  const variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  
  return (
    <>
     <div className={styles.container}>
      <motion.div
      ref={ref}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.8 }}
                variants={variants}
                >
      <div className={styles.section}>
        <div className={styles.header}>
           <BsArrowDownShort className={styles.arrowIcon} />
          <h2>O QUE FAZEMOS</h2>
        </div>
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
      </motion.div>
      <motion.div
      ref={ref}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.8 }}
                variants={variants}
                >
      <div className={styles.section}>
        <div className={styles.header}>
          <BsArrowDownShort className={styles.arrowIcon} />
          <h2>COMO FAZEMOS</h2>
        </div>
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
      </motion.div>
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