import React from 'react'

function Registration() {
  return (
    <>
      <div id='registration' className="flex justify-between w-full px-[60px]">
        <div className="w-full">
          <h2 className=' text-left text-[64px] text-[#000] font-medium leading-15'>Request a call to get started today</h2>
        </div>
        <div className="flex flex-col gap-4 w-[80%]">
          <h2 className="text-[#000] text-[32px] font-medium">Company registration</h2>
          <div className="flex flex-col gap-8 w-[80%]">
            <div className="flex flex-col gap-2">
              <span className='text-[12px] font-medium'>Company name</span>
              <input required type="text" placeholder='Yango Rides for Business' className='px-[13px] py-[12px] border-1 border-[#CCCCCC] rounded-[10px] w-full border-1 focus:border-[#FA3E2C] focus:outline-none' />
            </div>
            <div className="flex gap-5 w-full">
              <div className="flex flex-col gap-2 w-full">
                <span className='text-[12px] font-medium'>First name</span>
                <input required type="text" placeholder='Joe' className='w-full px-[13px] py-[12px] border-1 border-[#CCCCCC] rounded-[10px] border-1 focus:border-[#FA3E2C] focus:outline-none' />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <span className='text-[12px] font-medium'>Last name</span>
                <input required type="text" placeholder='Johnson' className='w-full px-[13px] py-[12px] border-1 border-[#CCCCCC] rounded-[10px] border-1 focus:border-[#FA3E2C] focus:outline-none' />
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col gap-2 w-full">
                <span className='text-[12px] font-medium'>Phone number</span>
                <input required type="text" placeholder='Johnson' className='w-full px-[13px] py-[12px] border-1 border-[#CCCCCC] rounded-[10px] border-1 focus:border-[#FA3E2C] focus:outline-none' />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <span className='text-[12px] font-medium'>Email</span>
                <input required type="text" placeholder='example@yango.com' className='w-full px-[13px] py-[12px] border-1 border-[#CCCCCC] rounded-[10px] border-1 focus:border-[#FA3E2C] focus:outline-none' />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[2rem] justify-start items-start w-[80%]">
            <p>By clicking "Create account" I agree to processing my personal data for the purposes of handling my request. To learn more about processing of your data please consult to our <a href='' className='text-[#627CAA]'>Privacy notice</a> </p>
            <button className='w-[50%] flex items-center justify-center text-[#fff] font-medium bg-[#FF0000] cursor-pointer hover:bg-[#FF4C4C] hover:text-[#FFFBFB] whitespace-nowrap  text-[18px] px-[60px] py-[13px] rounded-2xl' type='submit'>Create account</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
