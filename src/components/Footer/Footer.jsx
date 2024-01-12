import styles from './Footer.module.css';
import { BsFacebook, BsInstagram, BsArrowRight, BsYoutube } from 'react-icons/bs'
import { GrLinkedinOption } from "react-icons/gr";


const Footer = () => {
    //
    return (

        <footer className={styles.divFooter}>
            <h2>Let's tech up together <BsArrowRight /></h2>
            <div className={`${styles.divfooter} container`}>

                <img className={styles.imgLogo} src='/images/trilogy_logo_2.png' alt="" />
                <div className={styles.divSections}>
                    <h3>Trilogy Solutions</h3>
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
                        <a href='https://www.facebook.com/PuraVidaPremiumTravelExperience/'> <p><GrLinkedinOption /></p> </a>
                        <a href='https://instagram.com/puravidapremiumtravelxperience?igshid=MWZjMTM2ODFkZg=='> <p> <BsInstagram /> </p></a>
                        <a href='https://www.facebook.com/PuraVidaPremiumTravelExperience/'> <p><BsFacebook /></p> </a>
                        <a href='https://www.facebook.com/PuraVidaPremiumTravelExperience/'> <p><BsYoutube /></p> </a>
                        
                    </div>

                </div>
            </div>
            <hr className={styles.underline} />
            <p>Copyright © 2024 Digital Business Company</p>
            <p>TRILOGY SOLUTIONS All rights reserved</p>
        </footer>


    )
}

export default Footer;