import React from 'react'
import { Link } from 'react-router-dom'

function Cta() {
  return (
      <section className="cta">
      <div className="cta-container">
      <h2>Ready to Land Your Dream Job?</h2>
      <p>Sign up now and track your way to success</p>
      <Link to="/log">  
      <button>Get Started – It's Free</button>
       </Link>
      </div>
    </section>
  
  )
}

export default Cta