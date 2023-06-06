import React, { Component } from 'react';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import ProjectDetails from '../components/ProjectDetails';

import {useLocation} from 'react-router-dom'



function  Project(){
    let location=useLocation();
    const { title } = location.state
    return (
        <div> 
        <Navbar/>
        <HeroImg2 heading=""/>
        <ProjectDetails dataindex={title}/>
        <Footer/>
        </div>
    )
  }
  
  export default Project