import React, { useState } from 'react'
import logo from '../assets/YangoNavbarLogo.svg'
import { TbWorld } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function Navbar() {
  const [dropdown, setDropwdown] = useState(true);
  return (
    <>
      <div>
        <div className="navbar-links flex items-center justify-between px-[40px] py-[20px] bg-[#FF0000]">
          <div className="left-part flex items-center justify-center gap-[40px]">
            <img src={logo} alt="logo" />
            <a  className='text-[#fff] font-semibold hover:text-[#FFB3B3] text-[16px] ' href="#features">Features</a>
            <a className='text-[#fff] font-semibold hover:text-[#FFB3B3] text-[16px]' href="#registration">Register</a>
            <a className='text-[#fff] font-semibold hover:text-[#FFB3B3] text-[16px]' href="#faqs">FAQ</a>
          </div>
          <div className="lang-switcher flex items-center justify-center gap-3">
            <TbWorld size={35} className='flex items-center justify-center cursor-pointer text-[#fff] border-2 border-white-400 rounded-full p-[5px] ' />
            <div onClick={()=> setDropwdown(!dropdown)} className="lang-drowpdown flex items-center justify-center cursor-pointer gap-3">
              <span className='text-[#fff] font-semibold text-[16px] cursor-pointer'>English</span>
              {dropdown ? <IoIosArrowDown className='text-white flex items-center justify-center cursor-pointer' />
              :
                <IoIosArrowUp className='text-white flex items-center justify-center cursor-pointer'/>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar