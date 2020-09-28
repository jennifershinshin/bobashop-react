import React from "react";
import buttonStyle from "./Buttons.module.css";

class Button extends React.Component {
  constructor() {
    super();

    this.state = { toggleColor: true };
    this.toggleButtonColor = this.toggleButtonColor.bind(this);
  }

  toggleButtonColor() {
    this.setState({ toggleColor: !this.state.toggleColor });
  }

  render() {
    let tea_toppings = this.state.toggleColor
      ? "tea_toppings"
      : "tea_toppings_clicked";

    return (
      <button
        className={buttonStyle[tea_toppings]}
        onClick={this.toggleButtonColor}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
