import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom'
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
          <NavbarBrand href="/" style={{ fontFamily: "'Merriweather', sans-serif" }}>WAT to Eat</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
              </NavItem>
              <NavItem>
                <Link to="/suggestions" className="nav-link">Suggestions</Link>
              </NavItem>

            </Nav>
            <Nav navbar className="ml-auto">
              <NavItem className="d-none d-md-block">
                {this.props.signedIn ?
                  <Button onClick={this.props.signOut} color="default">Logout</Button> :
                  <Link to="/login"><Button color="default">Login</Button></Link>
                }
              </NavItem>
              {
                this.props.signedIn ?
                  <NavItem className="d-block d-md-none"
                    onClick={this.props.signOut}><span className="nav-link">Logout</span></NavItem> :
                  <NavItem className="d-block d-md-none"><Link to="/login" className="nav-link">Login</Link></NavItem>
              }
            </Nav>
          </Collapse>
        </Navbar>
      </div >
    );
  }
}

export default AppNavbar;
