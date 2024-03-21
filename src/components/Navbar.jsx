import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky top-0 z-10 bg-gray-800">
        <div className="container-fluid">
          <Link className="navbar-brand text-white font-sans font-bold" to="/Newsy/">Newsy</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon bg-white p-2 border-none rounded focus:border-none"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 lg:mx-10 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link text-gray-400 font-medium lg:mx-1 hover:text-blue-300" to="/Newsy/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-gray-400 font-medium lg:mx-1 hover:text-blue-300" to="/Newsy/entertainment">Movies</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-gray-400 font-medium lg:mx-1 hover:text-blue-300" to="/Newsy/sport">Sport</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-gray-400 font-medium lg:mx-1 hover:text-blue-300" to="/Newsy/business">Business</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link text-gray-400 font-medium lg:mx-1 hover:text-blue-300" to="/Newsy/science">Science</Link>
              </li>
             
            </ul>
          </div>
        </div>
        
      </nav>
    );
  }
}
