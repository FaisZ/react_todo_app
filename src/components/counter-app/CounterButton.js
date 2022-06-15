import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CounterButton.css';

class Counter extends Component {
  constructor (){
    super();
    this.state = {
      masterCount : 0
    }
  }
  render () {
    return (
      <div className="counter">
          <CounterButton  add={this.add} decrement={this.decrement} masterCount={this.state.masterCount}/>
          <CounterButton by={5} add={this.add} decrement={this.decrement} masterCount={this.state.masterCount}/>
          <CounterButton by={10}  add={this.add} decrement={this.decrement} masterCount={this.state.masterCount}/>
          <span className='counterCount'>{this.state.masterCount}</span>
          <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
  add = (by) => {
    this.setState({
      masterCount : this.state.masterCount + by
    });
  }
  decrement = (by) => {
    this.setState({
      masterCount : this.state.masterCount - by
    });
  }
  reset = (by) => {
    this.setState({
      masterCount : 0
    });
  }
}


class CounterButton extends Component {
  constructor (){
    super();
    this.state = {
      counter : 0
    }
    // this.add = this.add.bind(this);
  }
  render () {
    return (
        <div className='counterButton'>
          <button onClick={() => this.props.add(this.props.by)}>+{this.props.by}</button>
          <button onClick={() => this.props.decrement(this.props.by)}>-{this.props.by}</button>
          {/* <button onClick={this.add}>+{this.props.by}</button>
          <button onClick={this.dec}>-{this.props.by}</button> */}
          <span className='counterCount'>{this.state.counter}</span>
          {/* <span className='counterCount'>{this.props.masterCount}</span> */}
        </div>
    );
  }
  add = () => {
    this.setState({
      counter : this.state.counter + this.props.by
    });
    this.props.add(this.props.by)
  }
  dec = () => {
    this.setState({
      counter : this.state.counter - this.props.by
    });
    this.props.decrement(this.props.by)
  }
}

CounterButton.defaultProps = { 
  by : 2
}
CounterButton.propTypes = {
  by : PropTypes.number
}
export default Counter;
