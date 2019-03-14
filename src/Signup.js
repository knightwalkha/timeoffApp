import React, { Component } from 'react';
import './App.css';
import Header from "./Header";

const emailRegex = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

const formValid = ({formErrors, ...rest}) => {
  let valid = true;

  // validate form errors being empty
  Object.value(formErrors).forEach(val => {val.length > 0 && (valid = false);});

  // validate the form was filled out
  Object.values(rest).forEach(val => {val === null && (valid = false);});

  return valid;
}

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
        companyName: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        formErrors: {
        companyName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        country: "",
        timeZone: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if(formValid(this.state)) {
      console.log(`
      --SUBMITTING--
      Company Name: ${this.state.companyName}
      First Name: ${this.state.firstName}
      Last Name: ${this.state.lastName}
      Email: ${this.state.email}
      Password: ${this.state.password}
      Confirm Password: ${this.state.confirmPassword}
      Country: ${this.state.country}
      Time Zone: ${this.state.timeZone}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE")
    }
  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;

    switch (name) {
      case 'email':
        formErrors.email = emailRegex.test(value) && value.length > 0 ? "" : "invalid email address";
        break;
      case 'password':
        formErrors.pasword = value.length < 3 && value.length > 0 ? "minimum 6 characters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors} = this.state;

    return(
        <div>
            <Header />
        <div className="loginBox">
        <h2><strong>New Company</strong></h2>
        <h3>Register new company account and supervisor user</h3>
        <form>
            <p>Company Name</p>
            <input type="text" className={formErrors.companyName.length > 0 ? "error" : null} placeholder="Enter Company Name" name="CompanyName" noValidate onChange={this.handleChange} />
            {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
            <p>First Name</p>
            <input type="text" className={formErrors.firstName.length > 0 ? "error" : null} placeholder="Enter First Name" name="firstName" noValidate onChange={this.handleChange} />
            {formErrors.firstName.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
            )}
          <p>Last Name</p>
          <input type="text" className={formErrors.lastName.length > 0 ? "error" : null} placeholder="Enter Last Name" name="lastName" noValidate onChange={this.handleChange} />
          {formErrors.lastName.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
          )}
          <p>Email Address</p>
          <input type="text" className={formErrors.email.length > 0 ? "error" : null} placeholder="Enter Email Here" name="email" noValidate onChange={this.handleChange} />
          {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
          )}
          <p>Password</p>
          <input type="password" className={formErrors.password.length > 0 ? "error" : null} placeholder="Enter Password Here" name="password" noValidate onChange={this.handleChange} />
          {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
          )}
          <p>Confirm Password</p>
          <input type="password" className={formErrors.confirmPassword.length > 0 ? "error" : null} placeholder="Re-enter Password Here" name="confirmPassword" noValidate onChange={this.handleChange} />
          {formErrors.email.length > 0 && (
              <span className="errorMessage">{formErrors.email}</span>
          )}

          <input type="submit" name="" value="Create" />
      </form>
  </div>
  </div>
    );
  }
}

export default Signup;
