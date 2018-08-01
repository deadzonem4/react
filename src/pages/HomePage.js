import React from 'react';
import MainSlider from '../components/MainSlider';
import TimeBox from '../components/TimeBox';
import SportGrid from '../components/SportGrid';
import SearchForm from '../common/components/SearchForm';
import ToTopButton from '../common/components/ToTopButton';


class HomePage extends React.Component {
  render() {
    return (
    	<div>
	    	<MainSlider button="Search"/>
	    	<TimeBox />
        <SearchForm />
	    	<SportGrid />
        <ToTopButton scrollStepInPx="50" delayInMs="16.66"/>
    	</div>
    );
  }
}

export default HomePage;
