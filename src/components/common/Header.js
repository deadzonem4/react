import React from 'react';
import Menu from './Menu';


class Header extends React.Component {
  render() {
    return (
    	<header>
			<Menu home="Home" weather="Weather" sport="Sport" contact="Contact" />
      	</header>
    );         
  }
}

export default Header;

