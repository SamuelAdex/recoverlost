/* eslint-disable no-unused-vars */
import React from 'react'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';


const Scam = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 4 },
    };
  return (
    <div className='xl:mt-24 md:mt-[10rem] mt-[5rem] md:px-0 px-3'>
        <div className=''>
            <h1 className='text-center text-[28px] font-bold text-primary'>Scams we helped our clients recover from</h1>
        </div>
        <div className='xl:w-[70%] m-auto m-[0px] mt-6 w-full md:px-0 px-6'>
            <AliceCarousel
                mouseTracking
                responsive={responsive}
                // controlsStrategy="alternate"
                disableButtonsControls={true}
            >
                <div className=''>
                    <img src="https://payback-ltd.com/images/carousel1/logo-9.png" className='' alt="" />
                </div>
                <div className=''>
                    <img src="https://payback-ltd.com/images/carousel1/logo-10.png" className='' alt="" />
                </div>
                <div className=''>
                    <img src="https://payback-ltd.com/images/carousel1/logo-11.png" className='' alt="" />
                </div>
                <div className=''>
                    <img src="https://payback-ltd.com/images/carousel1/logo-12.png" className='' alt="" />
                </div>
                <div className=''>
                    <img src="https://payback-ltd.com/images/carousel1/logo-13.png" className='' alt="" />
                </div>
                <div className=''>
                    <img src="https://payback-ltd.com/images/carousel1/logo-14.png" className='' alt="" />
                </div>
                <div className=''>
                    <img src="https://payback-ltd.com/images/carousel1/logo-15.png" className='' alt="" />
                </div>
                <div className=''>
                    <img src="https://payback-ltd.com/images/carousel1/logo-16.png" className='' alt="" />
                </div>
            </AliceCarousel>
        </div>
    </div>
  )
}

export default Scam