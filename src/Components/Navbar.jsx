import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create Navbar.css for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">My Website</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
