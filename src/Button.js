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
    if (this.props.customers_tea === this.props.label) {
      console.log("heyyy *dab*");
    }
    this.props.updateCustomersTea(this.props.label);
    console.log(`${this.props.customers_tea} ${this.props.label}`);
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
