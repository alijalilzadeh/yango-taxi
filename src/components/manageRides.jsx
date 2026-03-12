import React from 'react'
import girlSits from '../assets/girlSitsCar.png'
function manageRides() {
  return (
    <>
      <div className="flex items-center justify-center gap-6 w-full px-[8rem] py-[8rem]">
        <div className="w-full">
          <img src={girlSits} className='rounded-3xl w-full object-cover' />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-10 w-[80%]">
            <h2 className='text-[42px] font-medium leading-10'>Manage rides from corporate account</h2>
            <div className="flex flex-col gap-2 w-[80%]">
              <p className='text-[16px] text-[#666666] font-normal'>Set limits on total budgets, maximum fares, service classes, and more</p>
              <p className='text-[16px] text-[#666666] font-normal'>Control employee access and usage</p>
              <p className='text-[16px] text-[#666666] font-normal'>Generate electronic documents, invoices, and customizable reports</p>
            </div>
            <a className='w-[70%] flex items-center justify-center text-[#fff] font-medium bg-[#FF0000] cursor-pointer hover:bg-[#FF4C4C] hover:text-[#FFFBFB] whitespace-nowrap  text-[20px] px-[60px] py-[13px] rounded-full' href='#registration'>Become a corporate client</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default manageRides
