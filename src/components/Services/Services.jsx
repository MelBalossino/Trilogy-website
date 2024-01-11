import React from 'react';
import styles from './Services.module.css';
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

  return (
     <div className={styles.container}>
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
    </div>
  );
}

export default Services;