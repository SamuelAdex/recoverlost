/* eslint-disable no-unused-vars */
import React from 'react'
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { TbShield } from "react-icons/tb";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { PiFileMagnifyingGlassFill } from "react-icons/pi";
import Button from './Button';

const HowItWorks = () => {
  return (
    <>
        <div className='xl:mt-24 mt-[5rem] md:w-[75%] w-full m-auto m-[0px] md:px-0 px-4'>
            <div className='text-center w-full'>
                <span className='font-bold text-center text-primary md:text-[40px] text-[20px]'>How it works</span>
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                <div className='shadow-lg shadow-gray-200 p-6'>
                    <div className='flex text-primary items-center gap-2'>
                        <PiFileMagnifyingGlassFill fontSize={"1.5rem"} />
                        <span className='text-[22px] font-bold'>Review your case</span>
                    </div>
                    <p className='md:text-[20px] text-[18px] text-gray-500'>Performing preliminary checks to assess whether the case can result in a substantial recovery, based on our experience.</p>
                </div>
                <div className='shadow-lg shadow-gray-200 p-6'>
                    <div className='flex text-primary items-center gap-2'>
                        <BsFillFileEarmarkTextFill fontSize={'1.5rem'} />
                        <span className='text-[22px] font-bold'>Gather the evidence</span>
                    </div>
                    <p className='md:text-[20px] text-[18px] text-gray-500'>Collecting all the information and documentation required to successfully pursue your case[*]</p>
                </div>
                <div className='shadow-lg shadow-gray-200 p-6'>
                    <div className='flex text-primary items-center gap-2'>
                        <TbShield fontSize={"1.5rem"} />
                        <span className='text-[22px] font-bold'>Confront the entities</span>
                    </div>
                    <p className='md:text-[20px] text-[18px] text-gray-500'>Systematically confronting the relevant entities that have facilitated the illicit transfer of your wealth.</p>
                </div>
                <div className='shadow-lg shadow-gray-200 p-6'>
                    <div className='flex text-primary items-center gap-2'>
                        <MdOutlineCurrencyExchange fontSize={"1.5rem"} />
                        <span className='text-[22px] font-bold'>Get your money back</span>
                    </div>
                    <p className='md:text-[20px] text-[18px] text-gray-500'>We take pride in our track record and assure you that we’ll go to great lengths to get your money back.</p>
                </div>
            </div>
        </div>

        <div className='xl:px-10 px-6 py-20 bg-secondary mt-24'>
            <div className='flex lg:flex-row md:w-[80%] gap-12 xl:text-left text-center w-full m-auto m-[0px] justify-center flex-col'>
                <div className='flex-[3] flex flex-col xl:items-start items-center'>
                    <div className='text-[#f0f0f0] '>
                        <h1 className='md:text-[40px] text-[32px] font-semibold'>Money retrieved in 2023</h1>
                        <span className='md:text-[20px] text-center text-[20px]'>(1-3 quarters)</span>
                    </div>
                    <div className='w-full xl:hidden block text-center'>
                        <div className='text-green-400 text-[70px]  text-center font-bold'>$ 5,000,459</div>
                    </div>
                    <p className='md:text-[20px] text-[18px] text-[#bdbdbd] mt-4'>Our team of experts secures refunds on a daily basis. We assist businesses as well as individuals in their pursuit of funds lost to scammers. Our goal is to continually improve in our endeavors and we are always here to help you in your fight for what is rightfully yours.</p>
                    <Button
                        text={"Get a free consultation"}
                        btnStyle={"bg-green-400 md:w-[80%] hover:opacity-[70%] w-full text-white mt-4 font-semibold md:text-[18px] text-[16px] rounded-none p-3"}
                    />
                </div>
                <div className='flex-[2] xl:flex hidden items-center'>
                    <span className='text-green-400 md:text-[70px] text-[30px] font-bold'>$ 5,000,459</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default HowItWorks