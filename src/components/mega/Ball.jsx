import './Ball.css'
import React from 'react'
 
export default props => {
    

    const bolasLI = props.number.map((number) =>{
    const randomColor  = '#' + Math.floor(Math.random() * 16777215).toString(16);
        return(
            // <div className="Ball" style={{backgroundColor: randomColor}}>
            <div className="Ball" style={{backgroundColor: "#4873A1"}}>
                {number}
            </div>
        )
    })

    return (
        <div>
            <div className='Principal'>{bolasLI}</div>
        </div>
    );
};
