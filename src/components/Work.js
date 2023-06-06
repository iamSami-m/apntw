import React, { Component } from 'react';
import Workcard from './Workcard'
import WorkData from './WorkCardData'

class Work extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container">
                <h1 className="projects-title"></h1>
                <div className="projects-container">
                    {WorkData.map((val,index)=>{
                        return(
                            <Workcard 
                            key={index}
                            imgsrc={val.imgsrc}
                            title={val.title}
                            text={val.text}
                            projectindex={index}
                            />
                        )
                    })}
                </div>
            </div>
           
        );
    }
}
 
export default Work;