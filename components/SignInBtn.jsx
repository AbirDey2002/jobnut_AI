'use client'

import { Fragment, useState } from "react"
import Link from "next/link"
import { Dialog, Transition } from "@headlessui/react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"

export default function SignInBtn(){

  const { data:session } = useSession();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  let [isOpen, setIsOpen] = useState(false)

  function closeModal(){
    setIsOpen(false)
    setError("")
  }

  function openModal(){
    setIsOpen(true)
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    setError("")

    try {
      const res = await signIn("credentials", {
        email, password, redirect:false, cache:'no-store',
      });

      if(res.error){
        setError("Invalid Credentials");
        return;
      }

      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({email}),
      });

      const {user} = await resUserExists.json();

      console.log(user.type);
      console.log(user);

      if(user.type === 2){
        router.push("/CompanyDashboard");
      }else{
        router.push("/UserDashboard");
      }

      closeModal();
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      { !session?.user? (
        <div>
          <button type="button" onClick={openModal} className="ml-7 px-4 py-1.5 rounded-full bg-gradient-to-b from-teal-600 to-teal-400 text-white shadow-lg">Sign In</button>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
              <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>
    
              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                    <Dialog.Panel className="flex flex-col justify-between border border-top-width h-fit h-min-[300px] border-top w-full max-w-[400px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900 pb-3">
                        Enter Details
                      </Dialog.Title>
                      <div className="mt-2">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                          <input onChange={(e) => setEmail(e.target.value)} className="px-6 py-2 bg-zinc-200/40 rounded-md" type="text" placeholder="Email"/>
                          <input onChange={(e) => setPassword(e.target.value)} className="px-6 py-2 bg-zinc-200/40 rounded-md" type="text" placeholder="password"/>
                          <div className="mt-4 flex justify-center">
                            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                              Log In
                            </button>
                          </div>                      
                        </form>
                      </div>
    
                      <div className="flex justify-end underline text-xs pt-3"><button onClick={closeModal}><Link href={"/SignUp"}>Haven't Registered yet? Click here to sign up</Link></button></div>
                      { error && (
                        <><hr class="w-[300px] h-1 mx-auto my-4 bg-gray-100 border-0 rounded" /><div className="bg-red-500 w-fit py-1 px-3 rounded-md">{error}</div></>
                      )}
                      </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>      
        </div>):(
          <div>
            <button type="button" onClick={signOut} className="ml-7 px-4 py-1.5 rounded-full bg-red-500 text-white">Sign Out</button>
          </div>
        )}
      
      </div>
  )
}