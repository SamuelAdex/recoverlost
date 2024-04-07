/* eslint-disable no-unused-vars */
import React from 'react'
import Button from './Button'
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';



const Testimonies = () => {
    const responsive = {
        0: { items: 1 },
        568: { items: 1 },
        1024: { items: 2 },
    };

    function getInitials(name) {
        // Split the name into words
        const words = name.split(' ');
      
        // Initialize an empty string for initials
        let initials = '';
      
        // Iterate over each word
        words.forEach(word => {
          // Append the first letter of each word to the initials string
          initials += word.charAt(0).toUpperCase();
        });
      
        return initials;
    }


    const testimonies = [
        {
            id: 1,
            user: 'KEVIN',
            title: 'I am very confident of the...',
            content: "am very confident of the successful return of my funds through the diligent and immediate determination of my managing agent namely Liron Segev. With Liron's genuine response to my situation I would sincerely recommend The Payback team and their recouping of funds a positive program"
        },
        {
            id: 2,
            user: 'Merwyn',
            title: 'I got scammed by a forex...',
            content: "I got scammed by a forex company in March 2023. Having lost a substantial amount of my savings to the scammers I almost gave up thinking its all my fault that I got scammed in the first place. Few weeks later I accidentally stumbled upon Payback LTD on Google and decided to contact them to see if they could assist me with in the recovery process.  Payback reviewed my case and were very optimistic that the funds could be recovered from the scammers. Worth mentioning that this was done in a very structured and professional manner, they know precisely how to get the job done.  4 months down the line I was able to recover 70% of my funds and we are in the pursuit of recovering the balance. (Jonah / Eva / Zara &amp; the entire payback team) quick shout out to you guys for your support, patience &amp; professionalism. I definitely recommended Payback Ltd to any victims of fraud or scammers. God Bless you guys!."
        },
        {
            id: 3,
            user: 'Gary Cordoza',
            title: 'I contacted RecoverLost ltd...',
            content: "I contacted RecoverLost ltd. In mid May 2023 after I was scammed out of a substancial sum of money. I kept all receipts and texts and as much information as I could gather. Gil asigned Aylin as my case manager and she knew exactly what action to take. Sure enough the money was restored to my account. I cant thank you enough Payback ltd., Gil,Aylin, and the entire staff.I only wish that the low life criminals that prey on people could be held to answer. Thanks RecoverLost"
        },
        {
            id: 4,
            user: 'Anna Ovsjanika',
            title: 'Happy customer',
            content: "Would like to thank Money Back for professional advice and service, I would even say friendly support for people who unluckily get in scammer trap. Roy Miller would like to thank you thank you for your hard work, support and professional advise, also for your detailed explaining all over the process to us what will happen next. We didn't expect that in such a short time we would get 50% back. We thought it would be a long process, and we would never see any money back from the scammer. We are really thankful for the help."
        },
        {
            id: 5,
            user: 'Jane Balmer',
            title: 'It can be done!',
            content: "Don't give up hope - it actually took nearly four years but Payback stuck with me and saw my claim right through to a successful outcome. We worked closely together,  my consultant was both patient and professional and guided me through a very difficult process to a very happy ending. Sadly if you are reading this you know there are so many scam companies out there but take heart - this is genuine . They have given me my life back after making such a stupid error of judgement."
        },
        {
            id: 6,
            user: 'Naveem Singh',
            title: 'I lost a lot of money in trading...',
            content: "I lost a lot of money in trading scam in the year 2017 and all the money I was funded for the trading company using my credit cards. I was really stressed and disappointed after that I came across Scam-adviser in 2021which is one of the department of PAYBACK Ltd and I've told my complete story to them how I was scammed in a sophisticated trading scam/fraud and after that they have assigned a dedicated case advisor Emily and she was really helpful and supportive. She has prepared my case and helped me all along my case to recover my money and finally I've got all my money back in February this year after so long. So, I would like to thanks all the members involved from Payback specially Emily and from Scam-Advisor specially Daniela to recover my hard earned money. I strongly recommend them for anybody who are really looking forward to recover their money from any scam/fraud."
        },
    ]
  return (
    <>
        <div className='mt-20'>
            <div className="w-full text-center">
                <div className='md:text-[40px] text-[30px] font-bold text-primary w-full'>Testimonials</div>
            </div>
            <div className='md:w-[60%] mt-10 w-full md:px-0 px-6 m-auto m-[0px]'>
                <AliceCarousel
                    mouseTracking
                    responsive={responsive}
                    // controlsStrategy="alternate"
                    disableButtonsControls={true}
                >
                    {testimonies.map((_, i)=>(
                        <div className='mx-5' key={i}>
                            <div className='flex gap-1'>
                                <div className="bg-[#EDF2FF] text-primary grid place-items-center px-6 py-4 font-bold text-[20px]">{getInitials(_.user)}</div>
                                <div className='flex flex-col gap-1'>
                                    <span className='text-primary font-semibold text-[18px]'>{_.user}</span>
                                    <img src="https://payback-ltd.com/testimonials/stars/stars-5.svg" className='w-[128px]' alt="" />
                                </div>
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='text-gray-600 text-[18px] mt-2'>14 September 2023</p>
                                <h4 className='text-primary font-bold text-[24px]'>{_.title}</h4>
                                <p className='text-[18px] text-gray-600 leading-[30px]'>{_.content.slice(0, 150)}...</p>
                            </div>
                        </div>
                    ))}
                </AliceCarousel>
                <Button
                    text={"See more testimonials"}
                    type={'outline'}
                    btnStyle={"border-secondary rounded-none p-3 text-[18px] text-secondary md:w-[70%] w-full m-auto font-semibold m-[0px]"}
                />
            </div>
        </div>

        <div className='p-10 py-20 bg-secondary mt-24'>
            <div className='flex md:flex-row md:w-[80%] md:text-left text-center gap-12 w-full m-auto m-[0px] justify-center flex-col-reverse'>
                <div className='flex-[3]'>
                    <div className='text-[#f0f0f0] '>
                        <h1 className='md:text-[50px] text-[30px] md:leading-[60px] font-semibold'>How we work to get our clients money back</h1>
                        {/* <span className='md:text-[20px] text-[18px]'>(1-3 quarters)</span> */}
                    </div>
                    <p className='text-[20px] text-[#bdbdbd] mt-4'>First, our team of financial experts secures the relevant information from you, the victim of the scam. Then our recovery specialists, and legal department, track down and confront the scammers.</p>
                    <p className='text-[20px] text-[#bdbdbd] mt-4'>Our years of knowledge of the field make us ideally placed to fight, and win your case. You are only a short conversation away from starting the process to secure your stolen assets.</p>
                    <Button
                        text={"Get a free consultation"}
                        btnStyle={"bg-green-400 md:w-[80%] hover:opacity-[70%] w-full text-white mt-4 font-semibold md:text-[18px] text-[16px] rounded-none p-3"}
                    />
                </div>
                <div className='flex-[2] flex items-center md:justify-end justify-center'>
                    <img src="https://payback-ltd.com/icons/desktop/team.svg" className='' alt="" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Testimonies