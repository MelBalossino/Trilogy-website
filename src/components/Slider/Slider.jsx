import React from 'react';
import { Link } from 'react-scroll';
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Keyboard, Autoplay } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs'


const Slider = () => {

    return (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    keyboard={{
                        enabled: true,
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false
                    }}
                    loop={true}
                    modules={[Keyboard, Autoplay]}
                    className={styles.mySlider}
                    id='slider'
                >
                    <SwiperSlide >
                             <div className={styles.fondoSlider} >
                             
                             
      <div className={styles.franjaAzul} ></div>
      </div>
                    </SwiperSlide>

                    <SwiperSlide >
                            <img src="./images/banner-2.png" />
                    </SwiperSlide>
                    <section className={styles.titleSlider}>
                <h1> Trilogy <br /> Solutions </h1>
                <p>Desenvolvemos softwares e soluções de integração <br /> com entregas de alto padrão para sua empresa!</p>
                <Link to="sobre" spy={true} smooth={true} offset={-70} duration={500}>
                <button>Conheça a Trilogy <BsArrowRight className={styles.iconChevron} size={25} /></button>
                </Link>
            </section>
                </Swiper>
    )
}

export default Slider;