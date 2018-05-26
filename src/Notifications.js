


const Notifications = {
    enabled: false,
    enable: () => {
        return Notification.requestPermission().then(function (result) {
            if (result === 'denied' || result === 'default') {
                this.enabled = false;
                return;
            }
            if (result === 'granted') {
                this.enabled = true;
                return;
            }
        });
    },
    sendNotification: (title, body, vibrate) => {
        if (Notification.permission === "granted") {
            this.enabled = false;
            if (vibrate) vibrate = [200, 100, 200];
            new Notification(title, { body, vibrate });
        }
    }
}

export default Notifications