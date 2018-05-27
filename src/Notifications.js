
navigator.serviceWorker.register('service-worker.js');


const Notifications = {
    enabled: Notification.permission === 'granted',
    ready: true,
    enable: () => {
        return Notification.requestPermission().then(function (result) {
            if (result === 'denied' || result === 'default') {
                Notifications.enabled = false;
                return;
            }
            if (result === 'granted') {
                Notifications.enabled = true;
                return;
            }
        });
    },
    sendNotification: (title, body, vibrate) => {
        if (!Notifications.ready) return;
        Notifications.ready = false;
        setTimeout(() => {
            Notifications.ready = true;
        }, 20 * 1000)
        if (Notification.permission === "granted") {
            Notifications.enabled = false;
            if (vibrate) vibrate = [200, 100, 200];
            navigator.serviceWorker.ready.then(function (registration) {
                registration.showNotification(title, { body, vibrate });
            })
        }
    }
}

export default Notifications