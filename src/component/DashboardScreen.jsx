import React, { Component } from 'react';
import { Container } from 'reactstrap';

import "./DashboardScreen.css"

import { Bar, Doughnut } from 'react-chartjs-2'

class DashboardScreen extends Component {
    constructor(props) {
        super(props);

        let dates = [7, 6, 5, 4, 3, 2, 1].map(i => (
            new Date(Date.now() - 24 * 60 * 60 * 1000 * i).toLocaleDateString()
        ))

        this.state = {
            timeData: {
                data: {
                    labels: dates,
                    datasets: [
                        {
                            label: "Recent spending",
                            backgroundColor: "#81C784",
                            data: [7.05, 9.33, 4.19, 19.07, 30.23, 7.01, 0]
                        },
                    ]
                },
                options: {
                    responsive: true,
                    bezierCurve: false,
                }
            },
            categoryData: {
                data: {
                    labels: ["Food", "Luxury", "Other"],
                    datasets: [
                        {
                            data: [12, 25, 16],
                            backgroundColor: ["#E57373", "#81C784", "#64B5F6"],
                        }
                    ]
                },

            }
        }
    }


    render() {
        return (
            <div className="Dashboard">
                <Container>
                    <h1 className="h2 display-3 pb-4">Dashboard</h1>
                    <div className="row mb-4">
                        <div className="col-6">
                            <div className="box">
                                <h4>
                                    Last Month
                                </h4>
                                <h4 className="display-4">
                                    $877
                                </h4>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <h4>
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
                            <Bar data={this.state.timeData.data} options={this.state.timeData.option} />
                        </div>
                        <div className="col col-md-6 py-3">
                            <Doughnut data={this.state.categoryData.data} options={this.state.categoryData.options} />
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
