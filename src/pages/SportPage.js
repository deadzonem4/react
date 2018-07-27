import React from 'react';
import SportGrid from '../components/SportGrid';
import ScrollButton from '../components/ScrollButton';

class SportPage extends React.Component {
  render() {
    return (
    	<div className="sport-page bg-light">
	    	<SportGrid />
	    	<ScrollButton scrollStepInPx="50" delayInMs="16.66"/>
    	</div>
    	);
  }
}

export default SportPage;

