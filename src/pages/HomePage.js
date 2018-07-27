import React from 'react';
import MainSlider from '../components/MainSlider';
import TimeBox from '../components/TimeBox';
import SportGrid from '../components/SportGrid';
import SearchBox from '../components/SearchBox';
import ScrollButton from '../components/ScrollButton';


class HomePage extends React.Component {
  render() {
    return (
    	<div>
	    	<MainSlider search="Search"/>
	    	<TimeBox />
        <SearchBox />
	    	<SportGrid />
        <ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    	</div>
    	);
  }
}

export default HomePage;
