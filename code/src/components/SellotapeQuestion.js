import React from 'react'
import ProgressBar from './ProgressBar'

const SellotapeQuestion = ({sellotapeInput, onSellotapeInputChange, onStepChange, onStepMinusChange}) => {
    return (
       <div>
         <div className="container-bubbles">
         <img src= "/assets/bubbles.jpg" alt = "child who asked the question"/>
       
             <form className="form-container">
                <label className="label" htmlFor = "sellotapeInput">How do they make Sellotape so sticky?</label>
                  <textarea 
                    className="textarea"
                    id="sellotapeInput"
                    value={sellotapeInput} 
                    onChange={onSellotapeInputChange}
                    rows="5" placeholder="Message"
                    >
                    </textarea>
                
                <button className="button" onClick = {onStepChange}>To the Overview</button>
                <button className="button" onClick = {onStepMinusChange}> Previous Question</button>
            </form>
              
  
        </div>
        <div ClassName="progress"><ProgressBar
        bgcolor="#37E6EB" 
        progress='100'  
        height={50}/></div>
        
       </div>
    )
}
export default SellotapeQuestion