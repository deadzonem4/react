import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoMatch from './pages/NoMatch';
import WeatherPage from './pages/WeatherPage';
import SportPage from './pages/SportPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Cookie from './components/common/Cookie';

 
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
            <Route  component={NoMatch} />
          </Switch>
          <Footer/>
          <Cookie />
        </div>
      </BrowserRouter>
     );
   }
 }

 export default App;

