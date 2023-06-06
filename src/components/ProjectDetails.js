import React, { Component } from 'react';
import img1 from './../assets/professional-programmer-working-late-dark-office.jpg'
import {Link} from 'react-router-dom'
import WorkData from './WorkCardData'
import "./ProjectDetails.css"

class ProjectDetail extends Component {
    state = {  } 
    render() { 
        return (
           <div className='aboutProductcontent'>
            
                <div className='left'>
                    <div className='img-container'>
                            <div className='img-stack'>
                                <img src={WorkData[this.props.dataindex].imgsrc} alt="img1" className='top'></img>
                            </div>
                            
                    </div>
                    
                    
                </div>
                <div className='right' dir='rtl'>
                <h1>{WorkData[this.props.dataindex].title}</h1>
                    <p>{WorkData[this.props.dataindex].datasum}</p>
                    <h2 style={{color:'white'}}>{WorkData[this.props.dataindex].workheader}</h2>
                    <ul style={{color:'white'}}>
                        {WorkData[this.props.dataindex].worklist.map((val,index)=>{
                        return(
                            <li>* {val}</li>
                                       
                        )
                    })}
                    </ul>
                    <ul style={{color:'white'}}>
                        <li><h2>برخی از مشتریان در این حوزه</h2></li>
                        {WorkData[this.props.dataindex].customers.map((val,index)=>{
                        return(
                            <li>- {val}</li>
                                       
                        )
                    })}
                    </ul>
                    <div className='buttons'>
                        <Link to="/contact">
                            
                            <button className='btn'>تماس با ما</button>      
                        </Link>
                        <Link to="/">
                            
                            <button className='btn'>بازگشت به صفحه اصلی</button>
                        </Link>
                    
                    </div>
                    
                    
                </div>
                
            </div>
        )
    }
}
 
export default ProjectDetail;