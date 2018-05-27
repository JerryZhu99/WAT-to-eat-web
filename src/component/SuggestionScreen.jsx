import React, { Component } from 'react';
import { Marker } from "react-google-maps";
import { Badge, Container } from 'reactstrap';
import Location from '../Location';
import GoogleMapEmbed from './GoogleMap';

class SuggestionScreen extends Component {
    state = {
        location: null,
        restaurants: []
    }
    watchId;
    componentWillMount(props) {
        this.watchId = Location.watchLocation((loc) => {
            this.setState({ location: loc.coords });
        })
        Location.search({ minprice: 0, maxprice: 2 }).then((data) => {
            console.log(data.results)
            this.setState({
                restaurants: data.results
            })
        });
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
                                    mapElement={<div style={{ height: `100%` }} />} >
                                    {this.state.restaurants.map(e =>
                                        (<Marker key={e.id}
                                            position={e.geometry.location}
                                            label={{
                                                text: e.name,
                                                color: "#212529",
                                                fontSize: "12px",
                                                fontWeight: "bold"
                                            }}
                                            icon={{
                                                url: e.icon,
                                                scaledSize: new window.google.maps.Size(32, 32),
                                                labelOrigin: new window.google.maps.Point(16, -8)
                                            }}
                                        />)
                                    )}

                                </GoogleMapEmbed>
                                :
                                ""
                        }
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        {this.state.restaurants.map(e =>
                            (<div className="location box" key={e.id}>
                                <h4>{e.name}</h4>
                                <div>
                                    <Badge pill color={e.price_level < 2 ? "success" : undefined}>{(() => {
                                        let price = "$";
                                        for (let i = 0; i < e.price_level; i++) {
                                            price += "$";
                                        }
                                        return price
                                    })()}</Badge>
                                    <Badge pill className="ml-1">{e.rating} ★</Badge>
                                </div>
                                <span className="Details">{e.vicinity}</span>
                            </div>))
                        }

                    </div>
                </div>
            </Container>
        )
    }
}

export default SuggestionScreen