import { React, useState } from "react";
import styles from "./GLPIBanner.module.css";
import benefits from "./benefitsData.js";
import { BsCheck, BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

function GLPIBanner() {
  const [isBenefitsOpen, setIsBenefitsOpen] = useState(false);

  const toggleBenefits = () => {
    setIsBenefitsOpen(!isBenefitsOpen);
  };

  return (
    <div className={styles.container}>
      <img src="/images/glpi.jpg" alt="GLPI logo" />
      <div className={styles.content}>
        <h2>GLPI</h2>
        <p>O GLPI é a solução que sua empresa precisa para gerenciar ativos e simplificar o suporte técnico. Com recursos de última geração, oferecemos uma alternativa de alta qualidade e totalmente sem mensalidades.
        </p>
        <h3 onClick={toggleBenefits}>
          Principais benefícios {isBenefitsOpen ? <BsArrowUpShort className={styles.iconChevron} size={25} /> : <BsArrowDownShort className={styles.iconChevron} size={25} />}
        </h3>
        {isBenefitsOpen && (
          <div>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitItem}>
                <BsCheck size={24} className={styles.iconCheck} />
                <span className={styles.benefitText}>{benefit.text}</span>
              </div>
            ))}
            <p>Liberte-se das preocupações com o gerenciamento de ativos e o suporte técnico. O GLPI está aquí para ajudar a otimizar as operações de sua empresa.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default GLPIBanner;