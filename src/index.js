import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
const App = function () {
  const previousButtonHandler=function(){
    alert('previous button clicked')
  }
  const nextButtonHandler=function(){
    alert('next button clicked')
  }
  return (
    <div>
      <button className="close">&times;</button>(
      <div className="steps">
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <p className="message">Step 1: learn react</p>
        <div className="buttons">
          <button onClick={previousButtonHandler} style={{ backgroundColor: "#7950f2", color: "#fff" }}>
            Previous
          </button>
          <button onClick={nextButtonHandler} style={{ backgroundColor: "#7950f2", color: "#fff" }}>
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
