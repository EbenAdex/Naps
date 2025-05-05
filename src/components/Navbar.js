import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'; // if all CSS is in here

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">NAPS SPORT</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/football">Football</Link></li>
        <li><Link to="/basketball">Basketball</Link></li>
        <li><Link to="/favourite">Favourite</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
