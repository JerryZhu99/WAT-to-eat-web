import axios from 'axios'


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
        return navigator.geolocation.watchPosition(onChange);
    },

    stopWatching(id) {
        navigator.geolocation.clearWatch(id)
    },

}

export default Location;