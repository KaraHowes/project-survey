import React from 'react'
import ProgressBar from "./ProgressBar";

const NameQuestion = ( {nameInput, onNameInputChange, onStepChange, onStepMinusChange}) => {

    return (
      <div>
<div className="container-bella">
        <img src= "/assets/bella.jpg" alt = "child who asked the question"/>
        
             <form className="form-container">
                <label className="label" htmlFor="nameInput">What is your name?</label>
                  <input 
                    className="input"
                    id="nameInput"
                    type="text" 
                    value={nameInput} 
                    onChange={onNameInputChange}
                    />
                
                <button className="button" onClick = {onStepChange}>Next Question </button>
                <button className="button" onClick = {onStepMinusChange}> Previous Question</button>
            </form>
              
      
       </div>
       <div ClassName="progress">
        <ProgressBar bgcolor="#37E6EB" progress="15" height={50} />
      </div>
      </div>
       
        
    )
}
export default NameQuestion