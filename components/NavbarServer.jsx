import Navbar from "./Navbar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function NavbarServer(){
  return (
    <Navbar />
  )
}