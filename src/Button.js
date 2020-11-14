import React, { useState, useEffect } from 'react';
import buttonStyle from './Buttons.module.css';

function Button(props) {
  const [toggle_Color, setToggleColor] = useState(true);

  const toggleTeaTopping = () => {
    setToggleColor(!toggle_Color);

    if(props.group === 'tea') {
      props.updateCustomersTea(props.label);
    }
    else if(props.group === 'topping') {
      props.updateCustomersToppings(props.label, props.index);
    }
    else {
      console.log(`Error in toggleTeaTopping in Button.js. props.group is not set`);
    }
  }

  useEffect(() => {
      if(props.customers_tea !== ''
      && props.customers_tea !== props.prev_customers_tea
      && props.label === props.prev_customers_tea) {
        setToggleColor(!toggle_Color);
      }
    }, [props.customers_tea]);

  let tea_toppings = toggle_Color
    ? 'tea-toppings'
    : 'tea-toppings-clicked';
  return (
    <button
      className={buttonStyle[tea_toppings]}
      onClick={toggleTeaTopping}
    >
      {props.label}
    </button>
  )
}

export default Button;