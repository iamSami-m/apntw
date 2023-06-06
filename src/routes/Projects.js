import React from 'react'
import Navbar  from '../components/Navbar';
import HeroImg2 from '../components/HeroImg2';
import Footer from '../components/Footer';
import PricingCards from '../components/PricingCards';
import Work from '../components/Work';

const Projects= () => {
  return (
    <div> 
      <Navbar/>
      <HeroImg2 heading="خدمات"/>
      <Work/>
      
      <Footer/>
    </div>
  )
}

export default Projects