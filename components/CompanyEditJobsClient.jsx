import Footer from "./Footer"
import Card from "./card"

export default function CompanyEditJobsClient({jobs}){
  return (
    <div>
      {jobs.length === 0 ? (
        <div className="m-5 py-20 flex gap-5 justify-center">No Jobs Posted</div>
      ):(

        <div className=" m-5 mx-20 grid grid-cols-4 gap-5 justify-center">
          {jobs.map((job) => (
            <Card key={job._id} id={job._id} name={job.companyName} position={job.position} salary={job.salary} desc={job.responsibilities} />
          ))}
        </div>
      )}
    <Footer />
    </div>
  )
}