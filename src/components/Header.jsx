/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
// import { TbMenuDeep } from "react-icons/tb";
// import { GrMore } from "react-icons/gr";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiMoreHorizontal } from "react-icons/fi";
import { MdClose } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
    const [isNav, setIsNav] = useState(false)

    const dropLink = [
        {
            id: 1,
            title: "Recovery Services",
            links: [
                {id: 1, name: "Binary Options"},
                {id: 2, name: "Cryptocurrency"},
                {id: 3, name: "Forex"},
                {id: 4, name: "Stock Trading"},
                {id: 5, name: "Credit card phishing"},
                {id: 6, name: "Property Scams"},
                {id: 7, name: "Romance Scams"},
                {id: 8, name: "Other Scams"},
            ]
        },
        {
            id: 1,
            title: "Blacklist",
            links: [
                {id: 1, name: "Scams"},
                {id: 2, name: "Imposters & Copycats"}
            ]
        },
    ]
  return (
    <header className=''>
        <div className='fixed z-10 w-full top-0 bg-secondary'>
            <div className='flex justify-center gap-3 text-center text-[15px] bg-white text-[#141331] font-semibold p-1'>
                <div className=''>We Use cookies <span className='underline cursor-pointer'>Here&apos;s why...</span></div>
                <button className='border-[1px] border-[#141331] w-[70px] h-[25px]'>OK</button>
            </div>
            <nav className='flex xl:justify-evenly justify-between gap-8 lg:items-center items-start md:px-8 md:py-8 p-6'>
                <div className='text-white font-bold text-[29px]'>
                    RecoverLost
                </div>
                <div className='xl:flex hidden items-center gap-4 md:text-[18px] text-[14px] font-semibold'>
                    <a href='#' className='hover:text-white text-[#bdbdbd]'>Testimonials</a>
                    {dropLink.map((link, i)=>{
                        return (
                            <DropLink key={i} data={link} />
                        )
                    })}
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
        <div className="bg-white p-8 xl:hidden h-[100vh] flex flex-col fixed w-full z-[30] gap-3 divide-y pt-[1rem] slide-left">
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


function DropLink({data}){
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = useRef();

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false)
    }
  };

    useEffect(() => {
        if (isOpen) {
          document.addEventListener('mouseover', handleClickOutside);
        } else {
          document.removeEventListener('mouseover', handleClickOutside);
        }
    
        return () => {
          document.removeEventListener('mouseover', handleClickOutside);
        };
      }, [isOpen]);
    return (
        <div className='relative' ref={modalRef}>
            <div className='flex justify-between gap-3 hover:text-white text-[#bdbdbd] items-center' onMouseOverCapture={()=> setIsOpen(!isOpen)}>
                <a href='#' className=''>{data.title}</a>
                <div className='flex justify-end items-end'>
                    <IoIosArrowDown fontSize={'1.2rem'} className={`flex-[1] font-black ${isOpen ? 'rotate-[180deg]' : ''}`} />
                </div>
            </div>
            {isOpen && <div className='bg-white fixed font-semibold text-gray-500 text-[16px] flex flex-col gap-1'>
                {data.links.map((l, i)=>(
                    <a href="#" className='py-2 px-3 hover:bg-gray-100' key={i}>{l.name}</a>
                ))}
            </div>}
        </div>
    )
}