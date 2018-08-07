import React from "react";
import '../styles/SearchForm.css';



const ForecastResults = (props) => {
    
    if (!props.result) {
      return null;
    }

	  const items = props.filter.slice(1).map((filters) =>
	  	<ul key={filters.dt.toString()} className="col-sm-3 day-list">
	  		<li key={filters.main.temp.toString()}>Temperature:{Math.round(filters.main.temp) + "°C"}</li>
	  		<li key={filters.dt.toString()}><img style={{maxWidth:'50px'}} src={("https://openweathermap.org/img/w/" + filters.weather[0].icon + ".png")} alt={filters.weather[0].icon}/></li>
	  		<li key={filters.wind.speed.toString()}>Wind:{filters.wind.speed}m/s</li>
	  		<li style={{textTransform: 'capitalize'}} key={filters.weather[0].description.toString()}>{filters.weather[0].description}</li>
	  		<li key={filters.main.humidity.toString()}>Humidity: {filters.main.humidity}%</li>
	  		<li key={filters.main.pressure.toString()}>Pressure: {filters.main.pressure}hpa</li>
	  	</ul>
	  );
		return (
	    <div id="forecast-box" className="row">
	    	{items}
	    </div>
		);
}


export default ForecastResults;



