import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Weather from './pages/Weather';
import Sport from './pages/Sport';
import Contact from './pages/Contact';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

 
 class App extends Component {
   render() {
     return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/weather/" component={Weather} />
            <Route path="/sport/" component={Sport} />
            <Route path="/contact/" component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
     );
   }
 }

 export default App;

