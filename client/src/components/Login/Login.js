import React, { Component } from "react";
import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import './login.css';
import { isEmail, isEmpty } from "../../shared/validator";
import API from "../../utils/API"
import decode from 'jwt-decode';
import { Redirect } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false, // Indicates in progress state of login form
            message: ""
        }
    }

    componentWillMount() {
        console.log(this.loggedIn())
        if (this.loggedIn()) {
            return <Redirect to='/' />
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let { formData } = this.state;
        formData[name] = value;

        this.setState({
            formData: formData
        });
    }

    validateLoginForm = (e) => {

        let errors = {};
        const { formData } = this.state;

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  

        if (isEmpty(errors)) {
            return true;
        } else {
            return errors;
        }
    }

    login = (e) => {

        e.preventDefault();

        let errors = this.validateLoginForm();

        if(errors === true){
            const { formData } = this.state;
                

            API.authenticateUser(formData)
            .then(
                res => {
                    if(res.data.status === "error"){
                        this.setState({message: "Invalid email or password"})
                    }
                    if(res.data.status === "success"){
                        // console.log(res.data.data.token);
                        this.setState({message: res.data.message})
                        this.setToken(res.data.data.token) // Setting the token in localStorage
                        return Promise.resolve(res);
                    }                                     
                })
                .catch(err => console.log(err))
        } 
        
        else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken)
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('id_token')
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            console.log(decoded)
            if (decoded.exp < Date.now() / 1000) { // Checking if token is expired.
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div id="Login" >
                <Row>
                    <form onSubmit={this.login} method="POST" encType="application/x-www-form-urlencoded">
                    
                        <FormGroup controlId="email" validationState={ formSubmitted ? (errors.email ? 'error' : 'success') : null }>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="text" name="email" placeholder="Enter your email" onChange={this.handleInputChange} />
                        { errors.email &&
                            <HelpBlock>{errors.email}</HelpBlock>
                        }
                        </FormGroup>
                        <FormGroup controlId="password" validationState={ formSubmitted ? (errors.password ? 'error' : 'success') : null }>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl type="password" name="password" placeholder="Enter your password" onChange={this.handleInputChange} />
                        { errors.password &&
                            <HelpBlock>{errors.password}</HelpBlock>
                        }
                        </FormGroup>
                        <Button type="submit" bsStyle="primary" href="/restaurants">Log In!</Button>
                        <p>{this.state.message}</p>

                    </form>
                </Row>
            </div>
        )
    }
}

export default Login;