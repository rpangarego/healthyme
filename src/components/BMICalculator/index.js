import React, { useState } from "react";
import Breadcrumb from "../partials/Breadcrumb";
import "./index.css";

const BMICalculator = () => {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [BMI, setBMI] = useState(0);
  const [weightStatus, setWeightStatus] = useState("");

  const calculateBMI = () => {
    setBMI((weight / ((height / 100) * 2)).toFixed(2));

    if (BMI < 18.5) {
      setWeightStatus("Underweight");
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      setWeightStatus("Normal weight");
    } else if (BMI >= 25 && BMI <= 29.9) {
      setWeightStatus("Overweight");
    } else if (BMI >= 30 && BMI <= 34.9) {
      setWeightStatus("Obesity Class I");
    } else if (BMI >= 35 && BMI <= 39.9) {
      setWeightStatus("Obesity Class II");
    } else if (BMI >= 40) {
      setWeightStatus("Obesity Class III");
    }
  };

  return (
    <>
      <Breadcrumb goBackText="Home" backTo="/" />
      <div className="bmi-calculator">
        <h1>BMI Calculator</h1>

        <div className="calculator-input">
          <input
            type="text"
            className="form-input"
            placeholder="Height (cm)"
            min="0"
            max="250"
            value={height}
            required
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="text"
            className="form-input"
            placeholder="Weight (kg)"
            min="1"
            max="500"
            value={weight}
            required
            onChange={(e) => setWeight(e.target.value)}
          />

          <button
            type="submit"
            className="exercise-button"
            onClick={calculateBMI}
          >
            Calculate
          </button>
        </div>

        <div className="calculator-results">
          {weightStatus ? (
            <>
              <h3>Result:</h3>
              <p>
                Your Body Mass Index (BMI) is <strong>{BMI}</strong>
              </p>
              <p>
                This is considered <strong>{weightStatus}</strong>
              </p>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default BMICalculator;
