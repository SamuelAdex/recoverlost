/* eslint-disable no-unused-vars */
import React from 'react'
import { TbChartCandleFilled } from "react-icons/tb";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { PiChartLineUpBold } from "react-icons/pi";
import { FaBitcoin } from "react-icons/fa6";
import { PiHeartBreakFill } from "react-icons/pi";
import { GrMore } from "react-icons/gr";
import { GiSwipeCard } from "react-icons/gi";
import { GiCrimeSceneTape } from "react-icons/gi";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import { IoPlayCircleOutline } from "react-icons/io5";
import Button from './Button';

const Reviews = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };


  return (
    <>
        <div className="mt-20">
            <div className="w-full text-center">
                <div className='md:text-[40px] text-[30px] font-bold text-primary w-full'>Video Reviews</div>
            </div>
            <div className='md:w-[75%] w-full m-auto m-[0px] mt-10 md:px-0 px-6'>
                <AliceCarousel
                    mouseTracking
                    responsive={responsive}
                    // controlsStrategy="alternate"
                    disableButtonsControls={true}
                >
                    <div className='h-[296px] w-full px-2 review-img relative'>
                        <div className='h-full w-full absolute yellow-jacker'>
                            <IoPlayCircleOutline className='text-white' fontSize={"3rem"} />
                        </div>
                        <img src="https://payback-ltd.com/images/video/review-45.jpeg" className='h-full w-full' alt="" />
                    </div>
                    <div className='h-[296px] w-full px-2 review-img relative'>
                        <div className='h-full w-full absolute yellow-jacker'>
                            <IoPlayCircleOutline className='text-white' fontSize={"3rem"} />
                        </div>
                        <img src="https://payback-ltd.com/images/video/review-58.jpeg" className='h-full w-full' alt="" />
                    </div>
                    <div className='h-[296px] w-full px-2 review-img relative'>
                        <div className='h-full w-full absolute yellow-jacker'>
                            <IoPlayCircleOutline className='text-white' fontSize={"3rem"} />
                        </div>
                        <img src="https://payback-ltd.com/images/video/review-57.jpeg" className='h-full w-full' alt="" />
                    </div>
                    <div className='h-[296px] w-full px-2 review-img relative'>
                        <div className='h-full w-full absolute yellow-jacker'>
                            <IoPlayCircleOutline className='text-white' fontSize={"3rem"} />
                        </div>
                        <img src="https://payback-ltd.com/images/video/review-59.jpeg" className='h-full w-full' alt="" />
                    </div>
                    <div className='h-[296px] w-full px-2 review-img relative'>
                        <div className='h-full w-full absolute yellow-jacker'>
                            <IoPlayCircleOutline className='text-white' fontSize={"3rem"} />
                        </div>
                        <img src="https://payback-ltd.com/images/video/review-56.jpeg" className='h-full w-full' alt="" />
                    </div>
                </AliceCarousel>
                <Button
                    text={"See more video reviews"}
                    type={'outline'}
                    btnStyle={"border-secondary rounded-none p-3 text-[18px] text-secondary md:w-[60%] w-full m-auto font-semibold m-[0px]"}
                />
            </div>
        </div>
        <div className="mt-14">
            <div className=''>
                <h1 className='text-center font-bold md:text-[40px] text-[30px] text-primary'>The types of scams we can help you with</h1>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-2 md:w-[80%] mt-7 w-full m-auto m-[0px] md:px-0 px-6'>
                <div className="flex p-5 border-[1px] border-secondary cursor-pointer flex-col font-semibold items-center text-center gap-2 md:text-[22px] text-[20px] text-primary hover:bg-secondary hover:text-[#f0f0f0]">
                    <TbChartCandleFilled fontSize={'2.5rem'} />
                    <span>Binary options</span>
                </div>
                <div className="flex p-5 border-[1px] border-secondary cursor-pointer flex-col font-semibold items-center text-center gap-2 md:text-[22px] text-[20px] text-primary hover:bg-secondary hover:text-[#f0f0f0]">
                    <FaBitcoin fontSize={"2rem"} />
                    <span>Cryptocurrency</span>
                </div>
                <div className="flex p-5 border-[1px] border-secondary cursor-pointer flex-col font-semibold items-center text-center gap-2 md:text-[22px] text-[20px] text-primary hover:bg-secondary hover:text-[#f0f0f0]">
                    <MdOutlineCurrencyExchange fontSize={"2.5rem"} />
                    <span>Forex</span>
                </div>
                <div className="flex p-5 border-[1px] border-secondary cursor-pointer flex-col font-semibold items-center text-center gap-2 md:text-[22px] text-[20px] text-primary hover:bg-secondary hover:text-[#f0f0f0]">
                    <PiHeartBreakFill fontSize={"2.5rem"} />
                    <span>Romance</span>
                </div>
                <div className="flex p-5 border-[1px] border-secondary cursor-pointer flex-col font-semibold items-center text-center gap-2 md:text-[22px] text-[20px] text-primary hover:bg-secondary hover:text-[#f0f0f0]">
                    <GiCrimeSceneTape fontSize={"2.5rem"} />
                    <span>Property scams</span>
                </div>
                <div className="flex p-5 border-[1px] border-secondary cursor-pointer flex-col font-semibold items-center text-center gap-2 md:text-[22px] text-[20px] text-primary hover:bg-secondary hover:text-[#f0f0f0]">
                    <GiSwipeCard fontSize={"2.5rem"} />
                    <span>Credit card phishing</span>
                </div>
                <div className="flex p-5 border-[1px] border-secondary cursor-pointer flex-col font-semibold items-center text-center gap-2 md:text-[22px] text-[20px] text-primary hover:bg-secondary hover:text-[#f0f0f0]">
                    <PiChartLineUpBold fontSize={"2.5rem"} />
                    <span>Stock trading</span>
                </div>
                <div className="flex p-5 border-[1px] border-secondary cursor-pointer flex-col font-semibold items-center text-center gap-2 md:text-[22px] text-[20px] text-primary hover:bg-secondary hover:text-[#f0f0f0]">
                    <GrMore fontSize={"2.5rem"} />
                    <span>Other scams</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Reviews