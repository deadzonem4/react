import React from 'react';
import HomeSlider from '../components/HomeSlider';
import TimeBox from '../components/TimeBox';
import HomeGrid from '../components/HomeGrid';
import SearchBox from '../components/SearchBox';


class HomePage extends React.Component {
  render() {
    return (
    	<div>
	    	<HomeSlider />
	    	<TimeBox />
	    	<HomeGrid />
	    	<SearchBox />
    	</div>
    	);
  }
}

export default HomePage;
