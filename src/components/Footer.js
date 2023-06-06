import "./Footer.css"
import React, { Component } from 'react';

import {FaHome,FaPhone,FaMailBulk,FaFacebook,FaTwitter,FaLinkedin} from "react-icons/fa"


class Footer extends Component {
    state = {  } 
    render() { 
        return (
            <div className="footer">
                <div className="left">
                    
                    <div className="location"><p>    کرمانشاه ،  حافظیه ، خیابان سهند ، شرکت شبکه هوشمند پدیده آپادانا   </p> </div>
                    
                    <div className="Tel"><h5>   9838395127+</h5><h5> 09364812065</h5></div>
                    
                    <div className="e-mail"><h5>   info@gmail.com</h5></div>
                </div>
                <div className="right">
                    <div className="about">
                        <h4 style={{marginBottom:"5px"}}>درباره ما</h4>
                        <p dir='rtl' style={{textAlign:"justify"}}>شرکت شبکه هوشمند پدیده آپادانا در سال 1385 به همت گروهی از کارشناسان و متخصصان حوزه فناوری اطلاعات تاسیس و در گروه های تخصصی به فعالیت پرداخت. این شرکت در ابتدا با کار در حوزه ی اجرای شبکه های رایانه ای شروع به فعالیت نمود و سپس گروه های نخصصی امنیت داده ها، دوربین های مداربسته، طراحی و استانداردسازی اطاق سرور و دیتا سنتر و اجرای فیبر نوری در سطح شبکه های مخابراتی به این گروه ها افزوده گردید. اکنون با گذشت بیش از پانزده سال در بیش از 500 پروژه مشارکت داشته است.
                        </p>
                        </div>
                        <div className="socials" style={{marginTop:"20px"}}>
                        <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                        <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                        <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Footer;