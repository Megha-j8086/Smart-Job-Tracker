import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
     <nav className="navbar">
      <h2 className="logo">SMARTJOB TRACKER</h2>

      <ul className="nav-links">
        <li> <Link to="/">Home</Link></li>
        <li> <Link to="/trackjob">Track Jobs</Link></li>
        <li> <Link to="/feature">Features</Link></li>
    
        <li> <Link to="/about">About Us</Link></li>
      </ul>
      <Link to="/log">
      <button className="login-btn">Log In</button>
      </Link>
    </nav>
  )
}

export default Navbar
