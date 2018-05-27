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

    search(query) {
        return this.getLocation().then((location) => {
            return axios.get('http://ruhackbackend.herokuapp.com', {
                params: {
                    type: "restaurant",
                    location: `${location.coords.latitude},${location.coords.longitude}`,
                    ...query
                }
            })
        })
            .then((response) => {
                return response.data;
            }).catch(console.error)
    }

}

export default Location;