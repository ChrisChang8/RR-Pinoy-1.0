import React from 'react'
import Home_Header from '../components/Home/Home_Header';
import Home_Hero from '../components/Home/Home_Hero';
import Home_Footer from '../components/Home/Home_Footer';
import Home_Faq from '../components/Home/Home_Faq';
import Home_Popular from '../components/Home/Home_Popular';
import Home_Fill from '../components/Home/Home_Fill';

const Home = () => {
  return (
    <div>
        <div>
            <Home_Header/>
            <Home_Fill/>
            <Home_Hero/>
        </div>
        <Home_Popular/>
        <Home_Faq/>
        <Home_Footer/>
    </div>
  )
}

export default Home

