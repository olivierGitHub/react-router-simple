import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
        <ul className="menu expanded">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/calculator">Calculator</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
    );
  }
}

export default Navigation;




