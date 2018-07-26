import React from "react";


class WhichBrowser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      browser: ""
    };
  }
  componentDidMount() {
      this.filter()
  }
  
  filter(){
    if(navigator.userAgent.indexOf("Chrome") !== -1){
      this.setState({
        browser: "Chrome"
      });
    }
    else if((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1){
      this.setState({
        browser: "Opera"
      });
    }
    else if(navigator.userAgent.indexOf("Safari") !== -1){
      this.setState({
        browser: "Safari"
      });
    }
    else if(navigator.userAgent.indexOf("Firefox") !== -1){
      this.setState({
        browser: "Firefox"
      });
    }
    else if((navigator.userAgent.indexOf("MSIE") !== -1 ) || (!!document.documentMode === true )){
      this.setState({
        browser: "Internet Explorer"
      });
    }
    else {
      this.setState({
        browser: "Unknown browser"
      });
    }
  }

  render() {
		return (
        <p>You are visiting this site via <span id="browser">{this.state.browser}</span></p>
	    );
    };
    
}

export default WhichBrowser;












