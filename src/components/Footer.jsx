/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Footer = () => {
    const links = [
        {
            id: 1,
            title: "Sitelinks",
            items: [
                {id: 1, name: "Testimonials"},
                {id: 2, name: "Contact us"},
                {id: 3, name: "About Us"},
                {id: 4, name: "FAQ"},
                {id: 5, name: "Sitemap"},
            ]
        },
        {
            id: 2,
            title: "Contact us",
            items: [
                {id: 1, name: "IL +972-77-7408749"},
                {id: 2, name: "US +1-718-473-3943"},
                {id: 3, name: "AU +61-283-185-343"},
                {id: 4, name: "SE +46-812-410-614"},
            ]
        },
        {
            id: 3,
            title: "Location",
            items: [
                {id: 1, name: "Ha-Khilazon St 5, Ramat Gan, Israel, 5252269"},                
            ]
        },
        {
            id: 4,
            title: "Our office hours (GMT)",
            items: [
                {id: 1, name: "Mon, Wed - 08:00-17:00"},
                {id: 2, name: "Tue, Thu - 10:00-19:00"},
                {id: 3, name: "Fri - 08:00 - 12:00"},
                {id: 4, name: "Sat, Sun - closed"},              
            ]
        },
        {
            id: 5,
            title: "Social",
            items: [
                {id: 1, name: "Facebook"},
                {id: 2, name: "Twitter"},
                {id: 3, name: "Youtube"}
            ]
        },
    ]
  return (
    <div className='bg-primary mt-20 -mb-6'>
        <div className='text-center md:w-[85%] m-auto m-[0px] w-full md:px-0 px-6 md:py-6 py-8 text-[#f0f0f0] font-semibold md:text-[17px] text-[18px]'>
            <div className=''>Money Back Ltd (which trades as Payback) Israeli company #515711653, is authorised and regulated in Israel and operates globally. In the UK, the company operates through a legal exclusion, which removes the need for Money Back Ltd to be authorised and regulated by the FCA.</div>
        </div>
        <hr />
        <div className='my-10'>
            <div className='md:w-[80%] flex md:flex-row flex-col gap-8 justify-between w-full md:px-0 px-6 m-auto m-[0px]'>
                <div className='md:block hidden'>
                    <span className='text-white font-bold md:text-[20px] text-[18px]'>Contact Us</span>
                    <div className='text-[#e1e1e1] text-[18px] mt-4 flex flex-col gap-2'>
                        <Link to={"#"} className='hover:text-white'>Testimonials</Link>
                        <Link to={"#"} className='hover:text-white'>Contact Us</Link>
                        <Link to={"#"} className='hover:text-white'>About Us</Link>
                        <Link to={"#"} className='hover:text-white'>FAQ</Link>
                        <Link to={"#"} className='hover:text-white'>Sitemap</Link>
                    </div>
                </div>
                <div className='md:block hidden'>
                    <span className='text-white font-bold md:text-[20px] text-[18px]'>Sitelinks</span>
                    <div className='text-[#e1e1e1] text-[18px] flex flex-col gap-2 mt-4'>
                        <Link to={"#"} className='hover:text-white'>IL +972-77-7408749</Link>
                        <Link to={"#"} className='hover:text-white'>US +1-718-473-3943</Link>
                        <Link to={"#"} className='hover:text-white'>AU +61-283-185-343</Link>
                        <Link to={"#"} className='hover:text-white'>SE +46-812-410-614</Link>
                    </div>
                </div>
                <div className='hidden md:flex flex-col md:gap-24 gap-8'>
                    <div className=''>
                        <span className='text-white font-bold md:text-[20px] text-[18px]'>Location</span>
                        <div className='text-[#e1e1e1] text-[18px] flex flex-col gap-2 mt-4'>
                            <Link to={"#"} className='hover:text-white'>Ha-Khilazon St 5, Ramat Gan, Israel, 5252269</Link>
                        </div>
                    </div>
                    <div className=''>
                        <span className='text-white font-bold md:text-[20px] text-[18px]'>Our Office hours (GMT)</span>
                        <div className='text-[#e1e1e1] text-[18px] flex flex-col gap-2 mt-4'>
                            <Link to={"#"} className='hover:text-white'>Mon, Wed - 08:00-17:00</Link>
                            <Link to={"#"} className='hover:text-white'>Tue, Thu - 10:00-19:00</Link>
                            <Link to={"#"} className='hover:text-white'>Fri - 08:00-12:00</Link>
                            <Link to={"#"} className='hover:text-white'>Sat, Sun - closed</Link>
                        </div>
                    </div>
                </div>
                <div className='md:flex hidden flex-col md:gap-24 gap-2'>
                    <div className=''>
                        <span className='text-white font-bold md:text-[20px] text-[18px]'>Social</span>
                        <div className='text-[#e1e1e1] text-[18px] flex flex-col gap-2 mt-4'>
                            <Link to={"#"} className='hover:text-white'>Facebook</Link>
                            <Link to={"#"} className='hover:text-white'>Twitter</Link>
                            <Link to={"#"} className='hover:text-white'>YouTube</Link>                        
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex flex-col gap-1'>
                            <img className="w-[97px] h-[24px]"  src="https://payback-ltd.com/testimonials/logo-white.svg" alt="" />
                            <img className="w-[128px] h-[24px]" src="https://payback-ltd.com/testimonials/stars/stars-4.svg" alt="rating" />
                            <p className="text-[12px] text-[#a0a6ba]"><span>TrustScore 4.2</span><span className="mx-2"> | </span><a href="https://www.trustpilot.com/review/payback-ltd.com?utm_medium=trustbox&amp;utm_source=Slider" target="_blank" className="external-link"><span>1563 Reviews</span></a></p>
                        </div>
                    </div>
                </div>
                <div className='md:hidden flex flex-col gap-3 divide-y'>
                    {links.map((d,i)=>(
                        <Sitelink key={i} data={d} />
                    ))}
                </div>
            </div>
        </div>
        <div className='md:p-10 p-8'>
            <div className='text-center border-t-[1px] p-3 flex md:flex-row justify-between flex-col gap-8 text-[#f0f0f0] font-semibold md:text-[17px] text-[16px]'>
                <div className='flex md:flex-row flex-col md:items-center items-start md:gap-8 gap-4 text-gray-300'>
                    <Link to="#" className='hover:text-white text-[18px]'>Terms & Conditions</Link>
                    <Link to="#" className='hover:text-white text-[18px]'>Privacy Policy</Link>
                    <Link to="#" className='hover:text-white text-[18px]'>Legal</Link>
                </div>
                <div className="flex items-center md:gap-6 md:justify-start justify-between">
                    <div className=''>&copy; RecoverLost Ltd</div>
                    <img src="https://payback-ltd.com/images/dmca.webp" alt="" />
                </div>
            </div>
        </div>
        <div className='bg-secondary'>
            <div className='flex md:flex-row flex-col items-center justify-center pt-5 gap-8 m-auto m-[0px] md:w-[60%] w-full md:px-0 px-6'>
                <span className='text-[#f0f0f0] font-[500]'>Official partners:</span>
                <div className='flex items-center gap-8'>
                    <img src="https://utechglobal.ltd/wp-content/uploads/2022/05/Logo-white.png" className='w-[80px] cursor-pointer hover:brightness-50 hover:hue-rotate-45 hover:invert' alt="" />
                    <img src="https://www.lseg.com/content/dam/lseg/en_us/images/logos/bespoke/lseg-data-analytics-logo.svg" className='hover:filter w-[160px] cursor-pointer hover:invert hover:brightness-50' alt="" />
                </div>
            </div>
        </div>
        <div className='md:p-10 p-8 bg-secondary'>
            <div className='text-center border-t-[1px] p-3 flex flex-col gap-8 text-[#f0f0f0] font-semibold md:text-[17px] text-[16px]'>
                <p>Disclaimer: Payback Ltd offers each new client a free consultation. Funds Recovery or other services that will be subsequently commissioned will incur fees and/or commissions, based on the service and the complexity of each individual case. Payback Ltd doesn’t offer any investments, financial services, or advice.</p>
                <p>At Payback we do not initiate calls without request. We only call clients that reached out to us</p>
                <p>The Company cannot accept prohibited payment methods.</p>
                <p>Every payment received by the company is secure under the PCI-DSS protocol.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer


function Sitelink({data}){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div onClick={()=> setIsOpen(!isOpen)} className='py-3'>
            <div className="text-white mt-4 flex items-center justify-between">
                <span className='font-bold text-[25px]'>{data.title}</span>
                <div className='flex justify-end'>
                    <IoIosArrowDown fontSize={'1.2rem'} className={`flex-[1] font-black ${isOpen ? 'rotate-[180deg]' : ''}`} />
                </div>
            </div>
            {isOpen && (
                <div className='flex flex-col gap-4 mt-3'>
                    {data.items.map((link, i)=>(
                        <p className='text-gray-300 font-semibold text-[18px]' key={i}>{link.name}</p>
                    ))}
                </div>
            )}
        </div>
    )
}