/* eslint-disable max-len */
/* eslint-disable no-irregular-whitespace */
import React, { Component } from 'react';

export default class App extends React.Component {
  // your Javascript goes here
  constructor(props) {
      super(props);
      this.state = {
          balance: '',
          rate: '',
          term: '15',
          monthly: '',
      };
      this.handleBalance = this.handleBalance.bind(this);
      this.handleRate = this.handleRate.bind(this);
      this.handleTerm = this.handleTerm.bind(this);
      this.Calculate = this.Calculate.bind(this);
  }
  handleTerm(event) {
      this.setState({ term: event.target.value });
  }

  handleBalance(event) {
      this.setState({ balance: event.target.value });
  }

  handleRate(event) {
      this.setState({ rate: event.target.value });
  }

  handleSubmit(event) {
      this.setState({ payment: event.target.value });
  }

  Calculate(event) {
        event.preventDefault();
        const balance = this.state.balance;
        const interest = this.state.rate;
        const term = this.state.term;

    //     console.log(balance);
    //     console.log(interest);
    //     console.log(term);

        const rate = interest / 100 / 12;
        const totalMonths = term * 12;
        const num = rate * Math.pow(1 + rate, totalMonths);
        const den = Math.pow(1 + rate, totalMonths) - 1;
        const total = balance * (num / den);
        const monthly = total.toFixed(2);

        this.setState({ payment: `Monthly payment is $${monthly}.`,

      });
  }
    render() {
    //     console.log(this.state.balance, this.state.rate, this.state.term, this.state.payment);
        return (
      <div className='container'>
        {/* your JSX goes here */}
        <h2>Mortgage Calculator</h2>
        <h4>Loan Balance</h4>
        <input value={ this.state.balance } onChange={ this.handleBalance } className='form-control' placeholder='0' name='balance' type='number' />
        <h4>Interest Rate (%)</h4>
        <input value={ this.state.rate } onChange={ this.handleRate } className='form-control' placeholder='0' name='rate' type='number' step='0.01' />
        <h4>Loan Term (years)</h4>
        <select value={ this.state.term } onChange={ this.handleTerm } className='form-control' name='term'>
          <option value='15'>15</option>
          <option value='30'>30</option>
        </select>
        <button onClick={ this.Calculate }className='btn btn-primary' type='submit' name='submit'>Calculate</button>
        <h4>Mortgage Payment</h4>
        <h3 name='output' id='output'>{this.state.payment}</h3>
      </div>
        );
    }
}
