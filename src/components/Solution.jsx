import React from 'react'
import paymentYango from '../assets/yangoPayment.png'

function Solution() {
  return (
    <>
      <div className=" w-full flex items-center justify-center py-[160px]">
        <div className=" flex justify-between bg-[#F8F8F8] px-[60px]  pb-0 rounded-[45px] w-[90%] h-full items-center">
          <div className="flex flex-col justify-between gap-[7rem] w-[50%]">
            <h2 className='text-[48px] color-[#000] font-medium leading-12'>A simple solution for your team</h2>
            <p className='text-[#666]'>Employees can book rides through the Yango app and have expenses charged to the company account.</p>
          </div>
          <div className="flex items-center justify-center w-[40%]  h-full">
            <img src={paymentYango} className='w-full  object-cover'/>
          </div>

        </div>
      </div>
    </>
  )
}

export default Solution
