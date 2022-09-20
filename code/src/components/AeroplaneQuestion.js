import React from 'react'
import ProgressBar from './ProgressBar'
import './aero-radio.css'

const AeroplaneQuestion = ({onAeroplaneInputChange, onStepChange, onStepMinusChange}) => { 

    return(
       <div>
           <div className="container-bubbles">
           <img src="/assets/bubbles.jpg" alt = "child who asked the question"/>
            <form className="form-container">
              <div className="radioColumn">
                <p>Can you make a paper aeroplane?</p>
                <div className="radioRow"> 
                    <label className="radiobutton-label"htmlFor="aeroplaneInput">Yes
                        <input 
                            id="aeroplaneInput"
                            type="radio" 
                            value="Yes"
                            onChange={onAeroplaneInputChange}
                            className="radio"/>
                            <span className="custom-radio"></span>
                    </label>

                    <label className="radiobutton-label" htmlFor="aeroplaneInput">No
                        <input 
                            id="aeroplaneInput"
                            type="radio" 
                            value="No"
                            onChange={onAeroplaneInputChange}
                            className="radio"/>
                        <span className="custom-radio"></span>
                    </label>
                </div>  
               </div>
             
            <button className="button" onClick = {onStepChange}>Next Question </button>
            <button className="button" onClick = {onStepMinusChange}> Previous Question</button>
        </form>
       
       </div>
       <div ClassName="progress"><ProgressBar
       bgcolor="#37E6EB" 
       progress='75'  
       height={50}/></div>
       </div>
    )
}
export default AeroplaneQuestion