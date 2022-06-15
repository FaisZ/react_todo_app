import React, { Component } from 'react';
import LoginComponent from './LoginComponent';
import './TodoApp.css';

class TodoApp extends Component {
  render () {
    return (
      <div className="TodoApp">
          <LoginComponent/>
      </div>
    );
  }
}

export default TodoApp;
