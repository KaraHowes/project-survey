import React from 'react'
import ProgressBar from "./ProgressBar";

const FavouriteColour = ({colourInput, onColourInputChange, onStepChange, onStepMinusChange}) => {
    return (
      <div>
        <div className="container-bella">
          <img src="/assets/bella.jpg" alt="child who asked the question" />

          <form className="form-container">
            <label className="label" htmlFor="colourInput">
              Favourite colour?
            </label>
            <input
              className="input"
              id="colourInput"
              type="text"
              value={colourInput}
              onChange={onColourInputChange}
            />
            <button className="button" onClick={onStepChange}>
              Next Question
            </button>
            <button className="button" onClick={onStepMinusChange}>
              {" "}
              Previous Question
            </button>
          </form>
          
        </div>
        <div ClassName="progress">
            <ProgressBar bgcolor="#86E5D1" progress="45" height={50} />
          </div>
      </div>
    );

}

export default FavouriteColour