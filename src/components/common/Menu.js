
import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import logo from '../../logo.svg';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light bg-light">
          <div className="container">
                <Link className="navbar-brand" to="/">
                  <img src={logo} className="App-logo" alt="logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                      <Link className="nav-link" to="/">{this.props.home}</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/weather">{this.props.weather}</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/sport">{this.props.sport}</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/contact">{this.props.contact}</Link>
                    </li>
                  </ul>
                </div>
          </div>
      </nav>
    );         
  }
}

export default Menu;







            