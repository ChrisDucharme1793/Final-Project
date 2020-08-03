import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import API from "../utils/API.js";
// import { authenticate, isAuthenticated } from "../utils/auth.js";
import AuthForm from "../components/AuthForm";
import AuthInputField from "../components/AuthForm/AuthInputField";
import SubmitBtn from "../components/Form/SubmitBtn";
// import HelpText from "../components/Form/HelpText";
import LinkBtn from "../components/LinkBtn";
import { register } from "../components/UserFunctons/UserFunctions"
import { withRouter } from "react-router-dom"
class SignUp extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      userName: '',
      balance: 0
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
    console.log(e.target)
  }
  onSubmit(e) {
    e.preventDefault()
    const user = {
      email: this.state.email,
      password: this.state.password,
      userName: this.state.userName,
      balance: this.state.balance
    }
    console.log(user)
    register(user).then(res => {
      console.log(res)
      this.props.history.push('/signIn')
    })
      .catch(res => {
      })
  }
  render() {
    return (
      <>
        <AuthForm title="SIGN UP">
          <AuthInputField
            name="email"
            label="Email Address:"
            type="email"
            placeholder="Email"
            onChange={this.onChange}
            value={this.state.email}
            icon="fas fa-envelope"
          />
          <AuthInputField
            name="password"
            label="Password:"
            type="password"
            placeholder="Password"
            onChange={this.onChange}
            value={this.state.password}
            icon="fas fa-lock"
          />
          <AuthInputField
            name="userName"
            label="Username:"
            type="username"
            placeholder="Username"
            onChange={this.onChange}
            value={this.state.userName}
            icon="fas fa-lock"
          />
          <SubmitBtn onSubmit={this.onSubmit}>SUBMIT</SubmitBtn>
          <LinkBtn route="/signIn">LOGIN</LinkBtn>
        </AuthForm>
      </>
    );
  }
}
export default withRouter(SignUp);