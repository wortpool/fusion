import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import { Swiper, SwiperSlide } from 'swiper/react';
import { Zoom, Pagination, Scrollbar, A11y } from 'swiper';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import 'swiper/css';
import 'swiper/css/pagination';

import firstImage from "./slider-images/1.png";
import secondImage from "./slider-images/2.png";
import classes from "./style.module.css"

const ScreenshotSlider = () => {

    

    return ( 
        <section className="screenshot">
            <div className={classes.container}>
                <div className="inner">
                    <div className={classes.title}>Скриншоты с сервера</div>
                    <div className={classes.sliders}>
                        <Swiper
                            slidesPerView={3}
                            // spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                            const breakpoints = {{
                                // when window width is >= 320px
                                320: {
                                  slidesPerView: 1,
        
                                },
                                // when window width is >= 480px
                                480: {
                                  slidesPerView: 2,

                                },
                                // when window width is >= 640px
                                1070: {
                                  slidesPerView: 3,
                                    spaceBetween: 130
                                }
                                
                            }}
                        >   
                            <SwiperSlide>
                                <div className={classes.slider}>
                                    <img src={firstImage} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.slider}>
                                    <img src={firstImage} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.slider}>
                                    <img src={firstImage} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.slider}>
                                    <img src={firstImage} alt="" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.slider}>
                                    <img src={firstImage} alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default ScreenshotSlider;