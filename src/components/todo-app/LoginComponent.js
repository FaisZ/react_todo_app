import React, { Component } from 'react';
// import './TodoApp.css';

class LoginComponent extends Component {
    constructor(){
        super();
        this.state = {
            username : 'username',
            password : ''
        };
    }
  render () {
    return (
        <>
            Username: <input type="text" name="username" value={this.state.username} onChange={this.textChange}/>
            Password: <input type="password" name="password"/>
            <button>Login</button>
        </>
    );
  }

  textChange = (val) => {
    this.setState({
        username : val.target.value
    })
  }
}

export default LoginComponent;
