import React from 'react';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Autoplay } from 'swiper/modules';


const Slider = () => {
    return (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    modules={[Keyboard, Autoplay]}
                    className={styles.mySlider}
                >
                    <SwiperSlide >
                            <img src="./images/banner-2.png" />
                    </SwiperSlide>

                    <SwiperSlide >
                            <img src="./images/banner-2.png" />
                    </SwiperSlide>
                    <section className={styles.titleSlider}>
                <h1> Trilogy <br /> Solutions </h1>
                <p>Desenvolvemos softwares e soluções de integração <br /> com entregas de alto padrão para sua empresa!</p>
            </section>
                </Swiper>
    )
}

export default Slider;