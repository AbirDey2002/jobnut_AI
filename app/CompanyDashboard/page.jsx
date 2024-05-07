import CompanyDashboardClient from "@/components/CompanyDashboardClient";
import { getServerSession } from "next-auth";

export default async function CompanyDashboard(){

  const session = await getServerSession();
  const email = session?.user?.email;

  return (
    <CompanyDashboardClient sessionEmail={email}/>
  )
}