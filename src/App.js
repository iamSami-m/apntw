import React, { Component } from 'react';
import './index.css';
import Home from './routes/Home'

import Projects from './routes/Projects'

import About from './routes/About'

import Contact from './routes/Contact'

import Project from './routes/Project'
import {Route,Routes} from 'react-router-dom'

class App extends Component  {
  render() { 
  return (
    <>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/Project' element={<Project/>}/>
        <Route path="/" element={<Home />} />
       
      </Routes>
    </>
  );
  }
}

export default App;
