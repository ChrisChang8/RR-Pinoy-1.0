import React from 'react';
import './Home_Popular.css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import data from '../../utils/popularMenu.json';
import { sliderSettings } from '../../utils/common';
import { NavLink } from "react-router-dom";
// Make sure to initialize Swiper modules

const Home_Popular = () => {
    const SliderButtons = () => {
        const swiper = useSwiper();
        return (
            <div className="flexCenter" style={{padding:'20px', gap:'20px'}}>
                <button className="button" onClick={() => swiper.slidePrev()}>&lt;</button>
                <button className="button" onClick={() => swiper.slideNext()}>&gt;</button>
            </div>
        );
    };

    return (
        <section className='flexCenter'>
            <div className="paddings innerWidth flexCenter">
                <div className='flexColCenter'>
                    <span className='primaryText'>Try Our Most Popular Items</span>
                    <span className='secondaryText'>Trust me, you're gonna wanna try this!</span>
                    <NavLink className='button' style={{ marginTop: '20px', marginBottom: '10px' }} to="/menu" onClick={() => window.scrollTo(0, 0)}>View Full Menu</NavLink>
                </div>
                <Swiper {...sliderSettings}>
                        <SliderButtons/>
                        {
                            data.map((card, i) => (
                                <SwiperSlide key={i} >
                                    <div className="flexColStart popular-card">
                                        <img src={card.image} alt={card.name} />
                                        <span className="secondaryText">
                                            {/* <span style={{color: 'orange'}}>X </span> */}
                                            {/* <span>{card.status}</span> */}
                                        </span>
                                        <span className="popular-primaryText">{card.name}</span>
                                        <span className="popular-secondaryText">{card.detail}</span>
                                    </div>
                                </SwiperSlide>
                        ))}
                    </Swiper>
                    <div>
                </div>
            </div>
        </section>
    );
};

export default Home_Popular;
