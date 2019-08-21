import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo1 from '../../style/bb.png'
import logo2 from '../../style/cb.png'

const NavBar = () => (
  <div className="nav">
    <p>
      <Link to="/">
      <img src={logo1} className="logo1" alt="logo1"/>
      </Link>
    </p>
    <p>
      <Link to="/customers">
      <img src={logo2} className="logo2" alt="logo2"/>
      </Link>
    </p>
  </div>
)

export default NavBar;
