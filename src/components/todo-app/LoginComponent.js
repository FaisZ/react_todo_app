import React, { Component } from 'react';
// import './TodoApp.css';

class LoginComponent extends Component {
    constructor(){
        super();
        this.state = {
            username : 'username',
            password : '',
            loginSuccess : false
        };
    }
  render () {
    return (
        <>
            <this.ShowInvalidCredentials loginSuccess={this.state.loginSuccess} />
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.loginClicked}>Login</button>
        </>
    );
  }

  ShowInvalidCredentials(props){
    if(props.loginSuccess)
      return <div>Login Success</div>
    else
      return <div>Login Failed</div>
  }

  loginClicked = (val) => {
    if(this.state.username==='user' && this.state.password ==='pass'){
      this.setState({
        //[] symbol make a dynamic variable name into a static value
        loginSuccess : true
      })
    }
    else{
      this.setState({
        //[] symbol make a dynamic variable name into a static value
        loginSuccess : false
      })
    }
  }

  handleChange = (val) => {
    this.setState({
        //[] symbol make a dynamic variable name into a static value
        [val.target.name] : val.target.value
    })
  }

  handleUsername = (val) => {
    this.setState({
        username : val.target.value
    })
  }

  handlePassword = (val) => {
    this.setState({
        password : val.target.value
    })
  }
}

export default LoginComponent;
