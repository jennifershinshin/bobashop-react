import React from "react";
import bobaHeaderImg from "./boba-header-img.jpg";
import Button from "./Button.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = { customers_tea: "", customers_toppings: ['', '', '', ''] };

    this.updateCustomersTea = this.updateCustomersTea.bind(this);
    this.updateCustomersToppings = this.updateCustomersToppings.bind(this);
    this.printCustomersOrder = this.printCustomersOrder.bind(this);
  }
  
  updateCustomersTea(tea) {
    if (this.state.customers_tea === "" || this.state.customers_tea !== tea) {
      this.setState({ customers_tea: tea });
    }
    else if (this.state.customers_tea === tea) {
      this.setState({ customers_tea: "" });
    }
    else {
      console.log(`Error in updateCustomersTea() App.js`);
    }
  }

  updateCustomersToppings(topping, index) {
    let toppings = this.state.customers_toppings.slice();

    if(this.state.customers_toppings[index] === '') {
      toppings[index] = topping;
    }
    else if(this.state.customers_toppings[index] === topping) {
      toppings[index] = '';
    }
    else {
      console.log(`Error in updateCustomersToppings in App.js. customers_toppings[index] has undefined behaviour`);
    }
    this.setState({customers_toppings: toppings});
  }

  printCustomersOrder() {
    return (
      <h4>{this.state.customers_tea}</h4>
    )
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
        <div>
          <Button
            label="Matcha"
            group="tea"
            updateCustomersTea={this.updateCustomersTea}
            customers_tea={this.state.customers_tea}
          />
          <Button
            label="Rose"
            group="tea"
            updateCustomersTea={this.updateCustomersTea}
            customers_tea={this.state.customers_tea}
          />
          <Button
            label="Ceylon"
            group="tea"
            updateCustomersTea={this.updateCustomersTea}
            customers_tea={this.state.customers_tea}
          />
        </div>
        <h2>Toppings</h2>
        <div>
          <Button
            label="Honey boba"
            group="topping"
            index={0}
            updateCustomersToppings={this.updateCustomersToppings}
            customers_toppings={this.state.customers_toppings}
          />
          <Button
            label="Pudding"
            group="topping"
            index={1}
            updateCustomersToppings={this.updateCustomersToppings}
            customers_toppings={this.state.customers_toppings}
          />
          <Button
            label="Lychee"
            group="topping"
            index={2}
            updateCustomersToppings={this.updateCustomersToppings}
            customers_toppings={this.state.customers_toppings}
          />
          <Button
            label="Strawberries"
            group="topping"
            index={3}
            updateCustomersToppings={this.updateCustomersToppings}
            customers_toppings={this.state.customers_toppings}
          />
        </div>
        <h2>Your boba</h2>
        {this.printCustomersOrder()}
      </div>
    );
  }
}

export default App;
