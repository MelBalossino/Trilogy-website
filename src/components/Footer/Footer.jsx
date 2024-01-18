import React, { useState } from 'react';
import styles from './Footer.module.css';
import { BsFacebook, BsInstagram, BsArrowRight, BsYoutube } from 'react-icons/bs'
import { GrLinkedinOption } from "react-icons/gr";
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const Footer = () => {
    const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

    const toggleBenefits = () => {
        setIsBenefitsOpen(!isBenefitsOpen);
    };

    const { ref, isVisible } = useScrollAnimation();

    const variants = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };
    return (
        <footer className={styles.container} id='contato'>
            <div className={styles.containerFooter}>
                <div className={styles.title}>
                    <motion.h2
                        ref={ref}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        transition={{ duration: 0.5 }}
                        variants={variants}
                    >
                        <h2>Let's tech up together <BsArrowRight className={styles.iconChevron} size={25} /></h2>
                    </motion.h2>
                </div>
                <div className={styles.containerSections}>
                    <motion.img
                        ref={ref}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        variants={variants}
                        src="/images/trilogy_logo_2.png" alt="Company logo"
                        className={styles.imgLogo}
                    ></motion.img>

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        variants={variants}
                    >
                        <div className={styles.divSections}>
                            <h3>TRILOGY SOLUTIONS</h3>
                            <p>Serviços</p>
                            <p>info@trilogysolutions.com</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        variants={variants}
                    >
                        <div className={styles.divSections}>
                            <h3>O que fazemos</h3>
                            <p>Soluções Digitais</p>
                            <p>Dados, IA Machine Learning</p>
                            <p>Transformação Ágil</p>
                            <p>Plataformas e Alianças Tecnológicas</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        variants={variants}
                    >
                        <div className={styles.divSections}>
                            <h3>Como fazemos</h3>
                            <p>Smartsourcing</p>
                            <p>Squads Dedicadas Gerenciadas</p>
                            <p>Vem Ser Trilogy</p>
                        </div>
                    </motion.div>

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        variants={variants}
                    >
                        <div className={styles.divSections}>
                            <h3>Conecte-se conosco</h3>
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
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={styles.copyright}>
                <hr className={styles.underline} />
                <p>Copyright © 2024 Digital Business Company</p>
                <p>TRILOGY SOLUTIONS All rights reserved</p>
            </div>
        </footer>


    )
}

export default Footer;