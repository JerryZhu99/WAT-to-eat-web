


const Auth = {
    signedIn: localStorage.getItem("login") === "true",
    signIn(credentials) {
        return new Promise((resolve, reject) => setTimeout(() => {
            if (credentials && credentials.email === "test" && credentials.password === "password") {
                this.signedIn = true;
                resolve(true);
                if (credentials.remember) localStorage.setItem("login", "true")
            } else {
                reject("Invalid credentials")
            }
        }, 1000));
    },
    signOut() {
        return new Promise((resolve, reject) => setTimeout(() => {
            this.signedIn = false;
            resolve(true);
            localStorage.setItem("login", "false")
        }, 200));
    }
}

export default Auth;