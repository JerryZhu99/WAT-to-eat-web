import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import WelcomeScreen from './component/WelcomeScreen';

import { Route, Switch, Redirect } from 'react-router-dom'
import LoginScreen from './component/LoginScreen';
import DashboardScreen from './component/DashboardScreen';
class App extends Component {

  state = {
    signedIn: false
  }

  signIn = () => {
    this.setState({ signedIn: true }, () => {
      console.log("signed in")
    })
  }
  signOut = () => {
    this.setState({ signedIn: false }, () => {
    })
  }

  render() {
    console.log(this.state.signedIn)
    return (
      <div className="App">
        <Switch>
          <Route path="/login" />
          <Route render={() => <Navbar signedIn={this.state.signedIn} signOut={this.signOut} />} />
        </Switch>

        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <Route path="/dashboard" component={DashboardScreen} />
          <Route path="/login" render={() => <LoginScreen signedIn={this.state.signedIn} signIn={this.signIn} />} />
          <Redirect to="/" />
        </Switch>

      </div >
    );
  }
}

export default App;
