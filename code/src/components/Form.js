import React, { useState} from 'react'


import FirstPage from './FirstPage'
import NameQuestion from './NameQuestion'
import LocationQuestion from './LocationQuestion'
import FavouriteAnimal from './FavouriteAnimal'
import FavouriteColour from './FavouriteColour'
import AeroplaneQuestion from './AeroplaneQuestion'
import OlderQuestion from './OlderQuestion'
import SellotapeQuestion from './SellotapeQuestion'
import { Overview } from './Overview'

  export const Form = () => {
  
  //names of state properties.... const[name, function to update state property] = useState(''). Called useState because it is a function and needs to be called. 
  //('') is the default value
  const [nameInput, setNameInput] = useState ('');
  const [locationInput, setLocationInput] = useState ('')
  const [animalInput, setAnimalInput] = useState ('')
  const [colourInput, setColourInput] = useState ('')
  const [aeroplaneInput, setAeroplaneInput] = useState ('')
  const [olderInput, setOlderInput] = useState ('')
  const [sellotapeInput, setSellotapeInput] =useState ('')
  const [step, setStep] = useState (1)
  
  
  const onNameInputChange = (event) =>{
    setNameInput(event.target.value)
  }
  const onLocationInputChange = (event) =>{
    setLocationInput(event.target.value)
  }
  const onAnimalInputChange = (event) => {
    setAnimalInput(event.target.value)
  }
  const onColourInputChange = (event) => {
    setColourInput(event.target.value)
  }
  const onAeroplaneInputChange = (event) => {
    setAeroplaneInput(event.target.value)
  }
  const onOlderInputChange = (event) => {
    setOlderInput(event.target.value)
  }
  const onSellotapeInputChange = (event) => {
    setSellotapeInput(event.target.value)
  }
  const onStepChange = () => {
      setStep(step + 1)
  }
  const onStepMinusChange = () => {
    setStep(step - 1)
  }
 
  if (step === 1) {
    return (
      <div className="intro"> 
      <FirstPage 
      onStepChange={onStepChange}/>
      </div> 
    )
  }
   else if (step === 2) {
    return (
      <div className="main"> 
      <NameQuestion 
      nameInput={nameInput} 
      onNameInputChange={onNameInputChange}
      onStepChange={onStepChange}
      onStepMinusChange={onStepMinusChange}
      />
     </div> 
    )
  } else if (step === 3) {
    return (
     
        <div className="main"> 
        <LocationQuestion 
        locationInput={locationInput} 
        onLocationInputChange={onLocationInputChange}
        onStepChange={onStepChange}
        onStepMinusChange={onStepMinusChange}
        /></div> 
          
    )
    
  } else if (step === 4) {
    return ( 
   
      <div className="main"> 
      <FavouriteAnimal
      animalInput={animalInput}
      onAnimalInputChange={onAnimalInputChange}
      onStepChange={onStepChange}
      onStepMinusChange={onStepMinusChange}
      /></div>
      
     
    )
  } else if (step === 5) {
    return (
     
      <div className = "main"> 
      <FavouriteColour 
      colourInput={colourInput}
      onColourInputChange={onColourInputChange}
      onStepChange={onStepChange}
      onStepMinusChange={onStepMinusChange}
      /></div>
   
    )
  } else if (step === 6) {
    return (
     
      <div className="main"> 
      <AeroplaneQuestion 
      aeroplaneInput={aeroplaneInput}
      onAeroplaneInputChange={onAeroplaneInputChange}
      onStepChange={onStepChange}
      onStepMinusChange={onStepMinusChange}
      /></div>
     
    )
  } else if (step === 7) {
    return (
     
      <div className="main"> 
      <OlderQuestion 
      olderInput={olderInput}
      onOlderInputChange={onOlderInputChange}
      onStepChange={onStepChange}
      onStepMinusChange={onStepMinusChange}
      /></div>
  
     
    )
  } else if (step === 8) {
    return (
      
      <div className="main"> 
      <SellotapeQuestion 
      sellotapeInput={sellotapeInput}
      onSellotapeInputChange={onSellotapeInputChange}
      onStepChange={onStepChange}
      onStepMinusChange={onStepMinusChange}
      /></div>
   
    )
  } else if (step === 9) {
    return (
     
      <div className="main"> 
      <Overview
      nameInput={nameInput}
      locationInput={locationInput}
      animalInput={animalInput}
      colourInput={colourInput}
      aeroplaneInput={aeroplaneInput}
      olderInput={olderInput}
      sellotapeInput={sellotapeInput}
      /></div>
      
   
    )
  }
 
}
