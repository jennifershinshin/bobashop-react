import React from "react";
import buttonStyle from "./Buttons.module.css";

class Button extends React.Component {
  render() {
    return (
      <button
        className={buttonStyle["tea-toppings"]}
        onClick={toggleButtonColor}
      >
        {this.props.label}
      </button>
    );
  }
}

const toggleButtonColor = () => {
  console.log("hello");
};

export default Button;
