import React from "react";
import ProgressBar from "./ProgressBar";

const FavouriteAnimal = ({animalInput, onAnimalInputChange, onStepChange, onStepMinusChange}) => {
  return (
    <div>
      <div className="container-bubbles">
        <img src="/assets/bubbles.jpg" alt="child who asked the question" />
        <form className="form-container">
          <label className="label" htmlFor="animalInput">
            Favourite animal?
          </label>
          <select
            className="input"
            id="animalInput"
            value={animalInput}
            onChange={onAnimalInputChange}
          >
            <option disabled value="">
              Select an option:
            </option>
            <option value="Dolphin" selected>
              Dolphin
            </option>
            <option value="Tiger" selected>
              Tiger
            </option>
            <option value="Koala" selected>
              Koala
            </option>
            <option value="Unicorn" selected>
              Unicorn
            </option>
            <option value="Shark" selected>
              Shark
            </option>
            <option value="Penguin" selected>
              Penguin
            </option>
          </select>

          <button
            disabled={animalInput === ""}
            className="button"
            onClick={onStepChange}
          >
            Next Question
          </button>
          <button className="button" onClick={onStepMinusChange}>
            {" "}
            Previous Question
          </button>
        </form>
      </div>
      <div ClassName="progress">
        <ProgressBar bgcolor="#F675A8" progress="45" height={50} />
      </div>
    </div>
  );
};

export default FavouriteAnimal;
