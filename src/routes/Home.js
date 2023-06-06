import React from 'react';
import Navbar  from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Work from '../components/Work';
import CoCarousel from '../components/CoCarousel'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Work/>
      <CoCarousel/>
      <Footer/>
    </div>
    
  )
}

export default Home