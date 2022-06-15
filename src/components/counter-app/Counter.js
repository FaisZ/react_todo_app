import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
  constructor (){
    super();
    this.state = {
      counter : 0
    }
    this.add = this.add.bind(this);
  }
  render () {
    return (
        <div className='counter'>
          <button onClick={this.add}>+1</button>
          <span className='counterCount'>{this.state.counter}</span>
        </div>
    );
  }
  add(){
    this.setState({
      counter : this.state.counter +1
    });
    console.log ('ehehe');
  }
}


export default Counter;
