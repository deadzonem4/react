import React from "react";
import './SearchBox.css';


class SearchBox extends React.Component {

  render() {
		return (
	      <div className="search bg-light">
          <div className="container">
            <h2>Find out what's the weather in your town</h2>
            <form id="search-box">
                <label>
                    <input type="text" name="city" id="city" />
                    <i className="fas fa-plane"></i>
                    <p id="message"></p>
                </label>
                <input type="submit" name="submit" value="Search" id="submit" />
            </form>
            <div id="info" className="row">
              <div class="entered-city col-md-3">
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



            