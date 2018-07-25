import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage';
import SportPage from './pages/SportPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

 
 class App extends Component {
   render() {
     return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/react" component={HomePage} />
            <Route path="/react/weather/" component={WeatherPage} />
            <Route path="/react/sport/" component={SportPage} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
     );
   }
 }

 export default App;

