import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
function Question() {
  return (
    <>
      <div className="flex items-center justify-center w-full my-[4rem]">
        <div className="flex flex-col gap-7 items-center justify-center w-[90%] bg-[#000000] rounded-3xl py-[60px]">
          <h2 className="text-[#fff] font-medium text-[64px] tracking-tight">Still have questions?</h2>
          <p className='text-[20px] text-[#fff] tracking-tight'>Request a call and our manager will contact you with all the details</p>
          <div className="flex items-center justify-center gap-6 bg-[#fff] px-[60px] py-[6px] rounded-4xl hover:bg-[#B3B3B3] hover:text-[#1A1A1A] cursor-pointer transition duration-300 ">
              <span className='font-medium text-[20px]'>Request a consultation</span>
              <IoIosArrowRoundForward className='text-[#000] text-[45px]'/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Question
