import "./WorkcardStyle.css"
import React, { Component } from 'react';

import {NavLink} from 'react-router-dom'

class Workcard extends Component {
    state = {  } 
    render() { 
        return (
            
                    <div className="project-card">
                        <img src={this.props.imgsrc} alt="work1"/>
                        <div className="pro-details" >
                            <h2 className="project-title" >{this.props.title}</h2>
                            <p dir="rtl">{this.props.text}</p>
                            <div className="pro-btns">
                                <NavLink to='/Project' state={{ title: this.props.projectindex}} className="btn">بیشتر بخوانید</NavLink>
                                
                            </div>
                        </div>

                    </div>
                    
            
            
        );
    }
}
 
export default Workcard;