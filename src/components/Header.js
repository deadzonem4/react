import React from 'react';
import Menu from './Menu';


class Header extends React.Component {
  render() {
    return (
    	<header>
				<Menu home="Home" search="Search" sport="Sport" contact="Contact" />
      </header>
    );         
  }
}

export default Header;

