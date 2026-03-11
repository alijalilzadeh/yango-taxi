import React from 'react'
import budgetLogo from '../assets/budgetLogo.svg'
import dedicatedSupport from '../assets/dedicatedSupport.svg'
import simplePayment from '../assets/simplePayment.svg'

function Benefits() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-8 ">
        <h2 className='font-semibold color-[#000] text-[48px] my-[40px]'>Benefits for business clients</h2>
        <div className="flex items-center justify-center gap-4 w-[65%]">
          <div className="flex flex-col gap-2 bg-[#F8F8F8] rounded-[15px] p-[40px] w-full h-[354px]">
            <img src={budgetLogo} className='w-[66px] h-[66px] mb-[15px]'/>
            <h2 className='color-[#000] font-semibold text-[32px]'>Control your budget</h2>
            <p className='text-[#706666] text-[16px] font-normal'>Set limits and generate online reports for any time period</p>
          </div>
          <div className="flex flex-col gap-2 bg-[#F8F8F8] rounded-[15px] p-[40px] w-full h-[354px]">
            <img src={simplePayment} className='w-[66px] h-[66px]  mb-[15px]'/>
            <h2 className='color-[#000] font-semibold text-[32px]'>Simple
              payment</h2>
            <p className='text-[#706666] text-[16px] font-normal'>All payments are made through the app, you receive one invoice per month</p>
          </div>
          <div className="flex flex-col gap-2 bg-[#F8F8F8] rounded-[15px] p-[40px] w-full h-[354px]">
            <img src={dedicatedSupport} className='w-[66px] h-[66px]  mb-[15px]'/>
            <h2 className='color-[#000] font-semibold text-[32px]'>
              Dedicated
              support</h2>
            <p className='text-[#706666] text-[16px] font-normal'>Corporate clients are handled by a dedicated team and personal manager</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Benefits
