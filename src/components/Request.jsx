import React from 'react'
import manSits from '../assets/manSitsCar.png'

function Request() {
  return (
    <>
      <div className="request-section relative w-full">
        <div className='flex flex-col gap-[2rem] z-40 py-[125px] pl-[20px] lg:pl-[40px] w-[100%]'>
          <h2 className='request-title text-[#fff] font-semibold leading-[1.1] w-[30%] text-left text-[32px] sm:text-[38px] sm:leading-[1.1] md:text-[38px] md:leading-[1.1] lg:text-[64px] text-center lg:text-left'>Try Rides for business with Yango</h2>
          <p className='request-p text-[16px] text-[#fff] font-medium w-[17%] md:w-[50%] lg:w-[30%]'>Make your employees’ rides traceable and cost-effective.</p>
          <a className='flex items-center justify-center text-[#fff] font-medium bg-[#FF0000] cursor-pointer hover:bg-[#B90606] hover:text-[#BFBAB9] w-[20%] text-[22px] px-[60px] py-[15px] rounded-full ' href="#registration">Leave a request</a>
        </div>
        <div className='flex -z-10 items-center justify-center w-full h-full '>
            <img className='-z-10 w-full h-full absolute left-0 top-0 bottom-0 right-0 object-cover' src={manSits}  />
        </div>

      </div>
    </>
  )
}

export default Request
