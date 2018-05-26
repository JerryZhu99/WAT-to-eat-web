import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import WelcomeScreen from './component/WelcomeScreen';

import { Route, Switch, Redirect } from 'react-router-dom'
import LoginScreen from './component/LoginScreen';
import DashboardScreen from './component/DashboardScreen';
import Auth from './Auth';


const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.signedIn ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);
class App extends Component {

  state = {
    signedIn: Auth.signedIn
  }

  signIn = (credentials) => {
    return Auth.signIn(credentials).then(() => {
      this.setState({ signedIn: Auth.signedIn });
    });
  }
  signOut = () => {
    return Auth.signOut().then(() => {
      this.setState({ signedIn: Auth.signedIn });
    });
  }

  render() {
    return (
      <div className="App" >
        <Switch>
          <Route path="/login" />
          <Route render={() => <Navbar signedIn={this.state.signedIn} signOut={this.signOut} />} />
        </Switch>

        <Switch>
          <Route exact path="/" component={WelcomeScreen} />
          <PrivateRoute path="/dashboard" component={DashboardScreen} />
          <Route path="/login" render={() => <LoginScreen signedIn={this.state.signedIn} signIn={this.signIn} />} />
          <Redirect to="/" />
        </Switch>

      </div >
    );
  }
}

export default App;
