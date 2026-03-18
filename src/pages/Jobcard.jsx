function JobCard({job,onView,onDelete}){

 return(

  <div className="job-card">

   <h3>{job.company}</h3>

   <p>{job.role}</p>

   <span className="status">{job.status}</span>

   <div className="actions">

     <button className="view-btn" onClick={onView}>
       View
     </button>

     <button className="delete-btn" onClick={onDelete}>
       Delete
     </button>

   </div>

  </div>

 )

}

export default JobCard