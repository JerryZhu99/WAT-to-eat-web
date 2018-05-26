

const Location = {
    options: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    },
    getLocation() {
        return new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject, [this.options]));

    },

    watchLocation(onChange) {
        navigator.geolocation.watchPosition(onChange);
    }
}

export default Location;