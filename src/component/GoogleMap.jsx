
import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


class GoogleMapEmbed extends Component {
    render() {
        const loc = { lat: this.props.location.latitude, lng: this.props.location.longitude };
        return (
            <div>
                <GoogleMap
                    defaultZoom={15}
                    defaultCenter={loc}
                >
                    {this.props.children}
                    <Marker position={loc} />
                </GoogleMap>
            </div>
        )
    }
}

export default withScriptjs(withGoogleMap(GoogleMapEmbed))