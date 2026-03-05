import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='container'>
        <div className="nav-container">

          <div className="logo">
            <div className="logo-img">
              <img src={logo} alt="logo" />
            </div>
            <h2>Smart Job Tracker</h2>
          </div>

        </div>
      </div>

      <ul className='nav-links'>
        <li>Features</li>
        <li>How it works</li>
        <li>Login</li>
        <li>About</li>
      </ul>

     

    </nav>
  )
}

export default Navbar