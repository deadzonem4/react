import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import SearchPage from './pages/SearchPage';
import SportPage from './pages/SportPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Cookie from './components/Cookie';
import './common/styles/Main.css';
 
 class App extends Component {
   render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route exact path="/react" component={HomePage} />
            <Route path="/react/search/" component={SearchPage} />
            <Route path="/react/sport/" component={SportPage} />
            <Route  component={ErrorPage} />
          </Switch>
          <Footer/>
          <Cookie />
        </div>
      </BrowserRouter>
    );
   }
 }

export default App;