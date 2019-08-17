import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <ul>
    <li>
      <Link to="/" style={{textDecoration : 'none'}}>Home</Link>
    </li>
    <li>
      <Link to="/bookings" style={{textDecoration : 'none'}}>Bookings</Link>
    </li>
    <li>
      <Link to="/guests" style={{textDecoration : 'none'}}>Guests</Link>
    </li>
  </ul>
)

export default NavBar;
