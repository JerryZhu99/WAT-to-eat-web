import React, { Component } from 'react';
import { Container } from 'reactstrap';

import "./DashboardScreen.css"

import { Bar, Doughnut } from 'react-chartjs-2'
import Data from '../Data';
import LoadingSpinner from './LoadingSpinner';

class DashboardScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }

        Data.loadData().then((data) => {
            this.setState({
                timeData: data.timeData,
                categoryData: data.categoryData,
                loaded: true
            })
        })
    }


    render() {
        if (!this.state.loaded) return (
            <LoadingSpinner />
        )
        return (
            <div className="Dashboard">
                <Container>
                    <h1 className="h2 display-3 pb-4">Dashboard</h1>
                    <div className="row mb-4">
                        <div className="col-6">
                            <div className="box">
                                <h4 className="h5">
                                    Last Month
                                </h4>
                                <h4 className="display-4">
                                    $877
                                </h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <h4 className="h5">
                                    Budget
                                </h4>
                                <h4 className="display-4">
                                    $800
                                </h4>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <h3>Current Spending: <span className="text-success">Under budget!</span></h3>
                    </div>

                    <div className="row">
                        <div className="col col-md-6 py-3">
                            <Bar data={this.state.timeData.data} options={this.state.timeData.option} height={200} />
                        </div>
                        <div className="col col-md-6 py-3">
                            <Doughnut data={this.state.categoryData.data} options={this.state.categoryData.options} height={180} />
                        </div>
                    </div>

                    <h2>Recommended Places</h2>
                    <div className="row">
                        <div className="col">
                            <div className="location box">
                                <h4>Location Name</h4>
                                <span className="Details">$10, Unit Street, City</span>
                            </div>
                            <div className="location box">
                                <h4>Location Name</h4>
                                <span className="Details">$10, Unit Street, City</span>
                            </div>
                            <div className="location box">
                                <h4>Location Name</h4>
                                <span className="Details">$10, Unit Street, City</span>
                            </div>
                            <div className="location box">
                                <h4>Location Name</h4>
                                <span className="Details">$10, Unit Street, City</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
}

export default DashboardScreen;
