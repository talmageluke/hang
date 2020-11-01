import React, { Component } from 'react';
import '../App.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

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

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            username: null,
            email: null,
            password: null,
            formErrors: {
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: ''
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        if (formValid(this.state)) {
            axios.post("api/users/register",
                {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    username: this.state.username,
                    email: this.state.email,
                    password: this.state.password
                }
            ).then(res => {

                console.log(res)
            })
            console.log(`
                --Submitting--
                First Name: ${this.state.firstName}
                Last Name: ${this.state.lastName}
                Username: ${this.state.username}
                Email: ${this.state.email}
                Password: ${this.state.password}
            `);
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
            case 'firstName':
                formErrors.firstName =
                    value.length < 2 ? 'Must input at least 2 characters.' : '';
                break;
            case 'lastName':
                formErrors.lastName =
                    value.length < 2 ? 'Must input at least 2 characters.' : '';
                break;
            case 'username':
                formErrors.username =
                    value.length < 4 ? 'Must input at least 4 characters.' : '';
                break;
            case 'email':
                formErrors.email =
                    emailRegex.test(value) ? '' : 'Invalid Email Address';
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
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h1>Create Account</h1>
                    <form onSubmit={this.handleSubmit} noValidate>
                        {/* First Name */}
                        <div className='firstName'>
                            <label htmlFor='firstName'>First Name</label>
                            <input
                                className={formErrors.firstName.length > 0 ? 'error' : null}
                                placeholder='First Name'
                                type='text'
                                name='firstName'
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.firstName.length > 0 && (
                                <span className='errorMessage'>{formErrors.firstName}</span>
                            )}
                        </div>
                        {/* Last Name */}
                        <div className='lastName'>
                            <label htmlFor='lastName'>Last Name</label>
                            <input
                                className={formErrors.lastName.length > 0 ? 'error' : null}
                                placeholder='Last Name'
                                type='text'
                                name='lastName'
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.lastName.length > 0 && (
                                <span className='errorMessage'>{formErrors.lastName}</span>
                            )}
                        </div>
                        {/* Username */}
                        <div className='username'>
                            <label htmlFor='username'>Username</label>
                            <input
                                className={formErrors.username.length > 0 ? 'error' : null}
                                placeholder='Create Username'
                                type='text'
                                name='username'
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.username.length > 0 && (
                                <span className='errorMessage'>{formErrors.username}</span>
                            )}
                        </div>
                        {/* Email */}
                        <div className='email'>
                            <label htmlFor='email'>Email</label>
                            <input
                                className={formErrors.email.length > 0 ? 'error' : null}
                                placeholder='Enter Valid Email'
                                type='text'
                                name='email'
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className='errorMessage'>{formErrors.email}</span>
                            )}
                        </div>
                        {/* Password */}
                        <div className='password'>
                            <label htmlFor='password'>Password</label>
                            <input
                                className={formErrors.password.length > 0 ? 'error' : null}
                                placeholder='Create Password'
                                type='password'
                                name='password'
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className='errorMessage'>{formErrors.password}</span>
                            )}
                        </div>
                        <div className='createAccount'>
                            <button type='submit'>Create Account</button>
                            <br />
                            <Link type='button' href='/login' to='/login'>Already Have an Account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    };
}