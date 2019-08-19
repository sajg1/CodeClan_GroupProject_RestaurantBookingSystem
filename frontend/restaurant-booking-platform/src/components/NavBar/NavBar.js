import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <ul>
    <li>
      <Link to="/" style={{textDecoration : 'none'}}>Bookings</Link>
    </li>
    <li>
      <Link to="/customers" style={{textDecoration : 'none'}}>Customers</Link>
    </li>
  </ul>
)

export default NavBar;
