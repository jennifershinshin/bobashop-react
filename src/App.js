import React from "react";
import bobaHeaderImg from "./boba-header-img.jpg";
import Button from "./Button.js";
import "./App.css";

function App() {
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
      <h2>Tea</h2>
      <div>
        <Button label="Matcha" />
        <Button label="Rose" />
        <Button label="Ceylon" />
      </div>
      <h2>Toppings</h2>
      <div>
        <Button label="Honey boba" />
        <Button label="Pudding" />
        <Button label="Lychee" />
        <Button label="Strawberries" />
      </div>
      <h2>Your boba</h2>
    </div>
  );
}

export default App;
