import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/bookings">Bookings</Link>
    </li>
    <li>
      <Link to="/guests">Guests</Link>
    </li>
  </ul>
)

export default NavBar;
