import React, { Component } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import WelcomeScreen from './component/WelcomeScreen';

import { Route, Switch, Redirect } from 'react-router-dom'
import LoginScreen from './component/LoginScreen';
import DashboardScreen from './component/DashboardScreen';
import Auth from './Auth';
import SuggestionScreen from './component/SuggestionScreen';
import axios from 'axios';
import Notifications from './Notifications';
import Location from './Location';


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

  constructor(props) {
    super(props);
    this.watchId = Location.watchLocation((loc) => {
      this.setState({ location: loc.coords });
      axios.get("http://ruhackbackend.herokuapp.com/update", { params: { location: `${loc.coords.latitude},${loc.coords.longitude}` } }).then((response) => {
        let locations = Object.keys(response.data);
        if (locations.length === 0) return;
        let spent = locations.reduce((acc, cur) => (acc + response.data[cur]), 0);
        spent = Math.round(spent * 100) / 100;
        let title = `Spending history at: ${locations[0]}, 
            ${locations.length > 1 ? `${locations.length - 1} other place${locations.length > 2 ? "s" : ""}` : ""}`;
        let body = `You spent a total of $${spent} here last month.`;
        Notifications.sendNotification(title, body);
      })
    })
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
          <PrivateRoute path="/suggestions" component={SuggestionScreen} />
          <Route path="/login" render={() => <LoginScreen signedIn={this.state.signedIn} signIn={this.signIn} />} />
          <Redirect to="/" />
        </Switch>

      </div >
    );
  }
}

export default App;
