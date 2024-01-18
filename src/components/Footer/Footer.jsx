import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styles from './Footer.module.css';
import { BsFacebook, BsInstagram, BsArrowRight } from 'react-icons/bs'
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
                        Let's tech up together <BsArrowRight className={styles.iconChevron} size={25} />
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
                            <Link to="servicos" spy={true} smooth={true} offset={-70} duration={500} ><p>Serviços</p></Link>
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
                            <Link to="servicos" spy={true} smooth={true} offset={-70} duration={500} ><p>Soluções Digitais</p></Link>
                            <Link to="servicos" spy={true} smooth={true} offset={-70} duration={500} ><p>Dados, IA Machine Learning</p></Link>
                            <Link to="servicos" spy={true} smooth={true} offset={-70} duration={500} ><p>Transformação Ágil</p></Link>
                            <Link to="servicos" spy={true} smooth={true} offset={-70} duration={500} ><p>Plataformas e Alianças Tecnológicas</p></Link>
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
                            <Link to="servicos" spy={true} smooth={true} offset={-70} duration={500} ><p>Smartsourcing</p></Link>
                            <Link to="servicos" spy={true} smooth={true} offset={-70} duration={500} ><p>Squads Dedicadas Gerenciadas</p></Link>
                            <Link to="servicos" spy={true} smooth={true} offset={-70} duration={500} ><p>Vem Ser Trilogy</p></Link>
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
                                    <a href='https://www.linkedin.com/company/trilogy-solutions-ltda/about/' target='blank' rel='noopener noreferrer'> <p><GrLinkedinOption className={styles.icon} /></p> </a>
                                </div>
                                <div className={styles.iconItem}>
                                    <a href='https://www.instagram.com/trilogysolutions_/' target='blank'> <p> <BsInstagram className={styles.icon} rel='noopener noreferrer' /> </p></a>
                                </div>
                                <div className={styles.iconItem}>
                                    <a href='https://www.facebook.com/profile.php?id=100077314213655' target='blank'> <p><BsFacebook className={styles.icon} rel='noopener noreferrer' /></p> </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className={styles.copyright}>
                <hr className={styles.underline} />
                <p>Copyright © 2024 TRILOGY SOLUTIONS </p>
                <p>All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer;