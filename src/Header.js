import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import logoImage from './image/logoimg.png'; // Adjust the path to your image

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#45A29E' }}>
      <Link className="navbar-brand" to="/">
        <img src={logoImage} alt="Logo" width="100px" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navcon" id="navbarNav">
        <ul className="navbar-nav ml-auto" id="navbarhover">
          <li className="nav-item p-2">
            <Link className="nav-link" to="/educator" id="navicon">Home</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link" to="/basicform" id="navicon">Create</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link" to="/view_status" id="navicon">View Status</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link" to="/user_list" id="navicon">User List</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link" to="/answer_page1" id="navicon">View Question</Link>
          </li>
          <li className="nav-item p-2">
            <Link className="nav-link" to="/feedback" id="navicon">Feedback List</Link>
          </li>
          <li className="nav-item dropdown p-2">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navicon"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa-solid fa-user"></i> Profile
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ backgroundColor: '#45A29E' }}>
              <Link className="dropdown-item" to="/profile" style={{ textDecoration: 'none' }}>
                View Profile
              </Link>
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
                onClick={() => console.log('Logout function')} // Replace with your logout function
                style={{ textDecoration: 'none' }}
              >
                Log out
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
