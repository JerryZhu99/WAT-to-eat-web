import React, { Component } from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import Auth from '../Auth';
import { Redirect } from 'react-router-dom';

class WelcomeScreen extends Component {
    render() {
        if (Auth.signedIn) return <Redirect to="/dashboard" />

        return (
            <div className="Welcome">
                <Container>
                    <Jumbotron className="mt-3">
                        <h1 className="display-3">Budget Proactively.</h1>
                        <p className="lead">WAT to Eat uses your spending habits to recommend you food within your budget, and lets you know when you go over.</p>
                        <hr className="my-2" />
                        <p className="lead">
                            <Button color="primary">Get Started</Button>
                        </p>
                    </Jumbotron>
                    <h1>
                        How it works
                    </h1>
                </Container>
            </div>
        );
    }
}

export default WelcomeScreen;
