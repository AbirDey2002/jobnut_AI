import Image from "next/image"

export default function AboutUs(){
  return (
    <div className="flex flex-col place-items-center mt-20">
      <div className="text-6xl font-[700]"><span>Meet</span><span className="ml-10 mr-7">the</span><span className="text-teal-500">Team</span></div>
      <div className="flex gap-5 w-fit mt-10">
        <div className="h-[350px] w-[270px] bg-gray-200 relative shadow-2xl">
          <Image 
            src="/abir.jpg"
            layout="fill"
            objectFit="cover"
            alt="member"
          />
          <div className="group z-10 absolute flex flex-col h-fit justify-between">
            <div className="bg-black/25 invisible group-hover:visible p-4 text-center text-sm text-white/70 mp-8 h-[256px] transition ease-in-out delay-300 pt-20">
            Meet <span className="text-pink-500">Abir</span>, the guy who made this project come into existence through his backend brilliance paired with a little bit of frontend spice. Without him, this project would look like a bunch of lines written on a piece of paper.
            </div>
            <div className="bg-black/25 invisible group-hover:visible pt-[56px] text-xl w-[270px]">
              <span className="bg-white pl-[89px] pr-[90px] py-3">ABIR <span className="font-semibold">DEY</span></span>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-[270px] bg-gray-200 relative shadow-2xl">
          <Image 
            src="/aditya.jpg"
            layout="fill"
            objectFit="cover"
            alt="member"
          />
          <div className="group z-10 absolute flex flex-col h-fit justify-between">
            <div className="bg-black/25 invisible group-hover:visible p-4 text-center text-sm text-white/70 mp-8 h-[256px] transition ease-in-out delay-300 pt-[60px]">
            Say Hii to <span className="text-orange-500">Adi</span>, the driving force behind our autonomous testing job portal project.
            With expertise in ML models for eye tracking and chatbot development, he is our diligent data collector, crafting datasets from 
            the ground up. His contributions ensure precision in both reports and model training.
            </div>
            <div className="bg-black/25 invisible group-hover:visible pt-[56px] text-xl w-[270px]">
              <span className="bg-white pl-[41px] pr-[42px] py-3">ADITYA <span className="font-semibold">UPADHYAY</span></span>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-[270px] bg-gray-200 relative shadow-2xl">
          <Image 
            src="/divyansh.jpg"
            layout="fill"
            objectFit="cover"
            alt="member"
          />
          <div className="group z-10 absolute flex flex-col h-fit justify-between">
            <div className="bg-black/25 invisible group-hover:visible p-4 text-center text-sm text-white/70 mp-8 h-[256px] transition ease-in-out delay-300">
            Meet <span className="text-pink-500">Abir</span>, the visionary architect of our digital realm, seamlessly blending frontend 
            finesse with backend brilliance. His ingenuity fuels the very essence of our creation, 
            crafting an application that transcends expectation. Through his expertise, our digital dreams 
            materialize into a stunning reality.
            </div>
            <div className="bg-black/25 invisible group-hover:visible pt-[56px] text-xl w-[270px]">
              <span className="bg-white pl-[48px] px-[47px] py-3">DIVYANSH <span className="font-semibold">YADAV</span></span>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-[270px] bg-gray-200 relative shadow-2xl">
          <Image 
            src="/ritwik.jpg"
            layout="fill"
            objectFit="cover"
            alt="member"
          />
          <div className="group z-10 absolute flex flex-col h-fit justify-between">
            <div className="bg-black/25 invisible group-hover:visible p-4 text-center text-sm text-white/70 mp-8 h-[256px] transition ease-in-out delay-300">
            Meet <span className="text-pink-500">Abir</span>, the visionary architect of our digital realm, seamlessly blending frontend 
            finesse with backend brilliance. His ingenuity fuels the very essence of our creation, 
            crafting an application that transcends expectation. Through his expertise, our digital dreams 
            materialize into a stunning reality.
            </div>
            <div className="bg-black/25 invisible group-hover:visible pt-[56px] text-xl w-[270px]">
              <span className="bg-white px-[48px] py-3">RITWIK <span className="font-semibold">AGRAWAL</span></span>
            </div>
          </div>
        </div>
        <div className="h-[350px] w-[270px] bg-gray-200 relative shadow-2xl">
          <Image 
            src="/shraddha.jpg"
            layout="fill"
            objectFit="cover"
            alt="member"
          />
          <div className="group z-10 absolute flex flex-col h-fit justify-between">
            <div className="bg-black/25 invisible group-hover:visible p-4 text-center text-sm text-white/70 mp-8 h-[256px] transition ease-in-out delay-300">
            Meet <span className="text-pink-500">Abir</span>, the visionary architect of our digital realm, seamlessly blending frontend 
            finesse with backend brilliance. His ingenuity fuels the very essence of our creation, 
            crafting an application that transcends expectation. Through his expertise, our digital dreams 
            materialize into a stunning reality.
            </div>
            <div className="bg-black/25 invisible group-hover:visible pt-[56px] text-xl w-[270px]">
              <span className="bg-white pl-[66px] pr-[66px] py-3">M <span className="font-semibold">SHRADDHA</span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}