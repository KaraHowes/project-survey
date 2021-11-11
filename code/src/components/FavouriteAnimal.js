import React from 'react'

const FavouriteAnimal = ({animalInput, onAnimalInputChange, onStepChange, onStepMinusChange}) => {
    return (
        <div className="container-bubbles">
           <img src= "/assets/bubbles.jpg" alt="child who asked the question"/>
            <fieldset className="fieldset">
            <legend className="legend" >Questions by Bella + Bubbles</legend>

            <form className="form-container">
            <label className="label"htmlFor="animalInput">Which of these animals do you like the best?</label>
            <select 
                className="input"
                id="animalInput"
                value={animalInput} 
                onChange={onAnimalInputChange}>
                    <option disabled value=''>Select an option:</option>
                    <option value="Dolphin" selected>Dolphin</option>
                    <option value="Tiger" selected>Tiger</option>
                    <option value="Koala" selected>Koala</option>
                    <option value="Unicorn" selected>Unicorn</option>
                    <option value="Shark" selected>Shark</option>
                    <option value="Penguin" selected>Penguin</option>
                </select>
                
            <button disabled={animalInput === ''} className="button" onClick = {onStepChange}>Next Question</button>
            <button className="button" onClick = {onStepMinusChange}> Previous Question</button>
            </form>
        </fieldset>
        </div>
        
        
    
    )
}

export default FavouriteAnimal