import React from 'react'
import Home_Header from '../components/Home/Home_Header';
import Home_Footer from '../components/Home/Home_Footer';
import Home_Fill from '../components/Home/Home_Fill';
import Menu_Menu from '../components/Menu/Menu_Menu';
import Menu_Hero from '../components/Menu/Menu_Hero';

const Menu = () => {
  return (
    <div>
        <div>
            <Home_Header/>
            <Home_Fill/>
            <Menu_Hero/>
        </div>  
        <Menu_Menu/>
        <div className="separator"></div>
        <Home_Footer/>      
    </div>

  )
}

export default Menu