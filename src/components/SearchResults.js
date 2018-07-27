import React from "react";
import './SearchBox.css';


class SearchResults extends React.Component {

  render() {
		return (
            <div id="info" className={this.props.class}>
              <div className="entered-city col-md-3">
                  <p className="current-city">Weather in 
                    <span id="city-name">{this.props.name} {this.props.country}</span>
                  </p>
                  <p className="temperature">
                    <img id="icon" src={this.props.icon} alt="{this.props.icon}" />
                    <span id="temp">{this.props.temp}</span>
                  </p>
              </div>
              <div className="col-md-9">
                  <table className="aditional-info">
                      <thead>
                          <tr>
                            <th>Cloudiness</th>
                            <th>Current temperature</th>
                            <th>Humidity</th>
                            <th>Wind</th>
                            <th>Pressure</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td id="cloud">{this.props.description}</td>
                            <td id="max-temp">{this.props.temp}</td>
                            <td id="humidity">{this.props.humidity}</td>
                            <td id="wind">{this.props.wind}</td>
                            <td id="pressure">{this.props.pressure}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
            </div>
	    );
    };
    
}

export default SearchResults;



