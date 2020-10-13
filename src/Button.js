import React from "react";
import ReactDOM from 'react-dom';
import buttonStyle from "./Buttons.module.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggleColor: true };
    this.button = React.createRef();

    this.toggle_tea_topping = this.toggle_tea_topping.bind(this);
    this.updateCustomersTeaButton = this.updateCustomersTeaButton.bind(this);
  }

  toggle_tea_topping() {
    this.setState({ toggleColor: !this.state.toggleColor });
    this.updateCustomersTeaButton();
  }
  
  updateCustomersTeaButton() {
    if (this.props.customers_tea === "") {
      console.log(`customer wants ${this.props.label}`);
      this.props.updateCustomersTea(this.props.label);
    }
    else if (this.props.customers_tea === this.props.label) {
      console.log(`customer does NOT want ${this.props.label}`);
      this.props.updateCustomersTea("");
    }
    else if (this.props.customers_tea !== this.props.label) {
      //change css of the other button
      console.log(`customer wants ${this.props.label} instead`);
      this.props.updateCustomersTea(this.props.label);
      //var otherButton = ReactDOM.findDOMNode(Button).getElementsByClassName(`MatchaButton`);
      //if(otherButton == null) console.log(`hi`);
    }
    else {
      console.log(`Error in updateCustomersTeaButton() Button.js`);
    }
  }

  render() {
    let tea_toppings = this.state.toggleColor
      ? "tea-toppings"
      : "tea-toppings-clicked";
    
    return (
      <button
        className={buttonStyle[tea_toppings]}
        ref={this.button}
        onClick={this.toggle_tea_topping}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
