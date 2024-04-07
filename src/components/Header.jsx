/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
// import { TbMenuDeep } from "react-icons/tb";
// import { GrMore } from "react-icons/gr";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdClose } from 'react-icons/md';

const Header = () => {
    const [isNav, setIsNav] = useState(false)
  return (
    <header className=''>
        <div className='fixed z-10 w-full top-0 bg-secondary'>
            <div className='flex justify-center gap-3 text-center text-[15px] bg-white text-[#141331] font-semibold p-1'>
                <div className=''>We Use cookies <span className='underline cursor-pointer'>Here&apos;s why...</span></div>
                <button className='border-[1px] border-[#141331] w-[70px] h-[25px]'>OK</button>
            </div>
            <nav className='flex xl:justify-evenly justify-between gap-8 lg:items-center items-start md:p-8 p-6'>
                <div className='text-white font-bold text-[29px]'>
                    RecoverLost
                </div>
                <div className='xl:flex hidden items-center gap-4 md:text-[18px] text-[14px] font-semibold'>
                    <a href='#' className='hover:text-white text-[#bdbdbd]'>Testimonials</a>
                    <a href='#' className='hover:text-white text-[#bdbdbd]'>Recovery Services</a>
                    <a href='#' className='hover:text-white text-[#bdbdbd]'>Blacklist</a>
                    <a href='#' className='hover:text-white text-[#bdbdbd]'>Contact us</a>
                    <a href='#' className='hover:text-white text-[#bdbdbd]'>About Us</a>
                    <a href='#' className='hover:text-white text-[#bdbdbd]'>Blog</a>
                    <a href='#' className='hover:text-white text-[#bdbdbd]'>FAQ</a>
                </div>
                <div className='xl:block hidden'>
                    <button className='text-[#f0f0f0] border-[#f0f0f0] hover:bg-[#f0f0f0] font-semibold hover:text-[#141331] border-[1px] w-full p-3'>Get your money back</button>
                </div>
                <div className='xl:hidden flex items-center gap-6'>
                    <HiOutlineChatAlt2 fontSize={"2.2rem"} className='hover:text-gray-300 cursor-pointer text-white' />
                    {isNav ? (<MdClose onClick={()=> setIsNav(!isNav)} fontSize={"2.2rem"} className='hover:text-gray-300 cursor-pointer text-white' />) : (<FiMoreHorizontal onClick={()=> setIsNav(!isNav)} fontSize={"2.2rem"} className='hover:text-gray-300 cursor-pointer text-white' />)}
                </div>
            </nav>
        </div>
        {isNav && <MobileNav />}
    </header>
  )
}

export default Header


function MobileNav(){
    return (
        <div className="bg-white p-8 xl:hidden h-[100dvh] flex flex-col fixed w-full z-[30] gap-3 divide-y pt-[1rem] slide-left">
            <div className='pt-4'>
                <a href='#' className='hover:text-primary text-secondary text-[24px] font-bold'>Testimonials</a>
            </div>
            <div className='pt-4'>
                <a href='#' className='hover:text-primary text-secondary text-[24px] font-bold'>Recovery Services</a>
            </div>
            <div className='pt-4'>
                <a href='#' className='hover:text-primary text-secondary text-[24px] font-bold'>Blacklist</a>
            </div>
            <div className='pt-4'>
                <a href='#' className='hover:text-primary text-secondary text-[24px] font-bold'>Contact us</a>
            </div>
            <div className='pt-4'>
                <a href='#' className='hover:text-primary text-secondary text-[24px] font-bold'>About Us</a>
            </div>
            <div className='pt-4'>
                <a href='#' className='hover:text-primary text-secondary text-[24px] font-bold'>Blog</a>
            </div>
            <div className='pt-4'>
                <a href='#' className='hover:text-primary text-secondary text-[24px] font-bold'>FAQ</a>
            </div>
        </div>
    )
}