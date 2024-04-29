import React from 'react'
import './Home_Hero.css'
import {motion} from 'framer-motion'


const Home_Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings hero-innerWidth flexCenter">
            <div className="flexColStart">
                {/* Title */}
                <div className="hero-title">
                    <div className=""/>
                    <motion.h1 
                        initial={{y:"2rem", opacity : 0}}
                        animate={{y: 0, opacity:1}}
                        transition={{duration: 2, type: "spring"}}
                    >
                        A&M's spot for <br/>
                        Authentic Thai Asian Cuisine

                    </motion.h1>

                    {/* Description */}
                    <div style={{marginTop: '20px'}} className="flexCenter">
                        <span class="">(979) 450-7863 <br/>4345 Wellborn Rd, Bryan, TX 77801</span>
                    </div>
                    

                </div>

            </div>
        </div>
    </section>
  )
}

export default Home_Hero