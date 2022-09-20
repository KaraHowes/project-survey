import React from "react";
import ProgressBar from "./ProgressBar";

const LocationQuestion = ({locationInput, onLocationInputChange, onStepChange, onStepMinusChange,}) => {
  
return (
    <div>
      <div className="container-bella">
        <img src="/assets/bella.jpg" alt="child who asked the question" />
        <form className="form-container">
          <label className="label" htmlFor="locationInput">
            Where do you live?
          </label>
          <input
            className="input"
            id="locationInput"
            type="text"
            value={locationInput}
            onChange={onLocationInputChange}
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
        <ProgressBar bgcolor="#FFF000" progress="30" height={50} />
      </div>
    </div>
  );
};
export default LocationQuestion;
