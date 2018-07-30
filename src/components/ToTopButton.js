import React from "react";
import './ToTopButton.css';



class ToTopButton extends React.Component {
  constructor() {
    super();

    this.state = {
        intervalId: 0
    };
  }
  
  scrollStep() {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  
  render () {
      return( 
        <div className="toTop" onClick={ () => { this.scrollToTop(); }}>
          <i className="fas fa-angle-up"></i>
        </div>
      );
   }
} 


export default ToTopButton;