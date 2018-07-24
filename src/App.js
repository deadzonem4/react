import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Sport from './pages/Sport';
import Contact from './pages/Contact';
import Sidebar from './components/common/Menu';
import logo from './logo.svg';

 
 class App extends Component {
   render() {
     return (
      <BrowserRouter>
        <div>
          <Sidebar home="Home" weather="Weather" sport="Sport" contact="Contact" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/weather/" component={Weather} />
            <Route path="/sport/" component={Sport} />
            <Route path="/contact/" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
     );
   }
 }

 export default App;

