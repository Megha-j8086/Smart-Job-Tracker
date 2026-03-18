import React, { useState } from "react";


function Dashboard() {


  const [user, setUser] = useState({
    name: "Megha",
    email: "john@gmail.com",
    phone: "",
    skills: [],
    experience: "",
    resume: null

  });

  const [editMode, setEditMode] = useState(false);


  const [search, setSearch] = useState("");

  const [jobs] = useState([
    { id: 1, title: "Frontend Developer", company: "Google", skill: "React", exp: 1 },
    { id: 2, title: "Backend Developer", company: "Amazon", skill: "Django", exp: 2 },
    { id: 3, title: "UI/UX Designer", company: "Meta", skill: "UI/UX", exp: 0 },
    { id: 4, title: "Python FullStack Developer", company: "Wipro", skill: "Django", exp: 2 },
    { id: 5, title: "Data Analyst", company: "Wipro", skill: "python", exp: 0 },
    { id: 6, title: "Content Creater", company: "TCS", skill: "Adobe", exp: 0 },
    { id: 7, title: "Mern Stack Developer", company: "Infosys", skill: "MondoDB", exp: 3 },
    { id: 8, title: "Software Engineer", company: "IBM", skill: "c#", exp: 5 },
  ]);


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


  const [appliedJobs, setAppliedJobs] = useState([]);


  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );
  const matchedJobs = jobs.filter((job) => {
    return (
      user.skills.includes(job.skill) &&
      Number(user.experience) >= job.exp
    );
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

  return (
    <div className="dashboard">


      <h1>Welcome, {user.name} 👋</h1>


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
              <p>Skills: {user.skills}</p>
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
            <button onClick={() => alert("Searching...")}>Search</button>
          </div>


          <div className="job-section">


            <div className="job-section">
              <h3> Matched Jobs</h3>

              {matchedJobs.length === 0 ? (
                <p>No matching jobs</p>
              ) : (
                matchedJobs.map((job) => (
                  <div className="job-card" key={job.id}>
                    <div>
                      <h4>{job.title}</h4>
                      <p>{job.company}</p>
                    </div>

                    <div>
                      <p>Skill Match: {job.skill}</p>
                      <button
                        className="apply-btn"
                        onClick={() => handleApply(job)}
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
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
                  </div>
                </div>
              ))
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;