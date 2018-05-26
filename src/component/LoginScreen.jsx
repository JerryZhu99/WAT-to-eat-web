import React, { Component } from 'react';
import { Button, Form, Input, Label, FormGroup, FormFeedback } from 'reactstrap';
import './LoginScreen.css';
import { Redirect } from 'react-router-dom'


class LoginScreen extends Component {
    state = {
        loading: false,
        error: false,
        email: "",
        password: "",
        remember: false
    }
    signIn = (e) => {
        this.setState({ loading: true }, () => {
            this.props.signIn({ email: this.state.email, password: this.state.password, remember: this.state.remember }).catch((err) => {
                this.setState({ loading: false, error: true });
            })
        })
        e.preventDefault()
    }

    handleChange = (name) => (event) => {
        this.setState({
            [name]: event.target.value
        })
    }

    handleChecked = (name) => (event) => {
        this.setState({
            [name]: event.target.checked
        })
    }

    render() {
        if (this.props.signedIn) return <Redirect to="/dashboard" />
        return (
            <div className="Login text-center">
                <Form className="form-signin" onSubmit={(e) => { this.signIn(e) }} noValidate>
                    <h1 className="h3 mb-4 font-weight-normal">Login</h1>
                    <FormGroup>
                        <Input type="email" placeholder="Email"
                            disabled={this.state.loading}
                            invalid={this.state.error}
                            value={this.state.email}
                            onChange={this.handleChange('email')} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="password" placeholder="Password"
                            disabled={this.state.loading}
                            invalid={this.state.error}
                            value={this.state.password}
                            onChange={this.handleChange('password')} />
                        <FormFeedback>Invalid Email or Password</FormFeedback>

                    </FormGroup>
                    <Label check className="mb-3">
                        <Input type="checkbox" disabled={this.state.loading}
                            checked={this.state.remember}
                            onChange={this.handleChecked('remember')} />{' '}
                        Remember me
                    </Label>
                    <Button
                        color="primary w-100"
                        size="large"
                        block
                        disabled={this.state.loading}>
                        {this.state.loading ?
                            "Signing in..." :
                            "Sign in"
                        }
                    </Button>
                </Form>
            </div>
        );
    }
}

export default LoginScreen;
