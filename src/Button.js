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
    if (this.props.customers_tea === "") {
      console.log(`customer wants ${this.props.label}`);
      this.props.updateCustomersTea(this.props.label);
    }
    else if (this.props.customers_tea === this.props.label) {
      console.log(`customer does NOT want ${this.props.label}`);
      this.props.updateCustomersTea("");
    }
    else if (this.props.customers_tea !== this.props.label) {
      console.log(`customer wants ${this.props.label} instead`);
      this.props.updateCustomersTea(this.props.label);
      //componentDidUpdate takes care of css of previous chosen tea button's
    }
    else {
      console.log(`Error in updateCustomersTeaButton() Button.js`);
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.customers_tea !== prevProps.customers_tea && this.props.label === prevProps.customers_tea) {
      this.setState({ toggleColor: !this.state.toggleColor });
    }
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
    )
  }
}

export default Button;
