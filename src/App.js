import React from 'react';
import bobaHeaderImg from './boba-header-img.jpg';
import Button from './Button.js';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = { customers_tea: '', customers_toppings: ['', '', '', ''] };

    this.updateCustomersTea = this.updateCustomersTea.bind(this);
    this.updateCustomersToppings = this.updateCustomersToppings.bind(this);
    this.printCustomersOrder = this.printCustomersOrder.bind(this);
  }
  
  updateCustomersTea(tea) {
    if (this.state.customers_tea === '' || this.state.customers_tea !== tea) {
      this.setState({ customers_tea: tea });
    }
    else if (this.state.customers_tea === tea) {
      this.setState({ customers_tea: '' });
    }
    else {
      console.log(`Error in updateCustomersTea() App.js`);
    }
  }

  updateCustomersToppings(topping, index) {
    let toppings = this.state.customers_toppings.slice();

    if(this.state.customers_toppings[index] === '') {
      toppings[index] = topping;
    }
    else if(this.state.customers_toppings[index] === topping) {
      toppings[index] = '';
    }
    else {
      console.log(`Error in updateCustomersToppings in App.js. customers_toppings[index] has undefined behaviour`);
    }
    this.setState({customers_toppings: toppings});
  }

  printCustomersOrder() {
    let boba_order = '';
    let first_topping = false;

    if(this.state.customers_tea !== '') {
      boba_order += this.state.customers_tea;

      this.state.customers_toppings.map((topping, index) => {
        if(topping !== '') {
          if(!first_topping) {
            boba_order += ' with ';
            first_topping = true;
          }
          boba_order += `${topping}, `;
        }
        return this.state.customers_toppings;
      });

      if(first_topping) { boba_order = boba_order.substring(0, boba_order.length - 2); }
    }
    
    return (
      <h4 className="customers-order">{boba_order}</h4>
    )
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Momo Bubble Cafe</h1>
          <div>
            <button className='header-buttons'>About</button>
            <button className='header-buttons'>Contact</button>
          </div>
          <img src={bobaHeaderImg} className='App-logo' alt='logo' />
        </header>
        <h2 className='Subheaders'>Tea</h2>
        <div>
          <Button
            label='Matcha'
            group='tea'
            updateCustomersTea={this.updateCustomersTea}
            customers_tea={this.state.customers_tea}
          />
          <Button
            label='Rose'
            group='tea'
            updateCustomersTea={this.updateCustomersTea}
            customers_tea={this.state.customers_tea}
          />
          <Button
            label='Ceylon'
            group='tea'
            updateCustomersTea={this.updateCustomersTea}
            customers_tea={this.state.customers_tea}
          />
        </div>
        <h2 className='Subheaders'>Toppings</h2>
        <div>
          <Button
            label='Honey boba'
            group='topping'
            index={0}
            updateCustomersToppings={this.updateCustomersToppings}
            customers_toppings={this.state.customers_toppings}
          />
          <Button
            label='Pudding'
            group='topping'
            index={1}
            updateCustomersToppings={this.updateCustomersToppings}
            customers_toppings={this.state.customers_toppings}
          />
          <Button
            label='Lychee'
            group='topping'
            index={2}
            updateCustomersToppings={this.updateCustomersToppings}
            customers_toppings={this.state.customers_toppings}
          />
          <Button
            label='Strawberries'
            group='topping'
            index={3}
            updateCustomersToppings={this.updateCustomersToppings}
            customers_toppings={this.state.customers_toppings}
          />
        </div>
        <h2 className='Subheaders'>Your boba</h2>
        {this.printCustomersOrder()}
      </div>
    );
  }
}

export default App;
