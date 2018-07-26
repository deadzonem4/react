import React from "react";
import './SearchBox.css';


class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {value : '', name : []};


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);
    event.preventDefault();
    this.ApiInfo();
  }
  ApiInfo() {    
    var api = 'http://api.openweathermap.org/data/2.5/weather?q=',
    city,
    apikey = '&APPID=673dc5799ec44bdbd03917d17cdaba93',
    metric = '&units=metric';
    city = this.state.value;
    var url = "";
    url = api + city + apikey + metric;
    console.log(url)

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.name);
        this.setState({ name: data.name });
        console.log(this.state.name)
      });
  }

  render() {
		return (
	      <div className="search bg-light">
          <div className="container">
            <h2>Find out what's the weather in your town</h2>
            <form id="search-box">
                <label>
                    <input type="text" name="city" id="city" value={this.state.value} onChange={this.handleChange} />
                    <i className="fas fa-plane"></i>
                    <p id="message">{this.state.forecast}</p>
                </label>
                <input type="submit" name="submit" value="Search" id="submit" onClick={this.handleSubmit} />
            </form>
            <div id="info" className="row">
              <div className="entered-city col-md-3">
                  <p className="current-city">Weather in <span id="city-name"></span></p>
                  <p className="temperature"><span id="icon"></span><span id="temp"></span></p>
              </div>
              <div className="col-md-9">
                  <table className="aditional-info">
                      <thead>
                          <tr>
                            <th>Cloudiness</th>
                            <th>Max-temperature</th>
                            <th>Min-temperature</th>
                            <th>Humidity</th>
                            <th>Wind</th>
                            <th>Pleasure</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td id="cloud"></td>
                            <td id="max-temp"></td>
                            <td id="min-temp"></td>
                            <td id="humidity"></td>
                            <td id="wind"></td>
                            <td id="pressure"></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div className="show-more col-12 text-center">
                  <input type="submit" name="submit" value="Show five days forecast" id="more" />
              </div>
            </div>
            <div id="forecast-box" className="row"></div>
          </div>
        </div>
	    );
    };
    
}

export default SearchBox;



            