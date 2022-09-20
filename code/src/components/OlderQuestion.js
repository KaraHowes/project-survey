import React from "react";
import ProgressBar from "./ProgressBar";

const OlderQuestion = ({
  olderInput,
  onOlderInputChange,
  onStepChange,
  onStepMinusChange,
}) => {
  return (
    <div>
      <div className="container-bella">
        <img src="/assets/bella.jpg" alt="child who asked the question" />

        <form className="form-container">
          <label className="label" htmlFor="olderInput">
            What do you want to be when you grow up?
          </label>
          <input
            className="input"
            id="olderInput"
            type="text"
            value={olderInput}
            onChange={onOlderInputChange}
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
        <ProgressBar bgcolor="#FFF000" progress="90" height={50} />
      </div>
    </div>
  );
};

export default OlderQuestion;
