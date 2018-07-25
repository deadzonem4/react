
import React from 'react';
import './SportBox.css';



class SportBox extends React.Component {
  render() {
    return (
      <div className={this.props.name}>
        <div className="categories-box">
            <a href="#">
                <img className="sport-img" src={this.props.source}  alt="sport"/>
            </a>
            <div className="category-overlay"></div>
            <div className="content-details fadeIn-top">
                  <h4>Basketball</h4>
              </div>
        </div>
      </div>
    );
  }
}
export default SportBox;






            