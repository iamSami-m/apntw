import React, { Component } from 'react';
import "./AboutContentStyle.css"
import img1 from './../assets/professional-programmer-working-late-dark-office.jpg'
import img2 from './../assets/20945805.jpg'
import {Link} from 'react-router-dom'

class AboutContent extends Component {
    state = {  } 
    render() { 
        return (
            <div className='aboutcontent'>
                
                
                <div className='left'>
                    
                    <h1>درباره ما</h1>
                    <p dir='rtl' style={{textAlign:"justify"}}>شرکت شبکه هوشمند پدیده آپادانا در سال 1385 به همت گروهی از کارشناسان و متخصصان حوزه فناوری اطلاعات تاسیس و در گروه های تخصصی به فعالیت پرداخت. این شرکت در ابتدا با کار در حوزه ی اجرای شبکه های رایانه ای شروع به فعالیت نمود و سپس گروه های نخصصی امنیت داده ها، دوربین های مداربسته، طراحی و استانداردسازی اطاق سرور و دیتا سنتر و اجرای فیبر نوری در سطح شبکه های مخابراتی به این گروه ها افزوده گردید. اکنون با گذشت بیش از پانزده سال در بیش از 500 پروژه مشارکت داشته است.
                    </p>
                    <Link to="/contact">
                        
                        <button className='btn'>Contact</button>
                    </Link>
                    
                    
                </div>
                <div className='right'>
                    <div className='img-container'>
                            <div className='img-stack'>
                                <img src={img1} alt="img1" className='top'></img>
                            </div>
                            <div className='img-stack'>
                                <img src={img2} alt="img2" className='bottom'></img>
                            </div>
                    </div>
                    
                    
                </div>
            </div>
        );
    }
}
 
export default AboutContent;