
import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from '../../images/logo.svg';
import './Menu.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {isOpen: false};
    this.state = {isTop: true};
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 1;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  render() {
    const scrollBg = this.scrollBackground ? 'nav-bg scrolling' : 'nav-bg';
    return (
      <div>
        <Navbar color="light" light expand="md" className={this.state.isTop ? '' : 'fixed-header'}>
          <div className="container">
            <Link className="navbar-brand" to="/react">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link className="nav-link" to="/react">{this.props.home}</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/react/weather">{this.props.weather}</Link>
                </NavItem>
                <NavItem>
                  <Link className="nav-link" to="/react/sport">{this.props.sport}</Link>
                </NavItem>
                <NavItem>
                  <NavLink target="_blank" href="http://rosen-georgiev.co.nf/">{this.props.contact}</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default Menu;






            