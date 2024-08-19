import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const App = function () {
  const [step, setStep] = useState(1); //step is just the state variable,setStep is a setter function
  const previousButtonHandler = function () {
    alert("previous button clicked");
  };
  const nextButtonHandler = function () {
    setStep(step+1)
  };
  return (
    <div>
      <button className="close">&times;</button>(
      <div className="steps">
        <div className="numbers">
          <div className="active">1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <p className="message">
          Step {step}: {messages[1]}
        </p>
        <div className="buttons">
          <button
            onClick={previousButtonHandler}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Previous
          </button>
          <button
            onClick={nextButtonHandler}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Next
          </button>
        </div>
      </div>
      )
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
