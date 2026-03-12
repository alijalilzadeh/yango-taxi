import React, { useState } from 'react'
import logo from '../assets/YangoNavbarLogo.svg'
import appStore from '../assets/appStore.svg'
import googlePlay from '../assets/googlePlay.svg'
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function Footer() {
  const [hover, setHover] = useState(false) 

  return (
    <div className="flex flex-col bg-[#000] w-full px-[32px] py-[40px] gap-8">
      <div className="flex justify-between">
        <div className="flex flex-col gap-8">
          <img src={logo} className='w-[122px]' alt="Yango Logo" />
          <div className="flex flex-col gap-2">
            <a href="https://apps.apple.com/us/app/yango-taxi-food-delivery/id1437157286" target='_blank' rel="noreferrer">
              <img src={appStore} alt="App Store" />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.yandex.yango" target='_blank' rel="noreferrer">
              <img src={googlePlay} alt="Google Play" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <a href='https://yango.com/legal/app-permissions_en/?utm_campaign=AZ-BA-BA_brand_en&utm_category=CjwKCAjwpcTNBhA5EiwAdO1S9u5TN8_HhuKIE8mnEZAoHNrThNA09hg1bFcIKwgAKqCuYusD3t2mmxoCkDwQAvD_BwE&utm_source=google_re' target='_blank' className="text-[#fff] text-[16px] font-medium hover:text-[#B3B3B3] transition duration-100">About us</a>
          <a href='https://yango.com/legal/app-permissions_en/?utm_campaign=AZ-BA-BA_brand_en&utm_category=CjwKCAjwpcTNBhA5EiwAdO1S9u5TN8_HhuKIE8mnEZAoHNrThNA09hg1bFcIKwgAKqCuYusD3t2mmxoCkDwQAvD_BwE&utm_source=google_re' target='_blank' className="text-[#fff] text-[16px] font-medium hover:text-[#B3B3B3] transition duration-100">App Permissions</a>
          <a href='' className="text-[#fff] text-[16px] font-medium hover:text-[#B3B3B3] transition duration-100">Privacy Policy</a>
          <a href='' className="text-[#fff] text-[16px] font-medium hover:text-[#B3B3B3] transition duration-100">Registration form</a>

          <div onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)} className="flex items-center justify-start mt-[20px] gap-2">
            <TbWorld
              size={40}
              className="cursor-pointer text-white border-2 border-white rounded-full p-[5px]"
            />
            {hover ? (
              <IoIosArrowUp className="text-white cursor-pointer" />
            ) : (
              <IoIosArrowDown className="text-white cursor-pointer" />
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className='text-[13px] font-normal text-[#666666]'>© 2026 Ridetech Azerbaijan LLC</p>
        <p className='text-[13px] font-normal text-[#666666]'>
          Yango Rides for business is a service for corporate customers.
          Yango is an informational service and not a transportation or taxi services provider. Transportation services are provided by third parties. Any statements displayed are for informational purposes only and do not constitute an offer or promise. Where a relevant badge is displayed, the following is applicable: App Store is a trademark of Apple Inc., registered in the U.S. and other countries. Google Play and the Google Play logo are trademarks of Google LLC.
        </p>
      </div>
    </div>
  )
}

export default Footer