/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import yahoo from '../assets/yahoo.svg'
import business from '../assets/business.svg'
import wire from '../assets/wire.svg'

const Hero = () => {
  return (
    <div className='flex xl:flex-row flex-col md:h-[73dvh] h-[78vh] items-center md:w-[90%] w-full m-auto m-[0px] md:px-0 px-4 py-8 xl:mt-[9rem] mt-[7.6rem]'>
        <div className='flex-[3] xl:text-left text-center'>
            <div className='lg:text-[75px] text-[60px] lg:leading-[80px] leading-[65px] font-black text-green-400'>
                Get your money back <span className='text-white'>from a scam</span>
            </div>
            <p className='text-[#f0f0f0] md:text-[20px] text-[20px] font-semibold mt-6'>{"If you’ve been ripped off by scammers, get in touch and our team of experts will work to get your money back"}</p>
            <div className='xl:flex hidden items-center gap-5 text-[#bdbdbd] mt-20'>
                <span className='text-[20px]'>As seen in:</span>
                <div className='flex items-center gap-6'>
                    <img src={yahoo} alt="" />
                    <img src={business} alt="" />
                    <img src={wire} alt="" />
                </div>
            </div>
        </div>
        <div className='flex-[2.5] flex justify-end'>
            <div className='bg-white p-6 py-8 mt-16 xl:w-[70%] shadow-md shadow-gray-200 w-full'>
                <div className='text-center'>
                    <div className='text-primary font-bold md:text-[27px] text-[27px]'>Start here</div>
                    <p className='text-gray-400 md:text-[18px] text-[18px]'>Secure a free consultation</p>
                </div>
                <div className='mt-8 w-full flex flex-col gap-4'>
                    <div className='flex items-center gap-4 w-full'>
                        <input placeholder='Your Name*' className='p-3 bg-gray-200 w-full focus:outline-primary placeholder:font-semibold placeholder:text-[18px] text-gray-600' type='text' />
                        <input placeholder='Last Name*' className='p-3 bg-gray-200 w-full focus:outline-primary placeholder:font-semibold placeholder:text-[18px] text-gray-600' type='text' />
                    </div>
                    <input placeholder="803 345 3421" className='p-3 bg-gray-200 w-full focus:outline-primary placeholder:font-semibold placeholder:text-[18px] text-gray-600' type='email' />
                    <input placeholder="Enter your E-mail" className='p-3 bg-gray-200 w-full focus:outline-primary placeholder:font-semibold placeholder:text-[18px] text-gray-600' type='email' />
                    <select name="" className='p-4 bg-gray-200 w-full focus:outline-primary font-semibold text-[18px] text-gray-400' id="">
                        <option value="">How much did you invest ($)</option>
                        <option value="Less than $5,000">Less than $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $20,000">$10,000 - $20,000</option>
                        <option value="$21,000 - $40,000">$21,000 - $40,000</option>
                        <option value="$40,000 - $80,000">$40,000 - $80,000</option>
                        <option value="$80,000 - $100,000">$80,000 - $100,000</option>
                        <option value="$100,000 - $150,000">$100,000 - $150,000</option>
                        <option value="$5,000 - $10,000">$150,000 and up</option>
                    </select>
                    <textarea name="" className='p-3 bg-gray-200 w-full focus:outline-primary placeholder:font-semibold placeholder:text-[18px] text-gray-600' id="" cols="10" rows="2"></textarea>
                    <Button
                        text={"Get a free consultation"}
                        btnStyle={"bg-green-400 text-white p-4 md:text-[18px] text-[16px] rounded-none font-semibold"}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero