import React from 'react'
import dashbordimg from '../assets/hero-img.png'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>
        Discover the <br /><span>power of tracking</span>  your job journey
        </h1>

        <p>
        Track job applications, monitor interviews, <br />
        and organize your career journey smarter.
        </p>

        <div className="hero-buttons">  
    
         <Link to="/log">
             <button className="primary-btn">Get Started</button>
            </Link>



           <button className="secondary-btn">Track Jobs</button>
        </div>

      </div>

      <div className="hero-image">
         <img src={dashbordimg} alt="hero"/>
      </div>

    </section>
  )
}

export default Hero