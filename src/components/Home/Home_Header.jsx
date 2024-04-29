import React, { useState } from 'react';
import './Home_Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink } from "react-router-dom";
import Home_Contact from './Home_Contact';
import 'boxicons'


const Home_Header = () => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [contactOpened, setContactOpened] = useState(false);

    const getMenuStyles = () => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" };
        }
    };

    const handleNav = () => {
        setContactOpened(prev => !prev);
    };

    const handleCloseContact = () => {
        setContactOpened(false);
    };

    return (
        <section className="h-wrapper fixed">
            <div className="flexCenter h-container h-innerWidth">
                <img src="./logo.jpg" alt="logo" width={100} />

                {/* Full Screen Navbar */}
                <OutsideClickHandler onOutsideClick={() => { setMenuOpened(false) }}>
                    <div className="flexCenter h-menu" style={getMenuStyles()}>
                        <NavLink to="/" onClick={() => window.scrollTo(0, 0)}>Home</NavLink>
                        <NavLink to="/menu" onClick={() => window.scrollTo(0, 0)}>Menu</NavLink>
                        <div className="menu-item" onClick={handleNav}>Contact</div>
                    </div>
                </OutsideClickHandler>
                
                {/* Mobile Screen Navbar */}
                <div className="menu-icon" onClick={() => setMenuOpened(prev => !prev)}>
                    <BiMenuAltRight size={30} />
                </div>
            </div>
            {contactOpened && (
                <div className="overlay">
                    <div className="contact-model">
                        <box-icon name='x' onClick={handleCloseContact}></box-icon>
                        <Home_Contact />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Home_Header;
