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
  const [isOpen, setisOpen] = useState(true);
  const [step, setStep] = useState(1); //step is just the state variable,setStep is a setter function
  const [closeButtonIcon, setCloseButtonIcon] = useState("\u00D7");
  const arr = useState("ade is a man");
  console.log(arr);
  const closeButtonHandler = function () {
    setisOpen(!isOpen);
    setCloseButtonIcon(isOpen ? "=" : "\u00D7");
  };
  const previousButtonHandler = function () {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  const nextButtonHandler = function () {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  return (
    <div>
      <button onClick={closeButtonHandler} className="close">
        {closeButtonIcon}
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
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
      ) : (
        ""
      )}
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
