import CardUser from "./cardUser";

const FilteredJobs = async ({ query, jobs, user}) => {

  const filteredJobs =  Array.isArray(jobs) ? jobs.filter((job) => {
    return job.companyName.toLowerCase().includes(query.toLowerCase());
  }) : [];

  return (
    <div>
      {filteredJobs.length === 0 ? (
        <div className="m-5 py-20 flex gap-5 justify-center">No Jobs by this Query under this Category</div>
      ):(
        <div className=" mx-20 mt-5 grid grid-cols-4 gap-5 justify-start">
          {filteredJobs.map((job) => (
            <CardUser id={job._id} name={job.companyName} position={job.position} salary={job.salary} desc={job.responsibilities} applicant={user[0]._id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default FilteredJobs