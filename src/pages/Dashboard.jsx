import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function Dashboard() {
const location =useLocation()
const loggedUser =location.state

  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    skills: [],
    experience: "",
    resume: null

  });
 useEffect(() => {
  if (loggedUser) {
    setUser((prev) => ({
      ...prev,
      name: loggedUser.name,
      email: loggedUser.email
    }));
  }
}, [loggedUser]);

  const [editMode, setEditMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [newJob, setNewJob] = useState({
  title: "",
  company: "",
  skill: "",
  exp: ""
});


  const [search, setSearch] = useState("");

  const [jobs, setJobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Google", skill: "React", exp: 1, description: "Build UI using React, work with APIs, improve performance."},
    { id: 2, title: "Backend Developer", company: "Amazon", skill: "Django", exp: 2 , description: "Develop REST APIs, handle database, ensure security."},
    { id: 3, title: "UI/UX Designer", company: "Meta", skill: "UI/UX", exp: 0, description: "Develop REST APIs, handle database, ensure security." },
    { id: 4, title: "Python FullStack Developer", company: "Wipro", skill: "Django", exp: 2 ,description: "Work on frontend and backend using Python and Django."},
    { id: 5, title: "Data Analyst", company: "Wipro", skill: "python", exp: 0,description: "Work on frontend and backend using Python and Django." },
    { id: 6, title: "Content Creater", company: "TCS", skill: "Adobe", exp: 0,description: "Analyze data, create reports, and visualize insights." },
    { id: 7, title: "Mern Stack Developer", company: "Infosys", skill: "MondoDB", exp: 3,  description: "Develop full-stack apps using MongoDB, Express, React, Node." },
    { id: 8, title: "Software Engineer", company: "IBM", skill: "c#", exp: 5 ,  description: "Develop full-stack apps using MongoDB, Express, React, Node."},
    { id: 9, title: "Python Developer", company: "IBM", skill: "python", exp: 1,description: "Develop enterprise applications using C# and .NET." },
    { id: 10, title: "Software Engineer", company: "TCS", skill: "C#", exp: 6,description: "Build backend systems using Python." },
  ]);
   const [selectedJob, setSelectedJob] = useState(null);

  const skillsList = [
    "React",
    "Django",
    "Python",
    "Java",
    "UI/UX",
    "Node.js",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript"

  ];

 const updateStatus = (id, newStatus) => {
  setAppliedJobs((prevJobs) =>
    prevJobs.map((job)=>
      job.id === id ? { ...job, status: newStatus } : job
  )
  );
};
  const [appliedJobs, setAppliedJobs] = useState([]);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.skill.toLowerCase().includes(search.toLowerCase()) ||
    job.company.toLowerCase().includes(search.toLowerCase())
  );

  const matchedJobs = jobs.filter((job) => {
    return (
      user.skills.map(s => s.toLowerCase()).includes(job.skill.toLowerCase()) &&
      Number(user.experience) >= job.exp
    );
  });

 const otherJobs = jobs.filter((job) => {
  return !user.skills
    .map(s => s.toLowerCase())
    .includes(job.skill);
});

  const handleApply = (job) => {


    const alreadyApplied = appliedJobs.find(j => j.id === job.id);

    if (alreadyApplied) {
      alert("Already Applied ❗");
      return;
    }

    setAppliedJobs([
      ...appliedJobs,
      { ...job, status: "Applied" }
    ]);
  };


  const handleSave = () => {
    setEditMode(false);
  };
 

  const totalApplications = appliedJobs.length;
  const interviews = appliedJobs.filter(j => j.status === "Interview").length;
  const offers = appliedJobs.filter(j => j.status === "Offer").length;

  const handleSkillChange = (skill) => {
    if (user.skills.includes(skill)) {
      setUser({
        ...user,
        skills: user.skills.filter((s) => s !== skill)
      });
    } else {
      setUser({
        ...user,
        skills: [...user.skills, skill]
      });
    }
  };

  const handleDelete = (id)=>{
    setAppliedJobs(
      appliedJobs.filter((job)=>job.id!==id)
    )
  }
  const handleAddJob = () => {

  if (!newJob.title || !newJob.company) {
    alert("Please fill all fields");
    return;
  }

  const job = {
    id: Date.now(),
    title: newJob.title,
    company: newJob.company,
    skill: newJob.skill,
    exp: Number(newJob.exp),
    description:(newJob.description)
  };

  setJobs([...jobs, job]);

  // reset form
  setNewJob({
    title: "",
    company: "",
    skill: "",
    exp: "",
    description:""
  });

  setShowPopup(false);
};
  
  return (
    <div className="dashboard">


      <h1>Welcome, {user.name || "user"} </h1>


      <div className="stats">
        <div className="card">Applications <h2>{totalApplications}</h2></div>
        <div className="card">Interviews <h2>{interviews}</h2></div>
        <div className="card">Offers <h2>{offers}</h2></div>
      </div>

      <div className="main-grid">

        <div className="profile-card">

          {editMode ? (
            <>
              <label>Name</label>
              <input
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <label >Email </label>
              <input
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
              <label >Phone Number</label>
              <input
                value={user.phone}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
              <div className="skills-box">
                <label>Skills</label>

                {skillsList.map((skill, index) => (
                  <div key={index} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={user.skills.includes(skill)}
                      onChange={() => handleSkillChange(skill)}
                    />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
              <label>Experience</label>
              <input
                type="number"
                placeholder="Years of experience"
                value={user.experience}
                onChange={(e) => setUser({ ...user, experience: e.target.value })}
              />
              <label>Upload File</label>
              <input
                type="file"
                onChange={(e) => setUser({ ...user, resume: e.target.files[0] })}
              />
              <button onClick={() => setEditMode(false)}>Save</button>



            </>
          ) : (
            <>
              <h3>{user.name}</h3>
              <p>{user.email}</p>
              <p>Skills: {user.skills.join(",")}</p>
              <p>Experience: {user.experience} years</p>

              {user.resume && <p> {user.resume.name}</p>}

              <button onClick={() => setEditMode(true)}>Edit Profile</button>
            </>
          )}

        </div>
          
    
        <div className="right-section">


          <div className="search-box">
            <input
              type="text"
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => console.log(filteredJobs)}>Search</button>
       
          <button
            className="addbtn"
            onClick={() => setShowPopup(true)}
          >
            + Add Job
          </button>   </div>

          <div className="job-section">
            {search !== "" && (
              <div className="job-section">
                <h3>Search Results</h3>

                {filteredJobs.length === 0 ? (
                  <p>No jobs found</p>
                ) : (
                  filteredJobs.map((job) => (
                    <div className="job-card" key={job.id}>
                      <div>
                        <h4>{job.title}</h4>
                        <p>{job.company}</p>
                      </div>

                      <div>
                        <p>Skill: {job.skill}</p>
                        <button  className="apply-btn"
                          onClick={() => handleApply(job)}>
                        
                          Apply
                        </button>
                        <button  className="view-btn"  onClick={() => setSelectedJob(job)}>
                                    View
                                  </button>
                       
                      </div>
    

                    </div>

                  ))
                )}
              </div>
            )}

            {search === "" && (
              <div className="job-section">
                <h3>Matched Jobs</h3>

                {matchedJobs.length === 0 ? (
                  <p>No matching jobs</p>
                ) : (
                  matchedJobs.map((job) => (
                    <div className="job-card" key={job.id} 
                    >
                      <div>
                        <h4>{job.title}</h4>
                        <p>{job.company}</p>
                      </div>

                      <div>
                        <p>Skill Match: {job.skill}</p>
                        <button className="match-btn" onClick={() => handleApply(job)}>Apply</button>
                        <button className="view-btn" onClick={() => setSelectedJob(job)}>
                        View
                      </button>
                      </div>
                    
                    </div>
                  ))
                )}
              </div>
            )}
              


            <div className="job-section">
              <h3>Related  Jobs</h3>

              {otherJobs.length === 0 ? (
                <p>No other jobs available</p>
              ) : (
                otherJobs.map((job) => (
                  <div className="job-card" key={job.id}>
                    <div>
                      <h4>{job.title}</h4>
                      <p>{job.company}</p>
                    </div>

                    <div>
                      <p className="not-match">Skill Required: {job.skill}</p>
                      <button
                        className="apply-btn"
                        onClick={() => handleApply(job)}
                      >
                        Apply Anyway
                      </button>
                     <button className="view-btn"onClick={() => setSelectedJob(job)}>
                     
                    View
                  </button>
                    </div>
                  </div>
                ))
              )}
            </div>
            


            <div className="job-section">
              <h3>Applied Jobs</h3>

              {appliedJobs.length === 0 ? (
                <p>No applications yet</p>
              ) : (
                appliedJobs.map((job) => (
                  <div className="job-card" key={job.id}>
                    <div>
                      <h4>{job.title}</h4>
                      <p>{job.company}</p>
                    </div>

                    <div>
                      <span className="status applied">
                        {job.status}
                      </span>
                      <div className="progress-bar">
                      <span className={job.status === "Applied" ? "active" : ""}>Applied</span>
                      <span className={job.status === "Interview" ? "active" : ""}>Interview</span>
                      <span className={job.status === "Offer" ? "active" : ""}>Offer</span>
                    </div>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(job.id)}
                        >
                          Delete
                          
                          </button>
                          {job.status=== "Applied" && (
                        <button className="btns" onClick={() => updateStatus(job.id, "Interview")}>
                            Move to Interview
                          </button> )}

                          {job.status === "Interview" && (
                          <button className="btns" onClick={() => updateStatus(job.id, "Offer")}>
                             Offer Received
                          </button> )}
                          <button className="btn-reject" onClick={() => updateStatus(job.id, "Rejected")}>
                          Reject
                        </button>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>
        </div>

      </div>
      {selectedJob && (
    <div className="popup">
    <div className="popup-content">

      <h2>{selectedJob.title}</h2>
      <p><b>Company:</b> {selectedJob.company}</p>
      <p><b>Skill:</b> {selectedJob.skill}</p>
      <p><b>Experience:</b> {selectedJob.exp} years</p>

      <p><b>Description:</b></p>
      <p>{selectedJob.description||"No description available for this job."}</p>

      <button className="close-btn" onClick={() => setSelectedJob(null)}>
        Close
      </button>

    </div>
  </div>
)}

       {showPopup && (
  <div className="popup">
    <div className="popup-content">
      <h3>Add New Job</h3>

      <input
        type="text"
        placeholder="Job Title"
        value={newJob.title}
        onChange={(e) =>
          setNewJob({ ...newJob, title: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Company"
        value={newJob.company}
        onChange={(e) =>
          setNewJob({ ...newJob, company: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Skill"
        value={newJob.skill}
        onChange={(e) =>
          setNewJob({ ...newJob, skill: e.target.value })
        }
      />

      <input
        type="number"
        placeholder="Experience"
        value={newJob.exp}
        onChange={(e) =>
          setNewJob({ ...newJob, exp: e.target.value })
        }
      />

      <button className="btns" onClick={handleAddJob}>
        Save
      </button>

      <button className="btns" onClick={() => setShowPopup(false)}>
        Cancel
      </button>
    </div>
  
    
  </div>
  
)}
      </div>
    
      );
       
}

      export default Dashboard;