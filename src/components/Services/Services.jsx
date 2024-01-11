import React from 'react';
import styles from './Services.module.css';
import { BsArrowDownShort } from "react-icons/bs";
import services from './services.js';

function Services () {

  return (
    <div className={styles.container}>
        <div className={styles.subtitles}>
          <div className={styles.subtitleBlock}>
            <span className={styles.subtitle}>O QUE FAZEMOS</span>
            <BsArrowDownShort className={styles.iconChevron} size={25} />
            <hr className={styles.line} />
          </div>
          <div className={styles.subtitleBlock}>
            <span className={styles.subtitle}>COMO FAZEMOS</span>
            <BsArrowDownShort className={styles.iconChevron} size={25} />
            <hr className={styles.line} />
          </div>
        </div>
      <div className={styles.content}>
        {services.map((service, index) => (
          <div className={styles.contentBlock} key={index}>
            <div className={styles.icon}>{/* Aquí iría el componente del icono o la etiqueta img */}</div>
            <h3 className={styles.contentTitle}>{service.title}</h3>
            <p className={styles.contentDescription}>{service.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <span className={styles.hashtag}>#TECH UP TOGETHER #TECH</span>
      </div>
    </div>
  );
};

export default Services;