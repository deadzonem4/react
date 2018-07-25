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
					<SportBox name="col-md-4 categories" source={basketball}/>
					<SportBox name="col-md-4 categories" source={bike}/>
					<SportBox name="col-md-4 categories" source={surf}/>
					<SportBox name="col-md-4 categories" source={yoga}/>
					<SportBox name="col-md-8 categories" source={running}/>
					<SportBox name="col-md-8 categories" source={football}/>
					<SportBox name="col-md-4 categories" source={skiing}/>
				</div>
			</div>
		</div>
    );
  }
}
export default HomeGrid;