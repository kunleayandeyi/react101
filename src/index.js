import React from "react";
import ReactDOM from "react-dom";
const App = function () {
  return (
    <div>
      <h1>Hello react world welcome on board</h1>
      <p>hello Abuja</p>
    </div>
  );
};
const MyFirstComponent = function () {
  return <h1>This is my first component created</h1>;
};
const NavigationBar = function () {
  return (
    <nav>
      <Navlink />
    </nav>
  );
};
const Navlink = function () {
  return <a>Home</a>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <MyFirstComponent />
    <App />
    <App />
    <App />
    <NavigationBar />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
