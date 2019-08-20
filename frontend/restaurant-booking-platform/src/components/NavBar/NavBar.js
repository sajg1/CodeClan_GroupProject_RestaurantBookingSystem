import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo1 from '../../style/bb.png'
import logo2 from '../../style/cb.png'

const NavBar = () => (
  <div className="nav">
  <ul>
    <li>
      <Link to="/">test1
      <img src={logo1} className="logo1" alt="logo1"/>
      </Link>
    </li>
    <li>
      <Link to="/customers">test2
      <img src={logo2} className="logo2" alt="logo2"/>
      </Link>
    </li>
  </ul>
  </div>
)

export default NavBar;
