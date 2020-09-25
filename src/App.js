import React from "react";
import bobaHeaderImg from "./boba-header-img.jpg";
import buttonStyle from "./Buttons.module.css";
import "./App.css";

function App() {
  const toggleButtonColor = () => {
    console.log("hello");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Momo Bubble Cafe</h1>
        <div className="header-buttons">
          <button className="make-boba-button">Make boba!</button>
          <button className="about-button">About</button>
          <button className="contact-button">Contact</button>
        </div>
        <img src={bobaHeaderImg} className="App-logo" alt="logo" />
      </header>
      <h3>Tea</h3>
      <div className={buttonStyle["tea-toppings"]}>
        <button onClick={toggleButtonColor}>Matcha</button>
        <button>Rose</button>
        <button>Ceylon</button>
      </div>
      <h3>Toppings</h3>
      <div className={buttonStyle}>
        <button>Honey boba</button>
        <button>Pudding</button>
        <button>Lychee</button>
        <button>Strawberries</button>
      </div>
      <h3>Your boba</h3>
    </div>
  );
}

export default App;
