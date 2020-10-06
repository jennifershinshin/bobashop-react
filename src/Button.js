import React from "react";
import buttonStyle from "./Buttons.module.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggleColor: true };

    this.toggle_tea_topping = this.toggle_tea_topping.bind(this);
  }

  toggle_tea_topping() {
    this.setState({ toggleColor: !this.state.toggleColor });
    this.props.addCustomersTeaToppings(this.props.label);
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
