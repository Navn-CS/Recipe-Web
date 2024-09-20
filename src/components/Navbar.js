import React from 'react';
import { Link } from 'react-router-dom';
import logo from './recipelogo.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        <img src={logo} alt="Logo" style={{ width: '80px', height: '80px' }} />
        <span style={{ 
          marginLeft: '10px', 
          fontWeight: 'bold', 
          fontSize: '30px',  // Increase the font size
          fontFamily: 'cursive', // Make the font cursive
          color: '#333' // Optional: Change the color if desired
        }}>
          Recipes for You!
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recipe">Recipe</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
