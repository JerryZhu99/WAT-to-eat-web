import React, { Component } from 'react';
import { Button, Container, Jumbotron } from 'reactstrap';
import Auth from '../Auth';
import { Redirect } from 'react-router-dom';

import './WelcomeScreen.css'

class WelcomeScreen extends Component {

    render() {
        if (Auth.signedIn) return <Redirect to="/dashboard" />

        return (
            <div className="Welcome">
                <Container>
                    <Jumbotron className="mt-3">
                        <h1 className="display-3">Budget Proactively.</h1>
                        <p className="lead">Cocoa uses your spending habits to recommend you food within your budget, and lets you know when you go over.</p>
                        <hr className="my-2" />
                        <p className="lead">
                            <Button color="success">Get Started</Button>
                        </p>
                    </Jumbotron>
                    <h1>
                        Features
                    </h1>
                    <div className="row">
                        <div className="col-md-4 p-3">
                            <div className="icon-wrapper w-100 d-flex flex-column align-items-center">
                                <div className="icon">
                                    <i class="fas fa-balance-scale fa-7x"></i>
                                </div>
                            </div>

                            <h2>Budgeted Suggestions</h2>
                            <p>
                                Cocoa lets you choose a meal that fits your budget.
                                Whether you want to save or splurge, Cocoa suggests restaurants that fit the bill.
                            </p>
                        </div>

                        <div className="col-md-4 p-3">

                            <div className="icon-wrapper w-100 d-flex flex-column align-items-center">
                                <div className="icon">
                                    <i class="fas fa-info-circle fa-7x"></i>
                                </div>
                            </div>


                            <h2>Friendly Reminders</h2>
                            <p>
                                Cocoa informs you of the average meal prices when you visit a restaurant above your budget.
                            </p>
                        </div>

                        <div className="col-md-4 p-3">
                            <div className="icon-wrapper w-100 d-flex flex-column align-items-center">
                                <div className="icon">
                                    <i class="fas fa-chart-bar fa-7x"></i>
                                </div>
                            </div>
                            <h2>Data Breakdowns</h2>
                            <p>
                                Cocoa breaks down your spending habits and helps you set goals for the future.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default WelcomeScreen;
