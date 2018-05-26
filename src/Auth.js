


const Auth = {
    signedIn: false,
    signIn(credentials) {
        return new Promise((resolve, reject) => setTimeout(() => { this.signedIn = true; resolve(true) }, 1000));
    },
    signOut() {
        return new Promise((resolve, reject) => setTimeout(() => { this.signedIn = false; resolve(true) }, 200));
    }
}

export default Auth;