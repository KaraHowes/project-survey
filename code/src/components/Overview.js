import React from 'react'
import AnimalChoices from './AnimalChoices'

import './overview.css'
import useWindowSize from 'react-use-window-size'
import Confetti from 'react-confetti'


export const Overview = ({ nameInput, locationInput, animalInput, colourInput, aeroplaneInput, olderInput, sellotapeInput }) => {
  const { width } = useWindowSize()
  return (

    <section className="overview-all">
      <Confetti
        width={width}
       
        colors={['#feaeb9', '#a49262', '#86e5d1','#c3a2db']}
        gravity={0.08}
        numberOfPieces={350}
      />
    
      <div className="animal">
        <AnimalChoices
          animalInput={animalInput} />
      </div>
      <div className="thank-you">
        <h1> Thank you {nameInput}!</h1>
        <p> We hope you love living in <span>{locationInput}</span> and think your favourite colour of <span>{colourInput}</span> is an awesome choice.
  We think you would make an amazing <span>{olderInput}</span> and had no idea that <span>{sellotapeInput}</span> was how they made sellotape. We hope you like
  this image of <span>{animalInput}</span>, your favourite animal.
          </p>

      </div>

  
    </section>
  )
}

