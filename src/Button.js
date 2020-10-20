import React from "react";
import buttonStyle from "./Buttons.module.css";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggleColor: true };

    this.toggleTeaTopping = this.toggleTeaTopping.bind(this);
  }

  toggleTeaTopping() {
    this.setState({ toggleColor: !this.state.toggleColor });
    this.props.updateCustomersTea(this.props.label);
  }

  componentDidUpdate(prevProps) {
    if(this.props.customers_tea !== ""
      && this.props.customers_tea !== prevProps.customers_tea
      && this.props.label === prevProps.customers_tea) {
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
        onClick={this.toggleTeaTopping}
      >
        {this.props.label}
      </button>
    )
  }
}

export default Button;
