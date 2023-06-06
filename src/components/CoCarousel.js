import React, { Component } from 'react';
import CoData from "./CoCarouselData"
import "./CoCarouselStyle.css"
import {FaArrowRight,FaArrowLeft} from 'react-icons/fa' 

class CoCarousel extends Component {
    state = { 
        index1:0,
        index2:1,
    } 
    handleRightClick= () =>{
        if(this.state.index1>0){
            this.setState
            ({
                index1:this.state.index1-1,
                index2:this.state.index2-1,
            })
        }

        
    }
    handleLeftClick= () =>{
        if(this.state.index2<CoData.length-1){
            this.setState
            ({
                index1:this.state.index1+1,
                index2:this.state.index2+1,
            })
        }
        
    }
    render() { 
        return (
            <div className='cocaraousel'>
                <div className='cocaraouseltitle'>برخی از مشتریان </div>
                <div className='cocaraouselcontent'>
                    <button className='btn Leftbtn' onClick={this.handleLeftClick}><FaArrowLeft/></button>
                    <img className='img1' src={CoData[this.state.index2].src} alt={CoData[this.state.index2].alt}/>
                    <img className='img2' src={CoData[this.state.index1].src} alt={CoData[this.state.index1].alt}/>
                    <button className='btn Rightbtn' onClick={this.handleRightClick}><FaArrowRight/></button>
                </div>
            </div>
            
        );
    }
}
 
export default CoCarousel;