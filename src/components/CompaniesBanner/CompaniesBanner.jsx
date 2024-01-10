import React from "react"
import styles from './CompaniesBanner.module.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function CompaniesBanner ({ logos }){
    return(
        <div className={styles.container}>
            <h2>Conheça algumas das empresas que impulsionaram seus negócios conosco</h2>
        <Swiper
        modules={[Autoplay ]}
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