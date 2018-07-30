import React from 'react';
import SportGrid from '../components/SportGrid';
import ToTopButton from '../components/ToTopButton';

class SportPage extends React.Component {
  render() {
    return (
    	<div className="sport-page bg-light">
	    	<SportGrid />
	    	<ToTopButton scrollStepInPx="50" delayInMs="16.66"/>
    	</div>
    	);
  }
}

export default SportPage;

