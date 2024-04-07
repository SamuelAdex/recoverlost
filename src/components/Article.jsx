/* eslint-disable no-unused-vars */
import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { BsFillCalendarDateFill } from "react-icons/bs";

const Article = () => {
    const articles = [
        {
            id: 1,
            desc: "Don’t Let Scams Derail Your Trip: How to Spot and Avoid Common Travel Rip-offs",
            url: "https://payback-ltd.com/_next/image/?url=https%3A%2F%2Farticles.payback-ltd.com%2Fwp-content%2Fuploads%2F2024%2F04%2FDont-Let-Scams-Derail-Your-Trip_-How-to-Spot-and-Avoid-Common-Travel-Rip-offs.png&w=650&q=75"
        },
        {
            id: 2,
            desc: "Home Improvement Scams: How to Protect Your Property",
            url: "https://payback-ltd.com/_next/image/?url=https%3A%2F%2Farticles.payback-ltd.com%2Fwp-content%2Fuploads%2F2024%2F04%2FHome-Improvement-Scams_-How-to-Protect-Your-Property.png&w=650&q=75"
        },
        {
            id: 3,
            desc: "The Google Voice Scam: How Scammers Hijack Your Number",
            url: "https://payback-ltd.com/_next/image/?url=https%3A%2F%2Farticles.payback-ltd.com%2Fwp-content%2Fuploads%2F2024%2F03%2FThe-Google-Voice-Scam_-How-Scammers-Hijack-Your-Number.png&w=650&q=75"
        },
        {
            id: 4,
            desc: "Don’t Let Scams Derail Your Trip: How to Spot and Avoid Common Travel Rip-offs",
            url: "https://payback-ltd.com/_next/image/?url=https%3A%2F%2Farticles.payback-ltd.com%2Fwp-content%2Fuploads%2F2024%2F04%2FDont-Let-Scams-Derail-Your-Trip_-How-to-Spot-and-Avoid-Common-Travel-Rip-offs.png&w=650&q=75"
        },
        {
            id: 5,
            desc: "Home Improvement Scams: How to Protect Your Property",
            url: "https://payback-ltd.com/_next/image/?url=https%3A%2F%2Farticles.payback-ltd.com%2Fwp-content%2Fuploads%2F2024%2F04%2FHome-Improvement-Scams_-How-to-Protect-Your-Property.png&w=650&q=75"
        },
        {
            id: 6,
            desc: "The Google Voice Scam: How Scammers Hijack Your Number",
            url: "https://payback-ltd.com/_next/image/?url=https%3A%2F%2Farticles.payback-ltd.com%2Fwp-content%2Fuploads%2F2024%2F03%2FThe-Google-Voice-Scam_-How-Scammers-Hijack-Your-Number.png&w=650&q=75"
        },
    ]

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
  return (
    <div className='m-auto m-[0px] mt-20 md:w-[80%] w-full md:px-0 px-6'>
        <div className='mb-10'>
            <h1 className='text-primary md:text-[40px] text-[35px] font-bold text-center'>Latest articles</h1>
        </div>
        <AliceCarousel
            mouseTracking
            responsive={responsive}
            controlsStrategy="alternate"
            disableButtonsControls={true}
        >
            {articles.map((article, i)=>(
                <>
                <div className="flex flex-col gap-3 px-3 w-full" key={i}>
                    <img src={article?.url} className='h-[160px]' alt="" />
                    <div className="flex items-center gap-2 text-gray-500">
                        <BsFillCalendarDateFill />
                        <small className='text-gray-500 text-[16px] font-semibold'>April 5, 2024</small>
                    </div>
                    <p className='font-semibold text-primary md:text-[22px] md:leading-[24px] text-[20px]'>{article?.desc.slice(0,70)}...</p>
                </div>
                </>
            ))}
        </AliceCarousel>
    </div>
  )
}

export default Article