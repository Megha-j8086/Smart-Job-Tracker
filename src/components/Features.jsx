import React from 'react'

function Features() {
  return (
      <section className="features">

  <h2>Your All-In-One Job Tracking Solution</h2>

  <p>
    Manage your job search process seamlessly with powerful
    features designed to help you succeed
  </p>

  <div className="feature-cards">

    <div className="feature-card">
      <div className="icon">📌</div>
      <h3>Track Applications</h3>
      <p>Monitor your job applications by status and deadlines.</p>
    </div>

    <div className="feature-card">
      <div className="icon">📂</div>
      <h3>Stay Organized</h3>
      <p>Keep your all job-related information in one place, neatly organized and easily accessible</p>
    </div>

    <div className="feature-card">
      <div className="icon">📊</div>
      <h3>Gain Insights</h3>
      <p>Analyze job search progress with visual charts.See where you stand and what to improve</p>
    </div>

  </div>

</section>
  )
}

export default Features