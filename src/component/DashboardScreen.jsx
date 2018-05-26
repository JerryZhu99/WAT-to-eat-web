import React, { Component } from 'react';
import { Button, Form, Input, Label, Container } from 'reactstrap';


class DashboardScreen extends Component {
    render() {
        return (
            <div className="Dashboard">
                <Container>
                    <h1 className="h2 display-2 pb-4">Dashboard</h1>
                    <div className="row">
                        <div className="col-6" style={{ borderLeft: "1px solid #212529" }}>
                            <h3>
                                Last Month
                            </h3>
                            <h3 className="display-3">
                                $800
                            </h3>
                        </div>
                        <div className="col-6" style={{ borderLeft: "1px solid #212529" }}>
                            <h3>
                                Budget
                            </h3>
                            <h3 className="display-3">
                                $750
                            </h3>
                        </div>
                    </div>

                </Container>
            </div>
        );
    }
}

export default DashboardScreen;
