import React from "react";
import buttonStyle from "./Buttons.module.css";

class Button extends React.Component {
  constructor() {
    super();

    this.state = { toggleColor: false };
    this.toggleButtonColor = this.toggleButtonColor.bind(this);
  }

  toggleButtonColor() {
    this.setState({ toggleColor: !this.state.toggleColor });
    console.log(this.state.toggleColor);
  }

  render() {
    return (
      <button
        className={buttonStyle["tea-toppings"]}
        onClick={this.toggleButtonColor}
      >
        {this.props.label}
      </button>
    );
  }
}

export default Button;
