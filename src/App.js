import React from "react";
import bobaHeaderImg from "./boba-header-img.jpg";
import Button from "./Button.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = { customers_tea: "", customers_tea_toppings: [] };

    this.addCustomersToppings = this.addCustomersToppings.bind(this);
    this.updateCustomersTea = this.updateCustomersTea.bind(this);
  }

  addCustomersToppings(teaTopping) {
    this.setState(
      {
        customers_tea_toppings: this.state.customers_tea_toppings.concat(
          teaTopping
        ),
      },
      function () {
        console.log(this.state.customers_tea_toppings[0]);
        console.log(this.state.customers_tea_toppings[1]);
        console.log(this.state.customers_tea_toppings.length);
      }
    );
  }

  updateCustomersTea(tea) {
    this.setState({ customers_tea: tea });
  }

  render() {
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
        <div className="tea-buttons">
          <Button
            label="Matcha"
            updateCustomersTea={this.updateCustomersTea}
            customers_tea={this.state.customers_tea}
          />
          <Button
            label="Rose"
            updateCustomersTea={this.updateCustomersTea}
            customers_tea={this.state.customers_tea}
          />
          <Button
            label="Ceylon"
            updateCustomersTea={this.updateCustomersTea}
            customers_tea={this.state.customers_tea}
          />
        </div>
        <h2>Toppings</h2>
        <div className="toppings-buttons">
          <Button label="Honey boba" />
          <Button label="Pudding" />
          <Button label="Lychee" />
          <Button label="Strawberries" />
        </div>
        <h2>Your boba</h2>
      </div>
    );
  }
}

export default App;
