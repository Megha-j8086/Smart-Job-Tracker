import React from 'react'

function About() {
  return (
        <section className="about">

      <div className="about-container">

        <h1>About Smart Job Tracker</h1>

        <p className="about-intro">
          Smart Job Tracker is a modern web application designed to help job
          seekers organize, monitor, and manage their job applications in one
          place. Instead of tracking opportunities through spreadsheets or
          scattered notes, our platform provides a structured and efficient way
          to stay on top of your job search.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>🎯 Our Mission</h3>
            <p>
              To simplify the job search journey by providing powerful tools
              that help candidates track applications, manage interviews, and
              stay organized.
            </p>
          </div>

          <div className="about-card">
            <h3>⚡ What We Offer</h3>
            <p>
              Smart dashboards, job tracking, progress insights, and a
              centralized platform to manage your career opportunities
              effectively.
            </p>
          </div>

          <div className="about-card">
            <h3>🚀 Why Choose Us</h3>
            <p>
              Our platform is designed with simplicity and productivity in
              mind, helping you focus more on preparing for interviews and less
              on managing data.
            </p>
          </div>

        </div>

      </div>

    </section>

  )
}

export default About