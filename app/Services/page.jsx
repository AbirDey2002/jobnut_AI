import { GiBrain } from "react-icons/gi";
import { FaRegFileCode } from "react-icons/fa";
import { PiLightbulbFill } from "react-icons/pi";
import { DiIllustrator } from "react-icons/di";
import { LuPaintbrush } from "react-icons/lu";
import { FaHandsHelping } from "react-icons/fa";

export default function Services(){
  return (
    <div className="flex flex-col">
      <div className="h-[150px] w-full flex justify-center place-items-center text-4xl font-bold">Our <span className="text-teal-500 ml-5">Services</span></div>
      <div className="grid grid-cols-3 place-items-center gap-y-5 mx-[55px]">
        <div className="hover:shadow-lg shadow-inner h-[220px] w-[450px] rounded-xl flex-col place-items-center justify-center">
          <div className="mt-5 w-fit rounded-full bg-gradient-to-r from-teal-300 to-teal-500 p-4 shadow-md m-auto"><GiBrain className="text-4xl text-white"/></div>
          <div className="w-fit my-2 font-[500] mx-auto"><span>Strategy</span></div>
          <div className="w-fit mx-5 text-xs text-center">Revolutionize hiring with our job portal&apos;s automated ML models. Generate QA and auto-evaluate candidates, ensuring only the best proceed to the final stage. Streamline your hiring process effortlessly.</div>
        </div>
        <div className="hover:shadow-lg shadow-inner h-[220px] w-[450px] rounded-xl flex-col place-items-center justify-center">
          <div className="mt-5 w-fit rounded-full bg-gradient-to-r from-teal-300 to-teal-500 p-4 shadow-md m-auto"><FaRegFileCode className="text-4xl text-white"/></div>
          <div className="w-fit my-2 font-[500] mx-auto"><span>Development</span></div>
          <div className="w-fit mx-5 text-xs text-center">Constantly evolving with cutting-edge models, algorithms, and sleek UI updates. Our backend undergoes continuous enhancement, ensuring top-tier performance and user experience. Stay ahead in hiring with our ever-improving platform</div>
        </div>
        <div className="hover:shadow-lg shadow-inner h-[220px] w-[450px] rounded-xl flex-col place-items-center justify-center">
          <div className="mt-5 w-fit rounded-full bg-gradient-to-r from-teal-300 to-teal-500 p-4 shadow-md m-auto"><PiLightbulbFill className="text-4xl text-white"/></div>
          <div className="w-fit my-2 font-[500] mx-auto"><span>Innovate</span></div>
          <div className="w-fit mx-5 text-xs text-center">Beyond test algorithms, we innovate job recommendations, identifying profile gaps and essential skills. Our platform offers tailored suggestions, guiding candidates towards success. Experience personalized career insights and recommendations, revolutionizing the job search journey.</div>
        </div>
        <div className="hover:shadow-lg shadow-inner h-[220px] w-[450px] rounded-xl flex-col place-items-center justify-center">
          <div className="mt-5 w-fit rounded-full bg-gradient-to-r from-teal-300 to-teal-500 p-4 shadow-md m-auto"><DiIllustrator className="text-4xl text-white"/></div>
          <div className="w-fit my-2 font-[500] mx-auto"><span>AI</span></div>
          <div className="w-fit mx-5 text-xs text-center">Featuring a cutting-edge RAG automated QA generator as the centerpiece, our AI section boasts a versatile array of tools. From a llama LLM-powered chatbot to eye-tracking technology, face verification, and resume checker models, we offer a comprehensive suite of AI-driven functionalities for an enhanced user experience</div>
        </div>
        <div className="hover:shadow-lg shadow-inner h-[220px] w-[450px] rounded-xl flex-col place-items-center justify-center">
          <div className="mt-5 w-fit rounded-full bg-gradient-to-r from-teal-300 to-teal-500 p-4 shadow-md m-auto"><LuPaintbrush className="text-4xl text-white"/></div>
          <div className="w-fit my-2 font-[500] mx-auto"><span>Web Design</span></div>
          <div className="w-fit mx-5 text-xs text-center">Crafted for seamless user experience, our web design integrates meticulously tested user flow charts. Vibrant colors complement full backend support, ensuring unparalleled functionality. Enjoy a best-in-class UI that evolves continuously, setting new standards for user-centric design in progress.</div>
        </div>
        <div className="hover:shadow-lg shadow-inner h-[220px] w-[450px] rounded-xl flex-col place-items-center justify-center">
          <div className="mt-5 w-fit rounded-full bg-gradient-to-r from-teal-300 to-teal-500 p-4 shadow-md m-auto"><FaHandsHelping className="text-4xl text-white"/></div>
          <div className="w-fit my-2 font-[500] mx-auto"><span>Community Support</span></div>
          <div className="w-fit mx-5 text-xs text-center">As part of our future plans, community interaction is paramount. We aspire to offer not only assistance from our team but also foster a collaborative environment where users can support each other. Together, we aim to provide unparalleled support and cultivate a thriving community dedicated to mutual growth.</div>
        </div>        
      </div>    
    </div>
  )
}