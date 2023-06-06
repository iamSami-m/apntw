import React, { Component } from 'react';

import "./HeroImg2Style.css"

class HeroImg2 extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <div className='header2'>
                    <div className='header-content'>
                        <h1>{this.props.heading}</h1>
                        <p>{this.props.text}</p>
                    </div>
                    
                </div>
            </>
        );
    }
}
 
export default HeroImg2;