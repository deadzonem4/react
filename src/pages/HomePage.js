import React from 'react';
import MainSlider from '../components/MainSlider';
import TimeBox from '../components/TimeBox';
import SportGrid from '../components/SportGrid';
import SearchBox from '../components/SearchBox';
import ToTopButton from '../components/ToTopButton';


class HomePage extends React.Component {
  render() {
    return (
    	<div>
	    	<MainSlider search="Search"/>
	    	<TimeBox />
        <SearchBox />
	    	<SportGrid />
        <ToTopButton scrollStepInPx="50" delayInMs="16.66"/>
    	</div>
    	);
  }
}

export default HomePage;
