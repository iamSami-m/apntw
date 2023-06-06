import "./HeroImgStyle.css"
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import IntroImg from '../assets/workplace-with-headphones-laptop-evening-copy-space.jpg'

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <header>
                <div className="header-content">
                    <h2>شرکت شبکه هوشمند پدیده آپادانا</h2>
                    <h6>مجری پروژه های lan-wan-wireless-پروژه های فیبر نوری-طراحی دیتاسنتر -فروش تجهیزات cisco،hpو... </h6>
                    <div className="buttons">
                        <Link to="/Projects" className="btn1 btn">خدمات</Link>
                        <Link to="/contact" className="btn2 btn btn-light ">تماس با ما</Link>
                    </div>
                </div>
           </header>
        );
    }
}
 
export default Navbar;
