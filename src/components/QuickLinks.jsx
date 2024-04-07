/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'

const QuickLinks = () => {
  return (
    <>
        <div className=''>
            <div className='md:w-[80%] flex flex-col gap-8 w-full m-auto md:p-0 p-10 m-[0px] mt-20'>
                <div className='flex md:flex-row flex-col gap-10'>
                    <div className='flex justify-center items-center flex-[1]'>
                        <img src="https://payback-ltd.com/icons/desktop/hands.svg" className='md:w-[192px] w-[120px] md:h-[192px] h-[120px]' alt="" />
                    </div>
                    <div className='flex-[1]'>
                        <div className='text-primary md:text-left text-center '>
                            <h1 className='md:text-[40px] text-[20px] font-semibold'>Why work with us?</h1>
                        </div>
                        <p className='md:text-[18px] text-[14px] md:text-left text-center text-gray-500 mt-4 font-[500]'>{"The short answer: We only take on cases we believe can result in a substantial recovery. Your time is as valuable as ours, and that’s why we are completely transparent in our evaluation of every case. If it can’t be done, we will tell you so. But, if we feel there is a chance for full or partial recovery, then we'll get to work right away."}</p>
                        <Button
                            text={"About Us"}
                            type={"outline"}
                            btnStyle={"border-secondary text-secondary border-[2px] p-3 md:w-[80%] w-full md:text-[16px] text-[14px] font-semibold mt-4 hover:bg-secondary hover:text-white rounded-none"}
                        />
                    </div>
                </div>
                
                <div className='flex md:flex-row flex-col-reverse gap-10'>                
                    <div className='flex-[1]'>
                        <div className='text-primary md:text-left text-center '>
                            <h1 className='md:text-[40px] text-[20px] font-semibold'>Your money back guarantee</h1>
                        </div>
                        <p className='md:text-[18px] text-[14px] md:text-left text-center text-gray-500 mt-4 font-[500]'>{"The fund recovery process can be a lengthy one and requires perseverance. Therefore it is vital that our clients are ready for it and trust us every step of the way. So if for any reason you are doubtful, you can ask for a full refund within the first 14 business days of the process.*"}</p>
                        <Button
                            text={"*Read Terms & Conditions"}
                            type={"outline"}
                            btnStyle={"border-secondary text-secondary border-[2px] p-3 md:w-[80%] w-full md:text-[16px] text-[14px] font-semibold mt-4 hover:bg-secondary hover:text-white rounded-none"}
                        />
                    </div>
                    <div className='flex justify-center items-center flex-[1]'>
                        <img src="https://payback-ltd.com/icons/desktop/moneyback.svg" className='md:w-[192px] w-[120px] md:h-[192px] h-[120px]' alt="" />
                    </div>
                </div>

                <div className='flex md:flex-row flex-col gap-10'>
                    <div className='flex justify-center items-center flex-[1]'>
                        <img src="https://payback-ltd.com/icons/desktop/boci.svg" className='md:w-[192px] w-[120px] md:h-[192px] h-[120px]' alt="" />
                    </div>
                    <div className='flex-[1]'>
                        <div className='text-primary md:text-left text-center '>
                            <h1 className='md:text-[40px] text-[20px] font-semibold md:leading-[40px]'>Beware of copycats & imposters</h1>
                        </div>
                        <p className='md:text-[18px] text-[14px] md:text-left text-center text-gray-500 mt-4 font-[500]'>Scammers go as far as posing as legitimate scam recovery companies and even present themselves as Payback Ltd. So it&apos;s important to remember:<br/>
                        a) Our emails end with @payback-ltd.com.<br/>
                        b) We would NEVER ask you to send us money via Crypto.</p>
                        <Button
                            text={"Browse the full list"}
                            type={"outline"}
                            btnStyle={"border-secondary text-secondary border-[2px] p-3 md:w-[80%] w-full md:text-[16px] text-[14px] font-semibold mt-4 hover:bg-secondary hover:text-white rounded-none"}
                        />
                    </div>
                </div>

                <div className='flex md:flex-row flex-col-reverse gap-10'>                
                    <div className='flex-[1]'>
                        <div className='text-primary md:text-left text-center '>
                            <h1 className='md:text-[40px] text-[20px] font-semibold md:leading-[40px]'>Is your service provider a scam?</h1>
                        </div>
                        <p className='md:text-[18px] text-[14px] md:text-left text-center text-gray-500 mt-4 font-[500]'>{"Use our Blacklist of known scams and frauds to check if one of the service providers you are currently using is a scam/fraud. At the moment, we list more than 11,000 companies that were flagged as a scam/fraud by us and different regulatory bodies."}</p>
                        <Button
                            text={"Browse the full list"}
                            type={"outline"}
                            btnStyle={"border-secondary text-secondary border-[2px] p-3 md:w-[80%] w-full md:text-[16px] text-[14px] font-semibold mt-4 hover:bg-secondary hover:text-white rounded-none"}
                        />
                    </div>
                    <div className='flex justify-center items-center flex-[1]'>
                        <img src="https://payback-ltd.com/icons/desktop/iyspas.svg" className='md:w-[192px] w-[120px] md:h-[192px] h-[120px]' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className='p-10 py-20 bg-secondary mt-24'>
            <div className='flex md:flex-row md:w-[50%] justify-center gap-12 w-full m-auto m-[0px] justify-center flex-col'>
                <div className='flex flex-col items-center'>
                    <div className='text-[#f0f0f0] text-center'>
                        <h1 className='md:text-[40px] text-[20px] font-semibold'>Let&apos;s get your money back!</h1>
                    </div>
                    <p className='md:text-[18px] text-[16px] text-center text-[#bdbdbd] mt-4'>If you&apos;ve been ripped off by scammers, get in touch and our team of experts will work to get your money back</p>
                    <div className='md:w-[70%] w-full mt-4'>
                        <select name="" className='p-4 bg-gray-200 w-full focus:outline-primary font-semibold text-[18px] text-gray-400' id="">
                            <option className='after:border-l-green-400 after:border-l-[3px] ' value="">Choose a scam type</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Binary options</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Cryptocurrency</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Forex</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Stock Trading</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Property scam</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Romance scam</option>
                            <option className='border-l-green-400 border-l-[3px]' value="">Other scam</option>
                        </select>
                        <Button
                            text={"Get a free consultation"}
                            btnStyle={"bg-green-400 hover:opacity-[70%] w-full text-white mt-2 font-semibold md:text-[18px] text-[16px] rounded-none p-3"}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default QuickLinks