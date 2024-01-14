import styles from './Footer.module.css';
import { BsFacebook, BsInstagram, BsArrowRight, BsYoutube } from 'react-icons/bs'
import { GrLinkedinOption } from "react-icons/gr";


const Footer = () => {
    return (
        <footer className={styles.container}>
             <div className={styles.title}>
            <h2>Let's tech up together <BsArrowRight className={styles.iconChevron} size={25}/></h2>
            </div>
            <div className={styles.containerSections}>
                <img className={styles.imgLogo} src='/images/trilogy_logo_2.png' alt="Company Logo" />
                <div className={styles.divSections}>
                    <h3>TRILOGY SOLUTIONS</h3>
                    <p>Serviços</p>
                    <p>info@trilogysolutions.com</p>
                </div>

                <div className={styles.divSections}>
                    <h3>O que fazemos</h3>
                    <p>Soluções Digitais</p>
                    <p>Dados, IA Machine Learning</p>
                    <p>Transformação Ágil</p>
                    <p>Plataformas e Alianças Tecnológicas</p>
                </div>

                <div className={styles.divSections}>
                    <h3>Como fazemos</h3>
                    <p>Smartsourcing</p>
                    <p>Squads Dedicadas Gerenciadas</p>
                    <p>Vem Ser Trilogy</p>

                </div>

                <div className={styles.divSections}>
                    <h3>Conecte-se conosco</h3>
                    <div className={styles.divRedes}>
                        <a href=''> <p><GrLinkedinOption className={styles.iconChevron} size={20}/></p> </a>
                        <a href=''> <p> <BsInstagram className={styles.iconChevron} size={20}/> </p></a>
                        <a href=''> <p><BsFacebook className={styles.iconChevron} size={20}/></p> </a>
                        <a href=''> <p><BsYoutube className={styles.iconChevron} size={20}/></p> </a>
                        
                    </div>

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