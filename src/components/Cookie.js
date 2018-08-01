import React from 'react';
import '../common/styles/Cookie.css';
import CookieConsent from "react-cookie-consent";

class Cookie extends React.Component {

  render() {
    return (
    	<CookieConsent
    		location="bottom"
        buttonText="Agree"
        cookieName="myAwesomeCookieName2"
        style={{ background: "rgba(0,0,0,.6)" }}
        buttonStyle={{ color: "#181b24", fontSize: "15px", fontWeight: "600", padding: "5px 35px",
					borderRadius: "30px", textTransform: "uppercase", margin: "8px 15px"}}
        expires={30}
        >
        This website uses cookies to enhance the user experience.
    	</CookieConsent>
    );         
  }
}

export default Cookie;




 
