import "./Navbarstyle.css"

import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from "react-icons/fa"




class Navbar extends Component {
  state={ clicked:false};
  handleclick = () => {
    this.setState({clicked : !this.state.clicked})
}


  render(){
    return (
      <>
          <nav>
            <Link to="/" className="left">
                  <h4>شرکت شبکه هوشمند آپادانا</h4>
              </Link>
              <div className="right">
              
              <ul className={this.state.clicked? "menu-items active" : "menu-items"}>
                
                      <li><Link to="/home">صفحه اصلی</Link></li>
                  
                      <li><Link to="/projects">خدمات</Link></li>
                      <li><Link to="/about">درباره ما</Link></li>
                      <li><Link to="/Contact">تماس با ما</Link></li>
                 
                  
                  
              </ul>
              <div id="burger" >
                <i onClick={this.handleclick} className={this.state.clicked? "fas fa-times" : "fas fa-bars"}></i>
                
              </div>
              </div>
              
          </nav>

      </>
    )
  }
  
}

export default Navbar