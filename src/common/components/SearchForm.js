import React from "react";
import '../styles/SearchForm.css';
import SearchResults from './SearchResults';
import ForecastButton from './ForecastButton';


class SearchForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      enteredCity : '',
      name : '',
      country : '',
      temp : '',
      haveError : false,
      show : true,
      description : '',
      humidity : '',
      wind : '',
      pressure : '',
      icon : ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({enteredCity: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.ApiInfo();
  }
  ApiInfo() {    
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=',
    city,
    apikey = '&APPID=673dc5799ec44bdbd03917d17cdaba93',
    metric = '&units=metric';
    city = this.state.enteredCity;
    var url = "";
    url = api + city + apikey + metric;
    fetch(url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .then(data => {
        this.setState({ 
          haveError : false,
          name : data.name,
          country : data.sys.country,
          temp : Math.round(data.main.temp) + '°C',
          show : false,
          description : data.weather[0].description,
          humidity : data.main.humidity + '%',
          wind : data.wind.speed + 'm/s',
          pressure : data.main.pressure + 'hpa',
          icon : "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        });
      })
      .catch(error => {
        this.setState({ 
          haveError : true,
          show : true
        });
      });
  }

  render() {
		return (
      <div className="search bg-light">
        <div className="container">
          <h2>Find out what's the weather in your town</h2>
          <form id="search-box">
            <label>
              <input type="text" name="city" id="city" value={this.state.enteredCity} onChange={this.handleChange} placeholder="Type city name" />
              <i className="fas fa-plane"></i>
              <p id="message">{this.state.haveError ? 'Please enter a valid city' : ''}</p>
            </label>
            <input type="submit" name="submit" value="Search" id="submit" onClick={this.handleSubmit} />
          </form>
          <SearchResults show={this.state.show} name={this.state.name} country={this.state.country} temp={this.state.temp} 
           description={this.state.description} humidity={this.state.humidity} 
           wind={this.state.wind} pressure={this.state.pressure} icon={this.state.icon}
          />
          <ForecastButton city={this.state.enteredCity} show={this.state.show}/>
        </div>
      </div>
	  );
  };
    
}

export default SearchForm;



            