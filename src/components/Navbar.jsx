import React from 'react'
import logo from '../assets/YangoNavbarLogo.svg'
import { TbWorld } from "react-icons/tb";

function Navbar() {
  return (
    <>
      <div>
        <div className="navbar-links flex items-center justify-between px-[40px] py-[20px] bg-[#FF0000]">
          <div className="left-part flex items-center justify-center gap-[40px]">
            <img src={logo} alt="logo" />
            <a className='text-[#fff] font-semibold hover:text-[#FFB3B3] text-[16px] ' href="">Features</a>
            <a className='text-[#fff] font-semibold hover:text-[#FFB3B3] text-[16px]' href="">Register</a>
            <a className='text-[#fff] font-semibold hover:text-[#FFB3B3] text-[16px]' href="">FAQ</a>
          </div>
          <div className="lang-selection">
            <TbWorld size={35} className='flex items-center justify-center cursor-pointer text-[#fff] border-2 border-white-400 rounded-full p-[5px] '/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar