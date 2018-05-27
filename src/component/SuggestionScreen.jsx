import React, { Component } from 'react';

import { Container } from 'reactstrap';

import GoogleMapEmbed from './GoogleMap'
import Location from '../Location'

class SuggestionScreen extends Component {
    state = {
        location: null
    }
    watchId;
    componentWillMount(props) {
        this.watchId = Location.watchLocation((loc) => {
            this.setState({ location: loc.coords });
        })
    }
    componentWillUnmount() {
        Location.stopWatching(this.watchId)
    }

    render() {
        return (
            <Container>
                <h1 className="display-3 d-none d-lg-inline">Recommended Places</h1>
                <h1 className="h2 d-inline d-lg-none">Recommended Places</h1>
                <div className="row">
                    <div className="col">
                        {
                            this.state.location ?
                                <GoogleMapEmbed
                                    location={this.state.location}
                                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                    loadingElement={<div style={{ height: `100%` }} />}
                                    containerElement={<div style={{ height: `400px` }} />}
                                    mapElement={<div style={{ height: `100%` }} />} />
                                :
                                ""
                        }
                    </div>
                </div>
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
        )
    }
}

export default SuggestionScreen