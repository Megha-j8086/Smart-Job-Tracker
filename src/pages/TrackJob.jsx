import React from "react";
import { useNavigate } from "react-router-dom";


function TrackJob() {

  const navigate = useNavigate();

  return (
    <section className="track-job">
      <div className="track-container">

      <div className="track-content">
      <h1>Track Your Job Applications Easily</h1>
      <h4>Land Your Dream Job</h4>

      
      <p>
        Stay organized and never miss an opportunity. Manage all your job
        applications, interviews, and offers in one simple dashboard.
      </p>

    
      <div className="track-card">

        <h3>Start Your Journey</h3>

        <p>
          View all your applications in one place, track progress,
          and stay ahead in your job search journey.
        </p>

        <button onClick={() => navigate("/log")}>
          Start – It’s Free
        </button>
        </div>
        </div>
        
      </div>

    </section>
  );
}

export default TrackJob;
