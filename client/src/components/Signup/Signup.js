import React, { Component } from "react";
import { Row, FormGroup, FormControl, ControlLabel, Button, HelpBlock } from 'react-bootstrap';
import './signup.sass';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from "../../shared/validator";
import API from "../../utils/API"

class Signup extends Component {

    constructor(props) {
        super(props)

        this.state = {
            formData: {}, // Contains login form data
            errors: {}, // Contains login field errors
            formSubmitted: false, // Indicates submit status of login form
            loading: false // Indicates in progress state of login form
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

        if (isEmpty(formData.name)) {
            errors.name = "Name can't be blank";
        }

        if (isEmpty(formData.email)) {
            errors.email = "Email can't be blank";
        } else if (!isEmail(formData.email)) {
            errors.email = "Please enter a valid email";
        }

        if (isEmpty(formData.password)) {
            errors.password = "Password can't be blank";
        }  else if (isContainWhiteSpace(formData.password)) {
            errors.password = "Password should not contain white spaces";
        } else if (!isLength(formData.password, { gte: 6, lte: 16, trim: true })) {
            errors.password = "Password's length must between 6 to 16";
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


            API.registerUser(formData)
            .then(alert("You created a user"))
            .catch(err => console.log(err))

           window.location.reload();

        } else {
            this.setState({
                errors: errors,
                formSubmitted: true
            });
        }
    }

    render() {

        const { errors, formSubmitted } = this.state;

        return (
            <div className="Signup" >
                <Row>
                    <form onSubmit={this.login} method="POST" encType="application/x-www-form-urlencoded" >
                    <FormGroup controlId="name" validationState={ formSubmitted ? (errors.name ? 'error' : 'success') : null }>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl type="text" name="name" placeholder="Enter your name" onChange={this.handleInputChange} />
                        { errors.name &&
                            <HelpBlock>{errors.name}</HelpBlock>
                        }
                        </FormGroup>
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
                        <Button type="submit" bsStyle="primary">Register</Button>
                        <Button bsStyle="success" href="/users/authenticate">Sign In!</Button>
                    </form>
                </Row>
            </div>
        )
    }
}

export default Signup;