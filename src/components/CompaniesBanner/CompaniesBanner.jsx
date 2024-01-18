import React from "react"
import styles from './CompaniesBanner.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { motion } from 'framer-motion';
import useScrollAnimation from "../../hooks/useScrollAnimation"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function CompaniesBanner({ logos }) {
    const { ref, isVisible } = useScrollAnimation();

    const variants = {
        hidden: { y: 100, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    return (
        <div className={styles.container} id="empresas">
            <motion.h2
                ref={ref}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                variants={variants}
            >
                <h2>Conheça algumas das empresas que impulsionaram seus negócios conosco</h2>
            </motion.h2>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                }}
                loop={true}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
            >
                {logos.map((logo, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <img src={logo} alt="Company Logo" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default CompaniesBanner;