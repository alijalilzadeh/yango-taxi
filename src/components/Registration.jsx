import React from 'react'

function Registration() {
  return (
    <>
      <div className="flex justify-between w-full px-[60px]">
        <div className="w-full">
          <h2 className=' text-left text-[64px] text-[#000] font-medium leading-15'>Request a call to get started today</h2>
        </div>
        <div className="flex flex-col gap-4 w-[80%]">
          <h2 className="text-[#000] text-[32px] font-medium">Company registration</h2>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2">
              <span className='text-[12px] font-medium'>Company name</span>
              <input type="text" placeholder='Yango Rides for Business' className='px-[13px] py-[12px] border-1 border-[#CCCCCC] rounded-[10px]' />
            </div>
            <div className="flex gap-5">
              <div className="flex flex-col gap-2">
              <span className='text-[12px] font-medium'>First name</span>
              <input type="text" placeholder='Joe' className='w-full px-[13px] py-[12px] border-1 border-[#CCCCCC] rounded-[10px]' />
            </div>

            <div className="flex flex-col gap-2">
              <span className='text-[12px] font-medium'>Last name</span>
              <input type="text" placeholder='Johnson' className='w-full px-[13px] py-[12px] border-1 border-[#CCCCCC] rounded-[10px]' />
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
