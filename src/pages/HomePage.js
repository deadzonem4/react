import React from 'react';
import HomeSlider from '../components/HomeSlider';
import TimeBox from '../components/TimeBox';
import HomeGrid from '../components/HomeGrid';
import SearchBox from '../components/SearchBox';
import ScrollButton from '../components/ScrollButton';


class HomePage extends React.Component {
  render() {
    return (
    	<div>
	    	<HomeSlider />
	    	<TimeBox />
	    	<HomeGrid />
	    	<SearchBox />
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    	</div>
    	);
  }
}

export default HomePage;
