import React from "react";
import './SearchBox.css';
import SearchResults from './SearchResults';

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value : '',
      name : '',
      country : '',
      temp : '',
      haveError : false,
      show : 'row',
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
    this.setState({value: event.target.value});
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
    city = this.state.value;
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
          show : 'show-result row',
          description : data.weather[0].description,
          humidity : data.main.humidity + '%',
          wind : data.wind.speed + 'm/s',
          pressure : data.main.pressure + 'hpa',
          icon : "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
        });
      })
      .catch(error => {
        this.setState({ 
          haveError : true,
          show : 'row'
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
                  <input type="text" name="city" id="city" value={this.state.value} onChange={this.handleChange} placeholder="Type city name" />
                  <i className="fas fa-plane"></i>
                  <p id="message">{this.state.haveError ? 'Please enter a valid city' : ''}</p>
                </label>
                <input type="submit" name="submit" value="Search" id="submit" onClick={this.handleSubmit} />
            </form>
            <SearchResults name={this.state.name} country={this.state.country} temp={this.state.temp} 
            class={this.state.show} description={this.state.description} humidity={this.state.humidity} 
            wind={this.state.wind} pressure={this.state.pressure} icon={this.state.icon}
            />
          </div>
        </div>
	    );
    };
    
}

export default SearchBox;



            