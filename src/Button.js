import React from "react";
import buttonStyle from "./Buttons.module.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggleColor: true };

    this.toggle_tea_topping = this.toggle_tea_topping.bind(this);
    this.updateCustomersTeaButton = this.updateCustomersTeaButton.bind(this);
  }

  toggle_tea_topping() {
    this.setState({ toggleColor: !this.state.toggleColor });
    this.updateCustomersTeaButton();
  }

  updateCustomersTeaButton() {
    if (this.props.customers_tea === undefined) {
      console.log("customer wants " + this.props.label);
      this.props.updateCustomersTea(this.props.label);
    }
    else if (this.props.customers_tea === this.props.label) {
      console.log("customer does not want + " + this.props.label);
      this.props.updateCustomersTea(undefined);
    }
    else {
      //change css of the other button
      //this.props.updateCustomersTea(this.props.label)
    }
    console.log("child: " + this.props.customers_tea + "\n label: " + this.props.label);
  }

  render() {
    let tea_toppings = this.state.toggleColor
      ? "tea-toppings"
      : "tea-toppings-clicked";

    return (
      <button
        className={buttonStyle[tea_toppings]}
        onClick={this.toggle_tea_topping}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
