import ApplyButtonClient from "./ApplyButtonClient";

const getStatus = async(id, applicant) => {
  const res = await fetch(`https://jobnut-ai.vercel.app/api/applyJob?id=${id}&applicant_id=${applicant}`,{
    method: "GET"
  });

  const {applied} = await res.json();
  return applied;
}

export default async function ApplyButton({id, applicant}){

  const status = await getStatus(id, applicant);

  return (
    <ApplyButtonClient id={id} applicant={applicant} status={status}/>
  )
}