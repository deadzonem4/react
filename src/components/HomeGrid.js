import React from 'react';
import SportBox from './SportBox';
import basketball from '../images/sports/basketball.jpg';
import bike from '../images/sports/bike.jpg';
import surf from '../images/sports/surf.jpg';
import yoga from '../images/sports/yoga.jpg';
import running from '../images/sports/running.jpg';
import football from '../images/sports/football.jpg';
import skiing from '../images/sports/skiing.jpg';



class HomeGrid extends React.Component {
  render() {
    return (
    	<div className="sports bg-light"> 
	      	<div className="container">
				<div className="row">
					<SportBox name="col-md-4 categories" source={basketball} category="Basketball" />
					<SportBox name="col-md-4 categories" source={bike} category="Bike Riding" />
					<SportBox name="col-md-4 categories" source={surf} category="Surfing" />
					<SportBox name="col-md-4 categories" source={yoga} category="Yoga" />
					<SportBox name="col-md-8 categories" source={running} category="Running" />
					<SportBox name="col-md-8 categories" source={football} category="Footbal" />
					<SportBox name="col-md-4 categories" source={skiing} category="Skiing"/>
				</div>
			</div>
		</div>
    );
  }
}
export default HomeGrid;