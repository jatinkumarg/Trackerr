import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav class="navbar sticky-top navbar-expand-lg navbar-light" style={{backgroundColor: 'transparent!important', Height:'60px', fontSize : '20px'}}>
  <a class="navbar-brand" href="/" style={{Height:'60px', fontSize : '26px', fontWeight:"bold" }}>Trackerr</a>
  <div class=" navbar-collapse" id="navbarNav" style={{ paddingLeft: "10px"}}>
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/">Exercises</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/create">Create Exercise Log</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/user">Create User</a>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}


//rough
/*
<nav className="navbar navbar-dark bg-primary" style={{Height:'60px', fontSize : '16px'}}>
        <Link to="/" className="navbar-brand">Trackerr</Link>
        <div className="collpase navbar-collapse" style={{paddingRight: '0',paddingLeft: '0', textAlign: 'right'}}>
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Exercise Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
        </div>
      </nav>
      */