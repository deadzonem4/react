import React from "react";
import '../styles/SearchForm.css';
import ForecastResult from './ForecastResult';

class ForecastButton extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      showResult: false,
      filter: ''
    };
    this.ForecastSubmit = this.ForecastSubmit.bind(this);
  }
  ForecastSubmit(e) {
    e.preventDefault();
    this.ForecastInfo();
  }
  ForecastInfo(){
    var api = 'https://api.openweathermap.org/data/2.5/forecast?q=',
    city,
    apikey = '&APPID=673dc5799ec44bdbd03917d17cdaba93',
    metric = '&units=metric',
    forecastData = [],
    url = "";
    city = this.props.city;
    url = api + city + apikey + metric;
    fetch(url)
      .then(response => {
        if (!response.ok) { throw response }
        return response.json()
      })
      .then(data => {
        for (var i = 0; i < data.list.length; i+=8) {
          forecastData.push(data.list[i]);
        };

        this.setState(prevState => ({
          showResult: !prevState.showResult,
          filter: forecastData
        }));
      })
      .catch(error => {
        this.setState({ 
          showResult: false
        });
      });
  }


  render() {
    if (this.props.show) {
      return null;
    }
    return (
      <div className="show-more col-12 text-center">
        <input type="submit" name="submit" value={this.state.showResult ? 'Hide results' : 'Show five days forecast'} id="more" onClick={this.ForecastSubmit} />
        <ForecastResult result={this.state.showResult} filter={this.state.filter}/>
      </div>
    ); 
  };
}

export default ForecastButton;


