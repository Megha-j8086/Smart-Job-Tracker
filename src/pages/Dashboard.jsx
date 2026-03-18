import React, { useState } from "react"
import JobCard from "./JobCard"


function Dashboard(){

 const [jobs,setJobs] = useState([
   {
    id:1,
    company:"Google",
    role:"Software Engineer",
    status:"Applied",
    date:"Mar 12"
   },
   {
    id:2,
    company:"Amazon",
    role:"Frontend Developer",
    status:"Interview",
    date:"Mar 10"
   }
 ])

 const [formOpen,setFormOpen] = useState(false)
 const [selectedJob,setSelectedJob] = useState(null)

 const [company,setCompany] = useState("")
 const [role,setRole] = useState("")
 const [status,setStatus] = useState("")

 const handleSubmit = ()=>{

  const newJob={
    id:Date.now(),
    company,
    role,
    status
  }

  setJobs([...jobs,newJob])

  setCompany("")
  setRole("")
  setStatus("")
  setFormOpen(false)

 }

 const handleDelete=(id)=>{
  setJobs(jobs.filter(job=>job.id !== id))
 }

 return(

  <div className="dashboard">

   <h1>Job Tracker Dashboard</h1>

   {/* Stats */}

   <div className="stats">

     <div className="card">Applications: {jobs.length}</div>

     <div className="card">
       Interviews: {jobs.filter(j=>j.status==="Interview").length}
     </div>

     <div className="card">
       Offers: {jobs.filter(j=>j.status==="Offer").length}
     </div>

     <div className="card">
       Rejected: {jobs.filter(j=>j.status==="Rejected").length}
     </div>

   </div>

   {/* Add Button */}

   <button
   className="add-btn"
   onClick={()=>setFormOpen(true)}
   >
   + Add Job
   </button>

   {/* Job Cards */}

   <div className="jobs-grid">

    {jobs.map((job)=>(
      <JobCard
        key={job.id}
        job={job}
        onView={()=>setSelectedJob(job)}
        onDelete={()=>handleDelete(job.id)}
      />
    ))}

   </div>


   {/* View Popup */}

   {selectedJob && (

    <div className="popup">

      <h3>{selectedJob.company}</h3>
      <p>Role: {selectedJob.role}</p>
      <p>Status: {selectedJob.status}</p>

      <button className="close-btn" onClick={()=>setSelectedJob(null)}>
        Close
      </button>

    </div>

   )}


   {/* Add Job Form */}

   {formOpen && (

    <div className="popup">

     <h3>Add Job</h3>

     <input
     placeholder="Company"
     value={company}
     onChange={(e)=>setCompany(e.target.value)}
     />

     <input
     placeholder="Role"
     value={role}
     onChange={(e)=>setRole(e.target.value)}
     />

     <select
     value={status}
     onChange={(e)=>setStatus(e.target.value)}
     >
       <option>Applied</option>
       <option>Interview</option>
       <option>Offer</option>
       <option>Rejected</option>
     </select>

     <button className="save-btn" onClick={handleSubmit}>
       Save Job
     </button>

     <button className="cancel-btn"onClick={()=>setFormOpen(false)}>
       Cancel
     </button>

    </div>

   )}

  </div>

 )

}

export default Dashboard