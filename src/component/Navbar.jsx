import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="Navbar">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">WAT to eat</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/suggestions">Suggestions</NavLink>
              </NavItem>

            </Nav>
            <Nav navbar className="ml-auto">
              <NavItem>
                {this.props.signedIn ?
                  <Button onClick={this.props.signOut} color="primary">Logout</Button> :
                  <Button href="/login" color="primary">Login</Button>
                }
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
