import { React } from "react";
import styles from "./LandingPageBanner.module.css";

function LandingPageBanner() {

    return (
        <div className={styles.container}>
            <img src="/images/landingPageBanner.jpg" alt="GLPI logo" />
            <div className={styles.content}>
                <h2>Crie uma LANDING PAGE para seu produto</h2>
                <p>Transforme sua ideia em realidade com o Criador de landing page.</p>
            </div>
        </div>
    );
}

export default LandingPageBanner;