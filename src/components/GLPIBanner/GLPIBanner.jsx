import { React, useState } from "react";
import styles from "./GLPIBanner.module.css";
import benefits from "./benefitsData.js";
import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { BsCheck, BsArrowUpShort, BsArrowDownShort } from "react-icons/bs";

function GLPIBanner() {
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
    <div className={styles.container} id="glpi">
      <motion.img
      ref={ref}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                variants={variants}
src="/images/glpi.jpg" alt="GLPI logo"
                ></motion.img>
      <div className={styles.content}>
        <motion.h2
        ref={ref}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.2 }}
                variants={variants}
        >
        <h2>GLPI</h2>
        </motion.h2>
        <motion.p
        ref={ref}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5, delay: 0.4 }}
                variants={variants}
        >
        <p>O GLPI é a solução que sua empresa precisa para gerenciar ativos e simplificar o suporte técnico. Com recursos de última geração, oferecemos uma alternativa de alta qualidade e totalmente sem mensalidades.
        </p>
        </motion.p>
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