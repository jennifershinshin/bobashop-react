import React, { useState, useEffect, useRef } from 'react';
import bobaHeaderImg from './boba-header-img.jpg';
import Button from './Button.js';
import './App.css';

function App() {
  const [customers_tea, setCustomersTea] = useState('');
  const [customers_toppings, setCustomersToppings] = useState(['', '', '', '']);
  const prev_customers_tea = usePrevious(customers_tea);
  
  const updateCustomersTea = (tea) => {
    if (customers_tea === '' || customers_tea !== tea) {
      setCustomersTea(tea);
    }
    else if (customers_tea === tea) {
      setCustomersTea('');
    }
    else {
      console.log(`Error in updateCustomersTea() App.js`);
    }
  }

  const updateCustomersToppings = (topping, index) => {
    let toppings = customers_toppings.slice();

    if(customers_toppings[index] === '') {
      toppings[index] = topping;
    }
    else if(customers_toppings[index] === topping) {
      toppings[index] = '';
    }
    else {
      console.log(`Error in updateCustomersToppings in App.js. customers_toppings[index] has undefined behaviour`);
    }
    setCustomersToppings(toppings);
  }

  const printCustomersOrder = () => {
    let boba_order = '';
    let first_topping = false;

    if(customers_tea !== '') {
      boba_order += customers_tea;

      customers_toppings.map((topping, index) => {
        if(topping !== '') {
          if(!first_topping) {
            boba_order += ' with ';
            first_topping = true;
          }
          boba_order += `${topping}, `;
        }
        return customers_toppings;
      });

      if(first_topping) { boba_order = boba_order.substring(0, boba_order.length - 2); }
    }
    
    return (
      <h4 className="customers-order">{boba_order}</h4>
    )
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Momo Bubble Cafe</h1>
        <img src={bobaHeaderImg} className='App-logo' alt='logo' />
      </header>
      <h1 className='Subheaders'>Customize your boba!</h1>
      <h2 className='Subheaders'>Tea</h2>
      <div>
        <Button
          label='Matcha'
          group='tea'
          updateCustomersTea={updateCustomersTea}
          customers_tea={customers_tea}
          prev_customers_tea={prev_customers_tea}
        />
        <Button
          label='Rose'
          group='tea'
          updateCustomersTea={updateCustomersTea}
          customers_tea={customers_tea}
          prev_customers_tea={prev_customers_tea}
        />
        <Button
          label='Ceylon'
          group='tea'
          updateCustomersTea={updateCustomersTea}
          customers_tea={customers_tea}
          prev_customers_tea={prev_customers_tea}
        />
      </div>
      <h2 className='Subheaders'>Toppings</h2>
      <div>
        <Button
          label='Honey boba'
          group='topping'
          index={0}
          updateCustomersToppings={updateCustomersToppings}
          customers_toppings={customers_toppings}
        />
        <Button
          label='Pudding'
          group='topping'
          index={1}
          updateCustomersToppings={updateCustomersToppings}
          customers_toppings={customers_toppings}
        />
        <Button
          label='Lychee'
          group='topping'
          index={2}
          updateCustomersToppings={updateCustomersToppings}
          customers_toppings={customers_toppings}
        />
        <Button
          label='Strawberries'
          group='topping'
          index={3}
          updateCustomersToppings={updateCustomersToppings}
          customers_toppings={customers_toppings}
        />
      </div>
      <h2 className='Subheaders'>Your boba</h2>
      {printCustomersOrder()}
    </div>
  );
}

function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });
  
  return ref.current;
}

export default App;
