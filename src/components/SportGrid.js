import React from 'react';
import SportBox from '../common/components/SportBox';
import basketball from '../images/sports/basketball.jpg';
import bike from '../images/sports/bike.jpg';
import surf from '../images/sports/surf.jpg';
import yoga from '../images/sports/yoga.jpg';
import running from '../images/sports/running.jpg';
import football from '../images/sports/football.jpg';
import skiing from '../images/sports/skiing.jpg';



class SportGrid extends React.Component {
  render() {
    return (
    	<div className="sports bg-light"> 
	      <div className="container">
					<div className="row">
						<SportBox class="col-md-4 col-sm-6" source={basketball} category="Basketball" />
						<SportBox class="col-md-4 col-sm-6" source={bike} category="Bike Riding" />
						<SportBox class="col-md-4 col-sm-6" source={surf} category="Surfing" />
						<SportBox class="col-md-4 col-sm-6" source={yoga} category="Yoga" />
						<SportBox class="col-md-8" source={running} category="Running" />
						<SportBox class="col-md-8" source={football} category="Football" />
						<SportBox class="col-md-4" source={skiing} category="Skiing"/>
					</div>
			</div>
		</div>
    );
  }
}
export default SportGrid;