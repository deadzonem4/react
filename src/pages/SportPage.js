import React from 'react';
import HomeGrid from '../components/HomeGrid';
import ScrollButton from '../components/ScrollButton';

class SportPage extends React.Component {
  render() {
    return (
    	<div className="sport-page bg-light">
	    	<HomeGrid />
	    	<ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    	</div>
    	);
  }
}

export default SportPage;

