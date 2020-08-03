import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
// import API from "../utils/API.js";
// import { authenticate, isAuthenticated } from "../utils/auth";
import AuthForm from "../components/AuthForm";
import AuthInputField from "../components/AuthForm/AuthInputField";
import SubmitBtn from "../components/Form/SubmitBtn";
// import HelpText from "../components/Form/HelpText";
import LinkBtn from "../components/LinkBtn";
import { login } from "../components/UserFunctons/UserFunctions.js";
import { withRouter } from "react-router-dom"
class SignIn extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      userName: ''
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
    }
    login(user).then(res => {
      console.log(res)
      if (res) {
        window.localStorage.setItem("token", res.data)
        this.props.history.push('/profile')
      }
    })
      .catch(console.log)
  }
  render() {
    return (
      <>
        <AuthForm title="SIGN IN">
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
          <SubmitBtn onSubmit={this.onSubmit}>SUBMIT</SubmitBtn>
          <LinkBtn route="/signup">CREATE AN ACCOUNT</LinkBtn>
        </AuthForm>
        {/* {redirectUser()} */}
      </>
    );
  }
}
export default withRouter(SignIn);