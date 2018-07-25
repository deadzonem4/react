import React from "react";
import './TimeBox.css';
import WhichBrowser from './WhichBrowser';

class TimeBox extends React.Component {
    
   constructor(props) {
        super(props);
        this.state = {
          time: new Date().toLocaleString()
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
        this.setState({
          time: new Date().toLocaleString()
        });
      }

  render() {
		return (
	      <div className="time bg-light">
	     	<div className="container">
                <div className="time-box">
                    <h2>Hello</h2>
                    <p>Today is <span id="current-time">{this.state.time}</span></p>
                    <WhichBrowser />
                </div>
            </div>
	      </div>
	    );
    };
    
}

export default TimeBox;












