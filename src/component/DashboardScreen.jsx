import React, { Component } from 'react';
import { Container } from 'reactstrap';

import "./DashboardScreen.css"

import { Line } from 'react-chartjs'

class DashboardScreen extends Component {
    constructor(props) {
        super(props);

        let dates = [7, 6, 5, 4, 3, 2, 1].map(i => (
            new Date(Date.now() - 24 * 60 * 60 * 1000 * i).toLocaleDateString()
        ))

        this.state = {
            data: {
                labels: dates,
                datasets: [
                    {
                        label: "My First dataset",
                        fillColor: "rgba(220,220,220,0.2)",
                        strokeColor: "rgba(220,220,220,1)",
                        pointColor: "rgba(220,220,220,1)",
                        pointStrokeColor: "#fff",
                        pointHighlightFill: "#fff",
                        pointHighlightStroke: "rgba(220,220,220,1)",
                        data: [65, 59, 80, 81, 56, 55, 40]
                    }
                ]
            },
            options: {
                bezierCurve: false
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
                                <h3>
                                    Last Month
                                </h3>
                                <h3 className="display-4">
                                    $800
                                </h3>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="box">
                                <h3>
                                    Budget
                                </h3>
                                <h3 className="display-4">
                                    $750
                                </h3>
                            </div>
                        </div>
                    </div>
                    <Line data={this.state.data} options={this.state.options} width="800px" />
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
