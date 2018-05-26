import React, { Component } from 'react';
import { Button, Form, Input, Label } from 'reactstrap';
import './LoginScreen.css';
import { Redirect } from 'react-router-dom'


class LoginScreen extends Component {
    render() {
        if (this.props.signedIn) return <Redirect to="/dashboard" />
        return (
            <div className="Login text-center">
                <Form className="form-signin" onSubmit={(e) => { this.props.signIn(); e.preventDefault() }}>
                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Label check className="mb-3">
                        <Input type="checkbox" />{' '}
                        Remember me
                    </Label>
                    <Button onClick={this.props.signIn} color="primary w-100" size="large" block>Sign in</Button>
                </Form>
            </div>
        );
    }
}

export default LoginScreen;
