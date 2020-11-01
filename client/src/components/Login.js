import React, { Component } from "react";
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom';

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(value => {
    value.length > 0 && (valid = false);
  })

  // validate the form being filled out
  Object.values(rest).forEach(value => {
    value === null && (valid = false);
  })

  return valid;
}

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null,
      formErrors: {
        username: '',
        password: ''
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    if (formValid(this.state)) {
      console.log(`
                --Submitting--
                Username: ${this.state.username}
                Password: ${this.state.password}
            `);
      axios.post("api/users/login",
        {
          username: this.state.username,
          password: this.state.password
        }
      ).then(res => {
        console.log(res)

      })
    }
    else {
      console.error('FORM INVAILID - DISPLAY ERROR')
    }
  }

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    // console.log('Name: ', name);
    // console.log('Value: ', value);

    switch (name) {
      case 'username':
        formErrors.username =
          value.length < 4 ? 'Must input at least 4 characters.' : '';
        break;
      case 'password':
        formErrors.password =
          value.length < 6 ? 'Must input at least 6 characters.' : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [name]: value }, () => { })
  }

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            {/* Username */}
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                className={formErrors.username.length > 0 ? 'error' : null}
                placeholder="Username"
                type="text"
                name='username'
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.username.length > 0 && (
                <span className='errorMessage'>{formErrors.username}</span>
              )}
            </div>
            {/* Password */}
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? 'error' : null}
                placeholder="Password"
                type="password"
                name='password'
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className='errorMessage'>{formErrors.password}</span>
              )}
            </div>
            <div className='loginAccount'>
              <button type='submit'>Login</button>
              <br />
              <Link type='button' href='/' to='/'>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
