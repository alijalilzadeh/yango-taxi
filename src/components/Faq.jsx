import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";

function FAQ() {
  const [question,setQuestion] = useState(true);
  
  return (
    <>
      <div id='faqs' className="flex flex-col gap-7 items-center justify-center bg-[#F8F8F8] px-[40px] py-[80px] w-full">
        <h2 className='text-[#000] font-medium text-[48px]'>Frequently Asked Questions</h2>
        <div className="grid grid-cols-2 grid-rows-2  gap-x-8 gap-y-4 w-[90%] items-center justify-center">
          <div className="flex flex-col cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>
              <span className="text-[20px] text-[#2B2B2B] font-medium leading-6 ">What is Yango Rides for business?</span>
            </div>
          </div>

          <div className="flex flex-col  cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>

              <span className='text-[20px] text-[#2B2B2B] font-medium leading-6'>What settings and controls are available?</span>
            </div>
          </div>

          <div className="flex flex-col  cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>

              <span className='text-[20px] text-[#2B2B2B] font-medium leading-6'>What is the difference between this service and the regular Yango app?</span>
            </div>
          </div>

          <div className="flex flex-col  cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>

              <span className='text-[20px] text-[#2B2B2B] font-medium leading-6'>Can employees use the service for personal rides?</span>
            </div>
          </div>

          <div className="flex flex-col  cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>

              <span className='text-[20px] text-[#2B2B2B] font-medium leading-6'>Does Yango Rides for business simplify documentation and reporting?</span>
            </div>
          </div>

          <div className="flex flex-col  cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>

              <span className='text-[20px] text-[#2B2B2B] font-medium leading-6'>Are there any additional subscription fees?</span>
            </div>
          </div>

          <div className="flex flex-col  cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>

              <span className='text-[20px] text-[#2B2B2B] font-medium leading-6'>What is your advantage for the company?</span>
            </div>
          </div>

          <div className="flex flex-col  cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>

              <span className='text-[20px] text-[#2B2B2B] font-medium leading-6'>Are payment plans available?</span>
            </div>
          </div>

          <div className="flex flex-col  cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>

              <span className='text-[20px] text-[#2B2B2B] font-medium leading-6'>How do employees access the service?</span>
            </div>
          </div>

          <div className="flex flex-col  cursor-pointer bg-[#fff] w-full pl-[24px] pt-[20px] pb-[16px] pr-0 rounded-[22px] ">
            <div className="flex gap-4 items-center justify-start w-full">
              <FaPlus className={`text-[20px] transform ${question ? "-rotate-45" : "rotate-0"} transition duration-300  `}   onClick={()=> setQuestion(!question)}/>

              <span className='text-[20px] text-[#2B2B2B] font-medium leading-6'>is VAT included in the cost of rides?</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQ

