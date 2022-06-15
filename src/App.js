import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoApp from './components/todo-app/TodoApp';
// import Counter from './components/counter-app/CounterButton';

class App extends Component {
  render () {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a> */}
          {/* <Counter/> */}
        {/* </header> */}
        <div>
          <TodoApp/>
        </div>
      </div>
    );
  }
}

export default App;
