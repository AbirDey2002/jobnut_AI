import Image from "next/image";
import { Roboto } from "next/font/google";
import { IoSearchCircle } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { TiStarFullOutline, TiStarOutline, TiStarHalfOutline } from "react-icons/ti";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500','700'],
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <div className="h-[400px] gap-1 flex flex-col place-items-center pt-[70px]">
        <div className="pb text-lg font-medium text-gray-500">Empower Your Journey</div>
        <div className="pb-1 text-6xl bg-gradient-to-r from-teal-600 to-teal-400 inline-block text-transparent bg-clip-text">Explore Limitless</div>
        <div className="pb-3 text-6xl">Opportunities with JOBNUT.AI</div>
        <div className="pb-4 text-sm font-medium text-gray-500">Discover Opportunities, Connect with Employers, Prove your Skillset and Elevate your Professional Journey</div>
        <form className="flex gap-4"><input className="py-2 px-3 rounded-full w-[270px] bg-zinc-300/20" placeholder="Search Job ..."></input><button className="flex gap-1 py-2 bg-gradient-to-b from-teal-600 to-teal-400 px-3 text-white rounded-full"><IoSearchCircle className="text-white text-3xl"/><span className="pt-[3px]">Search</span></button></form>
      </div>
      <div className="m-5">
        <div className="bg-teal-400/15 h-[300px] rounded-2xl flex justify-between overflow-hidden">
          <div className="flex flex-col pt-5 pl-5 gap-1 ">
            <div className="text-3xl font-[500] pb-2 ">Upload Your Vacancy Now!</div>
            <div className="text-gray-500 font-[500] pb-2">Discover Opportunities, Connect with Employers Prove your Skillset <br></br>and Elevate your Professional Journey</div>
            <div className="pt-2"><button className="flex gap-2 bg-gradient-to-b from-teal-600 to-teal-400 py-2 pl-3 pr-2 rounded-full"><span className="text-white">Upload Vacancy</span><FaArrowAltCircleRight className="text-white text-2xl"/></button></div>
          </div>
          <div className="rotate-3 pt-14 -skew-x-3 pr-20">
          <Image
            className="transition transform-gpu hover:translate-y-2 hover:scale-110 delay-300 ease-in-out"
            src="/jobs-showcase.png"
            width={700}
            height={500}
            alt="Job Postings"
          />
          </div>
        </div>
      </div>
      <div className=" h-[925px] place-items-center flex flex-col">
        <div className="pt-[100px] text-4xl font-[500]">Hear What Our</div>
        <div className="text-4xl font-[500]">Community <span className="bg-gradient-to-r from-teal-400 to-teal-600 inline-block text-transparent bg-clip-text">Has to Say!</span></div>
        <div className="flex flex-col place-items-center">
          <Image
            className="pt-[50px]"
            src="/world-map.png"
            width={1100}
            height={700}
            quality={100}
            alt="Picture of the author"
          />
          <div className="z-10 absolute pt-[100px] flex gap-3">
            <div className="flex flex-col gap-3">
              <div className="h-[300px] w-[300px] bg-white/95 rounded-xl shadow-xl">
                <div className="flex pl-7 pt-3 gap-3">
                  <TiStarFullOutline className="text-2xl text-pink-500"/>
                  <TiStarFullOutline className="text-2xl text-pink-500"/>
                  <TiStarFullOutline className="text-2xl text-pink-500"/>
                  <TiStarFullOutline className="text-2xl text-pink-500"/>
                  <TiStarHalfOutline className="text-2xl text-pink-500"/>
                </div>
                <div className="px-7 pt-5 text-sm">
                  JOBNUT.AI&apos;s user friendly interface and personalized job recommendations set it apart. The ease to use coupled with a high success rate, made JOBNUT my go-to job portal. I secured a new position in record time, thanks to JOBNUT.AI 
                </div>
                <div className="px-7 pt-5 flex justify">
                  <div className="border-2 border-pink-500 rounded-full w-fit px-3 py-1 font-bold text-3xl bg-pink-500 text-white">D</div>
                  <div className="pl-10"><span className="font-[500]">Deepak Jago</span><br></br> 34 Mar 2024</div>
                </div>
              </div>
                <div className="h-[200px] w-[300px] bg-white/95 rounded-xl shadow-xl">
                  <div className="flex pl-7 pt-3 gap-3">
                    <TiStarFullOutline className="text-2xl text-green-500"/>
                    <TiStarFullOutline className="text-2xl text-green-500"/>
                    <TiStarFullOutline className="text-2xl text-green-500"/>
                    <TiStarFullOutline className="text-2xl text-green-500"/>
                    <TiStarOutline className="text-2xl text-green-500"/>
                  </div>
                  <div className="px-7 pt-5 text-sm">
                    &quot;Unlocking exclusive opportunities: JOBNUT&apos;s seamless connection with top employers, validated by our numeric social approval, make career success a reality. proud to be a part of this thriving community&quot; 
                  </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-[230px] w-[250px] bg-white/95 rounded-xl shadow-xl">
                <div className="flex pl-5 pt-3 gap-3">
                  <TiStarFullOutline className="text-2xl text-yellow-500"/>
                  <TiStarFullOutline className="text-2xl text-yellow-500"/>
                  <TiStarFullOutline className="text-2xl text-yellow-500"/>
                  <TiStarFullOutline className="text-2xl text-yellow-500"/>
                  <TiStarOutline className="text-2xl text-yellow-500"/>
                </div>
                <div className="px-5 pt-4 text-sm">
                  &quot;I appreciate JOBNUT&apos;s commitment to professional growth. The resources available, from articles to courses, have significantly enhanced my skills. Jobnut isn&apos;t just a job portal, it&apos;s a platform that invests in your success!&quot;
                </div>
              </div>
              <div className="h-[300px] w-[250px] bg-white/95 rounded-xl shadow-xl">
                <div className="flex pl-5 pt-3 gap-3">
                  <TiStarFullOutline className="text-2xl text-teal-500"/>
                  <TiStarFullOutline className="text-2xl text-teal-500"/>
                  <TiStarFullOutline className="text-2xl text-teal-500"/>
                  <TiStarFullOutline className="text-2xl text-teal-500"/>
                  <TiStarOutline className="text-2xl text-teal-500"/>
                </div>
                <div className="px-5 pt-4 text-sm">
                  &apos;I appreciate JOBNUT&apos;s commitment to professional growth. The resources available, from articles to courses, have significantly enhanced my skills. Jobnut isn&apos;t just a job portal, it&apos;s a platform that invests in your success!&apos;
                </div>
                <div className="px-7 pt-5 flex justify">
                  <div className="border-2 border-teal-500 rounded-full w-fit px-3 py-1 font-bold text-3xl bg-teal-500 text-white">A</div>
                  <div className="pl-10"><span className="font-[500]">Alisha M.</span><br></br> 23 april 2024</div>
                </div>
              </div>
            </div>         
          </div>
        </div>
      </div>
    </div>
  );
}
