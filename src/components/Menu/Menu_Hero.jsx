import React from 'react';
import "./Menu_Hero.css";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import "swiper/css";
import { sliderSettings } from '../../utils/common';
import data from '../../utils/localFavs.json';

const Menu_Hero = () => {

    // Button Functions
    const SliderButtons = () => {
        const swiper = useSwiper();
        return (
            <div className="flexCenter feature-buttons">
                <button className='slider-button' onClick={() => swiper.slidePrev()}>&lt;</button>
                <button className='slider-button' onClick={() => swiper.slideNext()}>&gt;</button>
            </div>
        );
    };

    return (
        <section className='menu-hero'>
            <div className='innerWidth' style={{ padding: '30px', position: 'relative' }}>
                {/* Dark overlay */}
                <div className="dark-overlay"></div>

                {/* Title */}
                <div className="feature-head">
                    <span className="orangeText flexCenter">Local Favorites</span>
                    <span className="menu-primaryText flexCenter">Look before you bite!</span>
                </div>

                {/* Slider */}
                <Swiper {...sliderSettings}>
                    <div style={{ marginTop: '30px' }}>
                        <SliderButtons />
                    </div>
                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>
                                <div className="flexCenter flexColCenter feature-card">
                                    <img src={card.image} alt="template" />
                                    <span className="secondaryText">
                                        <span>{card.status}</span>
                                    </span>
                                    <span className="primaryText">{card.name}</span>
                                    <span className="secondaryText">{card.detail}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    );
}

export default Menu_Hero;
