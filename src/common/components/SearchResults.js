import React from "react";
import '../styles/SearchForm.css';

const SearchResults = (props) => {
  if (props.show) {
    return null;
  }

  return (
    <div id="info" className="row">
      <div className="entered-city col-md-3">
        <p className="current-city">Weather in <span id="city-name">{props.name} {props.country}</span>
        </p>
        <p className="temperature">
          <img id="icon" src={props.icon} alt="{this.props.icon}" />
          <span id="temp">{props.temp}</span>
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
              <td id="cloud">{props.description}</td>
              <td id="max-temp">{props.temp}</td>
              <td id="humidity">{props.humidity}</td>
              <td id="wind">{props.wind}</td>
              <td id="pressure">{props.pressure}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}


export default SearchResults;



