import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light" style={{backgroundColor: 'transparent!important', Height:'60px', fontSize : '20px'}}>
  {/* <a className="navbar-brand" href="/" style={{Height:'60px', fontSize : '26px', fontWeight:"bold" }}>Trackerr</a> */}
 <a href="/"> <img alt="trackerr" src="https://i.ibb.co/VLKsW7Z/trackerr-logo.png" style={{height:80,width:80}}></img></a>
  <div id="navbarNav" style={{ paddingLeft: "350px"}}>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="/">Home </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/list">Exercises</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/create">Create Exercise Log</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/user">Create User</a>
      </li>
    </ul>
  </div>
</nav>
    );
  }
}