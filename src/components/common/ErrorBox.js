import React from 'react';
import './ErrorBox.css';


class ErrorBox extends React.Component {

  render() {

    return (
      <div className="bg-light error-page">
        <div className="container">
          <div className="error-box">
            <h2>The page you are looking for does not exist</h2>
            <p>Please choose one from the header menu</p>
          </div>
        </div>
      </div>
    );
  }
}
export default ErrorBox;






            